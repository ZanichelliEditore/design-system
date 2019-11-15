import { Component, Prop, h } from "@stencil/core";
import {LicenseTypeEnum} from '../../beans/index';

@Component({
  tag: "z-card-header",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardHeader {
  @Prop() titolo: string;
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
      <header class={this.retrieveClass()}>
        <h2>{this.titolo}</h2>
        <slot name="icon" />
      </header>
    );
  }
}
