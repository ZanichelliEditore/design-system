'use strict';

const index = require('./index-dc60bee7.js');

const stylesCss = ":host{--z-table--cells-bottom-border-size:var(\n    --border-size-medium\n  );--z-table--cells-background:var(\n    --color-surface02\n  );display:block;box-sizing:border-box}:host([sticky]){position:sticky;z-index:2;top:0;box-shadow:0 2px 4px -2px var(--shadow-color-base)}";
const ZTheadStyle0 = stylesCss;

const ZThead = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sticky = false;
    }
    render() {
        return (index.h(index.Host, { key: 'ad4f78d64587c716f2b873a02a2473426d0c1d3f', role: "rowgroup" }, index.h("slot", { key: '5606cc9d05f711573a130def219cb4d44c5a74a0' })));
    }
};
ZThead.style = ZTheadStyle0;

exports.ZThead = ZThead;

//# sourceMappingURL=index-66168a3e.js.map