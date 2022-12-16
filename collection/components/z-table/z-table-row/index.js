import { Host, h } from "@stencil/core";
import { ZTableRowExpandedType } from "../../../beans";
export class ZTableRow {
  constructor() {
    /** Table row expanded type */
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
    return (h(Host, { role: "row", expanded: this.expanded, onClick: (event) => {
        const preventExpand = event.target.classList.contains("prevent-expand");
        const isExpandable = this.expandedType === ZTableRowExpandedType.EXPANDABLE;
        if (isExpandable && !preventExpand) {
          this.handleExpand();
        }
      } }, this.expandedType !== ZTableRowExpandedType.NONE && this.renderExpandButton(), h("slot", null)));
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
              "path": "../../../beans"
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
