'use strict';

const index = require('./index-5dc4a8de.js');

const stylesCss = ":host{--z-table--cells-bottom-border-size:var(\n    --border-size-medium\n  );--z-table--cells-background:var(\n    --color-surface02\n  );display:block;-webkit-box-sizing:border-box;box-sizing:border-box}:host([sticky]){position:-webkit-sticky;position:sticky;z-index:2;top:0;-webkit-box-shadow:0 2px 4px -2px var(--shadow-color-base);box-shadow:0 2px 4px -2px var(--shadow-color-base)}";
const ZTheadStyle0 = stylesCss;

const ZThead = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sticky = false;
    }
    render() {
        return (index.h(index.Host, { key: 'e1e45a7e6e5325a7c0b82cf490d7896f233b35fa', role: "rowgroup" }, index.h("slot", { key: '8e2f327fc3e2721b1a7755024b9eb43ab87ac2d3' })));
    }
};
ZThead.style = ZTheadStyle0;

exports.ZThead = ZThead;

//# sourceMappingURL=index-1d6878f3.js.map