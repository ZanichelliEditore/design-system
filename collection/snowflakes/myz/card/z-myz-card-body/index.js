import { h } from "@stencil/core";
/**
 * @slot alert - card alert slot
 * @slot cover - book cover slot
 */
export class ZMyzCardBody {
    render() {
        return (h("div", { key: 'bc6cdeae214e8d2a678b06affa36c464edc8f7ea' }, h("slot", { key: '6891036c0f1a98722edc901ea45042c0451831a3', name: "alert" }), h("slot", { key: '50357c351f505338ffb08cd3b0df6eb6619745e7', name: "cover" })));
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
