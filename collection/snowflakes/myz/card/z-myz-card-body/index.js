import { h } from "@stencil/core";
/**
 * @slot alert - card alert slot
 * @slot cover - book cover slot
 */
export class ZMyzCardBody {
    render() {
        return (h("div", { key: 'dccc73da3128968555dc65848994a4f11ee6cea4' }, h("slot", { key: 'bc8948b5bd03b6c49db50a8aa0d46b1078ca328e', name: "alert" }), h("slot", { key: '747327ca24dba0f35ec49d1f85600a5eada44c9e', name: "cover" })));
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
