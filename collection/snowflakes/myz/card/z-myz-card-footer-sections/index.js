import { h } from "@stencil/core";
/**
 * @slot top - footer top content
 * @slot bottom - footer bottom content
 */
export class ZMyzCardFooterSections {
    render() {
        return (h("div", { key: 'c293773e2f737912b63345f9524e03a374f0c536' }, h("footer", { key: '1a8148b580eef438c1a68d5a134bf3b224846946' }, h("div", { key: '49863a18b930dcd3edb2a049c9e77c858be1dc76', class: "top" }, h("slot", { key: '00bdadaa655b1018e42ed72fefd4d21b1a0529fb', name: "top" })), h("div", { key: '24e4dfb5e2eaac5ef6c61dd2303e9cd9e8832b68', class: "bottom" }, h("slot", { key: 'b8791e5c065a9ce4b4701444c137295123f99d3d', name: "bottom" })))));
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
