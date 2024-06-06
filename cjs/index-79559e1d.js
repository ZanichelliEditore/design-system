'use strict';

const index = require('./index-dc60bee7.js');

const stylesCss = ":host{display:block;box-sizing:border-box;border-top:1px solid var(--color-surface03);border-bottom:1px solid var(--color-surface03)}:host([sticky]){position:sticky;z-index:1;bottom:0;background-color:var(--color-surface01)}";
const ZTfootStyle0 = stylesCss;

const ZTfoot = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sticky = false;
    }
    render() {
        return (index.h(index.Host, { key: '441a3e0656da274193c4a12681b9e9d641690982', role: "rowgroup" }, index.h("slot", { key: '5e80207cbf1238b2141fcd657cb10fc18be7bccb' })));
    }
};
ZTfoot.style = ZTfootStyle0;

exports.ZTfoot = ZTfoot;

//# sourceMappingURL=index-79559e1d.js.map