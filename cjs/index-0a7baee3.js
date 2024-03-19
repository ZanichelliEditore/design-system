'use strict';

const index = require('./index-dc60bee7.js');

const stylesCss = ".sc-z-table-footer-h{display:table-footer-group;font-family:var(--font-family-sans);font-weight:var(--font-rg)}";
const ZTableFooterStyle0 = stylesCss;

const ZTableFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillRender() {
        this.host.setAttribute("role", "rowgroup");
    }
    render() {
        return index.h("slot", { key: '2c6376eb19a83b077b07d9127ba5cf5441fb5ba1' });
    }
    get host() { return index.getElement(this); }
};
ZTableFooter.style = ZTableFooterStyle0;

exports.ZTableFooter = ZTableFooter;

//# sourceMappingURL=index-0a7baee3.js.map