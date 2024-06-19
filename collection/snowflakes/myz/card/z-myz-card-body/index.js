import { h } from "@stencil/core";
/**
 * @slot alert - card alert slot
 * @slot cover - book cover slot
 */
export class ZMyzCardBody {
    render() {
        return (h("div", { key: '6eaaf5ff0351e8844d3aa616e473712dafcff7fd' }, h("slot", { key: '2984020a0568593cf9dd47aac83c4890c53d7460', name: "alert" }), h("slot", { key: '85e70e9dcd8068d00bdb40e71acaffae88326225', name: "cover" })));
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
