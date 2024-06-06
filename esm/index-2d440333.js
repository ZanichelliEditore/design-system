import { r as registerInstance, h, a as Host } from './index-f16bc2ca.js';

const stylesCss = ":host{display:block;box-sizing:border-box;border-top:1px solid var(--color-surface03);border-bottom:1px solid var(--color-surface03)}:host([sticky]){position:sticky;z-index:1;bottom:0;background-color:var(--color-surface01)}";
const ZTfootStyle0 = stylesCss;

const ZTfoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sticky = false;
    }
    render() {
        return (h(Host, { key: '441a3e0656da274193c4a12681b9e9d641690982', role: "rowgroup" }, h("slot", { key: '5e80207cbf1238b2141fcd657cb10fc18be7bccb' })));
    }
};
ZTfoot.style = ZTfootStyle0;

export { ZTfoot as Z };

//# sourceMappingURL=index-2d440333.js.map