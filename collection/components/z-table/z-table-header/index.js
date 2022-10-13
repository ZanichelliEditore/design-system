import { h, Host, } from "@stencil/core";
import classNames from "classnames";
import { ButtonSizeEnum, ButtonVariantEnum, PopoverPositions, Size, SortDirectionEnum, } from "../../../beans";
import { getElementTree } from "../../../utils/utils";
export class ZTableHeader {
  constructor() {
    /** Set padding size of cell, if special 0px padding will be set */
    this.padding = Size.medium;
    /** [Optional] Default sort order */
    this.defaultSortDirection = SortDirectionEnum.asc;
    this.sortDirection = SortDirectionEnum.none;
    this.emitOnSort = this.emitOnSort.bind(this);
  }
  emitOnSort() {
    this.sort.emit({
      columnId: this.columnId,
      sortDirection: this.sortDirection,
    });
  }
  handleSort() {
    if (!this.sortable) {
      return;
    }
    this.sortDirection = (() => {
      switch (this.sortDirection) {
        case SortDirectionEnum.asc:
          return SortDirectionEnum.desc;
        case SortDirectionEnum.desc:
          return SortDirectionEnum.asc;
        case SortDirectionEnum.none:
          return this.defaultSortDirection;
        default:
          return SortDirectionEnum.none;
      }
    })();
    this.emitOnSort();
  }
  handleMenuClick() {
    this.popover.open = !this.popover.open;
  }
  handleOutsideClick(e) {
    const tree = getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover");
    if (!parent && this.popover) {
      this.popover.open = false;
    }
  }
  handleClickHeaders(e) {
    const { target } = e;
    const parent = getElementTree(target).find((elem) => elem.nodeName.toLowerCase() === "z-table-header");
    if (!this.sortable || !parent) {
      return;
    }
    const parentColumnId = parent.attributes.getNamedItem("column-id").value;
    const isSortable = target.parentNode.sortable || target.sortable;
    if (parentColumnId !== this.columnId && isSortable) {
      this.sortDirection = SortDirectionEnum.none;
    }
  }
  componentWillRender() {
    this.host.setAttribute("role", "columnheader");
  }
  render() {
    return (h(Host, { class: classNames({
        sortable: this.sortable,
      }), onClick: () => this.handleSort() }, h("div", { class: 'container' }, h("slot", null), this.sortable && this.sortDirection !== SortDirectionEnum.none && (h("z-icon", { name: this.sortDirection === SortDirectionEnum.asc
        ? "arrow-up"
        : "arrow-down", class: "arrow" }))), this.showButton && (h("div", { class: 'popover-container' }, h("z-button", { ref: (el) => (this.triggerButton = el), class: "contextual-popover-button", icon: "contextual-menu", variant: ButtonVariantEnum["tertiary"], size: ButtonSizeEnum["x-small"], onClick: () => this.handleMenuClick() }), h("z-popover", { ref: (el) => (this.popover = el), position: PopoverPositions.bottom, center: true, bindTo: this.triggerButton }, h("div", null, h("slot", { name: "contextual-menu" })))))));
  }
  static get is() { return "z-table-header"; }
  static get encapsulation() { return "shadow"; }
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
      "padding": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Size",
          "resolved": "(typeof Size)[\"x-small\"] | Size.large | Size.medium | Size.small | Size.special",
          "references": {
            "Size": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set padding size of cell, if special 0px padding will be set"
        },
        "attribute": "padding",
        "reflect": true,
        "defaultValue": "Size.medium"
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
      },
      "defaultSortDirection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "SortDirection",
          "resolved": "SortDirectionEnum.asc | SortDirectionEnum.desc | SortDirectionEnum.none",
          "references": {
            "SortDirection": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[Optional] Default sort order"
        },
        "attribute": "default-sort-direction",
        "reflect": false,
        "defaultValue": "SortDirectionEnum.asc"
      },
      "sortDirection": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "SortDirection",
          "resolved": "SortDirectionEnum.asc | SortDirectionEnum.desc | SortDirectionEnum.none",
          "references": {
            "SortDirection": {
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
        "attribute": "sort-direction",
        "reflect": false,
        "defaultValue": "SortDirectionEnum.none"
      }
    };
  }
  static get events() {
    return [{
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
      }];
  }
  static get elementRef() { return "host"; }
  static get listeners() {
    return [{
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
      }];
  }
}
