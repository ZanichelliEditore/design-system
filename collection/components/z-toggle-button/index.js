import { h } from "@stencil/core";
export class ZToggleButton {
    constructor() {
        this.label = undefined;
        this.isdisabled = false;
        this.avoidclick = undefined;
        this.opened = false;
        this.ariaLabel = "";
    }
    emitToggleClick() {
        if (this.isdisabled) {
            return;
        }
        this.opened = !this.opened;
        this.toggleClick.emit(this.opened);
    }
    render() {
        return (h("button", { key: 'a0335db670898e98b232857bd9f878f9f6bceaa0', tabindex: this.avoidclick ? "-1" : "0", class: {
                "isopen": this.opened,
                "avoid-clicks": this.avoidclick,
            }, disabled: this.isdisabled, "aria-expanded": this.opened ? "true" : "false", "aria-label": this.ariaLabel, onClick: () => this.emitToggleClick() }, h("z-icon", { key: '353df156fc85eb6824152ec2a5578426263627b7', name: this.opened ? "chevron-down" : "chevron-up", width: 16, height: 16 }), this.label));
    }
    static get is() { return "z-toggle-button"; }
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
            "label": {
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
                    "text": "label text"
                },
                "attribute": "label",
                "reflect": false
            },
            "isdisabled": {
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
                    "text": "disabled status flag (optional)"
                },
                "attribute": "isdisabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "avoidclick": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "avoidclick status flag"
                },
                "attribute": "avoidclick",
                "reflect": false
            },
            "opened": {
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
                    "text": "open by default (optional)"
                },
                "attribute": "opened",
                "reflect": false,
                "defaultValue": "false"
            },
            "ariaLabel": {
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
                    "text": "aria-label for the button"
                },
                "attribute": "aria-label",
                "reflect": false,
                "defaultValue": "\"\""
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
                    "text": "emitted on toggle button click, returns isOpen"
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
