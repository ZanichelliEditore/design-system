import { Host, h } from "@stencil/core";
import { ButtonVariant, ControlSize, PopoverPosition, SortDirection } from "../../../../beans";
/**
 * ZTh component.
 * @slot - ZTh content.
 * @slot contextual-menu - Contextual menu content. Only visible when `showMenu` is true.
 */
export class ZTh {
    constructor() {
        this.colspan = undefined;
        this.showMenu = null;
        this.sticky = false;
        this.sortDirection = undefined;
        this.popoverPosition = PopoverPosition.AUTO;
        this.isMenuOpen = false;
    }
    /**
     * Get the value to set to the `aria-sort` attribute based on the current sort direction.
     */
    get ariaSortDirection() {
        if (!this.sortDirection) {
            return null;
        }
        return this.sortDirection === SortDirection.ASC ? "ascending" : "descending";
    }
    /**
     * Handle the click on the sort button.
     * @fires sort
     */
    handleSort() {
        if (!this.sortDirection) {
            return;
        }
        this.sortDirection = this.sortDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;
        this.sort.emit({
            sortDirection: this.sortDirection,
        });
    }
    updateColspan() {
        if (this.colspan) {
            this.host.style.gridColumn = `span ${this.colspan}`;
        }
        else {
            this.host.style.removeProperty("grid-column");
        }
    }
    componentWillLoad() {
        this.updateColspan();
    }
    render() {
        return (h(Host, { key: '6d7379e559b77ea796584c9cdc49be8dabb3cd67', role: "columnheader", "menu-open": this.isMenuOpen, "aria-sort": this.ariaSortDirection }, h("slot", { key: 'e21bf2439c1061cf7acaeddb6a3afe8818112493' }), this.sortDirection && (h("button", { key: 'e65ed301cea08cb0cdaf3ce2b13cb06dc61705ea', class: "z-th--sort-button", type: "button", onClick: this.handleSort.bind(this) }, h("z-icon", { key: '1768ea275af78502035d66fb2a4f80fff68bc6e0', name: this.sortDirection === SortDirection.ASC ? "arrow-simple-up" : "arrow-simple-down", width: 14, height: 14 }))), this.showMenu && (h("div", { key: 'b516e407bc90fa95fa1ae914a344cdcd89f38336', class: "cell--menu-container" }, h("z-button", { key: '4f76bb047c904a88d2e78117811932b9cc9b409d', variant: ButtonVariant.TERTIARY, icon: "contextual-menu", size: ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: () => (this.popoverEl.open = !this.popoverEl.open) }), h("z-popover", { key: '08fcadf9b57a3184f8fceef2925c19ef3d9f659e', ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open), position: this.popoverPosition }, h("slot", { key: '4f2ad7d81457d1132d3b156368bd96813994fc3c', name: "contextual-menu" }))))));
    }
    static get is() { return "z-th"; }
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
            "colspan": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number of columns that the cell should span."
                },
                "attribute": "colspan",
                "reflect": false
            },
            "showMenu": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "VisibilityCondition",
                    "resolved": "VisibilityCondition.ALWAYS | VisibilityCondition.HOVER",
                    "references": {
                        "VisibilityCondition": {
                            "location": "import",
                            "path": "../../../../beans",
                            "id": "src/beans/index.tsx::VisibilityCondition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enables the contextual menu.\nCan be set to \"hover\" or \"always\" to show the button only on cell hover or always.\nSet a nullish value to hide the menu button."
                },
                "attribute": "show-menu",
                "reflect": true,
                "defaultValue": "null"
            },
            "sticky": {
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
                    "text": "Whether the cell should stick."
                },
                "attribute": "sticky",
                "reflect": true,
                "defaultValue": "false"
            },
            "sortDirection": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "SortDirection",
                    "resolved": "SortDirection.ASC | SortDirection.DESC",
                    "references": {
                        "SortDirection": {
                            "location": "import",
                            "path": "../../../../beans",
                            "id": "src/beans/index.tsx::SortDirection"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Current sorting direction.\nSet `SortDirection.ASC` or `SortDirection.DESC` to show the sort icon."
                },
                "attribute": "sort-direction",
                "reflect": false
            },
            "popoverPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PopoverPosition",
                    "resolved": "PopoverPosition.AUTO | PopoverPosition.BOTTOM | PopoverPosition.BOTTOM_LEFT | PopoverPosition.BOTTOM_RIGHT | PopoverPosition.LEFT | PopoverPosition.LEFT_BOTTOM | PopoverPosition.LEFT_TOP | PopoverPosition.RIGHT | PopoverPosition.RIGHT_BOTTOM | PopoverPosition.RIGHT_TOP | PopoverPosition.TOP | PopoverPosition.TOP_LEFT | PopoverPosition.TOP_RIGHT",
                    "references": {
                        "PopoverPosition": {
                            "location": "import",
                            "path": "../../../../beans",
                            "id": "src/beans/index.tsx::PopoverPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set popover position."
                },
                "attribute": "popover-position",
                "reflect": false,
                "defaultValue": "PopoverPosition.AUTO"
            }
        };
    }
    static get states() {
        return {
            "isMenuOpen": {}
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
                    "text": "Sort event fired when the user clicks on the sort button.\nThe sorting logic must be implemented by the app.\nYou can set an `id` on the `z-th` to easly identify the column in the event listener."
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
                "propName": "colspan",
                "methodName": "updateColspan"
            }];
    }
}
//# sourceMappingURL=index.js.map
