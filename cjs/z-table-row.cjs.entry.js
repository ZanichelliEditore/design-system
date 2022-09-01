'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-bc9a5c2b.js');

const stylesCss = "z-table-row{display:table-row;font-family:var(--font-family-sans)}z-table-row[expanded-type=\"expandable\"]:hover{cursor:pointer}z-table-row[expanded-type=\"expandable\"]>z-table-cell:first-child,z-table-row[expanded-type=\"padding\"]>z-table-cell:first-child{--z-icon-width:16px;--z-icon-height:16px;width:24px;padding-left:16px;padding-right:0px;box-sizing:border-box;text-align:center;fill:var(--gray800);user-select:none}.z-icon-placeholder{width:24px;padding-right:0px}z-table-row[expanded-type=\"expandable\"]>z-table-cell:nth-child(2),z-table-row[expanded-type=\"padding\"]>z-table-cell:nth-child(2){padding-left:8px}z-table-row[expanded-type]:hover>z-table-cell:first-child{fill:var(--myz-blue-dark)}z-table-row[expanded]>z-table-cell{background-color:var(--gray50)}z-table-row[expanded]+z-table-expanded-row{display:table-row}z-table-row[expanded]>z-table-cell{border-bottom:none}";

const ZTableRow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.expand = index.createEvent(this, "expand", 7);
    this.expandedType = index$1.ZTableRowExpandedType.none;
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
    if (this.expandedType == index$1.ZTableRowExpandedType.expandable) {
      return (index.h("z-table-cell", { style: { borderRight: "none" } }, index.h("z-icon", { name: this.expanded ? "minus-circled" : "plus-circled" })));
    }
    return (index.h("z-table-cell", { style: { borderRight: "none" } }, index.h("div", { class: "z-icon-placeholder" })));
  }
  render() {
    return (index.h(index.Host, { role: "row", expanded: this.expanded, onClick: (event) => {
        const contextualMenuClick = event.target.nodeName === 'Z-CONTEXTUAL-MENU';
        const isExpandable = this.expandedType === index$1.ZTableRowExpandedType.expandable;
        if (isExpandable && !contextualMenuClick) {
          this.handleExpand();
        }
      } }, this.expandedType !== index$1.ZTableRowExpandedType.none &&
      this.renderExpandButton(), index.h("slot", null)));
  }
};
ZTableRow.style = stylesCss;

exports.z_table_row = ZTableRow;
