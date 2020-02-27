import { Component, Prop, h } from "@stencil/core";
import { LicenseTypeEnum } from "../../beans/index";

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

  retrieveClass() {
    let elemClasses = "";

    if (this.faded) elemClasses += "faded ";
    if (this.cardtype === LicenseTypeEnum.real) elemClasses += "real";

    return elemClasses;
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
