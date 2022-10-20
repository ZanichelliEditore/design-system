import { h, Host } from "@stencil/core";
import { randomId } from "../../../utils/utils";
import { LabelPosition } from "../../../beans";
export class ZToggleSwitch {
  constructor() {
    /** Disabled flag */
    this.disabled = false;
    /** Label position */
    this.labelPosition = LabelPosition.LEFT;
    /** Checked state */
    this.checked = false;
    /** HTML id attribute to set to the internal checkbox */
    this.htmlid = `toggle-switch-id-${randomId()}`;
  }
  emitToggleClick() {
    this.toggleClick.emit({
      id: this.htmlid,
      checked: this.checked,
    });
  }
  handleClick(ev) {
    if (this.disabled) {
      return;
    }
    this.checked = ev.target.checked;
    this.emitToggleClick();
  }
  render() {
    return (h(Host, null, h("input", { id: this.htmlid, type: "checkbox", checked: this.checked, disabled: this.disabled, onChange: this.handleClick.bind(this) }), h("label", { htmlFor: this.htmlid, class: {
        [this.labelPosition]: true,
        disabled: this.disabled,
      } }, h("span", null, h("slot", null)), h("span", { class: {
        container: true,
        disabled: this.disabled,
        checked: this.checked,
      } }, h("span", { class: "circle" }, this.checked && (h("z-icon", { width: 12, height: 12, name: "checkmark" })))))));
  }
  static get is() { return "z-toggle-switch"; }
  static get encapsulation() { return "scoped"; }
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
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Disabled flag"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "labelPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "LabelPosition",
          "resolved": "LabelPosition.LEFT | LabelPosition.RIGHT",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Label position"
        },
        "attribute": "label-position",
        "reflect": true,
        "defaultValue": "LabelPosition.LEFT"
      },
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Checked state"
        },
        "attribute": "checked",
        "reflect": false,
        "defaultValue": "false"
      },
      "htmlid": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "HTML id attribute to set to the internal checkbox"
        },
        "attribute": "htmlid",
        "reflect": false,
        "defaultValue": "`toggle-switch-id-${randomId()}`"
      }
    };
  }
  static get events() {
    return [{
        "method": "toggleClick",
        "name": "toggleClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Toggle click event"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
