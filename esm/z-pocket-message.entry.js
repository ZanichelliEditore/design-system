import { r as registerInstance, h } from './index-f16bc2ca.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:grid;padding-top:calc(var(--space-unit) * 1.5);border-bottom:var(--border-size-small) solid var(--color-surface03);color:var(--color-surface05);fill:var(--color-surface05);font-size:14px;grid-template-columns:36px auto;grid-template-rows:auto auto}:host>div>z-icon{grid-column:1 / 2;grid-row:1 / 2}:host>div>div.content{margin-bottom:var(--space-unit);grid-column:2 / 3;grid-row:1 / 2}:host>div>div.cta-wrapper{display:flex;flex-flow:column nowrap;align-items:center;justify-content:flex-start;margin-bottom:var(--space-unit);grid-column:1 / 3;grid-row:2 / 3}@media only screen and (min-width: 768px){:host>div>div.cta-wrapper{flex-direction:row;grid-column:2 / 3}}";
const ZPocketMessageStyle0 = stylesCss;

const ZPocketMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'fc7dd1f124a7891d06714e8e246fb9b7b9e51036' }, h("z-icon", { key: 'c1889b328efb70835d3049cd96c7893baf6fa0c9', name: "exclamation-circle" }), h("div", { key: '2d7adc5063f6207ef8ff0ca148fd8b77c1d9096d', class: "content" }, h("slot", { key: 'b16cc5a7086302b73baa229ef37f3df14bae4676' })), h("div", { key: '91e56d2ae0cf57cc0c6d2898fb05b3fc83b87f99', class: "cta-wrapper" }, h("slot", { key: 'c9e114961d136434110f37614ac725a59a54c8e3', name: "cta" }))));
    }
};
ZPocketMessage.style = ZPocketMessageStyle0;

export { ZPocketMessage as z_pocket_message };

//# sourceMappingURL=z-pocket-message.entry.js.map