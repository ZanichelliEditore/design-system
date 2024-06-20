'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:grid;padding-top:calc(var(--space-unit) * 1.5);border-bottom:var(--border-size-small) solid var(--color-surface03);color:var(--color-surface05);fill:var(--color-surface05);font-size:14px;grid-template-columns:36px auto;grid-template-rows:auto auto}:host>div>z-icon{grid-column:1 / 2;grid-row:1 / 2}:host>div>div.content{margin-bottom:var(--space-unit);grid-column:2 / 3;grid-row:1 / 2}:host>div>div.cta-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:var(--space-unit);grid-column:1 / 3;grid-row:2 / 3}@media only screen and (min-width: 768px){:host>div>div.cta-wrapper{-ms-flex-direction:row;flex-direction:row;grid-column:2 / 3}}";
const ZPocketMessageStyle0 = stylesCss;

const ZPocketMessage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '94fdc25ba4ed0c5f5e84c009b28349a659a35e7d' }, index.h("z-icon", { key: 'dbfe2f3bde1476afa7b852e3e53f1150477e9992', name: "exclamation-circle" }), index.h("div", { key: '7391e3e79397acaf1d8ef706549403f33ff4e649', class: "content" }, index.h("slot", { key: '7a54d609a2d40de9df327b3a73bc9a9e01eddc27' })), index.h("div", { key: 'dd97a4204d0ab7668b3ef6847b18ae578bb4aeea', class: "cta-wrapper" }, index.h("slot", { key: '7bdc0e8253113f03976d151baefaf7b8bcbf777f', name: "cta" }))));
    }
};
ZPocketMessage.style = ZPocketMessageStyle0;

exports.z_pocket_message = ZPocketMessage;

//# sourceMappingURL=z-pocket-message.cjs.entry.js.map