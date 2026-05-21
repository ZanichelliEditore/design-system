import {Component, ComponentInterface, Element, Event, EventEmitter, Prop, State, Watch, h} from "@stencil/core";
import {AccordionVariant, ControlSize} from "../../beans";

/**
 * Accordion component.
 *
 * @slot - Slot for the main content.
 * @slot tag - Slot for tags.
 * @part summary - The summary element that is always visible and acts as the accordion's toggle.
 * @part content - The content element that is shown or hidden when the accordion is toggled.
 */
@Component({
  tag: "z-accordion",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAccordion implements ComponentInterface {
  @Element() host: HTMLZAccordionElement;

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

  @State()
  private hasSlottedTags = false;

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

  /** Check if there is any content in the "tag" slot. */
  private checkSlottedTags(): void {
    this.hasSlottedTags = !!this.host.querySelector('[slot="tag"]');
  }

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

  componentWillLoad(): void {
    this.checkSlottedTags();
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
          {this.hasSlottedTags && (
            <span class="z-accordion-tags">
              <slot
                name="tag"
                onSlotchange={() => this.checkSlottedTags()}
              />
            </span>
          )}
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
