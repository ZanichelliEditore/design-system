'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');

const stylesCss = ":host{position:relative;display:flex;width:100%;max-width:100%;box-sizing:border-box;flex-direction:row;padding:0;margin:0;font-family:var(--font-family-sans);font-weight:var(--font-rg);list-style:none}@media only screen and (min-width: 768px){:host{padding:0 calc(var(--space-unit) * 2)}}";
const ZStepperStyle0 = stylesCss;

const ZStepper = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '8f9ead5ee6d332ff3279c5135cd581603235fd54', role: "list" }, index.h("slot", { key: '1e4c88be235b6c0e0baeb4f7ec6547a2af1d24cc' })));
    }
};
ZStepper.style = ZStepperStyle0;

exports.z_stepper = ZStepper;

//# sourceMappingURL=z-stepper.cjs.entry.js.map