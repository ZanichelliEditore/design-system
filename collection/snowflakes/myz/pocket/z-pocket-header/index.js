import { h } from "@stencil/core";
import Hammer from "hammerjs";
import { handleKeyboardSubmit } from "../../../../utils/utils";
/**
 * @slot  - pocket header content
 */
export class ZPocketHeader {
    emitPocketHeaderClick() {
        this.pocketHeaderClick.emit({ id: this.pocketid });
    }
    emitPocketHeaderPan(direction) {
        this.pocketHeaderPan.emit({ id: this.pocketid, direction });
    }
    constructor() {
        this.pocketid = undefined;
        this.emitPocketHeaderClick = this.emitPocketHeaderClick.bind(this);
    }
    componentDidLoad() {
        // INFO: swipe handling
        const mc = new Hammer(this.swipeWrap);
        mc.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });
        mc.on("panup", () => this.emitPocketHeaderPan("up"));
        mc.on("pandown", () => this.emitPocketHeaderPan("down"));
    }
    render() {
        return (h("header", { key: 'e7f1ed78dd4b33c701d5bd0f648c9401d8a38313', role: "button", tabindex: 0, onClick: () => this.emitPocketHeaderClick(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitPocketHeaderClick), ref: (el) => (this.swipeWrap = el) }, h("slot", { key: '1d8bb012ac6dcdf3337d0c70df59b3b098e9de56' })));
    }
    static get is() { return "z-pocket-header"; }
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
            }
        };
    }
    static get events() {
        return [{
                "method": "pocketHeaderClick",
                "name": "pocketHeaderClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on pocket header click"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "pocketHeaderPan",
                "name": "pocketHeaderPan",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on pocket header pan"
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
