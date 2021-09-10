import { Component, Element, Event, h, Host, Listen, Prop, State, } from "@stencil/core";
import { DividerSize, ExpandableListButtonAlign, ExpandableListStyle, KeyboardKeys, ListDividerType, ListSize, } from "../../../beans";
export class ZListElement {
  /**
   * Constructor.
   */
  constructor() {
    /**
     * [optional] Align expandable button left or right.
     */
    this.alignButton = ExpandableListButtonAlign.left;
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
    this.dividerType = ListDividerType.none;
    /**
     * [optional] Sets the divider size.
     */
    this.dividerSize = DividerSize.small;
    /**
     * [optional] Sets element as expandable.
     */
    this.expandable = false;
    /**
     * [optional] Sets expandable style to element.
     */
    this.expandableStyle = ExpandableListStyle.accordion;
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = ListSize.medium;
    /**
     * [optional] Sets text color of the element.
     */
    this.color = "none";
    /**
     * [optional] Sets disabled style of the element.
     */
    this.disabled = false;
    /**
     * [optional] If is used in ContextualMenu component
     */
    this.isContextualMenu = false;
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
    const expandByKey = event.code === KeyboardKeys.ENTER;
    switch (event.code) {
      case KeyboardKeys.ARROW_DOWN:
        event.preventDefault();
        this.accessibleFocus.emit(this.listElementId + 1);
        break;
      case KeyboardKeys.ARROW_UP:
        event.preventDefault();
        this.accessibleFocus.emit(this.listElementId - 1);
        break;
      case KeyboardKeys.ENTER:
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
        expanded: this.showInnerContent,
      } },
      h("slot", { name: "inner-content" })));
  }
  render() {
    return (h(Host, { role: "listitem", "aria-expanded": this.expandable ? this.showInnerContent : null, onClick: this.handleClick, onKeyDown: this.handleKeyDown, clickable: this.clickable && !this.disabled, tabIndex: !this.isContextualMenu ? "0" : null },
      h("div", { class: `${this.calculateClass()}`, style: { color: `var(--${this.color})` }, tabindex: this.isContextualMenu ? "0" : "-1", id: `z-list-element-id-${this.listElementId}` },
        h("div", { class: "z-list-element-container" },
          this.renderExpandableButton(),
          h("slot", null)),
        this.renderExpandedContent()),
      this.dividerType === ListDividerType.element && (h("z-divider", { color: this.dividerColor, size: this.dividerSize }))));
  }
  static get is() { return "z-list-element"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "alignButton": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ExpandableListButtonAlign",
        "resolved": "ExpandableListButtonAlign.left | ExpandableListButtonAlign.right",
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
      "defaultValue": "ExpandableListButtonAlign.left"
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
        "resolved": "ListDividerType.element | ListDividerType.header | ListDividerType.none",
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
      "defaultValue": "ListDividerType.none"
    },
    "dividerSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "DividerSize",
        "resolved": "DividerSize.large | DividerSize.medium | DividerSize.small",
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
      "defaultValue": "DividerSize.small"
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
        "resolved": "ExpandableListStyle.accordion | ExpandableListStyle.menu",
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
      "defaultValue": "ExpandableListStyle.accordion"
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
        "text": ""
      },
      "attribute": "list-element-id",
      "reflect": true
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ListSize",
        "resolved": "ListSize.large | ListSize.medium | ListSize.small | typeof ListSize[\"x-large\"]",
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
      "defaultValue": "ListSize.medium"
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
        "text": "[optional] If is used in ContextualMenu component"
      },
      "attribute": "is-contextual-menu",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "showInnerContent": {}
  }; }
  static get events() { return [{
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
    }]; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "accessibleFocus",
      "method": "accessibleFocusHandler",
      "target": "document",
      "capture": false,
      "passive": false
    }]; }
}
