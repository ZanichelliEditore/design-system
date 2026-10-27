import { r as registerInstance, h, H as Host } from './index-SFwvdS4t.js';

const stylesCss = () => `:host{position:relative;display:flex;width:100%;max-width:100%;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.stepper-list{display:flex;width:100%;box-sizing:border-box;flex-direction:row;padding:0 calc(var(--space-unit) * 3);margin:0}`;

const ZStepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '1452eb9f08520efc9cef3ed933725bb11b631bcb', role: "navigation" }, h("div", { key: 'b2f7c6dc2e8e3912ae2f9344a3a2de06c47905c5', class: "stepper-list", role: "list" }, h("slot", { key: 'cfb5547bd5d129db5f0408bc5ae4802ba8d4aea8' }))));
    }
};
ZStepper.style = stylesCss();

export { ZStepper as z_stepper };
