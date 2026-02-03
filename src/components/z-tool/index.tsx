import {Component, Element, Host, Prop, State, h} from "@stencil/core";
import {PopoverPosition} from "../../beans";

/**
 * ZTool component.
 * @slot - Optional slot for nested content (e.g., a secondary z-toolbar) that appears when the tool is active/clicked.
 */
@Component({
  tag: "z-tool",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTool {
  @Element() hostElement: HTMLZToolElement;

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
  @Prop({reflect: true, mutable: true})
  active = false;

  /** Disabled state. */
  @Prop({reflect: true})
  disabled = false;

  @State()
  tooltipOpen = false;

  @State()
  hasSlottedContent = false;

  @State()
  isNested = false;

  private iconRef?: HTMLElement;

  private hoverDelay?: ReturnType<typeof setTimeout>;

  private get resolvedTooltipPosition(): PopoverPosition {
    // Nested tools always show tooltip at the bottom
    if (this.isNested) {
      return PopoverPosition.BOTTOM;
    }

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

  private handleClick = (): void => {
    if (this.hasSlottedContent && !this.disabled) {
      this.active = !this.active;
    }
  };

  /** Check if this tool is nested inside another z-tool's submenu */
  private checkIfNested(): boolean {
    let parent = this.hostElement.parentElement;
    while (parent) {
      if (parent.tagName.toLowerCase() === "z-tool") {
        return true;
      }
      parent = parent.parentElement;
    }

    return false;
  }

  componentWillLoad(): void {
    this.hasSlottedContent = this.hostElement.children.length > 0;
    this.isNested = this.checkIfNested();
  }

  disconnectedCallback(): void {
    clearTimeout(this.hoverDelay);
  }

  render(): HTMLZToolElement {
    const ariaLabel = this.label || this.tooltip || undefined;

    return (
      <Host nested={this.isNested}>
        <button
          class="z-tool"
          type="button"
          aria-pressed={this.active ? "true" : "false"}
          aria-expanded={this.hasSlottedContent ? (this.active ? "true" : "false") : undefined}
          aria-label={ariaLabel}
          disabled={this.disabled}
          onClick={this.handleClick}
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
        {this.tooltip && !this.isNested && (
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
        )}
        {this.tooltip && this.isNested && (
          <div
            class={{
              "z-tool-tooltip-nested": true,
              "z-tool-tooltip-nested-open": this.tooltipOpen,
            }}
          >
            <span class="body-4">{this.tooltip}</span>
          </div>
        )}
        {this.hasSlottedContent && (
          <div
            class={{
              "z-tool-submenu": true,
              "z-tool-submenu-open": this.active,
            }}
          >
            <slot></slot>
          </div>
        )}
      </Host>
    );
  }
}
