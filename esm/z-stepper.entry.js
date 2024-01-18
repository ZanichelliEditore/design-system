import { r as registerInstance, h } from './index-a2ca4b97.js';

const stylesCss = ":host{position:relative;display:flex;width:100%;max-width:100%;box-sizing:border-box;flex-direction:row;padding:0;margin:0;font-family:var(--font-family-sans);font-weight:var(--font-rg);list-style:none}@media only screen and (min-width: 768px){:host{padding:0 calc(var(--space-unit) * 2)}}";

const ZStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("slot", null);
  }
};
ZStepper.style = stylesCss;

export { ZStepper as z_stepper };
