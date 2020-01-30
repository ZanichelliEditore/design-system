import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";
import { handleKeyUp } from "../../utils/utils";

@Component({
  tag: "z-list-item",
  styleUrl: "styles.css",
  shadow: true
})
export class ZListItem {
  @Prop() text: string;
  @Prop() link?: string;
  @Prop() linktarget?: string = "_self";
  @Prop() icon?: string;
  @Prop() listitemid?: string;
  @Prop() action?: string;
  @Prop() underlined: boolean = true;

  @Event() zListItemLinkClick: EventEmitter;
  emitZListItemLinkClick(e: MouseEvent, linkId) {
    this.zListItemLinkClick.emit({ e, linkId });
  }

  @Event() zListItemClick: EventEmitter;
  emitZListItemClick(e: MouseEvent, listitemid) {
    this.zListItemClick.emit({ e, listitemid });
  }

  constructor() {
    this.emitZListItemLinkClick = this.emitZListItemLinkClick.bind(this);
    this.emitZListItemClick = this.emitZListItemClick.bind(this);
  }

  render() {
    const linkId = this.listitemid ? `link_${this.listitemid}` : "";

    return (
      <li
        id={this.listitemid}
        data-action={this.action}
        onClick={(e: MouseEvent) => this.emitZListItemClick(e, this.listitemid)}
        onKeyUp={(ev: KeyboardEvent) =>
          handleKeyUp(ev, this.emitZListItemClick, this.listitemid)
        }
      >
        <span class={this.underlined && "border"}>
          {this.icon && <z-icon name={this.icon} />}
          {this.link ? (
            <a
              href={this.link ? this.link : null}
              target={this.linktarget}
              id={linkId}
              onClick={(e: MouseEvent) =>
                this.emitZListItemLinkClick(e, linkId)
              }
              onKeyUp={(ev: KeyboardEvent) =>
                handleKeyUp(ev, this.emitZListItemLinkClick, linkId)
              }
              role={this.link ? "link" : "button"}
              tabindex="0"
            >
              {this.text}
            </a>
          ) : (
            <span innerHTML={this.text}></span>
          )}
        </span>
      </li>
    );
  }
}
