'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');

const stylesCss = ":host{position:relative;display:flex;width:100%;max-width:100%;box-sizing:border-box;flex-direction:row;padding:0;margin:0;font-family:var(--font-family-sans);font-weight:var(--font-rg);list-style:none}@media only screen and (min-width: 768px){:host{padding:0 calc(var(--space-unit) * 2)}}";
const ZStepperStyle0 = stylesCss;

const ZStepper = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c1069a6d199240aa1e8eb9fe30be9a75b2dabecb', role: "list" }, index.h("slot", { key: '283f1f42d5f73259b7c04e965bf592e4ba543fc8' })));
    }
};
ZStepper.style = ZStepperStyle0;

exports.z_stepper = ZStepper;

//# sourceMappingURL=z-stepper.cjs.entry.js.map