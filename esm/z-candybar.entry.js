import { r as registerInstance, h } from './index-0148109c.js';

const stylesCss = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg);display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-content:center}:host>div{position:fixed;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;top:30vh;max-width:297px;height:fit-content;min-height:232px;z-index:1000;margin:auto;overflow:auto;overflow:-moz-scrollbars-none;-ms-overflow-style:none;background:var(--myz-blue-lighter);border-radius:calc(var(--space-unit) * .5);box-shadow:0px -2px 4px 0px rgba(66, 69, 72, 0.4)}@media only screen and (min-width: 768px){:host>div{position:initial;flex-wrap:nowrap;justify-content:space-between;align-items:center;align-content:stretch;position:fixed;top:auto;bottom:0;margin:0 auto;left:0;right:0;height:auto;min-height:138px;max-width:100%;border-radius:0px}}@media only screen and (min-width: 1152px){:host>div{min-height:122px}}";

const ZCandybar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("slot", { name: "content" })));
  }
};
ZCandybar.style = stylesCss;

export { ZCandybar as z_candybar };
