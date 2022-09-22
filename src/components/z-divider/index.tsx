import {Component, Prop, h, Host} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";
import {DividerSize, DividerOrientation} from "../../beans";
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

  render(): HostElement {
    return (
      <Host
        class={`divider-${this.size} divider-${this.orientation}`}
        style={{backgroundColor: `var(--${this.color})`}}
      />
    );
  }
}
