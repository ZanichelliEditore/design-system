import { Host, h } from "@stencil/core";
import { ICONS } from "../icons";
export class ZIcon {
    constructor() {
        this.name = undefined;
        this.height = undefined;
        this.width = undefined;
        this.iconid = undefined;
        this.fill = undefined;
    }
    selectPathOrPolygon(iconValue) {
        if (iconValue === null || iconValue === void 0 ? void 0 : iconValue.startsWith("M")) {
            return h("path", { d: ICONS[this.name] });
        }
        return h("polygon", { points: ICONS[this.name] });
    }
    render() {
        return (h(Host, { key: '2b01f04c92ac8e4772036eb52aad46a62d46d35c', "aria-hidden": "true" }, h("svg", { key: '18067d6877c79af11d5af240d030c8f82531cf6b', viewBox: "0 0 1000 1000", width: this.width, height: this.height, id: this.iconid, fill: this.fill ? `var(--${this.fill})` : "" }, this.selectPathOrPolygon(ICONS[this.name]))));
    }
    static get is() { return "z-icon"; }
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
            "name": {
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
                    "text": "icon name"
                },
                "attribute": "name",
                "reflect": false
            },
            "height": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "icon height (optional)"
                },
                "attribute": "height",
                "reflect": false
            },
            "width": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "icon width (optional)"
                },
                "attribute": "width",
                "reflect": false
            },
            "iconid": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "icon id (optional)"
                },
                "attribute": "iconid",
                "reflect": false
            },
            "fill": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "icon fill (optional)"
                },
                "attribute": "fill",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=index.js.map
