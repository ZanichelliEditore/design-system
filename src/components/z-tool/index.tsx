import {Component, Host, Prop, State, h} from "@stencil/core";
import {PopoverPosition} from "../../beans";

/**
 * Ztool component.
 */
@Component({
  tag: "z-tool",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTool {
  /** Tool icon */
  @Prop()
  icon: string;

  /** Text displayed inside the tooltip. */
  @Prop()
  tooltip?: string;

  /** Preferred tooltip position. */
  @Prop()
  tooltipPosition?: PopoverPosition;

  /** Accessible label for the tool trigger. Falls back to tooltip content. */
  @Prop()
  label?: string;

  /** Visual selected state. */
  @Prop({reflect: true})
  active = false;

  /** Disabled state. */
  @Prop({reflect: true})
  disabled = false;

  @State()
  tooltipOpen = false;

  private iconRef?: HTMLElement;

  private hoverDelay?: ReturnType<typeof setTimeout>;

  private get resolvedTooltipPosition(): PopoverPosition {
    if (this.tooltipPosition) {
      return this.tooltipPosition;
    }

    return PopoverPosition.TOP;
  }

  private handleTooltipOpen = (): void => {
    if (!this.tooltip || this.disabled) {
      return;
    }
    clearTimeout(this.hoverDelay);
    this.hoverDelay = setTimeout(() => {
      this.tooltipOpen = true;
    }, 300);
  };

  private handleTooltipClose = (): void => {
    if (!this.tooltip) {
      return;
    }
    clearTimeout(this.hoverDelay);
    this.tooltipOpen = false;
  };

  disconnectedCallback(): void {
    clearTimeout(this.hoverDelay);
  }

  render(): HTMLZToolElement {
    const ariaLabel = this.label || this.tooltip || undefined;

    return (
      <Host>
        <button
          class="z-tool"
          type="button"
          aria-pressed={this.active ? "true" : "false"}
          aria-label={ariaLabel}
          disabled={this.disabled}
          onMouseEnter={this.handleTooltipOpen}
          onMouseLeave={this.handleTooltipClose}
          onFocus={this.handleTooltipOpen}
          onBlur={this.handleTooltipClose}
        >
          <z-icon
            ref={(el) => (this.iconRef = el)}
            name={this.icon}
          ></z-icon>
        </button>
        {this.tooltip ? (
          <z-popover
            class="z-tool-tooltip"
            bindTo={this.iconRef}
            open={this.tooltipOpen}
            position={this.resolvedTooltipPosition}
            showArrow
            center
            closable={false}
          >
            <span class="body-4">{this.tooltip}</span>
          </z-popover>
        ) : null}
      </Host>
    );
  }
}
