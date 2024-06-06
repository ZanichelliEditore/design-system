import { h } from "@stencil/core";
/**
 * @slot top - footer top content
 * @slot bottom - footer bottom content
 */
export class ZMyzCardFooterSections {
    render() {
        return (h("div", { key: 'e41dd2e7a9bed167d3901b276858c4dfc94c9a69' }, h("footer", { key: '522e3b1ea9c7ba56184a9140b6edbaefbf20a17d' }, h("div", { key: '5329ba46f5f04f20769781b0ed9400237d726952', class: "top" }, h("slot", { key: 'ea36f7398f980f255e396b3044d00ff77f42cad0', name: "top" })), h("div", { key: '726628df2d0df9c25c7103e7b56afe69a4ed8c2d', class: "bottom" }, h("slot", { key: '645f27ef4a5bfd15a021737512b8de2970f18b84', name: "bottom" })))));
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
