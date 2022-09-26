import {Component, h, Prop} from "@stencil/core";
import {LicenseTypeEnum} from "../../../../beans/index";

/**
 * @slot  - generic card slot
 */
@Component({
  tag: "z-myz-card",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzCardComponent {
  /** faded status */
  @Prop()
  faded: boolean;

  /** graphic variant (optional) */
  @Prop()
  cardtype?: LicenseTypeEnum;

  /** pressed status */
  @Prop()
  ispressed = false;

  /** highlighted status */
  @Prop()
  ishighlighted = false;

  private retrieveClass(): string {
    let elemClasses = "";

    if (this.cardtype === LicenseTypeEnum.REAL) {
      elemClasses += "real";
    } else if (this.cardtype === LicenseTypeEnum.TRIAL) {
      elemClasses += "trial";
    } else if (this.cardtype === LicenseTypeEnum.TEMP) {
      elemClasses += "temp";
    }

    if (this.faded) {
      elemClasses += " faded";
    } else if (this.ispressed) {
      elemClasses += " pressed";
    } else if (this.ishighlighted) {
      elemClasses += " highlighted";
    }

    return elemClasses;
  }

  render(): HTMLDivElement {
    return (
      <div
        class={this.retrieveClass()}
        tabindex="0"
      >
        <slot />
      </div>
    );
  }
}
