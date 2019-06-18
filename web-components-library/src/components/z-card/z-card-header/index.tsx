import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-header",
  styleUrls: ["../../../global-styles.css", "z-card-header.css"],
  shadow: true
})
export class ZCardHeader {
  @Prop() titolo: string;
  @Prop() icon?: string;
  @Prop() handleiconclick?: (e: MouseEvent) => void;

  render() {
    return (
      <header>
        <h2>{this.titolo}</h2>
        <span onClick={this.handleiconclick}>
          <img src={this.icon} />
        </span>
      </header>
    );
  }
}
