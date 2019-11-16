import { Component, h, Prop } from "@stencil/core";
import {LicenseTypeEnum} from '../../beans/index';

@Component({
  tag: "z-card",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardComponent {

  @Prop() faded: boolean;
  @Prop() cardtype: LicenseTypeEnum;


  retrieveClass() {
    let elemClasses = '';

    if(this.faded) elemClasses += 'faded ';

    switch(this.cardtype) {
      case LicenseTypeEnum.real:
        elemClasses += 'real-card';
      break;
      case LicenseTypeEnum.virtual:
        elemClasses += 'virtual-card';
      break;
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
