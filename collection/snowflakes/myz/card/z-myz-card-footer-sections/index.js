import { h } from "@stencil/core";
/**
 * @slot top - footer top content
 * @slot bottom - footer bottom content
 */
export class ZMyzCardFooterSections {
    render() {
        return (h("div", { key: 'cd0ca2ae69e18cb2d8858619fa7271bab9ec0572' }, h("footer", { key: 'c223fb26d9e4a508727d31ed098260137c29c810' }, h("div", { key: '78f08bb02791f86423ec79d7d51f75fca04c48b3', class: "top" }, h("slot", { key: 'f0868ee663b0e051d2b1f9fdc3b46b2e3bf0764b', name: "top" })), h("div", { key: 'b94b1018a936912658f5cdc803d813740afbefd2', class: "bottom" }, h("slot", { key: 'c46cadb51728ab6fb3337794814abc4c2bf18434', name: "bottom" })))));
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
