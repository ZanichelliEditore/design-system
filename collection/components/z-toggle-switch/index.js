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
        return (h(Host, { key: '1435f2d332c0a6ba1845640836e129eee281f1b0' }, h("input", { key: 'baea7ca82f300316bd418cadfc82718da7dc2f18', id: this.htmlid, type: "checkbox", checked: this.checked, disabled: this.disabled, onChange: this.handleClick.bind(this) }), h("label", { key: '510a2f196cd5f67af2602c5c6e948e2f63395f6f', htmlFor: this.htmlid, class: {
                [this.labelPosition]: true,
                disabled: this.disabled,
            } }, h("span", { key: 'e32ef84026463fb9a99bcb303d0097ffed6ee994' }, h("slot", { key: '07344703d351893b5ab39e4e4a617e4038f1042a' })), h("span", { key: 'cec720a047a8fbc016048e9139639e04233f8f24', class: {
                container: true,
                disabled: this.disabled,
                checked: this.checked,
            } }, h("span", { key: '4639384b98d6de8009678681d71d1097b2c687e6', class: "circle" }, this.checked && (h("z-icon", { key: 'd34f45d60cece7a6969be1a03ad51be4ab0b0f04', width: 12, height: 12, name: "checkmark" })))))));
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
