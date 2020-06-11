import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-slideshow-image",
  styleUrl: "styles.css",
  shadow: true
})
export class ZSlideshowImage {
  @Prop() anchor: number;
  @Prop() url: string;

  render() {
    return (
      <div data-anchor={this.anchor}>
        <img src={this.url} />
      </div>
    );
  }
}
