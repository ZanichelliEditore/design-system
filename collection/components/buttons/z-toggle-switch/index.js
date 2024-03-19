import { h, Host } from "@stencil/core";
import { randomId } from "../../../utils/utils";
import { LabelPosition } from "../../../beans";
export class ZToggleSwitch {
    constructor() {
        this.disabled = false;
        this.labelPosition = LabelPosition.LEFT;
        this.checked = false;
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
        return (h(Host, { key: '1fcac74eda8db17b3d535d2138ee9637ef7779b5' }, h("input", { key: '90d27860c20def96928eb87c9df301d9df1226c0', id: this.htmlid, type: "checkbox", checked: this.checked, disabled: this.disabled, onChange: this.handleClick.bind(this) }), h("label", { key: 'be5a0eec29f493ac91c2fafbba54afcfa8f50f50', htmlFor: this.htmlid, class: {
                [this.labelPosition]: true,
                disabled: this.disabled,
            } }, h("span", { key: 'b336633b42383d0aef29ec775e3b18aca42bf096' }, h("slot", { key: '9f8d563f0bae08144106f32c1018cbd40b6b5bc6' })), h("span", { key: '176481146a6df0f575fc364fabd2dc2ea1b00b54', class: {
                container: true,
                disabled: this.disabled,
                checked: this.checked,
            } }, h("span", { key: '8a1227658fb1fdc68523a3947c7b8f55b63baa89', class: "circle" }, this.checked && (h("z-icon", { width: 12, height: 12, name: "checkmark" })))))));
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
                    "references": {
                        "LabelPosition": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::LabelPosition"
                        }
                    }
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
//# sourceMappingURL=index.js.map
