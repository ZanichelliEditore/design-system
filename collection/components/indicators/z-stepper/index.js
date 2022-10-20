import { h } from "@stencil/core";
/**
 * @slot - z-stepper-item
 */
export class ZStepper {
  render() {
    return h("slot", null);
  }
  static get is() { return "z-stepper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
}
