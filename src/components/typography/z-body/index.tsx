import { Component, Prop, h } from "@stencil/core";
import { ZTypographyLevels } from "../z-typography";

@Component({
  tag: "z-body",
  shadow: true,
})
export class ZBody {
  @Prop() level: 1 | 2 | 3 | 4 | 5;
  @Prop() variant: "regular" | "semibold" = "regular";
  @Prop() component: string;

  render() {
    return (
      <z-typography
        component={this.component || "span"}
        level={`b${this.level}` as ZTypographyLevels}
        variant={this.variant}
      >
        <slot />
      </z-typography>
    );
  }
}
