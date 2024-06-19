import { h } from "@stencil/core";
import { tabletBreakpoint } from "../../constants/breakpoints";
export class ZButtonSort {
    constructor() {
        this.buttonid = undefined;
        this.label = undefined;
        this.desclabel = undefined;
        this.counter = undefined;
        this.sortlabelasc = "A-Z";
        this.sortlabeldesc = "Z-A";
        this.isselected = false;
        this.sortasc = true;
        this.allowTooltip = false;
    }
    emitButtonSortClick() {
        if (!this.isselected) {
            this.isselected = true;
        }
        else {
            this.sortasc = !this.sortasc;
        }
        this.buttonSortClick.emit({
            buttonid: this.buttonid,
            sortAsc: this.sortasc,
        });
    }
    componentDidLoad() {
        if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint) {
            this.allowTooltip = true;
        }
    }
    setButtonTitle() {
        return this.allowTooltip ? `${this.sortasc ? this.label : this.desclabel}` : "";
    }
    elementHasEllipsis() {
        return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
    }
    render() {
        return (h("button", { key: 'ec1021febf46cd3a012af1142e74157e16e6b363', title: this.setButtonTitle(), id: this.buttonid, class: { selected: this.isselected }, onClick: () => this.emitButtonSortClick() }, h("span", { key: '84013f6114589408dc62323285a1441c94fc9ddf', ref: (el) => (this.ellipsis = el), class: "ellipsis" }, !this.sortasc && this.desclabel ? this.desclabel : this.label), h("span", { key: 'bc938175d5453e7c59f577b92452d63658417e0a', class: "counter" }, this.counter && ` (${this.counter})`), h("span", { key: '10fba0801dcbc47569e79c81179d7a485dc3582e', class: "sort" }, this.sortasc ? this.sortlabelasc : this.sortlabeldesc), h("z-icon", { key: '51035628c557620d4681db63a6a1b6080b57275a', name: "caret-up-down", width: 16, height: 16 })));
    }
    static get is() { return "z-button-sort"; }
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
            "buttonid": {
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
                    "text": "id, should be unique"
                },
                "attribute": "buttonid",
                "reflect": false
            },
            "label": {
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
                    "text": "label content (ascending)"
                },
                "attribute": "label",
                "reflect": false
            },
            "desclabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "label content (descending)"
                },
                "attribute": "desclabel",
                "reflect": false
            },
            "counter": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "occurrences counter (optional)"
                },
                "attribute": "counter",
                "reflect": false
            },
            "sortlabelasc": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "sort label content (ascending) (optional)"
                },
                "attribute": "sortlabelasc",
                "reflect": false,
                "defaultValue": "\"A-Z\""
            },
            "sortlabeldesc": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "sort label content (descending) (optional)"
                },
                "attribute": "sortlabeldesc",
                "reflect": false,
                "defaultValue": "\"Z-A\""
            },
            "isselected": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "selected flag (optional)"
                },
                "attribute": "isselected",
                "reflect": false,
                "defaultValue": "false"
            },
            "sortasc": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "sortable flag (optional)"
                },
                "attribute": "sortasc",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "allowTooltip": {}
        };
    }
    static get events() {
        return [{
                "method": "buttonSortClick",
                "name": "buttonSortClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "sorting direction click event, returns `buttonid` and `sortAsc`"
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
