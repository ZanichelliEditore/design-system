import { r as registerInstance, h } from './index-90e18641.js';

const stylesCss = ":host{background-color:var(--gray50);display:none}:host>td>div.content-container{box-shadow:var(--shadow-2);margin-bottom:calc(var(--space-unit) / 2)}";

const ZTableExpandedRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("td", { colSpan: this.colSpan }, h("div", { class: "content-container" }, h("slot", null))));
  }
};
ZTableExpandedRow.style = stylesCss;

export { ZTableExpandedRow as z_table_expanded_row };