import { h } from "@stencil/core";
/**
 * @slot  - message body
 * @slot cta - message CTAs
 */
export class ZPocketMessage {
    render() {
        return (h("div", { key: 'fc7dd1f124a7891d06714e8e246fb9b7b9e51036' }, h("z-icon", { key: 'c1889b328efb70835d3049cd96c7893baf6fa0c9', name: "exclamation-circle" }), h("div", { key: '2d7adc5063f6207ef8ff0ca148fd8b77c1d9096d', class: "content" }, h("slot", { key: 'b16cc5a7086302b73baa229ef37f3df14bae4676' })), h("div", { key: '91e56d2ae0cf57cc0c6d2898fb05b3fc83b87f99', class: "cta-wrapper" }, h("slot", { key: 'c9e114961d136434110f37614ac725a59a54c8e3', name: "cta" }))));
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
