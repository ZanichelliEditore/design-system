import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-app-menu",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAppMenu {
  @Prop() myProp: string;

  render() {
    return (
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}
