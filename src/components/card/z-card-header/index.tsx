import { Component, Prop, State, h } from "@stencil/core";
import { LicenseTypeEnum } from "../../../beans/index";

/**
 * @slot icon - card header icon slot
 */
@Component({
  tag: "z-card-header",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardHeader {
  /** volume title */
  @Prop() titolo: string;
  /** faded status */
  @Prop() faded: boolean;
  /** card graphic variant (optional) */
  @Prop() cardtype?: LicenseTypeEnum;

  @State() allowTooltip: boolean = false;

  private ellipsis?: HTMLElement;

  getTitle(): string {
    return this.allowTooltip ? this.titolo : "";
  }

  componentDidLoad() {
    if (this.elementHasEllipsis()) this.allowTooltip = true;
  }

  elementHasEllipsis(): boolean {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }

  retrieveClass() {
    return {
      real: this.cardtype === LicenseTypeEnum.real,
      trial: this.cardtype === LicenseTypeEnum.trial,
      faded: this.faded
    };
  }

  render() {
    return (
      <header class={this.retrieveClass()}>
        <h2
          ref={el => (this.ellipsis = el as HTMLElement)}
          title={this.getTitle()}
        >
          {this.titolo}
        </h2>
        <slot name="icon" />
      </header>
    );
  }
}
