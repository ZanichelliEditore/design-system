'use strict';

const index = require('./index-dc60bee7.js');

const stylesCss = ".sc-z-table-head-h{display:table-header-group;font-family:var(--font-family-sans);font-weight:var(--font-rg)}";
const ZTableHeadStyle0 = stylesCss;

const ZTableHead = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillRender() {
        this.host.setAttribute("role", "rowgroup");
    }
    render() {
        return index.h("slot", { key: '98012cd26ee60c370c6ccf6bff47ca5c827f30b6' });
    }
    get host() { return index.getElement(this); }
};
ZTableHead.style = ZTableHeadStyle0;

exports.ZTableHead = ZTableHead;

//# sourceMappingURL=index-37180b8d.js.map