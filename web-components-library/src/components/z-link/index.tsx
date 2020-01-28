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

  @Event() zLinkClick: EventEmitter;
  emitZLinkClick(e: MouseEvent, linkId) {
    this.emitZLinkInteraction(e, linkId);
  }

  handleKeyDown(ev: KeyboardEvent, linkId) {
    if (ev.key === "Enter" || ev.key === "Space") {
      this.emitZLinkInteraction(ev, linkId);
    }
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
        onKeyDown={(ev: KeyboardEvent) => this.handleKeyDown(ev, this.linkid)}
        role={this.url ? "link" : "button"}
        tabindex="0"
      >
        {this.icon && <z-icon name={this.icon} width={12} height={12} />}
        {this.label}
      </a>
    );
  }
}
