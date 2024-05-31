import {Component, Event, EventEmitter, Prop, h} from "@stencil/core";
import {handleKeyboardSubmit} from "../../../../utils/utils";

@Component({
  tag: "z-myz-list-item",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzListItem {
  /** content text */
  @Prop()
  text: string;

  /** link url (optional) */
  @Prop()
  link?: string;

  /** link target (optional) */
  @Prop()
  linktarget?: string = "_self";

  /** icon name (optional) */
  @Prop()
  icon?: string;

  /** id (optional) */
  @Prop()
  listitemid?: string;

  /** data-action attribute (optional) */
  @Prop()
  action?: string;

  /** underlined style flag */
  @Prop()
  underlined = true;

  /** emitted on list item link click, returns linkId */
  @Event()
  zListItemLinkClick: EventEmitter;

  private emitZListItemLinkClick(e: MouseEvent, linkId): void {
    this.zListItemLinkClick.emit({e, linkId});
  }

  /** emitted on list item click, returns listitemid */
  @Event()
  zListItemClick: EventEmitter;

  private emitZListItemClick(e: MouseEvent, listitemid): void {
    this.zListItemClick.emit({e, listitemid});
  }

  constructor() {
    this.emitZListItemLinkClick = this.emitZListItemLinkClick.bind(this);
    this.emitZListItemClick = this.emitZListItemClick.bind(this);
  }

  render(): HTMLLIElement {
    const linkId = this.listitemid ? `link_${this.listitemid}` : "";

    return (
      <li
        role="button"
        id={this.listitemid}
        data-action={this.action}
        onClick={(e: MouseEvent) => this.emitZListItemClick(e, this.listitemid)}
        onKeyPress={(ev: KeyboardEvent) => handleKeyboardSubmit(ev, this.emitZListItemClick, this.listitemid)}
      >
        <span class={this.underlined && "border"}>
          {this.icon && <z-icon name={this.icon} />}
          {this.link ? (
            <a
              href={this.link ? this.link : null}
              target={this.linktarget}
              id={linkId}
              onClick={(e: MouseEvent) => this.emitZListItemLinkClick(e, linkId)}
              onKeyPress={(ev: KeyboardEvent) => handleKeyboardSubmit(ev, this.emitZListItemLinkClick, linkId)}
              role={this.link ? "link" : "button"}
              tabindex="0"
            >
              {this.text}
            </a>
          ) : (
            <span innerHTML={this.text}></span>
          )}
          <slot />
        </span>
      </li>
    );
  }
}
