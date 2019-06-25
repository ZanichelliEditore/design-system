import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-cover",
  styleUrls: ["../../global-styles.css", "z-card-cover.css"],
  shadow: true
})
export class ZCardCover {
  @Prop() img: string;
  @Prop() titolo: string;

  hadleOnImageError(){
    this.img = 'https://dummyimage.com/301x406/3c6fcf/ffffff.png&text=Copertina+non+disponibile'
  }

  render() {
    return <img onError={this.hadleOnImageError.bind(this)} alt={this.titolo} src={this.img} />;
  }
}
