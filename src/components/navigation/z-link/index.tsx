import { Component, Prop, h, Event, EventEmitter, Element } from "@stencil/core";
import { forceUpdate, Host, HostElement } from "@stencil/core/internal";

/**
 * @slot - link content
 */
@Component({
  tag: "z-link",
  styleUrl: "styles.css",
  shadow: true,
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
  @Prop() textcolor?: "primary"| "inverse" | "white" | "black" = "primary";
  /** link icon name (optional) */
  @Prop() icon?: string;
  /** big link version */
  @Prop() big?: boolean = false;
  /** link icon position (optional) */
  @Prop() iconposition?: "left" | "right" = "left";
  /** draw underline on text (optional) */
  @Prop() underline?: boolean = false;  

  /** emitted on link click, returns linkId */
  @Event() zLinkClick: EventEmitter;

  @Element() hostElement: HostElement;

  iconSize: number;

  constructor() {
    this.emitZLinkClick = this.emitZLinkClick.bind(this);
    this.emitZLinkInteraction = this.emitZLinkInteraction.bind(this);
    this.iconSize = 18;
  }

  componentWillRender() {
    if (this.iswhite) {
      console.warn(
        "z-link iswhite prop is deprecated and will be dropped in a next release, please use textcolor prop instead"
      );
    }
    if (this.big) {
      console.warn(
        "z-link big prop is deprecated and will be dropped in a next release, please override --font-size-link and --font-weight-link variables instead"
      );
    }
  }

  emitZLinkClick(e: MouseEvent, linkId) {
    this.emitZLinkInteraction(e, linkId);
  }

  emitZLinkInteraction(e: Event, linkId: string) {
    this.zLinkClick.emit({ e, linkId });
  }

  calculateIconSize() {
    let height: number = parseFloat(window.getComputedStyle(this.hostElement).getPropertyValue('font-size'));
    const currentSize = this.big ? 18 : Math.round(height * 1.125);
    if(!Number.isNaN(currentSize) && this.iconSize !== currentSize){
      this.iconSize = currentSize;
      forceUpdate(this);
    }
  }

  componentDidLoad() {
    if(this.icon)
      this.calculateIconSize();
  }

  render() {

    const style = this.big ? { "--font-size-link": "16px", "--font-weight-link": "600" } : {};

    return (
      <Host style={style}>
        <a
          id={this.htmlid}
          href={this.href ? this.href : null}
          class={`${this.isdisabled && "disabled"}
            ${this.isactive && "active"}
            ${this.textcolor}
            ${this.iswhite && "white"}
            ${this.underline && "underline"}`}
          target={this.target}
          role={this.href ? "link" : "button"}
          tabindex={this.isdisabled ? -1 : this.htmltabindex}
          onClick={(e: MouseEvent) => this.emitZLinkClick(e, this.htmlid)}
        >
          {this.iconposition === "right" && <slot />}
          {this.icon &&
          <z-icon
            style={{"--z-icon-width": this.iconSize.toString(), "--z-icon-height": this.iconSize.toString()}}
            name={this.icon}
            height={this.iconSize}
            width={this.iconSize}
          />}
          {this.iconposition === "left" && <slot />}
        </a>
      </Host>
    );
  }
}
