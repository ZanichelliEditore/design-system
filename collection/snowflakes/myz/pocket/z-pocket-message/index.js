import { h } from "@stencil/core";
/**
 * @slot  - message body
 * @slot cta - message CTAs
 */
export class ZPocketMessage {
    render() {
        return (h("div", { key: '77c4ac87fc391b13dea88c69e71165692075170e' }, h("z-icon", { key: '12387df9bfe2fb8fa3cc0e5cfc2f1515e8ddf322', name: "exclamation-circle" }), h("div", { key: '4ae85314b4c54d9de77f5cc2e789fcfa2516cfac', class: "content" }, h("slot", { key: '7dcf450d21455d6796faa2cfb1222aab546a94d6' })), h("div", { key: 'a51ae4748bb1c29223d35fb10633e51fc17506ec', class: "cta-wrapper" }, h("slot", { key: '2641720771473f5ce8cd207731273f82810dc428', name: "cta" }))));
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
