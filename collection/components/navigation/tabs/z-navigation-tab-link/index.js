import { h } from "@stencil/core";
import { NavigationTabsOrientation, NavigationTabsSize } from "../../../../beans";
import { ICONS } from "../../../icons/icons";
/**
 * Single tab component to use inside `z-navigation-tabs`. It renders an anchor element.
 */
export class ZNavigationTabLink {
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
    this.selected = true;
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
    return (h("a", { role: "tab", id: this.tabId, href: !this.disabled && this.href, title: this.htmlTitle, target: this.target, onFocus: this.scrollToTab.bind(this), "aria-selected": this.selected ? "true" : "false", "aria-controls": this.ariaControls, tabindex: this.selected ? "0" : "-1" }, this.icon && this.renderIcon(), this.orientation === "horizontal" && this.label));
  }
  static get is() { return "z-navigation-tab-link"; }
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
          "text": "set aria-controls attribute to tab property identifying a corresponding tabpanel\n(that has a tabpanel role) by that element's id.\nWhen an element with the tabpanel role has focus, or a child of it has focus,\nthat indicates that the connected element with the tab role is the active tab in a tablist."
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
          "text": "set id attribute to tab property identifying a corresponding tabpanel\n(that has a tabpanel role) by that element's attribute  aria-labelledby."
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
          "references": {}
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
          "references": {}
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
          "text": "Html title attribute for the anchor element."
        },
        "attribute": "html-title",
        "reflect": false
      },
      "target": {
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
          "text": "Html `target` attribute for the anchor element."
        },
        "attribute": "target",
        "reflect": false
      },
      "href": {
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
          "text": "Url to set to the anchor element."
        },
        "attribute": "href",
        "reflect": false
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
