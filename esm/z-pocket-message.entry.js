import { r as registerInstance, h } from './index-f16bc2ca.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:grid;padding-top:calc(var(--space-unit) * 1.5);border-bottom:var(--border-size-small) solid var(--color-surface03);color:var(--color-surface05);fill:var(--color-surface05);font-size:14px;grid-template-columns:36px auto;grid-template-rows:auto auto}:host>div>z-icon{grid-column:1 / 2;grid-row:1 / 2}:host>div>div.content{margin-bottom:var(--space-unit);grid-column:2 / 3;grid-row:1 / 2}:host>div>div.cta-wrapper{display:flex;flex-flow:column nowrap;align-items:center;justify-content:flex-start;margin-bottom:var(--space-unit);grid-column:1 / 3;grid-row:2 / 3}@media only screen and (min-width: 768px){:host>div>div.cta-wrapper{flex-direction:row;grid-column:2 / 3}}";
const ZPocketMessageStyle0 = stylesCss;

const ZPocketMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'af350f4364cdc056efb2bfb7573f32aff6e1fb74' }, h("z-icon", { key: '978d77e166c93ff7dc66ce4488b9de335ad222f1', name: "exclamation-circle" }), h("div", { key: '8b2b15f096af975a001abc24f13145c19a93df10', class: "content" }, h("slot", { key: 'dc4a2c27b657fa13e1ed27b095c31903f481dfb6' })), h("div", { key: '73f8485447c46858f416f8cf10c332808ee8a129', class: "cta-wrapper" }, h("slot", { key: '9b36b26758f23f527da634df4a115d0db6ca8b51', name: "cta" }))));
    }
};
ZPocketMessage.style = ZPocketMessageStyle0;

export { ZPocketMessage as z_pocket_message };

//# sourceMappingURL=z-pocket-message.entry.js.map