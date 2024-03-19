import { r as registerInstance, h, g as getElement } from './index-f16bc2ca.js';

const stylesCss = ".sc-z-table-head-h{display:table-header-group;font-family:var(--font-family-sans);font-weight:var(--font-rg)}";
const ZTableHeadStyle0 = stylesCss;

const ZTableHead = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillRender() {
        this.host.setAttribute("role", "rowgroup");
    }
    render() {
        return h("slot", { key: '98012cd26ee60c370c6ccf6bff47ca5c827f30b6' });
    }
    get host() { return getElement(this); }
};
ZTableHead.style = ZTableHeadStyle0;

export { ZTableHead as Z };

//# sourceMappingURL=index-c3277075.js.map