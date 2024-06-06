import { h } from "@stencil/core";
/**
 * @slot alert - card alert slot
 * @slot cover - book cover slot
 */
export class ZMyzCardBody {
    render() {
        return (h("div", { key: 'cf1d5f3496d5d26fc8af29aaadb102fb6d05fc01' }, h("slot", { key: 'c0e3125ceecc33606e9644c514643de2ff59be1b', name: "alert" }), h("slot", { key: 'fbac52128264cd4a5637a7acbe3f57670efb5d50', name: "cover" })));
    }
    static get is() { return "z-myz-card-body"; }
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
}
//# sourceMappingURL=index.js.map
