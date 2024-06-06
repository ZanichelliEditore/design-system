import { h } from "@stencil/core";
import { handleKeyboardSubmit } from "../../../../utils/utils";
import Hammer from "hammerjs";
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
        return (h("header", { key: 'dbf411ce43b511c02c768d79c20eb95991b3555d', role: "button", tabindex: 0, onClick: () => this.emitPocketHeaderClick(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitPocketHeaderClick), ref: (el) => (this.swipeWrap = el) }, h("slot", { key: '30b0c595f0c4e503dbe8e144c3805be2a8d4aed5' })));
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
