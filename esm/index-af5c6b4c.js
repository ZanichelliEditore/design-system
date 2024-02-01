import { r as registerInstance, h, H as Host } from './index-4968ce56.js';

const stylesCss = ":host{display:block;box-sizing:border-box}";

const ZTbody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { role: "rowgroup" }, h("slot", null)));
  }
};
ZTbody.style = stylesCss;

export { ZTbody as Z };
