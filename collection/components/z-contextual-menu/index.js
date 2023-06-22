import { h, Host } from "@stencil/core";
import { PopoverPosition } from "../../beans";
export class ZContextualMenu {
  constructor() {
    /**
     * [optional] Sets text color of ZContextualMenu's content
     */
    this.color = "color-primary01";
    /**
     * [optional] Sets the position of the popover
     */
    this.popoverPosition = PopoverPosition.BOTTOM_RIGHT;
  }
  componentWillRender() {
    if (this.elements) {
      this.jsonElements = JSON.parse(this.elements.replace(/&quot;/g, '"'));
    }
  }
  componentDidLoad() {
    this.popoverEl.bindTo = this.triggerButton;
  }
  showIcon() {
    return !this.jsonElements.some((element) => !element.icon);
  }
  togglePopover() {
    if (!this.popoverEl.open) {
      this.popoverEl.open = true;
    }
  }
  render() {
    var _a, _b;
    return (h(Host, null, h("button", { ref: (el) => (this.triggerButton = el), "aria-label": ((_a = this.popoverEl) === null || _a === void 0 ? void 0 : _a.open) ? "chiudi menu contestuale" : "apri menu contestuale", onClick: () => this.togglePopover() }, h("z-icon", { name: "contextual-menu", fill: this.color })), h("z-popover", { ref: (el) => (this.popoverEl = el), position: this.popoverPosition }, h("div", { class: "popover-content-container" }, h("z-list", null, h("z-list-group", { "divider-type": "element" }, (_b = this.jsonElements) === null || _b === void 0 ? void 0 : _b.map((element, index) => (h("z-list-element", { clickable: !element.disabled, class: "my-z-list-element", "align-button": "left", "expandable-style": "accordion", color: element.disabled ? `color-disabled03` : this.color, isContextualMenu: true, listElementId: index, onClickItem: (event) => this.clickContextualMenu.emit(event.detail) }, h("div", { class: element.disabled ? "disabled-element-container" : "element-container" }, this.showIcon() && (h("div", { class: "element-icon" }, h("z-icon", { name: element.icon, width: 16, height: 16 }))), h("div", { class: "element-text" }, h("span", null, element.text))))))))))));
  }
  static get is() { return "z-contextual-menu"; }
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
      "elements": {
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
          "text": "Elements of ZContextualMenu"
        },
        "attribute": "elements",
        "reflect": false
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
          "text": "[optional] Sets text color of ZContextualMenu's content"
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "\"color-primary01\""
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
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Sets the position of the popover"
        },
        "attribute": "popover-position",
        "reflect": true,
        "defaultValue": "PopoverPosition.BOTTOM_RIGHT"
      }
    };
  }
  static get events() {
    return [{
        "method": "clickContextualMenu",
        "name": "clickContextualMenu",
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
}
