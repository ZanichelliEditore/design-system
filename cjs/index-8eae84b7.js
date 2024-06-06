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
        return (index.h(index.Host, { key: 'fd1e0dced377fcfcd3b531c063ac36937eaf6904', role: "rowgroup" }, index.h("slot", { key: '1d75abf2f9b0f1c109eec083ebfaf3e07de81dca' })));
    }
};
ZThead.style = ZTheadStyle0;

exports.ZThead = ZThead;

//# sourceMappingURL=index-8eae84b7.js.map