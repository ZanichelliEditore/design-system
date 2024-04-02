import { h } from "@stencil/core";
/**
 * @slot  - message body
 * @slot cta - message CTAs
 */
export class ZPocketMessage {
    render() {
        return (h("div", { key: 'af350f4364cdc056efb2bfb7573f32aff6e1fb74' }, h("z-icon", { key: '978d77e166c93ff7dc66ce4488b9de335ad222f1', name: "exclamation-circle" }), h("div", { key: '8b2b15f096af975a001abc24f13145c19a93df10', class: "content" }, h("slot", { key: 'dc4a2c27b657fa13e1ed27b095c31903f481dfb6' })), h("div", { key: '73f8485447c46858f416f8cf10c332808ee8a129', class: "cta-wrapper" }, h("slot", { key: '9b36b26758f23f527da634df4a115d0db6ca8b51', name: "cta" }))));
    }
    static get is() { return "z-pocket-message"; }
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
