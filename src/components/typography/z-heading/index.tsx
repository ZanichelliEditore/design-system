import {Component, Prop, h} from "@stencil/core";
import {ZTypographyLevels} from "../z-typography";

@Component({
  tag: "z-heading",
  shadow: true,
})
export class ZHeading {
  /** Typography level */
  @Prop()
  level: 1 | 2 | 3 | 4;
  /** Font weight variant */
  @Prop()
  variant: "regular" | "semibold" | "light" = "regular";
  /** HTML tag to use to wrap slotted content */
  @Prop()
  component: string;

  render(): HTMLZTypographyElement {
    return (
      <z-typography
        tabIndex={0}
        component={this.component || `h${this.level}`}
        level={`h${this.level}` as ZTypographyLevels}
        variant={this.variant}
      >
        <slot />
      </z-typography>
    );
  }
}
