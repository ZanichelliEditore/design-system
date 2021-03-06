import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "z-link",
  styleUrl: "styles.css",
  shadow: true
})
export class ZLink {
  /** link id (optional) */
  @Prop() htmlid?: string;
  /** link url (optional) */
  @Prop() href?: string;
  /** link target (optional) */
  @Prop() target?: string = "_self";
  /** tabindex link attribute (optional) */
  @Prop() htmltabindex?: number = 0;
  /** disable link flag (optional) */
  @Prop() isdisabled?: boolean = false;
  /** active link flag (optional) */
  @Prop() isactive?: boolean = false;
  /** white variant flag (optional) */
  @Prop() iswhite?: boolean = false;
  /** link text variant (optional) */
  @Prop() textcolor?: 'white' | 'blue' | 'black' = 'blue';
  /** link icon name (optional) */
  @Prop() icon?: string;
  /** big link version */
  @Prop() big?: boolean = false;

  /** emitted on link click, returns linkId */
  @Event() zLinkClick: EventEmitter;

  constructor() {
    this.emitZLinkClick = this.emitZLinkClick.bind(this);
    this.emitZLinkInteraction = this.emitZLinkInteraction.bind(this);
  }

  componentWillRender() {
    if (this.iswhite) {
      console.warn('z-link iswhite prop is deprecated and will be dropped in a next release, please use textcolor prop instead')
    }
  }

  emitZLinkClick(e: MouseEvent, linkId) {
    this.emitZLinkInteraction(e, linkId);
  }

  emitZLinkInteraction(e: Event, linkId: string) {
    this.zLinkClick.emit({ e, linkId });
  }

  render() {
    return (
      <a
        id={this.htmlid}
        href={this.href ? this.href : null}
        class={`${this.isdisabled && "disabled"}
          ${this.isactive && "active"}
          ${this.textcolor}
          ${this.iswhite && "white"}
          ${this.big && "big"}`
        }
        target={this.target}
        role={this.href ? "link" : "button"}
        tabindex={this.htmltabindex}
        onClick={(e: MouseEvent) => this.emitZLinkClick(e, this.htmlid)}
      >
        {this.icon && <z-icon
          name={this.icon}
          width={this.big ? 18 : 12}
          height={this.big ? 18 : 12}
          />}
        <slot />
      </a>
    );
  }
}
