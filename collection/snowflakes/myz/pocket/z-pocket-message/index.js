import { h } from "@stencil/core";
/**
 * @slot  - message body
 * @slot cta - message CTAs
 */
export class ZPocketMessage {
    render() {
        return (h("div", { key: 'db10fcdf23fbd0da7833e01f8d72a6302f6cadba' }, h("z-icon", { key: '7c241ba1a147f71db15162c5ee6d84738536430e', name: "exclamation-circle" }), h("div", { key: '7ec8936f539f19047c644be7b9ec1dd985d3d42e', class: "content" }, h("slot", { key: 'a6cd9ab932dcac28058640df1a08da9f174e1a2b' })), h("div", { key: '376e912ec9d49a7148b620b54ce26d9e8a278f1f', class: "cta-wrapper" }, h("slot", { key: '3ccbb7a2cd41d211ab76734fb73e7b23aa100d9b', name: "cta" }))));
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
