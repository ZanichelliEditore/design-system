import { Component, Element, Host, Prop, h } from "@stencil/core";
@Component({
  tag: "z-carousel",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true
})
export class ZCarousel {
  @Prop() itemsDistance: number;
  @Element() host: HTMLElement;

  // componentWillRender() {
  //   let newHtml = "";
  //   console.log('aaAaAA', this.host.children);
  //   Array.from(this.host.children).forEach((child) => {
  //     newHtml = newHtml + `<li class="carousel-item">` + child.outerHTML + "</li>";
  //   });
  //   this.host.innerHTML = newHtml;
  // }

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
