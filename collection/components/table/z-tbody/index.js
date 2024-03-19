import { Host, h } from "@stencil/core";
/**
 * ZTbody component.
 * @slot - ZTbody content (`z-tr`).
 */
export class ZTbody {
    render() {
        return (h(Host, { key: 'f60a683407e08dc44c3e60699142dbe15714af8f', role: "rowgroup" }, h("slot", { key: 'cce2e55d056641c4bbe3c043e51525303d75562b' })));
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
