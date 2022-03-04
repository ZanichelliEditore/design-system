import { r as registerInstance, h } from './index-fa9e549c.js';

const stylesCss = ":host{box-sizing:border-box;position:relative;display:flex;flex-direction:row;width:100%;max-width:100%;margin:0;padding:0;font-family:var(--dashboard-font);font-weight:var(--font-rg);list-style:none}@media only screen and (min-width: 768px){:host{padding:0 calc(var(--space-unit) * 2)}}";

const ZStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("slot", null));
  }
};
ZStepper.style = stylesCss;

export { ZStepper as z_stepper };
