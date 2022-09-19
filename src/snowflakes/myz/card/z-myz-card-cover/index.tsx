import {Component, Prop, h} from "@stencil/core";

@Component({
  tag: "z-myz-card-cover",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzCardCover {
  /** image source */
  @Prop()
  img: string;
  /** cover alt title */
  @Prop()
  titolo: string;
  /** faded status */
  @Prop()
  faded: boolean;
  /** default error image source */
  @Prop()
  defaultimg: string;

  hadleOnImageError(): void {
    this.img = this.defaultimg;
  }

  render(): HTMLImageElement {
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
