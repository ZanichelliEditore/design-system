'use strict';

const index = require('./index-195ca522.js');

const stylesCss = ".sc-z-table-body-h{display:table-row-group;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-table-body-h>z-table-row[expanded].sc-z-table-body+z-table-expanded-row.sc-z-table-body{display:table-row}";

const ZTableBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");
    Array.from(this.host.children).forEach((child, index) => child.setAttribute("aria-rowindex", `${index}`));
  }
  render() {
    return index.h("slot", null);
  }
  get host() { return index.getElement(this); }
};
ZTableBody.style = stylesCss;

exports.ZTableBody = ZTableBody;
