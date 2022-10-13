import { h, } from "@stencil/core";
import { PopoverPositions } from "../../beans";
export class ZContextualMenu {
  constructor() {
    /**
     * [optional] Sets text color of ZContextualMenu's content
     */
    this.color = "color-primary01";
    /**
     * [optional] Sets the position of the popover
     */
    this.popoverPosition = PopoverPositions.bottom_right;
  }
  componentWillRender() {
    if (this.elements) {
      this.jsonElements = JSON.parse(this.elements.replace(/&quot;/g, '"'));
    }
  }
  componentDidLoad() {
    this.popover.bindTo = this.triggerButton;
  }
  showIcon() {
    return !this.jsonElements.some((element) => !element.icon);
  }
  togglePopover() {
    if (!this.popover.open) {
      this.popover.open = true;
    }
  }
  render() {
    var _a, _b;
    return [
      h("button", { ref: (el) => (this.triggerButton = el), "aria-label": ((_a = this.popover) === null || _a === void 0 ? void 0 : _a.open) ? "chiudi menu contestuale" : "apri menu contestuale", onClick: () => this.togglePopover() }, h("z-icon", { name: "contextual-menu", fill: this.color })),
      h("z-popover", { ref: (el) => (this.popover = el), position: this.popoverPosition }, h("div", { class: "popover-content-container" }, h("z-list", null, h("z-list-group", { "divider-type": "element" }, (_b = this.jsonElements) === null || _b === void 0 ? void 0 : _b.map((element, index) => (h("z-list-element", { clickable: !element.disabled, class: "my-z-list-element", "align-button": "left", "expandable-style": "accordion", color: element.disabled ? `color-disabled03` : this.color, isContextualMenu: true, listElementId: index, onClickItem: (event) => this.clickContextualMenu.emit(event.detail) }, h("div", { class: element.disabled
          ? "disabled-element-container"
          : "element-container" }, this.showIcon() && (h("div", { class: "element-icon" }, h("z-icon", { name: element.icon, width: 16, height: 16 }))), h("div", { class: "element-text" }, h("span", null, element.text))))))))))
    ];
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
          "original": "PopoverPositions",
          "resolved": "PopoverPositions.auto | PopoverPositions.bottom | PopoverPositions.bottom_left | PopoverPositions.bottom_right | PopoverPositions.left | PopoverPositions.left_bottom | PopoverPositions.left_top | PopoverPositions.right | PopoverPositions.right_bottom | PopoverPositions.right_top | PopoverPositions.top | PopoverPositions.top_left | PopoverPositions.top_right",
          "references": {
            "PopoverPositions": {
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
        "defaultValue": "PopoverPositions.bottom_right"
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
