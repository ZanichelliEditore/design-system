import { Component, Prop, State, Host, h, Event, } from "@stencil/core";
import { ZTableRowExpandedType } from "../../../beans";
export class ZTableRow {
  constructor() {
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
      return (h("z-table-cell", { style: { borderRight: "none" } },
        h("z-icon", { name: this.expanded ? "minus-circled" : "plus-circled" })));
    }
    return (h("z-table-cell", { style: { borderRight: "none" } },
      h("div", { class: "z-icon-placeholder" })));
  }
  render() {
    return (h(Host, { role: "row", expanded: this.expanded, onClick: (event) => {
        const contextualMenuClick = event.target.nodeName === 'Z-CONTEXTUAL-MENU';
        const isExpandable = this.expandedType === ZTableRowExpandedType.expandable;
        if (isExpandable && !contextualMenuClick) {
          this.handleExpand();
        }
      } },
      this.expandedType !== ZTableRowExpandedType.none &&
        this.renderExpandButton(),
      h("slot", null)));
  }
  static get is() { return "z-table-row"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "expandedType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ZTableRowExpandedType",
        "resolved": "ZTableRowExpandedType.expandable | ZTableRowExpandedType.none | ZTableRowExpandedType.padding",
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
        "text": ""
      },
      "attribute": "expanded-type",
      "reflect": true,
      "defaultValue": "ZTableRowExpandedType.none"
    }
  }; }
  static get states() { return {
    "expanded": {}
  }; }
  static get events() { return [{
      "method": "expand",
      "name": "expand",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
