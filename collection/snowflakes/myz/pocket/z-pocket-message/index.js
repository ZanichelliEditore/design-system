import { h } from "@stencil/core";
/**
 * @slot  - message body
 * @slot cta - message CTAs
 */
export class ZPocketMessage {
    render() {
        return (h("div", { key: '843ee900479a31fb894034f112cc0228b96777db' }, h("z-icon", { key: 'fd7328544da14a6f0291267e9b5b0f13eebc6d78', name: "exclamation-circle" }), h("div", { key: '1612d02ebeb6a3181d632350af14d847883cdce4', class: "content" }, h("slot", { key: 'f7256dfd56028f2dc9e3c42c324c210041ed50ad' })), h("div", { key: '9b5db0c5c46967ba4ae2091fac0ab3e4ec3718ff', class: "cta-wrapper" }, h("slot", { key: '9a23bdb386bd1c10d311c41226a430e2a61b9d45', name: "cta" }))));
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
