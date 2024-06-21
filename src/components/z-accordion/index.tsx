import {Component, Event, EventEmitter, Prop, Watch, h} from "@stencil/core";
import {AccordionVariant, ControlSize} from "../../beans";

/**
 * Accordion component.
 *
 * @slot - Slot for the main content.
 * @slot tag - Slot for tags.
 * @cssprop --z-accordion-highlight-color - Color of the highlight band on the summary's left edge. Only applies when `highlight` is true. Default: `transparent`.
 * @cssprop --z-accordion-bg - Background color of the summary. Default: `--color-surface02`.
 * @cssprop --z-accordion-label-color - Label color. Default: `--color-default-text`.
 * @cssprop --z-accordion-disabled-label-color - Label color when disabled. Default: `--color-text03`.
 * @cssprop --z-accordion-content-bg - Background color of the accordion. Default: `--color-surface02`.
 * @cssprop --z-accordion-content-fg - Content text color. Default: `--color-default-text`.
 * @cssprop --z-accordion-hover-color - Hover color of the summary. Default: `--color-surface03`.
 * @cssprop --z-accordion-left-padding - Left padding of the summary. Default: `--space-unit` * 2.
 * @cssprop --z-accordion-right-padding - Right padding of the summary. Default: `--space-unit`.
 * @cssprop --z-accordion-label-font-weight - Font weight of the summary label. Default: `--font-sb`.
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
   * Accordion variant.
   */
  @Prop({reflect: true})
  variant: AccordionVariant = AccordionVariant.DEFAULT;

  /**
   * Enable box-shadow on the accordion. Only applies when `variant` is `BACKGROUND`.
   */
  @Prop({reflect: true})
  shadow = true;

  /**
   * Event fired when the accordion is toggled.
   */
  @Event()
  toggled: EventEmitter<boolean>;

  @Watch("isDisabled")
  protected onDisabledChange(): void {
    if (this.isDisabled) {
      this.open = false;
    }
  }

  private detailsElm: HTMLDetailsElement;

  /**
   * Handle `details` element toggle.
   * If currently disabled, prevent toggling by forcing the `open` state to `false`.
   * Unfortunately the "toggle" event is not cancelable and when catched, the `open` state is already changed.
   */
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
        <summary
          tabIndex={this.isDisabled ? -1 : null}
          part="summary"
        >
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
          <div
            class="z-accordion-content"
            part="content"
          >
            <slot />
          </div>
        )}
      </details>
    );
  }
}
