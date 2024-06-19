import { Host, h } from "@stencil/core";
/**
 * ZTbody component.
 * @slot - ZTbody content (`z-tr`).
 */
export class ZTbody {
    render() {
        return (h(Host, { key: '82690ddf3bdd8b742cadcf45a75778892d15c5bf', role: "rowgroup" }, h("slot", { key: '6b1a45b35318f6df0966ee67aa60f33aa32c5751' })));
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
