import { h } from "@stencil/core";
import { PocketStatus } from "../../../../beans";
/**
 * @slot  - pocket body content
 */
export class ZMessagesPocket {
    constructor() {
        this.pocketid = undefined;
        this.messages = undefined;
        this.status = PocketStatus.PREVIEW;
    }
    handlePocketToggle(e) {
        if (e.detail.id === this.pocketid) {
            this.status = e.detail.status;
        }
    }
    renderHeader() {
        let message;
        let icon;
        switch (this.status) {
            case PocketStatus.PREVIEW:
            case PocketStatus.CLOSED:
                message = (h("span", null, "Messaggi ", h("span", { class: "badge" }, this.messages)));
                icon = "chevron-up";
                break;
            case PocketStatus.OPEN:
                message = h("span", null, "Riduci");
                icon = "chevron-down";
                break;
        }
        return (h("z-pocket-header", { pocketid: this.pocketid }, message, h("z-icon", { name: icon, width: 14, height: 14 })));
    }
    renderBody() {
        return (h("z-pocket-body", { pocketid: this.pocketid }, h("div", { class: "body" }, h("slot", null)), h("div", { class: "gradient" })));
    }
    render() {
        return (h("z-pocket", { key: '2f8a4cab129678f4a14c8fe5605c20098d29427a', pocketid: this.pocketid, status: this.status, class: this.status }, this.renderHeader(), this.renderBody()));
    }
    static get is() { return "z-messages-pocket"; }
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
            "pocketid": {
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
                    "text": "pocket id"
                },
                "attribute": "pocketid",
                "reflect": false
            },
            "messages": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "number of messages"
                },
                "attribute": "messages",
                "reflect": false
            },
            "status": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "PocketStatus",
                    "resolved": "PocketStatus.CLOSED | PocketStatus.OPEN | PocketStatus.PREVIEW",
                    "references": {
                        "PocketStatus": {
                            "location": "import",
                            "path": "../../../../beans",
                            "id": "src/beans/index.tsx::PocketStatus"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "pocket status"
                },
                "attribute": "status",
                "reflect": false,
                "defaultValue": "PocketStatus.PREVIEW"
            }
        };
    }
    static get listeners() {
        return [{
                "name": "pocketToggle",
                "method": "handlePocketToggle",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
