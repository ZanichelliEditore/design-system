import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
  State,
  Listen,
} from "@stencil/core";
import { ButtonSizeEnum, ButtonVariantEnum } from "../../../beans";
import { mobileBreakpoint } from "../../../constants/breakpoints";

/**
 * @slot - table elements
 * @slot sticky-footer - set the content of the sticky footer
 */

@Component({
  tag: "z-registro-table",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZRegistroTable {
  @Element() host: HTMLElement;

  /** Sets table with border */
  @Prop() bordered?: boolean = false;

  /** Sets call to action label */
  @Prop() callToActionLabel?: string;

  /** Sets call to action label */
  @Prop() callToActionTwoLabel?: string;

  /** Sets first column sticky */
  @Prop() columnSticky?: boolean = false;

  /** Sets empty table */
  @Prop() empty?: boolean = false;

  /** Set error status */
  @Prop() error?: boolean = false;

  /** Set error status */
  @Prop() errorLink?: string;

  /** Sets header sticky */
  @Prop() headerSticky?: boolean = false;

  /** Set message */
  @Prop() message?: string =
    "Siamo spicenti, al momento non sono presenti dati da visualizzare";

  /** Set subtitle */
  @Prop() subtitle?: string = "";

  /** Set if has table content, useful when empty conte to who first column */
  @State() hasTableBody: boolean;

  /** Handle mobile */
  @State() isMobile: boolean;
  /** remove call to action event */

  /** remove call to action event */
  @Event({
    eventName: "callToAction",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  callToAction: EventEmitter;

  /** remove call to action event */
  @Event({
    eventName: "callToActionTwo",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  callToActionTwo: EventEmitter;

  @Listen("resize", { target: "window" })
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  @Listen("orientationchange", { target: "window" })
  handleOrientationChange(): void {
    this.isMobile = screen.width <= mobileBreakpoint;
  }

  componentWillLoad() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
    this.hasTableBody = !!this.host.querySelector('[slot="table-body"]');
  }

  componentWillRender() {
    this.host.setAttribute("role", "table");
  }

  render() {
    const buttonSize = this.isMobile
      ? ButtonSizeEnum.small
      : ButtonSizeEnum.big;
    const tableClass = `table ${this.empty ? "table-empty" : ""} ${
      this.bordered ? "table-bordered" : ""
    }
    ${this.columnSticky ? "table-column-sticky" : ""}
    ${this.headerSticky ? "table-header-sticky" : ""}`;
    const tableContentClass = `${!!this.hasTableBody ? "table-content" : ""}`;

    if (this.error) {
      return (
        <z-registro-table-error
          table-class={tableClass}
          error-link={this.errorLink}
        />
      );
    }
    if (this.empty && this.hasTableBody) {
      return (
        <Host>
          <div class={tableClass}>
            <slot name="table-header" />
            <div class={tableContentClass}>
              <slot name="table-body" />
              <z-registro-table-empty-box
                message={this.message}
                subtitle={this.subtitle}
              >
                {!!this.callToActionLabel && (
                  <z-button
                    slot="cta1"
                    variant={ButtonVariantEnum.tertiary}
                    onClick={() => this.callToAction.emit()}
                    size={buttonSize}
                  >
                    {this.callToActionLabel}
                  </z-button>
                )}
                {!!this.callToActionTwoLabel && (
                  <z-button
                    slot="cta2"
                    variant={ButtonVariantEnum.tertiary}
                    onClick={() => this.callToActionTwo.emit()}
                    size={buttonSize}
                  >
                    {this.callToActionTwoLabel}
                  </z-button>
                )}
              </z-registro-table-empty-box>
            </div>
          </div>
        </Host>
      );
    }
    if (this.empty && !this.hasTableBody) {
      return (
        <Host>
          <div class={tableClass}>
            <slot name="table-header" />
          </div>
          <z-registro-table-empty-box
            message={this.message}
            subtitle={this.subtitle}
          >
            {!!this.callToActionLabel && (
              <z-button
                slot="cta1"
                variant={ButtonVariantEnum.tertiary}
                onClick={() => this.callToAction.emit()}
                size={buttonSize}
              >
                {this.callToActionLabel}
              </z-button>
            )}
            {!!this.callToActionTwoLabel && (
              <z-button
                slot="cta2"
                variant={ButtonVariantEnum.tertiary}
                onClick={() => this.callToActionTwo.emit()}
                size={buttonSize}
              >
                {this.callToActionTwoLabel}
              </z-button>
            )}
          </z-registro-table-empty-box>
        </Host>
      );
    }
    return (
      <Host>
        <div class={tableClass}>
          <slot />
        </div>
        <slot name="sticky-footer" />
      </Host>
    );
  }
}
