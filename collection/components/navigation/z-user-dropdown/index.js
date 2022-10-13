import { h, Host } from "@stencil/core";
import { mobileBreakpoint } from "../../../constants/breakpoints";
export class ZUserDropdown {
  constructor() {
    /** if inner components colors are inverted, or not, default false */
    this.useInverseColors = false;
    this.isMenuOpen = false;
    this.handleLoggedButtonClick = this.handleLoggedButtonClick.bind(this);
    this.emitDropdownMenuLinkClick = this.emitDropdownMenuLinkClick.bind(this);
  }
  componentDidLoad() {
    this.setMobileAndDivToResizeWidth();
  }
  componentWillUpdate() {
    this.setMobileAndDivToResizeWidth();
  }
  componentWillRender() {
    if (this.menuContent) {
      this.linkArray = typeof this.menuContent === "string" ? JSON.parse(this.menuContent) : this.menuContent;
    }
  }
  setMobileAndDivToResizeWidth() {
    var _a;
    if (this.divToResize) {
      this.isMobile = window.screen.width <= mobileBreakpoint || window.innerWidth <= mobileBreakpoint;
      if (this.logged && !this.isMobile && this.isMenuOpen) {
        this.divToResize.style.width = `${(_a = this.userButton) === null || _a === void 0 ? void 0 : _a.offsetWidth}px`;
      }
      else {
        this.divToResize.removeAttribute('style');
      }
    }
  }
  emitUserButtonClick() {
    this.userButtonClick.emit(this.isMenuOpen);
  }
  emitDropdownMenuLinkClick(e) {
    this.isMenuOpen = false;
    this.dropdownMenuLinkClick.emit({ e, linkId: e.detail.linkId });
  }
  handleResize() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }
  handleOrientationChange() {
    this.isMobile = screen.width <= mobileBreakpoint;
  }
  handleClickOutside(e) {
    if (e.target.nodeName !== "Z-USER-DROPDOWN") {
      this.isMenuOpen = false;
    }
  }
  handleLoggedButtonClick() {
    this.isMenuOpen = !this.isMenuOpen;
    this.emitUserButtonClick();
  }
  renderGuestButton() {
    return (h("button", { id: "guestbutton", class: this.useInverseColors ? "inverse" : "", onClick: () => this.emitUserButtonClick() }, "ENTRA"));
  }
  renderLoggedButton() {
    const direction = this.isMenuOpen ? "up" : "down";
    const colorClass = this.useInverseColors ? "inverse" : "";
    return (h("button", { ref: (el) => (this.userButton = el), title: this.userFullName, class: `${colorClass} ${this.isMenuOpen ? "open" : ""}`, onClick: this.handleLoggedButtonClick }, h("div", null, h("div", { class: "firstline" }, h("z-icon", { class: colorClass, name: "user-avatar-filled", height: 16, width: 16 }), !this.isMobile && h("div", { class: `userfullname ${colorClass}` }, this.userFullName), h("z-icon", { class: colorClass, name: `caret-${direction}-filled`, height: 16, width: 16 })), !this.isMobile && this.isMenuOpen && h("div", { class: `useremail ${colorClass}` }, this.userEmail))));
  }
  getZLinkTextcolor() {
    if (this.isMobile) {
      return this.useInverseColors ? "black" : "white";
    }
    else {
      return this.useInverseColors ? "white" : "black";
    }
  }
  renderDropdownMenu() {
    const colorClass = this.useInverseColors ? "inverse" : "";
    return (this.isMenuOpen && (h("ul", { class: colorClass }, this.isMobile &&
      h("li", { class: colorClass }, h("div", { class: `userfullname ${colorClass}` }, this.userFullName), h("div", { class: `useremail ${colorClass}` }, this.userEmail)), this.linkArray && this.linkArray.map((link) => h("li", { id: link.id, class: colorClass }, h("z-link", { textcolor: this.getZLinkTextcolor(), href: link.link, htmlid: link.id, target: link.target, icon: link.icon, onZLinkClick: this.emitDropdownMenuLinkClick }, link.label))))));
  }
  render() {
    const openClass = `${this.logged && this.isMenuOpen ? "open" : ""}`;
    const colorClass = this.useInverseColors ? "inverse" : "";
    return (h(Host, { class: colorClass }, h("div", { ref: (el) => (this.divToResize = el), class: openClass }, h("div", { class: `${colorClass} ${openClass}` }, this.logged ? this.renderLoggedButton() : this.renderGuestButton(), this.logged && this.renderDropdownMenu()))));
  }
  static get is() { return "z-user-dropdown"; }
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
      "userFullName": {
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
        "attribute": "user-full-name",
        "reflect": false
      },
      "userEmail": {
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
          "text": "user email"
        },
        "attribute": "user-email",
        "reflect": false
      },
      "menuContent": {
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
        "attribute": "menu-content",
        "reflect": false
      },
      "useInverseColors": {
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
          "text": "if inner components colors are inverted, or not, default false"
        },
        "attribute": "use-inverse-colors",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isMenuOpen": {},
      "isMobile": {}
    };
  }
  static get events() {
    return [{
        "method": "userButtonClick",
        "name": "userButtonClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on enter or user Button click, returns isMenuOpen (bool)"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "dropdownMenuLinkClick",
        "name": "dropdownMenuLinkClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on dropdown menu zlink click, returns event"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get listeners() {
    return [{
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
      }];
  }
}
