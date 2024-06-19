import { r as registerInstance, h, a as Host } from './index-ab5f1eaa.js';

const stylesCss = ":host{--z-table--cells-bottom-border-size:var(\n    --border-size-medium\n  );--z-table--cells-background:var(\n    --color-surface02\n  );display:block;box-sizing:border-box}:host([sticky]){position:sticky;z-index:2;top:0;box-shadow:0 2px 4px -2px var(--shadow-color-base)}";
const ZTheadStyle0 = stylesCss;

const ZThead = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sticky = false;
    }
    render() {
        return (h(Host, { key: 'e1e45a7e6e5325a7c0b82cf490d7896f233b35fa', role: "rowgroup" }, h("slot", { key: '8e2f327fc3e2721b1a7755024b9eb43ab87ac2d3' })));
    }
};
ZThead.style = ZTheadStyle0;

export { ZThead as Z };

//# sourceMappingURL=index-ea49e441.js.map