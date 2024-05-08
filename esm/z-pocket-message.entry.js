import { r as registerInstance, h } from './index-f16bc2ca.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:grid;padding-top:calc(var(--space-unit) * 1.5);border-bottom:var(--border-size-small) solid var(--color-surface03);color:var(--color-surface05);fill:var(--color-surface05);font-size:14px;grid-template-columns:36px auto;grid-template-rows:auto auto}:host>div>z-icon{grid-column:1 / 2;grid-row:1 / 2}:host>div>div.content{margin-bottom:var(--space-unit);grid-column:2 / 3;grid-row:1 / 2}:host>div>div.cta-wrapper{display:flex;flex-flow:column nowrap;align-items:center;justify-content:flex-start;margin-bottom:var(--space-unit);grid-column:1 / 3;grid-row:2 / 3}@media only screen and (min-width: 768px){:host>div>div.cta-wrapper{flex-direction:row;grid-column:2 / 3}}";
const ZPocketMessageStyle0 = stylesCss;

const ZPocketMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '843ee900479a31fb894034f112cc0228b96777db' }, h("z-icon", { key: 'fd7328544da14a6f0291267e9b5b0f13eebc6d78', name: "exclamation-circle" }), h("div", { key: '1612d02ebeb6a3181d632350af14d847883cdce4', class: "content" }, h("slot", { key: 'f7256dfd56028f2dc9e3c42c324c210041ed50ad' })), h("div", { key: '9b5db0c5c46967ba4ae2091fac0ab3e4ec3718ff', class: "cta-wrapper" }, h("slot", { key: '9a23bdb386bd1c10d311c41226a430e2a61b9d45', name: "cta" }))));
    }
};
ZPocketMessage.style = ZPocketMessageStyle0;

export { ZPocketMessage as z_pocket_message };

//# sourceMappingURL=z-pocket-message.entry.js.map