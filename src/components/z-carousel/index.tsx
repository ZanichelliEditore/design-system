import { Component, Element, Host, Prop, h } from "@stencil/core";
@Component({
  tag: "z-carousel",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZCarousel {
  /** [optional] gap between the slide items */
  @Prop() gap?: number = 0;

  @Element() host: HTMLElement;

  componentDidRender() {
    const children = this.host.children[0].children;
    for (let i = 0; i < children.length -1; i++) {
      children[i].setAttribute("gap", `${this.gap}`);
    }
  }

  render() {
    return (
      <Host>
        <ul class="carousel-item-container">
          <slot />
        </ul>
      </Host>
    );
  }
}
