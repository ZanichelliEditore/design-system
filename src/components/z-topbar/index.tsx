import { Component, Prop, Element, h, State } from "@stencil/core";

@Component({
  tag: "z-topbar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTopbar {
  @Prop() logged?: boolean;
  @Prop() hashtag: string;
  @Element() hostElement: HTMLElement;

  @State() zLinksValues: string[];
  @State() isMobile: boolean;

  componentWillLoad() {
    window.addEventListener("resize", () => {
      this.checkIfMobile();
    });
    this.zLinksValues = Array.from(this.hostElement.children)
      .filter((child) => child.nodeName === "Z-LINK")
      .map((link) => link.childNodes[0].nodeValue);
    this.checkIfMobile();
  }

  checkIfMobile() {
    if (this.hostElement) {
      const zLinks = Array.from(this.hostElement.children).filter(
        (child) => child.nodeName === "Z-LINK"
      );
      if (window.innerWidth <= 767) {
        this.isMobile = true;
        zLinks.forEach((link) => {
          link.childNodes[0].nodeValue = "";
        });
      } else {
        this.isMobile = false;
        zLinks.forEach((link, i) => {
          link.childNodes[0].nodeValue = this.zLinksValues[i];
        });
      }
    }
  }

  render() {
    return (
      <div>
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
