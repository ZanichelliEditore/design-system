import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  h,
} from "@stencil/core";
import { ButtonSizeEnum, ButtonVariantEnum } from "../../../beans";
import { mobileBreakpoint } from "../../../constants/breakpoints";

/**
 * @slot - table elements
 * @slot sticky-footer - set the content of the sticky footer
 */

@Component({
  assetsDirs: ["assets"],
  styleUrl: "styles.css",
  tag: "z-table",
})
export class ZTable {
  @Element() host: HTMLElement;

  /** Number of lines of element */
  @Prop({ reflect: true }) lines?: number;

  /** Error message */
  @Prop() errorMessage?: string =
    "Siamo spiacenti, non siamo riusciti a caricare il contenuto richiesto";

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
    "Siamo spiacenti, al momento non sono presenti dati da visualizzare";

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

    const tableBody = this.host.querySelector('[slot="table-body"]');
    this.hasTableBody = !!tableBody?.children?.length;

    if (!!tableBody && !this.hasTableBody) {
      tableBody.remove();
    }
  }

  componentWillRender() {
    this.host.setAttribute("role", "table");
  }

  renderError(tableClass) {
    const minHeight = this.lines ? `calc(40px * ${this.lines})` : "auto";
    return (
      <Host>
        <div class={tableClass}>
          <slot name="table-header" />
        </div>
        <z-table-error>
          <div class="error-content" style={{ minHeight }}>
            <slot name="error-image" />
            <div class="text">
              <z-body class="error-message" level={3} variant="semibold">
                {this.errorMessage}
              </z-body>
              <slot name="error-action" />
            </div>
          </div>
        </z-table-error>
      </Host>
    );
  }

  renderEmpty(tableClass) {
    const buttonSize = this.isMobile
      ? ButtonSizeEnum.small
      : ButtonSizeEnum.big;
    const tableContentClass = `${!!this.hasTableBody ? "table-content" : ""}`;
    if (this.hasTableBody) {
      return (
        <Host>
          <div class={tableClass}>
            <slot name="table-header" />
            <div class={tableContentClass}>
              <slot name="table-body" />
              <z-table-empty-box
                class={this.bordered && "bordered"}
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
              </z-table-empty-box>
            </div>
          </div>
        </Host>
      );
    }

    return (
      <Host>
        <div class={tableClass}>
          <slot name="table-header" />
        </div>
        <z-table-empty-box
          class={this.bordered && "bordered"}
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
        </z-table-empty-box>
      </Host>
    );
  }

  render() {
    const tableClass = `table ${this.empty ? "table-empty" : ""} ${
      this.bordered ? "table-bordered" : ""
    }
    ${this.columnSticky ? "table-column-sticky" : ""}
    ${this.headerSticky ? "table-header-sticky" : ""}`;

    if (this.error) {
      return this.renderError(tableClass);
    }
    if (this.empty) {
      return this.renderEmpty(tableClass);
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
