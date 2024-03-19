import { h } from "@stencil/core";
/**
 * @slot  - message body
 * @slot cta - message CTAs
 */
export class ZPocketMessage {
    render() {
        return (h("div", { key: 'fd2ad4b6202ff5ec00783d54f10852f5afead5cc' }, h("z-icon", { key: 'a6872094ff69a350e72992874e641480ef1bd582', name: "exclamation-circle" }), h("div", { key: 'b9c7d36ea2c2f6beed7aaf98f409db7e37eff2d0', class: "content" }, h("slot", { key: '04b72c04be291ffc5690c162ed8bea07251346da' })), h("div", { key: 'b51c6836991f7f66a0e21968cefe81e49fda0043', class: "cta-wrapper" }, h("slot", { key: '944145d6af60175fc717951e1a8b5a03e533c2d8', name: "cta" }))));
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
