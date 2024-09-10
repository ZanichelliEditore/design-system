import { Host, h } from "@stencil/core";
import { LabelPosition } from "../../beans";
import { randomId } from "../../utils/utils";
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
        return (h(Host, { key: 'cd90ad41b289f192e485c0cce90ae2a8057ddd7d' }, h("input", { key: '5cc5e59f8cc0cc0548b072e41149cf7dc31bbcd8', id: this.htmlid, type: "checkbox", checked: this.checked, disabled: this.disabled, onChange: this.handleClick.bind(this) }), h("label", { key: '9774cc39f7ebe6bd02c5ce0e05d1b53075f4e426', htmlFor: this.htmlid, class: {
                [this.labelPosition]: true,
                disabled: this.disabled,
            } }, h("span", { key: '074941585b8a5862f04bd2d404ab74c86bcaa250' }, h("slot", { key: '7fe6486df9479e76a7783646aed3e620f7f1d0f2' })), h("span", { key: 'd4bf4b3febdab1bf8e88c12e1c7aa421b020997c', class: {
                container: true,
                disabled: this.disabled,
                checked: this.checked,
            } }, h("span", { key: 'c46c06ff10a35060945b9298a551cf66508a5450', class: "circle" }, this.checked && (h("z-icon", { key: '7ed667dc510d42e3e001ad8cb82b5c5f9d012583', width: 12, height: 12, name: "checkmark" })))))));
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
                            "path": "../../beans",
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
