import { h } from "@stencil/core";
import { NavigationTabsOrientation, NavigationTabsSize } from "../../../../beans";
import { ICONS } from "../../../icons/icons";
/**
 * Single tab component to use inside `z-navigation-tabs`. It renders a button.
 */
export class ZNavigationTab {
  constructor() {
    /**
     * Whether the tab is selected.
     */
    this.selected = false;
    /**
     * Whether the tab is disabled.
     */
    this.disabled = false;
    /**
     * Tab orientation. Do not set this manually: `z-navigation-tabs` will handle this.
     */
    this.orientation = NavigationTabsOrientation.HORIZONTAL;
    /**
     * Tab size. Do not set this manually: `z-navigation-tabs` will handle this.
     */
    this.size = NavigationTabsSize.BIG;
  }
  /**
   * Scroll into view to center the tab.
   */
  scrollToTab({ target: button }) {
    const scrollOptions = this.orientation === NavigationTabsOrientation.HORIZONTAL
      ? { block: "nearest", inline: "center" }
      : { block: "center", inline: "nearest" };
    button.scrollIntoView(Object.assign({ behavior: "smooth" }, scrollOptions));
  }
  onClick() {
    if (!this.disabled) {
      this.selected = true;
    }
  }
  onSelected() {
    if (this.selected) {
      this.selectedEvent.emit();
    }
  }
  /**
   * Render the icon component using the icon's name passed from prop.
   * Use the `filled` version when the tab is `selected`.
   * @returns {HTMLElement}
   */
  renderIcon() {
    let icon = this.icon;
    const iconFilled = `${icon.replace(/-filled$/, "")}-filled`;
    if (this.selected && Object.keys(ICONS).includes(iconFilled)) {
      icon = iconFilled;
    }
    return h("z-icon", { name: icon });
  }
  render() {
    return (h("button", { role: "tab", id: this.tabId, disabled: this.disabled, title: this.htmlTitle, onFocus: this.scrollToTab.bind(this), "aria-selected": this.selected ? "true" : "false", "aria-controls": this.ariaControls, tabindex: this.selected ? "0" : "-1" }, this.icon && this.renderIcon(), this.orientation === NavigationTabsOrientation.HORIZONTAL && this.label));
  }
  static get is() { return "z-navigation-tab"; }
  static get originalStyleUrls() {
    return {
      "$": ["../navigation-tab.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["../navigation-tab.css"]
    };
  }
  static get properties() {
    return {
      "ariaControls": {
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
          "text": "set aria-controls attribute to tab property identifying a corresponding tabpanel\nthe aria-controls attribute refers to the id of the HTML element that has role=\"tabpanel\"\nand that contains the actual content of this tab.\nref: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"
        },
        "attribute": "aria-controls",
        "reflect": false
      },
      "tabId": {
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
          "text": "set id attribute to tab property identifying a corresponding tabpanel attribute aria-labelledby.\nref: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role"
        },
        "attribute": "tab-id",
        "reflect": false
      },
      "selected": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Whether the tab is selected."
        },
        "attribute": "selected",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "Whether the tab is disabled."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "orientation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "NavigationTabsOrientation",
          "resolved": "NavigationTabsOrientation.HORIZONTAL | NavigationTabsOrientation.VERTICAL",
          "references": {
            "NavigationTabsOrientation": {
              "location": "import",
              "path": "../../../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Tab orientation. Do not set this manually: `z-navigation-tabs` will handle this."
        },
        "attribute": "orientation",
        "reflect": true,
        "defaultValue": "NavigationTabsOrientation.HORIZONTAL"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "NavigationTabsSize",
          "resolved": "NavigationTabsSize.BIG | NavigationTabsSize.SMALL",
          "references": {
            "NavigationTabsSize": {
              "location": "import",
              "path": "../../../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Tab size. Do not set this manually: `z-navigation-tabs` will handle this."
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "NavigationTabsSize.BIG"
      },
      "icon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Name of the icon to use.\nThe `filled` version will be automatically used (if found) when the tab is `selected`."
        },
        "attribute": "icon",
        "reflect": false
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Label to show in the tab."
        },
        "attribute": "label",
        "reflect": false
      },
      "htmlTitle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Html `title` attribute for the button."
        },
        "attribute": "html-title",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "selectedEvent",
        "name": "selected",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "The tab has been selected."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "selected",
        "methodName": "onSelected"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "onClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
