import { Component, Event, Host, Prop, h } from "@stencil/core";
import { ListSize, PopoverPosition } from "../../beans";
export class ContextualMenu {
  constructor() {
    /**
     * [optional] Sets text color of ContextualMenu's content
     */
    this.color = "color-primary01";
  }
  componentWillLoad() {
    if (this.elements) {
      this.jsonElements = JSON.parse(this.elements.replace(/&quot;/g, '"'));
    }
  }
  showIcon() {
    return !this.jsonElements.some((element) => !element.icon);
  }
  render() {
    var _a;
    return (h(Host, null,
      h("z-popover", { "background-color": "color-background", "box-shadow": "shadow-2", position: PopoverPosition["after-down"], padding: "0" },
        h("z-icon", { "aria-label": "apri-menu-contestuale", slot: "trigger", name: "contextual-menu", fill: "color-primary01", style: { cursor: "pointer" } }),
        h("div", { class: "popover-content-container", slot: "popover" },
          h("z-list", null,
            h("z-list-group", { "divider-type": "element", size: ListSize.small }, (_a = this.jsonElements) === null || _a === void 0 ? void 0 : _a.map((element, index) => (h("z-list-element", { clickable: !element.disabled, class: "my-z-list-element", "align-button": "left", "expandable-style": "accordion", color: element.disabled ? `gray500` : this.color, isContextualMenu: true, listElementId: index, onClickItem: (event) => this.clickContextualMenu.emit(event.detail) },
              h("div", { class: element.disabled
                  ? "disabled-element-container"
                  : "element-container" },
                this.showIcon() && (h("div", { class: "element-icon" },
                  h("z-icon", { name: element.icon }))),
                h("div", { class: "element-text" },
                  h("span", null, element.text))))))))))));
  }
  static get is() { return "contextual-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
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
        "text": "elements of ContextualMenu"
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
        "text": "[optional] Sets text color of ContextualMenu's content"
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "\"color-primary01\""
    }
  }; }
  static get events() { return [{
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
    }]; }
}
