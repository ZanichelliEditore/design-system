import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-body",
  shadow: true
})
export class ZBody {
  @Prop() level: "b1" | "b2" | "b3" | "b4" | "b5";
  @Prop() variant: "regular" | "semibold" = "regular";
  @Prop() component: string;

  render() {
    return (
      <z-typography
        component={this.component || "span"}
        level={this.level}
        variant={this.variant}
      >
        <slot />
      </z-typography>
    );
  }
}
