import { Host, h } from "@stencil/core";
import { ButtonVariant, ControlSize } from "../../../../beans";
/**
 * ZTd component.
 * @slot - ZTd content.
 */
export class ZTd {
    constructor() {
        this.colspan = undefined;
        this.sticky = false;
        this.showMenu = null;
        this.isMenuOpen = false;
    }
    updateColspan() {
        if (this.colspan) {
            this.host.style.gridColumn = `span ${this.colspan}`;
        }
        else {
            this.host.style.removeProperty("grid-column");
        }
        this.colspanChange.emit(this.colspan || 1);
    }
    onMenuButtonClick(ev) {
        ev.stopPropagation();
        this.popoverEl.open = !this.popoverEl.open;
    }
    componentWillLoad() {
        this.updateColspan();
    }
    render() {
        return (h(Host, { key: '1fea1ea7d31da2e0042696d5c3036493ab0b173d', role: "cell", "menu-open": this.isMenuOpen }, h("slot", { key: 'a836a18a19decbe4b7fed5a6f038332c5c14cdd2' }), this.showMenu && (h("div", { key: '7d06355b81a0bac85f5e8248737881436a44e3d7', class: "cell--menu-container prevent-expand" }, h("z-button", { key: '4d039e48c2e30cfb522fda920ae3aaadaa3ef8ae', variant: ButtonVariant.TERTIARY, icon: "contextual-menu", size: ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: this.onMenuButtonClick.bind(this) }), h("z-popover", { key: 'efa44a812bb9f7c9e18ab884fcf53685d90de52e', ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open) }, h("slot", { key: '010336ffd3977a84af2c616d300afc7001e225a4', name: "contextual-menu" }))))));
    }
    static get is() { return "z-td"; }
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
                "method": "colspanChange",
                "name": "colspanChange",
                "bubbles": true,
                "cancelable": false,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value of the `colspan` changes."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
