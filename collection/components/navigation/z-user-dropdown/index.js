import { Component, Prop, State, Event, Listen, h, Host } from "@stencil/core";
import { mobileBreakpoint } from "../../../constants/breakpoints";
export class ZUserDropdown {
  constructor() {
    /** if inner components colors are inverted, or not, default false */
    this.useinversecolors = false;
    this.ismenuopen = false;
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
    if (this.menucontent) {
      this.linkarray = typeof this.menucontent === "string" ? JSON.parse(this.menucontent) : this.menucontent;
    }
  }
  setMobileAndDivToResizeWidth() {
    var _a;
    if (this.divtoresize) {
      this.ismobile = window.screen.width <= mobileBreakpoint || window.innerWidth <= mobileBreakpoint;
      if (this.logged && !this.ismobile && this.ismenuopen) {
        this.divtoresize.style.width = `${(_a = this.userbutton) === null || _a === void 0 ? void 0 : _a.offsetWidth}px`;
      }
      else {
        this.divtoresize.removeAttribute('style');
      }
    }
  }
  emitUserButtonClick() {
    this.userButtonClick.emit(this.ismenuopen);
  }
  emitDropdownMenuLinkClick(e) {
    this.ismenuopen = false;
    this.dropdownMenuLinkClick.emit({ e, linkId: e.detail.linkId });
  }
  handleResize() {
    this.ismobile = window.innerWidth <= mobileBreakpoint;
  }
  handleOrientationChange() {
    this.ismobile = screen.width <= mobileBreakpoint;
  }
  handleClickOutside(e) {
    if (e.target.nodeName !== "Z-USER-DROPDOWN") {
      this.ismenuopen = false;
    }
  }
  handleLoggedButtonClick() {
    this.ismenuopen = !this.ismenuopen;
    this.emitUserButtonClick();
  }
  renderGuestButton() {
    return (h("button", { id: "guestbutton", class: this.useinversecolors ? "inverse" : "", onClick: () => this.emitUserButtonClick() }, "ENTRA"));
  }
  renderLoggedButton() {
    const direction = this.ismenuopen ? "up" : "down";
    const colorClass = this.useinversecolors ? "inverse" : "";
    return (h("button", { ref: (el) => (this.userbutton = el), title: this.userfullname, class: `${colorClass} ${this.ismenuopen ? "open" : ""}`, onClick: this.handleLoggedButtonClick },
      h("div", null,
        h("div", { class: "firstline" },
          h("z-icon", { class: colorClass, name: "user-avatar-filled", height: 16, width: 16 }),
          !this.ismobile && h("div", { class: `userfullname ${colorClass}` }, this.userfullname),
          h("z-icon", { class: colorClass, name: `caret-${direction}-filled`, height: 16, width: 16 })),
        !this.ismobile && this.ismenuopen && h("div", { class: `useremail ${colorClass}` }, this.useremail))));
  }
  getZLinkTextcolor() {
    if (this.ismobile) {
      return this.useinversecolors ? "black" : "white";
    }
    else {
      return this.useinversecolors ? "white" : "black";
    }
  }
  renderDropdownMenu() {
    const colorClass = this.useinversecolors ? "inverse" : "";
    return (this.ismenuopen && (h("ul", { class: colorClass },
      this.ismobile &&
        h("li", { class: colorClass },
          h("div", { class: `userfullname ${colorClass}` }, this.userfullname),
          h("div", { class: `useremail ${colorClass}` }, this.useremail)),
      this.linkarray && this.linkarray.map((link) => h("li", { id: link.id, class: colorClass },
        h("z-link", { textcolor: this.getZLinkTextcolor(), href: link.link, htmlid: link.id, target: link.target, icon: link.icon, onZLinkClick: this.emitDropdownMenuLinkClick }, link.label))))));
  }
  render() {
    const openClass = `${this.logged && this.ismenuopen ? "open" : ""}`;
    const colorClass = this.useinversecolors ? "inverse" : "";
    return (h(Host, { class: colorClass },
      h("div", { ref: (el) => (this.divtoresize = el), class: openClass, onClick: (e) => e.stopPropagation() },
        h("div", { class: `${colorClass} ${openClass}` },
          this.logged ? this.renderLoggedButton() : this.renderGuestButton(),
          this.logged && this.renderDropdownMenu()))));
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
    "useremail": {
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
      "attribute": "useremail",
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
    "useinversecolors": {
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
      "attribute": "useinversecolors",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "ismenuopen": {},
    "ismobile": {}
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
