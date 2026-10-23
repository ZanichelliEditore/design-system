import { r as registerInstance, h, H as Host } from './index-DafJ7_Il.js';

const stylesCss = () => `:host{position:relative;display:flex;width:100%;max-width:100%;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.stepper-list{display:flex;width:100%;box-sizing:border-box;flex-direction:row;padding:0 calc(var(--space-unit) * 3);margin:0}`;

const ZStepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'c16bf08a310caae7b712a922a74eace29c560221', role: "navigation" }, h("div", { key: 'df1dcc32d712bd68f12900faf3e7ac72eb4fc6dc', class: "stepper-list", role: "list" }, h("slot", { key: 'c7c8775a5fe29029d271ea6442b094175c695c66' }))));
    }
};
ZStepper.style = stylesCss();

export { ZStepper as z_stepper };
