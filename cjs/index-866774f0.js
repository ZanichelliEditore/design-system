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
        return (index.h(index.Host, { key: '1ebaa2ba1dca561a52963708d05c8e3e5f0940ac', role: "rowgroup" }, index.h("slot", { key: '06826f87e1ffdcf4b54cbf3b13d779dcb77f8c9a' })));
    }
};
ZTfoot.style = ZTfootStyle0;

exports.ZTfoot = ZTfoot;

//# sourceMappingURL=index-866774f0.js.map