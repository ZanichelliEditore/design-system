import { h } from "@stencil/core";
/**
 * @slot alert - card alert slot
 * @slot cover - book cover slot
 */
export class ZMyzCardBody {
    render() {
        return (h("div", { key: '12386f13964444007e6bef9219e791d01f131d9a' }, h("slot", { key: '10378c336d6a6c70dea11375397fd734dc570f53', name: "alert" }), h("slot", { key: '7dfff15df0a1a32f63ac329a4be3b11d7d4554f6', name: "cover" })));
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
