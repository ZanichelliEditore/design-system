'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:grid;padding-top:calc(var(--space-unit) * 1.5);border-bottom:var(--border-size-small) solid var(--color-surface03);color:var(--color-surface05);fill:var(--color-surface05);font-size:14px;grid-template-columns:36px auto;grid-template-rows:auto auto}:host>div>z-icon{grid-column:1 / 2;grid-row:1 / 2}:host>div>div.content{margin-bottom:var(--space-unit);grid-column:2 / 3;grid-row:1 / 2}:host>div>div.cta-wrapper{display:flex;flex-flow:column nowrap;align-items:center;justify-content:flex-start;margin-bottom:var(--space-unit);grid-column:1 / 3;grid-row:2 / 3}@media only screen and (min-width: 768px){:host>div>div.cta-wrapper{flex-direction:row;grid-column:2 / 3}}";
const ZPocketMessageStyle0 = stylesCss;

const ZPocketMessage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'fd2ad4b6202ff5ec00783d54f10852f5afead5cc' }, index.h("z-icon", { key: 'a6872094ff69a350e72992874e641480ef1bd582', name: "exclamation-circle" }), index.h("div", { key: 'b9c7d36ea2c2f6beed7aaf98f409db7e37eff2d0', class: "content" }, index.h("slot", { key: '04b72c04be291ffc5690c162ed8bea07251346da' })), index.h("div", { key: 'b51c6836991f7f66a0e21968cefe81e49fda0043', class: "cta-wrapper" }, index.h("slot", { key: '944145d6af60175fc717951e1a8b5a03e533c2d8', name: "cta" }))));
    }
};
ZPocketMessage.style = ZPocketMessageStyle0;

exports.z_pocket_message = ZPocketMessage;

//# sourceMappingURL=z-pocket-message.cjs.entry.js.map