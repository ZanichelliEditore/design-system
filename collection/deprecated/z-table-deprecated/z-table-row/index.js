import { Host, h } from "@stencil/core";
import { ZTableRowExpandedType } from "../../../beans";
/**
 * @deprecated
 */
export class ZTableRow {
    constructor() {
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
    static get is() { return "z-table-row"; }
    static get originalStyleUrls() {
        return {
            "$": ["styles.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["styles.css"]
        };
    }
    static get properties() {
        return {
            "expandedType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ZTableRowExpandedType",
                    "resolved": "ZTableRowExpandedType.EXPANDABLE | ZTableRowExpandedType.NONE | ZTableRowExpandedType.PADDING",
                    "references": {
                        "ZTableRowExpandedType": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ZTableRowExpandedType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Table row expanded type"
                },
                "attribute": "expanded-type",
                "reflect": true,
                "defaultValue": "ZTableRowExpandedType.NONE"
            }
        };
    }
    static get states() {
        return {
            "expanded": {}
        };
    }
    static get events() {
        return [{
                "method": "expand",
                "name": "expand",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Row has been expanded"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=index.js.map
