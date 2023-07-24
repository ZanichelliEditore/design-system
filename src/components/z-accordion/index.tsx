import {Component, Prop, h, Event, EventEmitter} from "@stencil/core";
import {ControlSize} from "../../beans";

/**
 * Accordion component.
 *
 * @slot - Slot for the main content.
 * @slot tag - Slot for tags.
 * @cssprop --z-accordion-highlight-color - Color of the highlight band on the `summary`'s left edge.
 */
@Component({
  tag: "z-accordion",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAccordion {
  /**
   * Text label.
   */
  @Prop()
  label: string;

  /**
   * Name of the z-icon to display before the label's text.
   */
  @Prop()
  icon: string;

  /**
   * Size of the component.
   */
  @Prop({reflect: true})
  size = ControlSize.BIG;

  /**
   * Whether the component is placed in a stack of ZAccordion components.
   * When enabled, the bottom border is removed.
   */
  @Prop({reflect: true})
  stackContext = false;

  /**
   * Disabled state of the accordion.
   */
  @Prop({reflect: true})
  isDisabled = false;

  /**
   * The open state of the accordion.
   */
  @Prop({reflect: true, mutable: true})
  open = false;

  /**
   * Enable highlight band on the `summary`'s left edge.
   */
  @Prop({reflect: true})
  highlight = false;

  /**
   * Event fired when the accordion is toggled.
   */
  @Event()
  toggled: EventEmitter<boolean>;

  private detailsElm: HTMLDetailsElement;

  private onDetailsToggle(): void {
    if (this.isDisabled) {
      this.open = false;
      this.detailsElm.open = false;

      return;
    }

    this.open = this.detailsElm.open;
    this.toggled.emit(this.open);
  }

  render(): HTMLDetailsElement {
    return (
      <details
        ref={(elm: HTMLDetailsElement) => (this.detailsElm = elm)}
        onToggle={this.onDetailsToggle.bind(this)}
        open={this.open}
      >
        <summary tabIndex={this.isDisabled ? -1 : 0}>
          {this.icon && (
            <z-icon
              class="z-accordion-label-icon"
              name={this.icon}
            />
          )}
          <span class="z-accordion-label">{this.label}</span>
          <span class="z-accordion-tags">
            <slot name="tag" />
          </span>
          <z-icon
            class="z-accordion-chevron"
            name={this.open ? "chevron-up" : "chevron-down"}
          />
        </summary>
        {!this.isDisabled && (
          <div class="z-accordion-content">
            <slot />
          </div>
        )}
      </details>
    );
  }
}
