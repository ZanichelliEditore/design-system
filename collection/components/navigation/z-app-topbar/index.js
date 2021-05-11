import { Component, Prop, Element, h, State, Listen } from "@stencil/core";
import { ThemeVariant } from "../../../beans";
import { mobileBreakpoint } from "../../../constants/breakpoints";
export class ZAppTopbar {
  constructor() {
    /** theme variant, default 'dark' */
    this.theme = ThemeVariant.dark;
  }
  handleResize() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
    this.toggleLinkLabels();
  }
  handleOrientationChange() {
    this.isMobile = screen.width <= mobileBreakpoint;
    this.toggleLinkLabels();
  }
  componentWillLoad() {
    this.zLinksValues = Array.from(this.hostElement.children)
      .filter((child) => child.nodeName === "Z-LINK")
      .map((link) => link.childNodes[0].nodeValue);
    this.isMobile = window.screen.width <= mobileBreakpoint || window.innerWidth <= mobileBreakpoint;
    this.toggleLinkLabels();
  }
  toggleLinkLabels() {
    if (this.hostElement) {
      const zLinks = Array.from(this.hostElement.children).filter((child) => child.nodeName === "Z-LINK");
      if (this.isMobile) {
        zLinks.forEach((link) => {
          link.childNodes[0].nodeValue = "";
        });
      }
      else {
        zLinks.forEach((link, i) => {
          link.childNodes[0].nodeValue = this.zLinksValues[i];
        });
      }
    }
  }
  render() {
    return (h("div", { class: this.theme },
      h("div", { class: "left" },
        h("slot", { name: "logo" }),
        this.hashtag && h("span", { id: "hashtag" }, this.hashtag.replace(/\s/g, ''))),
      h("div", { class: `right ${this.logged && this.isMobile && "hide-actions"}` },
        h("slot", { name: "actions" }),
        h("slot", { name: "login" }),
        h("slot", { name: "app-switcher" }))));
  }
  static get is() { return "z-app-topbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "theme": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ThemeVariantBean",
        "resolved": "\"dark\" | \"light\"",
        "references": {
          "ThemeVariantBean": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "theme variant, default 'dark'"
      },
      "attribute": "theme",
      "reflect": false,
      "defaultValue": "ThemeVariant.dark"
    },
    "logged": {
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
        "text": "logged status flag"
      },
      "attribute": "logged",
      "reflect": false
    },
    "hashtag": {
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
        "text": "optional hashtag string"
      },
      "attribute": "hashtag",
      "reflect": false
    }
  }; }
  static get states() { return {
    "zLinksValues": {},
    "isMobile": {}
  }; }
  static get elementRef() { return "hostElement"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": false,
      "passive": true
    }, {
      "name": "orientationchange",
      "method": "handleOrientationChange",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
