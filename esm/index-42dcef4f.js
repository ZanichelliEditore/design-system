import { r as registerInstance, c as createEvent, h, a as Host } from './index-f16bc2ca.js';
import { Z as ZTableRowExpandedType } from './index-2255c6c8.js';

const stylesCss = "z-table-row{display:table-row;font-family:var(--font-family-sans)}z-table-row[expanded-type=\"expandable\"]:hover{cursor:pointer}z-table-row[expanded-type=\"expandable\"]>z-table-cell:first-child,z-table-row[expanded-type=\"padding\"]>z-table-cell:first-child{--z-icon-width:16px;--z-icon-height:16px;width:24px;box-sizing:border-box;padding-right:0;padding-left:16px;fill:var(--gray800);text-align:center;user-select:none}.z-icon-placeholder{width:24px;padding-right:0}z-table-row[expanded-type=\"expandable\"]>z-table-cell:nth-child(2),z-table-row[expanded-type=\"padding\"]>z-table-cell:nth-child(2){padding-left:8px}z-table-row[expanded-type]:hover>z-table-cell:first-child{fill:var(--color-hover-primary)}z-table-row[expanded]>z-table-cell{border-bottom:none;background-color:var(--gray50)}z-table-row[expanded]+z-table-expanded-row{display:table-row}";
const ZTableRowStyle0 = stylesCss;

const ZTableRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.expand = createEvent(this, "expand", 7);
        this.expandedType = ZTableRowExpandedType.NONE;
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
        if (this.expandedType == ZTableRowExpandedType.EXPANDABLE) {
            return (h("z-table-cell", { style: { borderRight: "none" } }, h("z-icon", { name: this.expanded ? "minus-circled" : "plus-circled" })));
        }
        return (h("z-table-cell", { style: { borderRight: "none" } }, h("div", { class: "z-icon-placeholder" })));
    }
    render() {
        return (h(Host, { key: '05feb1b745b9f720f4b9b42f9753791410703e4d', role: "row", expanded: this.expanded, onClick: (event) => {
                const preventExpand = event.target.classList.contains("prevent-expand");
                const isExpandable = this.expandedType === ZTableRowExpandedType.EXPANDABLE;
                if (isExpandable && !preventExpand) {
                    this.handleExpand();
                }
            } }, this.expandedType !== ZTableRowExpandedType.NONE && this.renderExpandButton(), h("slot", { key: '6b5dc7930bea80c6f19fb8b3f2253465f1bdba20' })));
    }
};
ZTableRow.style = ZTableRowStyle0;

export { ZTableRow as Z };

//# sourceMappingURL=index-42dcef4f.js.map