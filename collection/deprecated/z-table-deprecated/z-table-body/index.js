import { h } from "@stencil/core";
/**
 * @deprecated
 */
export class ZTableBody {
    componentWillRender() {
        this.host.setAttribute("role", "rowgroup");
        Array.from(this.host.children).forEach((child, index) => child.setAttribute("aria-rowindex", `${index}`));
    }
    render() {
        return h("slot", { key: 'd422df9305a81ae9beb6b1a695cf08a944f7b893' });
    }
    static get is() { return "z-table-body"; }
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
