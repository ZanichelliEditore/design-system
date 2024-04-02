import { h } from "@stencil/core";
/**
 * @slot top - footer top content
 * @slot bottom - footer bottom content
 */
export class ZMyzCardFooterSections {
    render() {
        return (h("div", { key: 'ad5a5b4ce763cd24f68d02ec7b6e29b2545b94be' }, h("footer", { key: '85252bc9e7ac49dd5250160f31eda28d0cd9b56c' }, h("div", { key: '43fdf6d47836f0c6cddb8e6a2a807837642a46b6', class: "top" }, h("slot", { key: 'ec8b4121c2c3aa2975f19c8ba846689f5a0e0dea', name: "top" })), h("div", { key: 'a76056af1fba864d1dd3dbc7c4c6a109ee1e5e9d', class: "bottom" }, h("slot", { key: 'b1f51897fe2f8bac34c21b409c74003651bc641a', name: "bottom" })))));
    }
    static get is() { return "z-myz-card-footer-sections"; }
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
