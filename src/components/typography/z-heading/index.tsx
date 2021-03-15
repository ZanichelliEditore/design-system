import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-heading",
  shadow: true
})
export class ZHeading {
  @Prop() level: "h1" | "h2" | "h3" | "h4";
  @Prop() variant: "regular" | "semibold" | "light" = "regular";
  @Prop() component: string;

  render() {
    return (
      <z-typography
        component={this.component || this.level.split("-")[0]}
        level={this.level}
        variant={this.variant}
      >
        <slot />
      </z-typography>
    );
  }
}
