import { h, Host } from "@stencil/core";
import { DividerSize, ExpandableListButtonAlign, ExpandableListStyle, KeyboardCode, ListDividerType, ListSize, ListType, } from "../../../beans";
export class ZListElement {
  /**
   * Constructor.
   */
  constructor() {
    /**
     * [optional] Align expandable button left or right.
     */
    this.alignButton = ExpandableListButtonAlign.LEFT;
    /**
     * [optional] Sets element clickable.
     */
    this.clickable = false;
    /**
     * [optional] Sets the divider color.
     */
    this.dividerColor = "color-surface03";
    /**
     * [optional] Sets the position where to insert the divider.
     */
    this.dividerType = ListDividerType.NONE;
    /**
     * [optional] Sets the divider size.
     */
    this.dividerSize = DividerSize.SMALL;
    /**
     * [optional] Sets element as expandable.
     */
    this.expandable = false;
    /**
     * [optional] Sets expandable style to element.
     */
    this.expandableStyle = ExpandableListStyle.ACCORDION;
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = ListSize.MEDIUM;
    /**
     * [optional] Sets text color of the element.
     */
    this.color = "none";
    /**
     * [optional] Sets disabled style of the element.
     */
    this.disabled = false;
    /**
     * [optional] If is used in ZContextualMenu component
     */
    this.isContextualMenu = false;
    /**
     * [optional] position of the list element inside the list or the group
     */
    this.listElementPosition = "0";
    /**
     * [optional] type of the list marker for each element
     */
    this.listType = ListType.NONE;
    /**
     * [optional] Sets element role.
     */
    this.role = "listitem";
    this.showInnerContent = false;
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
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  accessibleFocusHandler(e) {
    if (this.listElementId === e.detail) {
      const toFocus = this.host.shadowRoot.getElementById(`z-list-element-id-${e.detail}`);
      toFocus.focus();
    }
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
  calculateClass() {
    if (this.isContextualMenu) {
      return "container-contextual-menu";
    }
    return "container";
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
    return (h(Host, { "aria-expanded": this.expandable ? this.showInnerContent : null, onClick: this.handleClick, onFocus: () => this.ariaDescendantFocus.emit(this.listElementId), onKeyDown: this.handleKeyDown, clickable: this.clickable && !this.disabled, tabIndex: !this.isContextualMenu ? "0" : null }, h("div", { class: `${this.calculateClass()}`, style: { color: `var(--${this.color})` }, tabindex: this.isContextualMenu ? "0" : "-1", id: `z-list-element-id-${this.listElementId}`, part: "list-item-container" }, h("div", { class: "z-list-element-container" }, this.renderExpandableButton(), this.renderContent()), this.renderExpandedContent()), this.dividerType === ListDividerType.ELEMENT && (h("z-divider", { color: this.dividerColor, size: this.dividerSize }))));
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
              "path": "../../../beans"
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
              "path": "../../../beans"
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
              "path": "../../../beans"
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
              "path": "../../../beans"
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
              "path": "../../../beans"
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
      "isContextualMenu": {
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
          "text": "[optional] If is used in ZContextualMenu component"
        },
        "attribute": "is-contextual-menu",
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
              "path": "../../../beans"
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
