import { Host, h } from "@stencil/core";
import { randomId } from "../../../utils/utils";
import "../cells/z-td/index";
import "../cells/z-th/index";
/**
 * ZTr component.
 * When the row is `expandable`, you can set the `prevent-expand` css class on an interactive element inside the row
 * to prevent the row from expanding.
 * @slot - ZTr content (`z-td` or `z-th`).
 */
export class ZTr {
    constructor() {
        this.expandable = false;
        this.expanded = false;
        this.expandableContentId = undefined;
    }
    updateColumns() {
        const cells = Array.from(this.host.querySelectorAll("z-td, z-th"));
        if (this.expandable) {
            cells.pop();
        }
        const columns = cells.map((cell) => cell.colspan || 1).reduce((a, b) => a + b, 0);
        this.host.style.setProperty("--columns", `${columns}`);
        if (this.expandable) {
            const expandableContent = cells.pop();
            expandableContent.id = expandableContent.id || `z-tr-expandable-content-${randomId()}`;
            this.expandableContentId = expandableContent.id;
        }
    }
    /**
     * Handle click on row.
     * Skip expansion if the click is on a element with `prevent-expand` css class.
     */
    onRowClick(event) {
        const preventExpand = event.target.closest(".prevent-expand");
        if (!this.expandable || preventExpand) {
            return;
        }
        this.expanded = !this.expanded;
        this.expand.emit({ expanded: this.expanded });
    }
    componentWillLoad() {
        this.updateColumns();
    }
    render() {
        return (h(Host, { key: 'e6eb85f97e4489e01eecd5af25678006642dc04a', role: "row", onClick: this.onRowClick.bind(this), expanded: this.expanded }, h("div", { key: '087fdf308ebfdc458ec2894e55034e17473056b9', class: "z-tr--expand-button-container" }, this.expandable && (h("button", { "aria-expanded": this.expanded ? "true" : "false", "aria-label": this.expanded ? "Comprimi riga" : "Espandi riga", "aria-controls": this.expandableContentId, type: "button" }, h("z-icon", { name: this.expanded ? "minus-circled" : "plus-circled" })))), h("slot", { key: '2acb2edcbf8f5ea71c3da587639ba43c8ece820c', onSlotchange: this.updateColumns.bind(this) })));
    }
    static get is() { return "z-tr"; }
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
            "expandable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the row is expandable.\nUse a `z-td` as the last cell of the row for the additional content.\nIt will show a button to expand/collapse the row.\nThe last cell will be hidden until the button or row is clicked.\n\nIf some element inside the expandable row contains the `prevent-expand` css class,\nthe row will not expand by clicking that element."
                },
                "attribute": "expandable",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "expanded": {},
            "expandableContentId": {}
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
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "expandable",
                "methodName": "updateColumns"
            }];
    }
    static get listeners() {
        return [{
                "name": "colspanchange",
                "method": "updateColumns",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
