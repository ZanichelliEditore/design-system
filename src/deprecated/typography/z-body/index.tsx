import {Component, Prop, h} from "@stencil/core";
import {ZTypographyLevels} from "../z-typography";

@Component({
  tag: "z-body",
  shadow: true,
})
export class ZBody {
  /** Typography level */
  @Prop()
  level: 1 | 2 | 3 | 4 | 5;

  /** Font weight variant */
  @Prop()
  variant: "regular" | "semibold" = "regular";

  /** HTML tag to use to wrap slotted content */
  @Prop()
  component: string;

  render(): HTMLZTypographyElement {
    return (
      <z-typography
        tabIndex={0}
        component={this.component || "span"}
        level={`b${this.level}` as ZTypographyLevels}
        variant={this.variant}
      >
        <slot />
      </z-typography>
    );
  }
}
