import {Component, Element, Host, Listen, Prop, State, h} from "@stencil/core";
import {KeyboardCode, PopoverPosition} from "../../beans";

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
    if (this.tooltipPosition) {
      return this.tooltipPosition;
    }

    return PopoverPosition.TOP;
  }

  private handleTooltipOpen = (): void => {
    //This.isNested check prevents tooltips from showing on nested tools, e.g. inside submenus
    //This control will be removed in future versions when nested tooltips will be supported
    if (!this.tooltip || this.disabled || this.isNested) {
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
      if (this.active) {
        this.focusNestedToolbar();
      }
    }
  };

  private focusNestedToolbar(): void {
    requestAnimationFrame(() => {
      const nestedToolbar = this.hostElement.querySelector("z-toolbar");
      if (nestedToolbar) {
        const firstTool = nestedToolbar.querySelector("z-tool");
        if (firstTool) {
          const button = firstTool.shadowRoot?.querySelector("button");
          if (button) {
            button.focus();
          }
        }
      }
    });
  }

  @Listen("keydown")
  handleKeyDown(event: KeyboardEvent): void {
    // Handle Enter/Space to open submenu and focus nested toolbar
    if (this.hasSlottedContent && !this.disabled) {
      if (event.key === KeyboardCode.ENTER || event.key === KeyboardCode.SPACE) {
        // Don't prevent default - let the click happen naturally
        // The focus will be moved in handleClick
      }
    }
  }

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
        {this.hasSlottedContent && (
          <div
            class={{
              "z-tool-submenu": true,
              "z-tool-submenu-open": this.active,
            }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <slot></slot>
          </div>
        )}
      </Host>
    );
  }
}
