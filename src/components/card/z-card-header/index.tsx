import { Component, Prop, h } from "@stencil/core";
import { LicenseTypeEnum } from "../../../beans/index";

/**
 * @slot icon - card header icon slot
 */
@Component({
  tag: "z-card-header",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZCardHeader {
  /** volume title */
  @Prop() titolo: string;
  /** faded status */
  @Prop() faded: boolean;
  /** card graphic variant (optional) */
  @Prop() cardtype?: LicenseTypeEnum;

  retrieveClass() {
    return {
      real: this.cardtype === LicenseTypeEnum.real,
      trial: this.cardtype === LicenseTypeEnum.trial,
      faded: this.faded,
    };
  }

  render() {
    return (
      <header class={this.retrieveClass()}>
        <h2>{this.titolo}</h2>
        <slot name="icon" />
      </header>
    );
  }
}
