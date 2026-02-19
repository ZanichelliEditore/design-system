import {Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h} from "@stencil/core";
import {PopoverPosition} from "../../beans";

/**
 * ZTool component.
 * @slot - Optional slot for nested content (e.g., a secondary z-toolbar) that appears when the tool is open/clicked.
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

  /** Preferred tooltip position. Defaults to true. */
  @Prop()
  tooltipPosition: PopoverPosition = PopoverPosition.TOP;

  /** Accessible label for the tool trigger. Falls back to tooltip content. */
  @Prop()
  htmlAriaLabel?: string;

  /** Visual selected state. */
  @Prop({reflect: true})
  active = false;

  /** Disabled state. */
  @Prop({reflect: true})
  disabled = false;

  /** Open state. */
  @Prop({reflect: true, mutable: true})
  open = false;

  @State()
  tooltipOpen = false;

  @State()
  hasSlottedContent = false;

  @State()
  isNested = false;

  /** Emitted when the open state changes. */
  @Event()
  toggleSubmenu: EventEmitter;

  private iconRef?: HTMLElement;

  private hoverDelay?: ReturnType<typeof setTimeout>;

  @Watch("open")
  handleOpenChange(): void {
    this.toggleSubmenu.emit(this.open);
  }

  private handleTooltipOpen = (): void => {
    //This.isNested check prevents tooltips from showing on nested tools, e.g. inside submenus
    //This control will be removed in future versions when nested tooltips will be supported
    if (!this.tooltip || this.isNested) {
      return;
    }
    clearTimeout(this.hoverDelay);
    this.hoverDelay = setTimeout(() => {
      this.tooltipOpen = true;
    }, 1000);
  };

  private handleTooltipClose = (): void => {
    if (!this.tooltip) {
      return;
    }
    clearTimeout(this.hoverDelay);
    this.tooltipOpen = false;
  };

  private handleClick = (): void => {
    if (this.disabled) {
      return;
    }

    if (this.hasSlottedContent) {
      this.open = !this.open;
      if (this.open) {
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
    return (
      <Host nested={this.isNested}>
        <button
          class="z-tool"
          type="button"
          aria-pressed={this.active ? "true" : "false"}
          aria-expanded={this.hasSlottedContent ? (this.open ? "true" : "false") : undefined}
          aria-label={this.htmlAriaLabel || this.tooltip || undefined}
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
            position={this.tooltipPosition}
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
              "z-tool-submenu-open": this.open,
            }}
          >
            <slot></slot>
          </div>
        )}
      </Host>
    );
  }
}
