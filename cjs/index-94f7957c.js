'use strict';

const index = require('./index-5dc4a8de.js');

const stylesCss = ":host{display:block;box-sizing:border-box;border-top:1px solid var(--color-surface03);border-bottom:1px solid var(--color-surface03)}:host([sticky]){position:sticky;z-index:1;bottom:0;background-color:var(--color-surface01)}";
const ZTfootStyle0 = stylesCss;

const ZTfoot = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sticky = false;
    }
    render() {
        return (index.h(index.Host, { key: 'c56c6c8f9f3eda99f7eaed147ef2df8c99d43cda', role: "rowgroup" }, index.h("slot", { key: '03eeb74397f395723a8a649bb7213ac9fdbcf4f0' })));
    }
};
ZTfoot.style = ZTfootStyle0;

exports.ZTfoot = ZTfoot;

//# sourceMappingURL=index-94f7957c.js.map