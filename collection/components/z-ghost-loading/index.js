import { h, Host } from "@stencil/core";
export class ZGhostLoading {
    render() {
        return h(Host, { key: '38a3ba066f0322e41cff8962b230ad752312c8b1' });
    }
    static get is() { return "z-ghost-loading"; }
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
