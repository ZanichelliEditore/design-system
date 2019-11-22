import { Component, Prop, h } from "@stencil/core";
import { LicenseTypeEnum } from "../../beans/index";

@Component({
  tag: "z-card-header",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardHeader {
  @Prop() titolo: string;
  @Prop() faded: boolean;
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
