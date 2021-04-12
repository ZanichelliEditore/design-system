import { Component, Prop, Element, h, State, Listen } from "@stencil/core";
import { mobileBreakpoint } from "../../constants/breakpoints";

@Component({
  tag: "z-app-topbar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAppTopbar {
  @Prop() variant?: 'light' | 'dark' = 'dark';
  @Prop() logged?: boolean;
  @Prop() hashtag: string;
  @Element() hostElement: HTMLElement;

  @State() zLinksValues: string[];
  @State() isMobile: boolean;

  @Listen("resize", { target: "window" })
  handleResize(): void {
    this.toggleLinkLabels();
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  componentWillLoad() {
    this.zLinksValues = Array.from(this.hostElement.children)
      .filter((child) => child.nodeName === "Z-LINK")
      .map((link) => link.childNodes[0].nodeValue);
    this.isMobile = window.innerWidth <= mobileBreakpoint;
    this.toggleLinkLabels();
  }

  toggleLinkLabels() {
    if (this.hostElement) {
      const zLinks = Array.from(this.hostElement.children).filter(
        (child) => child.nodeName === "Z-LINK"
      );
      if (this.isMobile) {
        zLinks.forEach((link) => {
          link.childNodes[0].nodeValue = "";
        });
      } else {
        zLinks.forEach((link, i) => {
          link.childNodes[0].nodeValue = this.zLinksValues[i];
        });
      }
    }
  }

  render() {
    return (
      <div class={this.variant}>
        <div class="left">
          <slot name="logo"></slot>
          <span id="hashtag">{this.hashtag}</span>
        </div>
        <div class={`right ${this.logged && this.isMobile && "hide-actions"}`}>
          <slot name="actions"></slot>
          <slot name="login"></slot>
          <slot name="app-menu"></slot>
        </div>
      </div>
    );
  }
}
