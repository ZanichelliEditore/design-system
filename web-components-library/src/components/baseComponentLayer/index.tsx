import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "base-component-layer",
  styleUrl: "../../global-styles.css"
})
export class BaseComponentLayer {
  @Prop() myProp: string;

  render() {
    return (
      <div>
        <z-link
          url={"https://www.google.it"}
          label={"Prova link"}
          hasicon={true}
        />
      </div>
    );
  }
}
