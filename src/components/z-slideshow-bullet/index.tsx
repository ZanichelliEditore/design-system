import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "z-slideshow-bullet",
  styleUrl: "styles.css",
  shadow: true
})
export class ZSlideshowBullet {
  @Prop() anchor: number;

  render() {
    return <div data-anchor={this.anchor}></div>;
  }
}
