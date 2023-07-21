import {Component, Prop, State, h} from "@stencil/core";
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

  @State()
  open = false;

  private detailsElm: HTMLDetailsElement;

  render(): HTMLDetailsElement {
    return (
      <details
        ref={(elm: HTMLDetailsElement) => (this.detailsElm = elm)}
        onToggle={() => (this.open = this.detailsElm.open)}
      >
        <summary>
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
        <div class="z-accordion-content">
          <slot />
        </div>
      </details>
    );
  }
}
