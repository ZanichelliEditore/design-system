import { h, Host } from "@stencil/core";
import { DividerSize, ExpandableListButtonAlign, ExpandableListStyle, KeyboardCode, ListDividerType, ListSize, ListType, } from "../../../beans";
export class ZListElement {
    accessibleFocusHandler(e) {
        if (this.listElementId === e.detail) {
            const toFocus = this.host.shadowRoot.getElementById(`z-list-element-id-${e.detail}`);
            toFocus.focus();
        }
    }
    /**
     * Constructor.
     */
    constructor() {
        this.openElementConfig = {
            accordion: {
                open: "minus-circled",
                close: "plus-circled",
            },
            menu: {
                open: "chevron-up",
                close: "chevron-down",
            },
        };
        this.alignButton = ExpandableListButtonAlign.LEFT;
        this.clickable = false;
        this.dividerColor = "color-surface03";
        this.dividerType = ListDividerType.NONE;
        this.dividerSize = DividerSize.SMALL;
        this.expandable = false;
        this.expandableStyle = ExpandableListStyle.ACCORDION;
        this.listElementId = undefined;
        this.size = ListSize.MEDIUM;
        this.color = "none";
        this.disabled = false;
        this.listElementPosition = "0";
        this.listType = ListType.NONE;
        this.role = "listitem";
        this.htmlTabindex = 0;
        this.showInnerContent = false;
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    /**
     * Handler for click on element. If element is expandable, change state.
     * @returns void
     */
    handleClick() {
        this.clickItem.emit(this.listElementId);
        if (!this.expandable) {
            return;
        }
        this.showInnerContent = !this.showInnerContent;
    }
    handleKeyDown(event) {
        const expandByKey = event.code === KeyboardCode.ENTER;
        switch (event.code) {
            case KeyboardCode.ARROW_DOWN:
                event.preventDefault();
                this.accessibleFocus.emit(this.listElementId + 1);
                break;
            case KeyboardCode.ARROW_UP:
                event.preventDefault();
                this.accessibleFocus.emit(this.listElementId - 1);
                break;
            case KeyboardCode.ENTER:
                event.preventDefault();
                this.clickItem.emit(this.listElementId);
                break;
            default:
                break;
        }
        if (!this.expandable || !expandByKey) {
            return;
        }
        this.showInnerContent = !this.showInnerContent;
    }
    /**
     * Renders button to expand element.
     * @returns expadable button
     */
    renderExpandableButton() {
        if (!this.expandable) {
            return null;
        }
        return (h("z-icon", { name: this.showInnerContent
                ? this.openElementConfig[this.expandableStyle].open
                : this.openElementConfig[this.expandableStyle].close }));
    }
    /**
     * Renders expanded content if element is expandable.
     * @returns expanded content
     */
    renderExpandedContent() {
        if (!this.expandable) {
            return null;
        }
        return (h("div", { class: {
                "z-list-element-inner-container": true,
                "expanded": this.showInnerContent,
            } }, h("slot", { name: "inner-content" })));
    }
    /**
     * Renders content of the z-list-element
     * @returns list content
     */
    renderContent() {
        if (this.listType === ListType.NONE) {
            return h("slot", null);
        }
        if (this.listType === ListType.ORDERED) {
            return (h("div", { class: "z-list-content-container" }, h("div", null, this.listElementPosition, ".\u2003"), h("slot", null)));
        }
        if (this.listType === ListType.UNORDERED) {
            return (h("div", { class: "z-list-content-container" }, h("span", null, "\u2022\u2003"), h("slot", null)));
        }
    }
    render() {
        return (h(Host, { key: 'fb33c5abf92ac7e89faea59b46358c847fd7efab', "aria-expanded": this.expandable ? this.showInnerContent : null, onClick: this.handleClick, onFocus: () => this.ariaDescendantFocus.emit(this.listElementId), onKeyDown: this.handleKeyDown, clickable: this.clickable && !this.disabled, tabIndex: this.htmlTabindex }, h("div", { key: '0bd49dca96fcb7ddfb8201ea0f3b6501b633bbbb', class: "container", style: { color: `var(--${this.color})` }, tabindex: "-1", id: `z-list-element-id-${this.listElementId}`, part: "list-item-container" }, h("div", { key: '5a548758092f2062823021a2c0ddd097f0296646', class: "z-list-element-container" }, this.renderExpandableButton(), this.renderContent()), this.renderExpandedContent()), this.dividerType === ListDividerType.ELEMENT && (h("z-divider", { color: this.dividerColor, size: this.dividerSize }))));
    }
    static get is() { return "z-list-element"; }
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
            "alignButton": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ExpandableListButtonAlign",
                    "resolved": "ExpandableListButtonAlign.LEFT | ExpandableListButtonAlign.RIGHT",
                    "references": {
                        "ExpandableListButtonAlign": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ExpandableListButtonAlign"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Align expandable button left or right."
                },
                "attribute": "align-button",
                "reflect": true,
                "defaultValue": "ExpandableListButtonAlign.LEFT"
            },
            "clickable": {
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
                    "text": "[optional] Sets element clickable."
                },
                "attribute": "clickable",
                "reflect": true,
                "defaultValue": "false"
            },
            "dividerColor": {
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
                    "text": "[optional] Sets the divider color."
                },
                "attribute": "divider-color",
                "reflect": false,
                "defaultValue": "\"color-surface03\""
            },
            "dividerType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ListDividerType",
                    "resolved": "ListDividerType.ELEMENT | ListDividerType.HEADER | ListDividerType.NONE",
                    "references": {
                        "ListDividerType": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ListDividerType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Sets the position where to insert the divider."
                },
                "attribute": "divider-type",
                "reflect": false,
                "defaultValue": "ListDividerType.NONE"
            },
            "dividerSize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DividerSize",
                    "resolved": "DividerSize.LARGE | DividerSize.MEDIUM | DividerSize.SMALL",
                    "references": {
                        "DividerSize": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::DividerSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Sets the divider size."
                },
                "attribute": "divider-size",
                "reflect": false,
                "defaultValue": "DividerSize.SMALL"
            },
            "expandable": {
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
                    "text": "[optional] Sets element as expandable."
                },
                "attribute": "expandable",
                "reflect": true,
                "defaultValue": "false"
            },
            "expandableStyle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ExpandableListStyle",
                    "resolved": "ExpandableListStyle.ACCORDION | ExpandableListStyle.MENU",
                    "references": {
                        "ExpandableListStyle": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ExpandableListStyle"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Sets expandable style to element."
                },
                "attribute": "expandable-style",
                "reflect": false,
                "defaultValue": "ExpandableListStyle.ACCORDION"
            },
            "listElementId": {
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
                    "text": "[optional] List element id."
                },
                "attribute": "list-element-id",
                "reflect": true
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ListSize",
                    "resolved": "ListSize.LARGE | ListSize.MEDIUM | ListSize.SMALL | ListSize.X_LARGE",
                    "references": {
                        "ListSize": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ListSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Sets size of inside elements."
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "ListSize.MEDIUM"
            },
            "color": {
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
                    "text": "[optional] Sets text color of the element."
                },
                "attribute": "color",
                "reflect": true,
                "defaultValue": "\"none\""
            },
            "disabled": {
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
                    "text": "[optional] Sets disabled style of the element."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "listElementPosition": {
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
                    "text": "[optional] position of the list element inside the list or the group"
                },
                "attribute": "list-element-position",
                "reflect": true,
                "defaultValue": "\"0\""
            },
            "listType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ListType",
                    "resolved": "ListType.NONE | ListType.ORDERED | ListType.UNORDERED",
                    "references": {
                        "ListType": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ListType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] type of the list marker for each element"
                },
                "attribute": "list-type",
                "reflect": true,
                "defaultValue": "ListType.NONE"
            },
            "role": {
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
                    "text": "[optional] Sets element role."
                },
                "attribute": "role",
                "reflect": true,
                "defaultValue": "\"listitem\""
            },
            "htmlTabindex": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "set tabindex to Host tag (optional). Defaults to 0."
                },
                "attribute": "html-tabindex",
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "showInnerContent": {}
        };
    }
    static get events() {
        return [{
                "method": "accessibleFocus",
                "name": "accessibleFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "remove filter click event, returns filterid"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "ariaDescendantFocus",
                "name": "ariaDescendantFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "set parent aria-activedescendant on focus event, returns filterid"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "clickItem",
                "name": "clickItem",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "remove filter click event, returns filterid"
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
                "name": "accessibleFocus",
                "method": "accessibleFocusHandler",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
