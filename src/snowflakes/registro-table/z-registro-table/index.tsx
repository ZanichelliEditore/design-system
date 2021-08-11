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

  /** Sets first column sticky */
  @Prop() columnSticky?: boolean = false;

  /** Sets header sticky */
  @Prop() headerSticky?: boolean = false;

  /** Sets empty table */
  @Prop() empty?: boolean = false;

  /** Sets call to action label */
  @Prop() callToActionLabel?: string;

  /** Sets call to action label */
  @Prop() callToActionTwoLabel?: string;

  /** Handle mobile */
  @State() isMobile: boolean;

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
  }

  componentWillRender() {
    this.host.setAttribute("role", "table");
  }

  render() {
    if (this.empty) {
      return (
        <Host>
          <div
            class={`table table-empty ${this.bordered ? "table-bordered" : ""}
            ${this.columnSticky ? "table-column-sticky" : ""}
            ${this.headerSticky ? "table-header-sticky" : ""}`}
          >
            <slot />
          </div>
          <z-registro-table-empty-box
            message={
              "Siamo spicenti, al momento non sono presenti dati da visualizzare"
            }
            subtitle={"Eventuale testo"}
          >
            {this.callToActionLabel !== "" && (
              <z-button
                slot="cta1"
                variant={ButtonVariantEnum.tertiary}
                onClick={() => this.callToAction.emit()}
                size={this.isMobile ? ButtonSizeEnum.small : ButtonSizeEnum.big}
              >
                {this.callToActionLabel}
              </z-button>
            )}
            {this.callToActionTwoLabel !== "" && (
              <z-button
                slot="cta2"
                variant={ButtonVariantEnum.tertiary}
                onClick={() => this.callToActionTwo.emit()}
                size={this.isMobile ? ButtonSizeEnum.small : ButtonSizeEnum.big}
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
        <div
          class={`table ${this.bordered ? "table-bordered" : ""} 
            ${this.columnSticky ? "table-column-sticky" : ""} 
            ${this.headerSticky ? "table-header-sticky" : ""}`}
        >
          <slot />
        </div>
        <slot name="sticky-footer" />
      </Host>
    );
  }
}
