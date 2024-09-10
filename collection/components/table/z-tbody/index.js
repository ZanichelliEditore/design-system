import { Host, h } from "@stencil/core";
/**
 * ZTbody component.
 * @slot - ZTbody content (`z-tr`).
 */
export class ZTbody {
    render() {
        return (h(Host, { key: 'f3e13d724ae83c0117eafa2bd141a1b9319f0331', role: "rowgroup" }, h("slot", { key: 'f84d2b79230cb6b8305c0b01f4a48f8811634421' })));
    }
    static get is() { return "z-tbody"; }
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
