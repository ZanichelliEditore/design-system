import { h } from "@stencil/core";
/**
 * @deprecated
 */
export class ZTableHead {
    componentWillRender() {
        this.host.setAttribute("role", "rowgroup");
    }
    render() {
        return h("slot", { key: '98012cd26ee60c370c6ccf6bff47ca5c827f30b6' });
    }
    static get is() { return "z-table-head"; }
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
