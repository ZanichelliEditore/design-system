import { r as registerInstance, h } from './index-4968ce56.js';

const stylesCss = ":host{display:none;background-color:var(--gray50)}:host>td>div.content-container{margin-bottom:calc(var(--space-unit) / 2);box-shadow:var(--shadow-2)}";

const ZTableExpandedRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("td", { colSpan: this.colSpan }, h("div", { class: "content-container" }, h("slot", null))));
  }
};
ZTableExpandedRow.style = stylesCss;

export { ZTableExpandedRow as Z };
