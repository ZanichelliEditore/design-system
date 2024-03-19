import { h, Host } from "@stencil/core";
import { ButtonSize, ButtonVariant, PopoverPosition } from "../../../beans";
import { getElementTree } from "../../../utils/utils";
/**
 * @deprecated
 */
export class ZTableHeader {
    constructor() {
        this.columnId = undefined;
        this.padding = "medium";
        this.sortable = undefined;
        this.showButton = undefined;
        this.defaultSortDirection = "asc";
        this.sortDirection = "none";
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
                case "asc":
                    return "desc";
                case "desc":
                    return "asc";
                case "none":
                    return this.defaultSortDirection;
                default:
                    return "none";
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
        const target = e.target;
        const parent = getElementTree(target).find((elem) => elem.nodeName.toLowerCase() === "z-table-header");
        if (!this.sortable || !parent) {
            return;
        }
        const parentColumnId = parent.attributes.getNamedItem("column-id").value;
        const isSortable = target.parentNode.sortable || target.sortable;
        if (parentColumnId !== this.columnId && isSortable) {
            this.sortDirection = "none";
        }
    }
    componentWillRender() {
        this.host.setAttribute("role", "columnheader");
    }
    render() {
        return (h(Host, { key: 'c67ac7a04f00b5252e3c988a46b80843dc911d2e', class: {
                sortable: this.sortable,
            }, onClick: () => this.handleSort() }, h("div", { key: 'f569e12c8d7ae2bc30884f11bf1b2636cf66e8d9', class: "container" }, h("slot", { key: 'c524c4ec78be5a6aded8bd4e92018fe16147561f' }), this.sortable && this.sortDirection !== "none" && (h("z-icon", { name: this.sortDirection === "asc" ? "arrow-up" : "arrow-down", class: "arrow" }))), this.showButton && (h("div", { class: "popover-container" }, h("z-button", { ref: (el) => (this.triggerButton = el), class: "contextual-popover-button", icon: "contextual-menu", variant: ButtonVariant.TERTIARY, size: ButtonSize.X_SMALL, onClick: () => this.handleMenuClick() }), h("z-popover", { ref: (el) => (this.popover = el), position: PopoverPosition.BOTTOM, center: true, bindTo: this.triggerButton }, h("div", null, h("slot", { name: "contextual-menu" })))))));
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
                    "original": "\"x-small\" | \"small\" | \"medium\" | \"large\" | \"special\"",
                    "resolved": "\"large\" | \"medium\" | \"small\" | \"special\" | \"x-small\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set padding size of cell, if special 0px padding will be set"
                },
                "attribute": "padding",
                "reflect": true,
                "defaultValue": "\"medium\""
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
                    "original": "\"asc\" | \"desc\" | \"none\"",
                    "resolved": "\"asc\" | \"desc\" | \"none\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[Optional] Default sort order"
                },
                "attribute": "default-sort-direction",
                "reflect": false,
                "defaultValue": "\"asc\""
            },
            "sortDirection": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "\"asc\" | \"desc\" | \"none\"",
                    "resolved": "\"asc\" | \"desc\" | \"none\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sort direction"
                },
                "attribute": "sort-direction",
                "reflect": false,
                "defaultValue": "\"none\""
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
//# sourceMappingURL=index.js.map
