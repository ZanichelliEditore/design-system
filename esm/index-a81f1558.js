import { r as registerInstance, h, a as Host } from './index-a2130b6a.js';

const stylesCss = ":host{--z-table--cells-bottom-border-size:var(\n    --border-size-medium\n  );--z-table--cells-background:var(\n    --color-surface02\n  );display:block;box-sizing:border-box}:host([sticky]){position:sticky;z-index:2;top:0;box-shadow:0 2px 4px -2px var(--shadow-color-base)}";
const ZTheadStyle0 = stylesCss;

const ZThead = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sticky = false;
    }
    render() {
        return (h(Host, { key: '44bbf57a110328328c65171e6463a5128d0be2e7', role: "rowgroup" }, h("slot", { key: '1953f6a0c9d96f3cbf66ed0e856391d19e985e20' })));
    }
};
ZThead.style = ZTheadStyle0;

export { ZThead as Z };

//# sourceMappingURL=index-a81f1558.js.map