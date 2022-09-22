import {Component, Prop, h, Listen} from "@stencil/core";
import {PopoverPositions} from "../../../beans";

/**
 * Tooltip component.
 * It is basically a wrapper for the `<z-popover>` component with custom configuration.
 *
 * @cssprop --z-popover-theme--surface - background color of the popover.
 * @cssprop --z-popover-theme--text - foreground color of the popover.
 * @cssprop --z-popover-shadow-filter - drop-shadow filter of the popover.
 */
@Component({
  tag: "z-tooltip",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTooltip {
  /** Tooltip position. */
  @Prop({reflect: true})
  position: PopoverPositions = PopoverPositions.AUTO;

  /** Enable tooltip dark mode. */
  @Prop({reflect: true})
  dark = false;

  /**
   * The open state of the tooltip.
   */
  @Prop({reflect: true, mutable: true})
  open = false;

  /**
   * The selector or the element bound with the tooltip.
   */
  @Prop()
  bindTo?: string | HTMLElement;

  private popover: HTMLZPopoverElement;

  @Listen("openChange")
  onPopoverOpenChange(): void {
    this.open = this.popover.open;
  }

  render(): HTMLZPopoverElement {
    return (
      <z-popover
        ref={(el) => (this.popover = el as HTMLZPopoverElement)}
        bindTo={this.bindTo}
        open={this.open}
        position={this.position}
        center
        showArrow
      >
        <slot></slot>
      </z-popover>
    );
  }
}
