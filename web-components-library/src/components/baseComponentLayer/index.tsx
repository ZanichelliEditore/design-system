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
          hasicon={false}
          label={"Prova link"}
          type={"external"}
        />
        <z-link
          url={"https://www.google.it"}
          hasicon={true}
          label={"Prova link"}
        />
      </div>
    );
  }
}
