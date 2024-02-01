'use strict';

const index = require('./index-195ca522.js');

const stylesCss = ":host{display:none;background-color:var(--gray50)}:host>td>div.content-container{margin-bottom:calc(var(--space-unit) / 2);box-shadow:var(--shadow-2)}";

const ZTableExpandedRow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("td", { colSpan: this.colSpan }, index.h("div", { class: "content-container" }, index.h("slot", null))));
  }
};
ZTableExpandedRow.style = stylesCss;

exports.ZTableExpandedRow = ZTableExpandedRow;
