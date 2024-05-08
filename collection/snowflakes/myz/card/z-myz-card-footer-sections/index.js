import { h } from "@stencil/core";
/**
 * @slot top - footer top content
 * @slot bottom - footer bottom content
 */
export class ZMyzCardFooterSections {
    render() {
        return (h("div", { key: 'a293f04dca9996921d120faad7a7338afdab0205' }, h("footer", { key: 'e7fc7b09f264943f559723900a225f6c5201b9d1' }, h("div", { key: '782863c61b3b92c3735db24a3f2ec66ee195e72b', class: "top" }, h("slot", { key: '940eae81a4f44cf95f6f2175f91e1b734dd7bc9f', name: "top" })), h("div", { key: 'eb385964446becb65d044b5143ee7bc534f9b16b', class: "bottom" }, h("slot", { key: '2c3be22878583359845307dd704d102dc006fc97', name: "bottom" })))));
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
