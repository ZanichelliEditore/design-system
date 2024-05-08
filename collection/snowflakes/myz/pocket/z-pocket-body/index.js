import { h } from "@stencil/core";
import { PocketStatus } from "../../../../beans";
/**
 * @slot  - pocket body content
 */
export class ZPocketBody {
    constructor() {
        this.pocketid = undefined;
        this.status = PocketStatus.PREVIEW;
    }
    handlePocketToggle(e) {
        if (e.detail.id && e.detail.id === this.pocketid) {
            this.status = e.detail.status;
        }
    }
    render() {
        return (h("main", { key: 'f017441cd9ae7d12e0bea9ee61f6ebae5809ade7', class: this.status }, h("slot", { key: '02d262a95a8d41b1e303ac9d0efbd4218e8b28c9' })));
    }
    static get is() { return "z-pocket-body"; }
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
