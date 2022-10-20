import { h } from "@stencil/core";
import { ThemeVariant } from "../../../beans";
export class ZAppSwitcher {
  constructor() {
    /** theme variant, default 'dark' */
    this.theme = ThemeVariant.DARK;
    this.isopen = false;
    this.emitAppButtonClick = this.emitAppButtonClick.bind(this);
  }
  emitAppButtonClick() {
    this.isopen = !this.isopen;
    this.appButtonClick.emit({ isopen: this.isopen });
  }
  render() {
    return (h("button", { title: "app-switcher", onClick: () => this.emitAppButtonClick() }, h("z-icon", { name: "app-switcher", class: this.theme })));
  }
  static get is() { return "z-app-switcher"; }
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
  static get properties() {
    return {
      "theme": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ThemeVariant",
          "resolved": "ThemeVariant.DARK | ThemeVariant.LIGHT",
          "references": {
            "ThemeVariant": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "theme variant, default 'dark'"
        },
        "attribute": "theme",
        "reflect": false,
        "defaultValue": "ThemeVariant.DARK"
      }
    };
  }
  static get states() {
    return {
      "isopen": {}
    };
  }
  static get events() {
    return [{
        "method": "appButtonClick",
        "name": "appButtonClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "emitted on app button icon click, returns open/closed state"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
