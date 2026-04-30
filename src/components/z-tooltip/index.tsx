import {Component, ComponentInterface, Event, EventEmitter, Listen, Prop, h} from "@stencil/core";
import {PopoverPosition} from "../../beans";

/**
 * Tooltip component.
 * It is basically a wrapper for the `<z-popover>` component with custom configuration.
 *
 * @cssprop --z-tooltip-theme--surface - background color of the popover.
 * @cssprop --z-tooltip-theme--text - foreground color of the popover.
 * @cssprop --z-tooltip-shadow-filter - drop-shadow filter of the popover.
 */
@Component({
  tag: "z-tooltip",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTooltip implements ComponentInterface {
  /** Tooltip position. */
  @Prop({reflect: true})
  position: PopoverPosition = PopoverPosition.AUTO;

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

  /**
   * Reflects `closable` prop of the popover.
   * "If true, the popover can be closed by clicking outside of it or pressing the escape key.
   * Otherwise, it will be closed only programmatically (by setting `open` to `false`)."
   */
  @Prop()
  closable = true;

  /**
   * Propagation of the `openChange` event from the internal `z-popover` to allow listening to it directly on `z-tooltip`.
   * This is necessary to keep the internal state of the `open` prop in sync when the popover is closed by user interaction instead of programmatically.
   */
  @Event()
  openChange: EventEmitter<{open: boolean}>;

  private popoverEl: HTMLZPopoverElement;

  @Listen("openChange")
  onPopoverOpenChange(): void {
    this.open = this.popoverEl.open;
  }

  render(): HTMLZPopoverElement {
    return (
      <z-popover
        ref={(el) => (this.popoverEl = el as HTMLZPopoverElement)}
        bindTo={this.bindTo}
        open={this.open}
        position={this.position}
        closable={this.closable}
        center
        showArrow
        onOpenChange={(event) => this.openChange.emit(event.detail)}
      >
        <slot></slot>
      </z-popover>
    );
  }
}
