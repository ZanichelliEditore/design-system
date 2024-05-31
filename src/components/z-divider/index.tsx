import {Component, Host, Prop, h} from "@stencil/core";
import {DividerOrientation, DividerSize} from "../../beans";
@Component({
  tag: "z-divider",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZDivider {
  /** [optional] Divider size */
  @Prop()
  size?: DividerSize = DividerSize.SMALL;

  /** [optional] Divider color */
  @Prop()
  color?: string = "gray200";

  /** [optional] Divider orintation */
  @Prop()
  orientation?: DividerOrientation = DividerOrientation.HORIZONTAL;

  render(): HTMLZDividerElement {
    return (
      <Host
        class={`divider-${this.size} divider-${this.orientation}`}
        style={{backgroundColor: `var(--${this.color})`}}
      />
    );
  }
}
