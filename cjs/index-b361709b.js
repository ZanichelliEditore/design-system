'use strict';

const index = require('./index-e801ae96.js');

const stylesCss = ":host{display:block;box-sizing:border-box;border-top:1px solid var(--color-surface03);border-bottom:1px solid var(--color-surface03)}:host([sticky]){position:sticky;z-index:1;bottom:0;background-color:var(--color-surface01)}";
const ZTfootStyle0 = stylesCss;

const ZTfoot = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sticky = false;
    }
    render() {
        return (index.h(index.Host, { key: 'b872f68fd9e643528d02adb7bd76f8377a59fcdc', role: "rowgroup" }, index.h("slot", { key: '6ebdc491ee2459d415a53fb96e5f27405704a99f' })));
    }
};
ZTfoot.style = ZTfootStyle0;

exports.ZTfoot = ZTfoot;

//# sourceMappingURL=index-b361709b.js.map