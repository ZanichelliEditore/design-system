import { Component, h, Prop } from "@stencil/core";
import { LicenseTypeEnum } from "../../beans/index";

@Component({
  tag: "z-card",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardComponent {
  @Prop() faded: boolean;
  @Prop() cardtype?: LicenseTypeEnum;
  @Prop() ispressed: boolean = false;
  @Prop() ishighlighted: boolean = false;

  retrieveClass() {
    let elemClasses = "";

    if (this.cardtype === LicenseTypeEnum.real) elemClasses += "real";

    if (this.faded) {
      elemClasses += " faded";
    } else if (this.ispressed) {
      elemClasses += " pressed";
    } else if (this.ishighlighted) {
      elemClasses += " highlighted";
    }

    return elemClasses;
  }

  render() {
    return (
      <div class={this.retrieveClass()} tabindex="0">
        <slot />
      </div>
    );
  }
}
