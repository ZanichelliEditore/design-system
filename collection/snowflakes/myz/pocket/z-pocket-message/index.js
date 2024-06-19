import { h } from "@stencil/core";
/**
 * @slot  - message body
 * @slot cta - message CTAs
 */
export class ZPocketMessage {
    render() {
        return (h("div", { key: '94fdc25ba4ed0c5f5e84c009b28349a659a35e7d' }, h("z-icon", { key: 'dbfe2f3bde1476afa7b852e3e53f1150477e9992', name: "exclamation-circle" }), h("div", { key: '7391e3e79397acaf1d8ef706549403f33ff4e649', class: "content" }, h("slot", { key: '7a54d609a2d40de9df327b3a73bc9a9e01eddc27' })), h("div", { key: 'dd97a4204d0ab7668b3ef6847b18ae578bb4aeea', class: "cta-wrapper" }, h("slot", { key: '7bdc0e8253113f03976d151baefaf7b8bcbf777f', name: "cta" }))));
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
