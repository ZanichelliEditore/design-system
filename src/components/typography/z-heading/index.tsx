import { Component, Prop, h } from "@stencil/core";
import { ZTypographyLevels } from "../z-typography";

@Component({
  tag: "z-heading",
  shadow: true
})
export class ZHeading {
  @Prop() level: 1 | 2 | 3 | 4;
  @Prop() variant: "regular" | "semibold" | "light" = "regular";
  @Prop() component: string;

  render() {
    return (
      <z-typography
        component={this.component || `h${this.level}`}
        level={`h${this.level}` as ZTypographyLevels}
        variant={this.variant}
      >
        <slot />
      </z-typography>
    );
  }
}
