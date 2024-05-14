import { h } from "@stencil/core";
/**
 * @slot top - footer top content
 * @slot bottom - footer bottom content
 */
export class ZMyzCardFooterSections {
    render() {
        return (h("div", { key: '4ba6b97d65b6e6356411680b1b0d954c3b2ef2a6' }, h("footer", { key: '9b29ba240c9420c8aa6c3757f99e60e0806e403e' }, h("div", { key: '13d5c349f14a9de7b172ec1c4e45784eae1ab845', class: "top" }, h("slot", { key: '74af633d2e01f97b9487e10baaa44e2b6aebdaed', name: "top" })), h("div", { key: 'c2adb665b29ce04cea0f6d8d4f6dc76a7c801582', class: "bottom" }, h("slot", { key: 'fb5967cd696d33d1dc46aa75d3f65526254f8330', name: "bottom" })))));
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
