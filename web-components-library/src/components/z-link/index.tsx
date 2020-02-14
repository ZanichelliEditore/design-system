import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "z-link",
  styleUrl: "styles.css",
  shadow: true
})
export class ZLink {
  @Prop() url: string;
  @Prop() label?: string;
  @Prop() icon?: string;
  @Prop() target?: string = "_self";
  @Prop() isdisabled?: boolean = false;
  @Prop() iswhite?: boolean = false;
  @Prop() linkid?: string;
  @Prop() linktabindex: number = 0;

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
