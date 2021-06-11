import { Component, Element, Event, h, Host, Listen, Prop, State, } from "@stencil/core";
import classNames from "classnames";
import { ButtonSizeEnum, ButtonVariantEnum, PopoverPosition, SortingOrientation, TableHeaderSize, } from "../../../beans";
import { getElementTree } from "../../../utils/utils";
export class ZRegistroTableHeader {
  constructor() {
    /** [Optional] Padding of the header */
    this.size = TableHeaderSize["medium"];
    this.isMenuOpened = false;
    this.sortingOrientation = SortingOrientation["none"];
    this.emitOnSort = this.emitOnSort.bind(this);
  }
  emitOnSort() {
    this.sort.emit({ sortingOrientation: this.sortingOrientation });
  }
  handleSort() {
    if (!this.sortable) {
      return;
    }
    if (this.sortingOrientation === SortingOrientation["none"] ||
      this.sortingOrientation === SortingOrientation["desc"]) {
      this.sortingOrientation = SortingOrientation["asc"];
    }
    else if (this.sortingOrientation === SortingOrientation["asc"]) {
      this.sortingOrientation = SortingOrientation["desc"];
    }
    this.emitOnSort();
  }
  handleMenuClick() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  handleOutsideClick(e) {
    const tree = getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover");
    if (!parent) {
      this.isMenuOpened = false;
    }
  }
  handleClickHeaders(e) {
    if (!this.sortable) {
      return;
    }
    const tree = getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-registro-table-header");
    if (parent &&
      parent.attributes.getNamedItem("column-id").value !== this.columnId) {
      this.sortingOrientation = SortingOrientation["none"];
    }
  }
  componentWillRender() {
    this.host.setAttribute("role", "columnheader");
  }
  render() {
    return (h(Host, { class: classNames(`size-${this.size}`, {
        sortable: this.sortable,
      }), onClick: () => this.handleSort() },
      h("div", { class: classNames("container") },
        h("slot", null),
        this.sortable && (h("z-icon", { name: this.sortingOrientation === SortingOrientation["asc"]
            ? "arrow-up"
            : "arrow-down", class: classNames("arrow", {
            hidden: this.sortingOrientation === SortingOrientation["none"],
          }) }))),
      this.showButton && (h("div", { class: classNames("popover-container", {
          visible: this.isMenuOpened,
        }) },
        h("z-popover", { position: PopoverPosition["below-center"], "background-color": "gray200" },
          h("z-button", { icon: "contextual-menu", variant: ButtonVariantEnum["tertiary"], size: ButtonSizeEnum["x-small"], square: true, slot: "trigger", onClick: () => this.handleMenuClick() }),
          h("div", { slot: "popover" },
            h("slot", { name: "contextual-menu" })))))));
  }
  static get is() { return "z-registro-table-header"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "columnId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Column ID"
      },
      "attribute": "column-id",
      "reflect": false
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TableHeaderSize",
        "resolved": "TableHeaderSize.large | TableHeaderSize.medium | TableHeaderSize.small | TableHeaderSize.special | typeof TableHeaderSize[\"x-small\"]",
        "references": {
          "TableHeaderSize": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "[Optional] Padding of the header"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "TableHeaderSize[\"medium\"]"
    },
    "sortable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "[Optional] Make the header sortable"
      },
      "attribute": "sortable",
      "reflect": false
    },
    "showButton": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "[Optional] Show contextual menu button"
      },
      "attribute": "show-button",
      "reflect": false
    }
  }; }
  static get states() { return {
    "isMenuOpened": {},
    "sortingOrientation": {}
  }; }
  static get events() { return [{
      "method": "sort",
      "name": "sort",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "[Optional] callback for sorting"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleOutsideClick",
      "target": "body",
      "capture": true,
      "passive": false
    }, {
      "name": "click",
      "method": "handleClickHeaders",
      "target": "body",
      "capture": true,
      "passive": false
    }]; }
}
