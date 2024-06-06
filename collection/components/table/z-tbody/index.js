import { Host, h } from "@stencil/core";
/**
 * ZTbody component.
 * @slot - ZTbody content (`z-tr`).
 */
export class ZTbody {
    render() {
        return (h(Host, { key: '5053f27544fc018342c190f6365808a7dd5680bd', role: "rowgroup" }, h("slot", { key: '14a7c9dfd3e65dbb6fe1c36012de193e9b734a68' })));
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
