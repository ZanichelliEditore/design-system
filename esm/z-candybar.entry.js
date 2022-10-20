import { r as registerInstance, h } from './index-a2ca4b97.js';

const stylesCss = ":host{display:flex;flex-flow:row nowrap;align-content:center;justify-content:center;font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>div{position:fixed;z-index:1000;top:30vh;display:flex;overflow:auto;overflow:-moz-scrollbars-none;max-width:297px;height:fit-content;min-height:232px;flex-flow:row wrap;justify-content:center;margin:auto;background:var(--myz-blue-lighter);border-radius:calc(var(--space-unit) * 0.5);box-shadow:0 -2px 4px 0 rgb(66 69 72 / 40%);-ms-overflow-style:none}@media only screen and (min-width: 768px){:host>div{position:initial;position:fixed;top:auto;right:0;bottom:0;left:0;max-width:100%;height:auto;min-height:138px;flex-wrap:nowrap;align-content:stretch;align-items:center;justify-content:space-between;margin:0 auto;border-radius:0}}@media only screen and (min-width: 1152px){:host>div{min-height:122px}}";

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
