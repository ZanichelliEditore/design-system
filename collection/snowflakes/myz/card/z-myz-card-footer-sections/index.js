import { h } from "@stencil/core";
/**
 * @slot top - footer top content
 * @slot bottom - footer bottom content
 */
export class ZMyzCardFooterSections {
    render() {
        return (h("div", { key: '62c6d04f17701a66638885f241c6cee08411eb45' }, h("footer", { key: '935193a38295ec3b700b3c30a32aca8ed310b3ad' }, h("div", { key: '8c7af9e6f32e4353942a7831dea7f9875455e868', class: "top" }, h("slot", { key: '3a93460244816042d5a46a37909fe150b7dad333', name: "top" })), h("div", { key: '3bc02862cb0fcebbc1a763ba6f40e909cf39dbf1', class: "bottom" }, h("slot", { key: '600288fe385b411013722ca70809a8f841236563', name: "bottom" })))));
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
