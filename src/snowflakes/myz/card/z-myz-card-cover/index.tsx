import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "z-myz-card-cover",
  styleUrl: "styles.css",
  shadow: true
})
export class ZMyzCardCover {
  /** image source */
  @Prop() img: string;
  /** cover alt title */
  @Prop() titolo: string;
  /** faded status */
  @Prop() faded: boolean;
  /** default error image source */
  @Prop() defaultimg: string;
  /** out of catalog flag */
  @Prop() outOfCatalog: boolean = true;

  hadleOnImageError() {
    this.img = this.defaultimg;
  }

  render() {
    return (
      <Host>
        <img
          class={this.faded && "faded"}
          onError={this.hadleOnImageError.bind(this)}
          alt={this.titolo}
          src={this.img}
        />
        {this.outOfCatalog && (<z-body class={this.faded && "faded"} level={1}><strong>Fuori Catalogo</strong></z-body>)}
      </Host>
    );
  }
}
