'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-199cd650.js');

const stylesCss = "z-table-row{display:table-row;font-family:var(--font-family-sans)}z-table-row[expanded-type=\"expandable\"]:hover{cursor:pointer}z-table-row[expanded-type=\"expandable\"]>z-table-cell:first-child,z-table-row[expanded-type=\"padding\"]>z-table-cell:first-child{--z-icon-width:16px;--z-icon-height:16px;width:24px;box-sizing:border-box;padding-right:0;padding-left:16px;fill:var(--gray800);text-align:center;user-select:none}.z-icon-placeholder{width:24px;padding-right:0}z-table-row[expanded-type=\"expandable\"]>z-table-cell:nth-child(2),z-table-row[expanded-type=\"padding\"]>z-table-cell:nth-child(2){padding-left:8px}z-table-row[expanded-type]:hover>z-table-cell:first-child{fill:var(--myz-blue-dark)}z-table-row[expanded]>z-table-cell{border-bottom:none;background-color:var(--gray50)}z-table-row[expanded]+z-table-expanded-row{display:table-row}";

const ZTableRow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.expand = index.createEvent(this, "expand", 7);
    /** Table row expanded type */
    this.expandedType = index$1.ZTableRowExpandedType.NONE;
    this.expanded = false;
  }
  emitOnExpand() {
    this.expand.emit({ expanded: this.expanded });
  }
  handleExpand() {
    this.expanded = !this.expanded;
    this.emitOnExpand();
  }
  renderExpandButton() {
    if (this.expandedType == index$1.ZTableRowExpandedType.EXPANDABLE) {
      return (index.h("z-table-cell", { style: { borderRight: "none" } }, index.h("z-icon", { name: this.expanded ? "minus-circled" : "plus-circled" })));
    }
    return (index.h("z-table-cell", { style: { borderRight: "none" } }, index.h("div", { class: "z-icon-placeholder" })));
  }
  render() {
    return (index.h(index.Host, { role: "row", expanded: this.expanded, onClick: (event) => {
        const contextualMenuClick = event.target.nodeName === "Z-CONTEXTUAL-MENU";
        const isExpandable = this.expandedType === index$1.ZTableRowExpandedType.EXPANDABLE;
        if (isExpandable && !contextualMenuClick) {
          this.handleExpand();
        }
      } }, this.expandedType !== index$1.ZTableRowExpandedType.NONE && this.renderExpandButton(), index.h("slot", null)));
  }
};
ZTableRow.style = stylesCss;

exports.z_table_row = ZTableRow;
