import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "z-link",
  styleUrl: "styles.css",
  shadow: true
})
export class ZLink {
  /** link url */
  @Prop() url: string;
  /** link label (optional) */
  @Prop() label?: string;
  /** link icon name (optional) */
  @Prop() icon?: string;
  /** link target (optional) */
  @Prop() target?: string = "_self";
  /** disable link flag (optional) */
  @Prop() isdisabled?: boolean = false;
  /** white variant flag (optional) */
  @Prop() iswhite?: boolean = false;
  /** link id (optional) */
  @Prop() linkid?: string;
  /** tabindex link attribute */
  @Prop() linktabindex: number = 0;

  /** emitted on link click, returns linkId */
  @Event() zLinkClick: EventEmitter;

  constructor() {
    this.emitZLinkClick = this.emitZLinkClick.bind(this);
    this.emitZLinkInteraction = this.emitZLinkInteraction.bind(this);
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
        href={this.url ? this.url : null}
        class={`${this.isdisabled && "disabled"} ${this.iswhite && "white"}`}
        target={this.target}
        id={this.linkid}
        onClick={(e: MouseEvent) => this.emitZLinkClick(e, this.linkid)}
        role={this.url ? "link" : "button"}
        tabindex={this.linktabindex}
      >
        {this.icon && <z-icon name={this.icon} width={12} height={12} />}
        {this.label}
      </a>
    );
  }
}
