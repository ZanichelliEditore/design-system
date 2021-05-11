import { Component, Prop, State, Event, Listen, h, } from "@stencil/core";
import { ThemeVariant } from "../../../beans";
import { mobileBreakpoint } from "../../../constants/breakpoints";
export class ZUserDropdown {
  constructor() {
    /** theme variant, default 'dark' */
    this.theme = ThemeVariant.dark;
    this.ismenuopen = false;
    this.handleToggle = this.handleToggle.bind(this);
  }
  componentWillLoad() {
    this.setMobileAndGhostDivWidth();
  }
  componentDidLoad() {
    this.setMobileAndGhostDivWidth();
  }
  componentWillUpdate() {
    this.setMobileAndGhostDivWidth();
  }
  componentWillRender() {
    this.linkarray =
      typeof this.menucontent === "string"
        ? JSON.parse(this.menucontent)
        : this.menucontent;
  }
  setMobileAndGhostDivWidth() {
    var _a;
    this.isMobile =
      window.screen.width <= mobileBreakpoint ||
        window.innerWidth <= mobileBreakpoint;
    if (this.gosthDiv)
      this.gosthDiv.style.width =
        !this.isMobile && this.ismenuopen
          ? `${(_a = this.userButton) === null || _a === void 0 ? void 0 : _a.offsetWidth}px`
          : "";
  }
  emitUserButtonClick() {
    this.userButtonClick.emit(this.ismenuopen);
  }
  handleResize() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }
  handleOrientationChange() {
    this.isMobile = screen.width <= mobileBreakpoint;
  }
  handleClickOutside(e) {
    if (e.target.nodeName !== "Z-USER-DROPDOWN") {
      this.ismenuopen = false;
    }
  }
  handleToggle() {
    this.ismenuopen = !this.ismenuopen;
    this.emitUserButtonClick();
  }
  renderCaretIcon() {
    const direction = this.ismenuopen ? "up" : "down";
    return (h("z-icon", { name: `caret-${direction}-filled`, height: 18, width: 18 }));
  }
  renderGuestButton() {
    return (h("z-link", { onClick: () => this.emitUserButtonClick(), big: true, icon: "enter", textcolor: this.theme === ThemeVariant.light ? "black" : "white" }, "Entra"));
  }
  renderLoggedButton() {
    return (h("button", { ref: (el) => (this.userButton = el), title: this.userfullname, class: `${this.ismenuopen ? "open" : ""} ${this.theme}`, onClick: () => this.handleToggle() },
      h("z-icon", { name: "user-avatar-filled", height: 18, width: 18 }),
      h("span", { class: "userfullname" }, this.userfullname),
      this.renderCaretIcon()));
  }
  retrieveLiTextColor() {
    if (this.theme === ThemeVariant.light)
      return "black";
    return this.isMobile ? "white" : "black";
  }
  renderGhostDiv() {
    return h("div", { ref: (el) => (this.gosthDiv = el) });
  }
  renderDropdownMenu() {
    return (this.ismenuopen && (h("ul", { class: this.theme }, this.linkarray.map((link) => {
      return (h("li", { id: link.id },
        h("z-link", { textcolor: this.retrieveLiTextColor(), big: true, href: link.link, target: "_blank", icon: link.icon }, link.label)));
    }))));
  }
  render() {
    return (h("div", null,
      this.logged && !this.isMobile && this.renderGhostDiv(),
      h("div", { class: `${this.ismenuopen ? "open" : ""}` },
        this.logged ? this.renderLoggedButton() : this.renderGuestButton(),
        this.logged && this.renderDropdownMenu())));
  }
  static get is() { return "z-user-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
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
    "userfullname": {
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
        "text": "user full name"
      },
      "attribute": "userfullname",
      "reflect": false
    },
    "menucontent": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | MenuItem[]",
        "resolved": "MenuItem[] | string",
        "references": {
          "MenuItem": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Json stringified or array to fill menu dropdown"
      },
      "attribute": "menucontent",
      "reflect": false
    },
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
    }
  }; }
  static get states() { return {
    "ismenuopen": {},
    "isMobile": {}
  }; }
  static get events() { return [{
      "method": "userButtonClick",
      "name": "userButtonClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted on enter or user Button click, returns ismenuopen (bool)"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
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
    }, {
      "name": "click",
      "method": "handleClickOutside",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
