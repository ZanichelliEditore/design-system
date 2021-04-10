import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-app-menu",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAppMenu {
  @Prop() myProp: string;

  renderDots(num = 9) {
    const result = [];
    for (let index = 0; index < num; index++) {
      result.push(<span></span>)
    }
    return result;
  }

  render() {
    return (
      <div>
        {this.renderDots()}
      </div>
    );
  }
}
