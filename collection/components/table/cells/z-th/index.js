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
        return (h(Host, { key: '222509e3075cd7a6668301f8b54cebd3af7bd843', role: "columnheader", "menu-open": this.isMenuOpen, "aria-sort": this.ariaSortDirection }, h("slot", { key: '728dffd6851b3b9f6647a136c0d84d0da10c894b' }), this.sortDirection && (h("button", { key: 'a75b468b0057f404fdfcafd77cf63f10999f274a', class: "z-th--sort-button", type: "button", onClick: this.handleSort.bind(this) }, h("z-icon", { key: '9d4ac199ba40228afd8b4ac087effde4ae37f55b', name: this.sortDirection === SortDirection.ASC ? "arrow-simple-up" : "arrow-simple-down", width: 14, height: 14 }))), this.showMenu && (h("div", { key: '4769a6dfa1e6222448b1d409746dbe1f6420cc5d', class: "cell--menu-container" }, h("z-button", { key: '90951859a7fdcaddec8769e95d8a65de5c7e5ff7', variant: ButtonVariant.TERTIARY, icon: "contextual-menu", size: ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: () => (this.popoverEl.open = !this.popoverEl.open) }), h("z-popover", { key: '3066d766feab4b810d41b78a5f3801cbffa5688d', ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open), position: this.popoverPosition }, h("slot", { key: '9bf90081ba6d5c82cdd9c69f0dd536bda756b8af', name: "contextual-menu" }))))));
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
