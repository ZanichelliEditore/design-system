import { h } from "@stencil/core";
/**
 * @slot alert - card alert slot
 * @slot cover - book cover slot
 */
export class ZMyzCardBody {
    render() {
        return (h("div", { key: '7d193913aaee1ce18633cb39f322bde63dd0f636' }, h("slot", { key: '59b557d02f579f35c15ac0ac03a084a3f43a00c0', name: "alert" }), h("slot", { key: 'bcd8832a6c010f6dbc6a6d5579efe7801ff6a60c', name: "cover" })));
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
