import { h } from "@stencil/core";
/**
 * @slot top - footer top content
 * @slot bottom - footer bottom content
 */
export class ZMyzCardFooterSections {
    render() {
        return (h("div", { key: '460ccb7066c598d7712f468b8b77850190fd6088' }, h("footer", { key: '14789b182cd02636149dd501d8963e23bf9893ff' }, h("div", { key: 'f618c2e4c24c9488aa6090c6629d846c72b9868c', class: "top" }, h("slot", { key: '9fdbc5aeb537308c6a0a1197de2490749d8710a8', name: "top" })), h("div", { key: '900ff46313ca3d71e7e501f6c7d9e531ec41cdfb', class: "bottom" }, h("slot", { key: 'abac3671bea6c55bb0e18d6c05899e4ae9be3895', name: "bottom" })))));
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
