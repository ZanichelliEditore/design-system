import { h, Host } from "@stencil/core";
export class ZGhostLoading {
    render() {
        return h(Host, { key: '72423981dd27b511f927751a0886182a0872d512' });
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
