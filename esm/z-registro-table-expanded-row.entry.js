import { r as registerInstance, h } from './index-fa9e549c.js';

const stylesCss = ":host{background-color:var(--gray50);display:none}:host>td>div.content-container{box-shadow:var(--shadow-2);margin-bottom:calc(var(--space-unit) / 2)}";

const ZRegistroTableExpandedRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("td", { colSpan: this.colSpan }, h("div", { class: "content-container" }, h("slot", null))));
  }
};
ZRegistroTableExpandedRow.style = stylesCss;

export { ZRegistroTableExpandedRow as z_registro_table_expanded_row };
