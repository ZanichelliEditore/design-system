import { r as registerInstance, h, g as getElement } from './index-f16bc2ca.js';

const stylesCss = ".sc-z-table-footer-h{display:table-footer-group;font-family:var(--font-family-sans);font-weight:var(--font-rg)}";
const ZTableFooterStyle0 = stylesCss;

const ZTableFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillRender() {
        this.host.setAttribute("role", "rowgroup");
    }
    render() {
        return h("slot", { key: '2c6376eb19a83b077b07d9127ba5cf5441fb5ba1' });
    }
    get host() { return getElement(this); }
};
ZTableFooter.style = ZTableFooterStyle0;

export { ZTableFooter as Z };

//# sourceMappingURL=index-73ab3b9b.js.map