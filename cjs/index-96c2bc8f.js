'use strict';

const index = require('./index-dc60bee7.js');

const stylesCss = ".sc-z-table-body-h{display:table-row-group;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-table-body-h>z-table-row[expanded].sc-z-table-body+z-table-expanded-row.sc-z-table-body{display:table-row}";
const ZTableBodyStyle0 = stylesCss;

const ZTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillRender() {
        this.host.setAttribute("role", "rowgroup");
        Array.from(this.host.children).forEach((child, index) => child.setAttribute("aria-rowindex", `${index}`));
    }
    render() {
        return index.h("slot", { key: 'd422df9305a81ae9beb6b1a695cf08a944f7b893' });
    }
    get host() { return index.getElement(this); }
};
ZTableBody.style = ZTableBodyStyle0;

exports.ZTableBody = ZTableBody;

//# sourceMappingURL=index-96c2bc8f.js.map