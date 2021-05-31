import { Component, Prop, h, Host } from "@stencil/core";
import { DividerSize, DividerOrientation } from "../../beans";
@Component({
  tag: "z-divider",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZDivider {
  /** [optional] Divider size */
  @Prop() size?: DividerSize = DividerSize.small;
  /** [optional] Divider color */
  @Prop() color?: string = "gray200";
  /** [optional] Divider orintation */
  @Prop() orientation?: DividerOrientation = DividerOrientation.horizontal;

  render() {
    return (
      <Host
        class={`divider-${this.size} divider-${this.orientation}`}
        style={{ backgroundColor: `var(--${this.color})` }}
      />
    );
  }
}
