import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "z-list-item",
  styleUrl: "styles.css",
  shadow: true
})
export class ZListItem {
  @Prop() text: string;
  @Prop() link?: string;
  @Prop() icon?: string;
  @Prop() listitemid?: string;
  @Prop() action?: string;
  @Prop() underlined?: boolean = true;

  @Event() zListItemLinkClick: EventEmitter;
  emitZListItemLinkClick(e: MouseEvent, linkId) {
    this.zListItemLinkClick.emit({ e, linkId });
  }

  render() {
    const linkId = this.listitemid ? `link_${this.listitemid}` : "";

    return (
      <li id={this.listitemid} data-action={this.action}>
        <span class={this.underlined && "border"} >
          {this.icon && <z-icon name={this.icon} />}
          {this.link
            ? <a href={this.link} id={linkId} onClick={(e: MouseEvent) => this.emitZListItemLinkClick(e, linkId)}>
              {this.text}
            </a>
            : <span innerHTML={this.text}></span>
          }
        </span>
      </li>
    );
  }
}
