import { Component, h, Prop } from "@stencil/core";

/**
 * ZCarousel component.
 * @cssprop --z-carousel-gutter - The gutter between items.
 * @slot - carousel items. use `<li>` elements inside this slot as it is wrapped inside an `<ul>`
 */

@Component({
  tag: "z-carousel",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZCarousel {
  /** sets whether the z-carousel is on loading state */
  @Prop() isloading: boolean;
  /** sets the height of z-carousel ghost loading */
  @Prop() ghostloadingheight: string;
  render() {
    if (this.isloading) {
      return (
        <div style={{ height: `${this.ghostloadingheight}px` }}>
          <z-ghost-loading></z-ghost-loading>
          <div style={{ display: "none" }}>
            <slot />
          </div>
        </div>
      );
    }
    return (
      <ul class="z-carousel-items-container">
        <slot />
      </ul>
    );
  }
}
