import { h } from "@stencil/core";
/**
 * @deprecated
 */
export class ZTableFooter {
    componentWillRender() {
        this.host.setAttribute("role", "rowgroup");
    }
    render() {
        return h("slot", { key: '2c6376eb19a83b077b07d9127ba5cf5441fb5ba1' });
    }
    static get is() { return "z-table-footer"; }
    static get encapsulation() { return "scoped"; }
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
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=index.js.map
