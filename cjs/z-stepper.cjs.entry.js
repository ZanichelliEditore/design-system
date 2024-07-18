'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');

const stylesCss = ":host{position:relative;display:-ms-flexbox;display:flex;width:100%;max-width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-direction:row;flex-direction:row;padding:0;margin:0;font-family:var(--font-family-sans);font-weight:var(--font-rg);list-style:none}@media only screen and (min-width: 768px){:host{padding:0 calc(var(--space-unit) * 2)}}";
const ZStepperStyle0 = stylesCss;

const ZStepper = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '80b89caa35e9adb82ad413783b16eae491a26f48', role: "list" }, index.h("slot", { key: '140e35a55637873b1eee70d5a7a8c2b03af3eed7' })));
    }
};
ZStepper.style = ZStepperStyle0;

exports.z_stepper = ZStepper;

//# sourceMappingURL=z-stepper.cjs.entry.js.map