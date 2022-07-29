import {
  Component,
  Prop,
  h,
} from "@stencil/core";
import { PopoverPositions } from "../../../beans";

/**
 * Tooltip component.
 * It is basically a wrapper for the `<z-popover>` component with custom configuration.
 *
 * @cssprop --z-popover-theme--surface - background color of the popover/tooltip.
 * @cssprop --z-popover-theme--text - foreground color of the popover/tooltip.
 * @cssprop --z-popover-shadow - shadow of the popover/tooltip.
 */
@Component({
  tag: "z-tooltip",
  styleUrl: 'styles.css',
  shadow: true,
})
export class ZTooltip {
  /** Tooltip position. */
  @Prop({ reflect: true, mutable: true }) position: PopoverPositions = PopoverPositions.AUTO;

  /**
   * The open state of the tooltip.
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  /**
   * The selector or the element bound with the tooltip.
   */
  @Prop() bindTo?: string | HTMLElement;

  render() {
    return <z-popover
        open={this.open}
        position={this.position}
        bindTo={this.bindTo}
        center
        showArrow
      >
      <slot></slot>
    </z-popover>
  }
}
