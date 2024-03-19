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
        return (h("main", { key: 'a21e5307e4af8970761af2f04d1344997e171b48', class: this.status }, h("slot", { key: 'c6b38fb56dbca9e8cdb03acfb601f32822312fee' })));
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
