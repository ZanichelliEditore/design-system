import {Component, Prop, h, Event, EventEmitter, Element} from "@stencil/core";
import {Host, HostElement, State} from "@stencil/core/internal";

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
  @Prop()
  htmlid?: string;

  /** link url (optional) */
  @Prop()
  href?: string;

  /** link target (optional) */
  @Prop()
  target?: string = "_self";

  /** tabindex link attribute (optional) */
  @Prop()
  htmltabindex?: number = 0;

  /** disable link flag (optional) */
  @Prop()
  isdisabled?: boolean = false;

  /** active link flag (optional) */
  @Prop()
  isactive?: boolean = false;

  /** white variant flag (optional) */
  @Prop()
  iswhite?: boolean = false;

  /** link text variant (optional) */
  @Prop()
  textcolor?: "primary" | "inverse" | "white" | "black" = "primary";

  /** link icon name (optional) */
  @Prop()
  icon?: string;

  /** big link version */
  @Prop({reflect: true})
  big?: boolean = false;

  /** link icon position (optional) */
  @Prop()
  iconposition?: "left" | "right" = "left";

  /** draw underline on text (optional) */
  @Prop()
  underline?: boolean = false;

  /** emitted on link click, returns linkId */
  @Event()
  zLinkClick: EventEmitter;

  @Element() hostElement: HTMLZLinkElement;

  @State()
  iconSize = 18;

  constructor() {
    this.emitZLinkClick = this.emitZLinkClick.bind(this);
    this.emitZLinkInteraction = this.emitZLinkInteraction.bind(this);
  }

  componentWillLoad(): void {
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

  private emitZLinkClick(e: MouseEvent, linkId): void {
    this.emitZLinkInteraction(e, linkId);
  }

  private emitZLinkInteraction(e: Event, linkId: string): void {
    this.zLinkClick.emit({e, linkId});
  }

  componentDidLoad(): void {
    if (this.icon) {
      const height: number = parseFloat(window.getComputedStyle(this.hostElement).getPropertyValue("font-size"));
      const currentSize = this.big ? 18 : Math.round(height * 1.125);
      if (!Number.isNaN(currentSize) && this.iconSize !== currentSize) {
        this.iconSize = currentSize;
      }
    }
  }

  render(): HTMLAnchorElement {
    return (
      <a
        id={this.htmlid}
        href={this.href ? this.href : null}
        class={{
          disabled: this.isdisabled,
          active: this.isactive,
          [this.textcolor || ""]: true,
          white: this.iswhite,
          underline: this.underline,
        }}
        target={this.target}
        role={this.href ? "link" : "button"}
        tabindex={this.isdisabled ? -1 : this.htmltabindex}
        onClick={(e: MouseEvent) => this.emitZLinkClick(e, this.htmlid)}
      >
        {this.iconposition === "right" && <slot />}
        {this.icon && (
          <z-icon
            style={{
              "--z-icon-width": `${this.iconSize}px`,
              "--z-icon-height": `${this.iconSize}px`,
            }}
            name={this.icon}
          />
        )}
        {this.iconposition === "left" && <slot />}
      </a>
    );
  }
}
