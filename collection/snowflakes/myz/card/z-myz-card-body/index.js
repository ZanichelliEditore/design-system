import { h } from "@stencil/core";
/**
 * @slot alert - card alert slot
 * @slot cover - book cover slot
 */
export class ZMyzCardBody {
    render() {
        return (h("div", { key: '29910997b3d57c8ed4694ae81e3f8e62b86908df' }, h("slot", { key: 'da76b95d6eb9c8d36bb6a09f79d277dd5f6924e4', name: "alert" }), h("slot", { key: 'cc694615936aa77e99090e627eb4623c6feac31d', name: "cover" })));
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
