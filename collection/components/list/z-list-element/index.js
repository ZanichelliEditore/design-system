import { Component, h, Host, Prop, State } from "@stencil/core";
import { DividerSize, ExpandableListStyle, ExpandableListButtonAlign, ListDividerType, ListSize, } from "../../../beans";
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
    this.dividerColor = "gray200";
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
  /**
   * Handler for click on element. If element is expandable, change state.
   * @returns void
   */
  handleClick() {
    if (!this.expandable) {
      return;
    }
    this.showInnerContent = !this.showInnerContent;
  }
  handleKeyDown(event) {
    const expandByKey = event.code === "Enter" || event.code === "Space";
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
    return (h(Host, { role: "listitem", "aria-expanded": this.expandable ? this.showInnerContent : null, onClick: this.handleClick, onKeyDown: this.handleKeyDown, tabIndex: "0" },
      h("div", { class: "container" },
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
      "defaultValue": "\"gray200\""
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
    }
  }; }
  static get states() { return {
    "showInnerContent": {}
  }; }
}
