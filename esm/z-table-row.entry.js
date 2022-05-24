import { r as registerInstance, c as createEvent, h, H as Host } from './index-90e18641.js';
import { p as ZTableRowExpandedType } from './index-2fcbc301.js';

const stylesCss = "z-table-row{display:table-row;font-family:var(--font-family-sans)}z-table-row[expanded-type=\"expandable\"]:hover{cursor:pointer}z-table-row[expanded-type=\"expandable\"]>z-table-cell:first-child,z-table-row[expanded-type=\"padding\"]>z-table-cell:first-child{--z-icon-width:16px;--z-icon-height:16px;width:24px;padding-left:16px;padding-right:0px;box-sizing:border-box;text-align:center;fill:var(--gray800);user-select:none}.z-icon-placeholder{width:24px;padding-right:0px}z-table-row[expanded-type=\"expandable\"]>z-table-cell:nth-child(2),z-table-row[expanded-type=\"padding\"]>z-table-cell:nth-child(2){padding-left:8px}z-table-row[expanded-type]:hover>z-table-cell:first-child{fill:var(--myz-blue-dark)}z-table-row[expanded]>z-table-cell{background-color:var(--gray50)}z-table-row[expanded]+z-table-expanded-row{display:table-row}z-table-row[expanded]>z-table-cell{border-bottom:none}";

const ZTableRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expand = createEvent(this, "expand", 7);
    this.expandedType = ZTableRowExpandedType.none;
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
    if (this.expandedType == ZTableRowExpandedType.expandable) {
      return (h("z-table-cell", { style: { borderRight: "none" } }, h("z-icon", { name: this.expanded ? "minus-circled" : "plus-circled" })));
    }
    return (h("z-table-cell", { style: { borderRight: "none" } }, h("div", { class: "z-icon-placeholder" })));
  }
  render() {
    return (h(Host, { role: "row", expanded: this.expanded, onClick: (event) => {
        const contextualMenuClick = event.target.nodeName === 'Z-CONTEXTUAL-MENU';
        const isExpandable = this.expandedType === ZTableRowExpandedType.expandable;
        if (isExpandable && !contextualMenuClick) {
          this.handleExpand();
        }
      } }, this.expandedType !== ZTableRowExpandedType.none &&
      this.renderExpandButton(), h("slot", null)));
  }
};
ZTableRow.style = stylesCss;

export { ZTableRow as z_table_row };
