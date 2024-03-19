import { h } from "@stencil/core";
/**
 * @slot alert - card alert slot
 * @slot cover - book cover slot
 */
export class ZMyzCardBody {
    render() {
        return (h("div", { key: '445a0d9463e21e7e51df000bbd32b892d16db6f7' }, h("slot", { key: 'aff7823ed27e2055d2803a1a55a0be35cfbcebf5', name: "alert" }), h("slot", { key: '0f435dc867e63caadc313043006a97156ebe2dc3', name: "cover" })));
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
