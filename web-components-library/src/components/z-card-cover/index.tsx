import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-cover",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardCover {
  @Prop() img: string;
  @Prop() titolo: string;
  @Prop() faded: boolean;
  @Prop() defaultimg: string;

  hadleOnImageError() {
    this.img = this.defaultimg;
  }

  render() {
    return (
      <img
        class={this.faded && "faded"}
        onError={this.hadleOnImageError.bind(this)}
        alt={this.titolo}
        src={this.img}
      />
    );
  }
}
