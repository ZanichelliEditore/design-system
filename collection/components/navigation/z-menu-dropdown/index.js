import { h } from "@stencil/core";
import { KeyboardKeyCodeEnum } from "../../../beans/index";
import { handleKeyboardSubmit, getClickedElement, getElementTree, } from "../../../utils/utils";
export class ZMenuDropdown {
  constructor() {
    this.ismenuopen = false;
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  componentWillRender() {
    this.linkarray =
      typeof this.menucontent === "string"
        ? JSON.parse(this.menucontent)
        : this.menucontent;
  }
  renderMenuOpen() {
    if (this.ismenuopen) {
      return (h("ul", null, this.linkarray.map((bean) => (h("li", null, h("z-link", { htmlid: bean.id, href: bean.link, icon: bean.icon }, bean.label))))));
    }
  }
  renderButtonMenu() {
    return (h("span", { class: "arrow" }, h("z-icon", { name: "caret-down", width: 14, height: 14 })));
  }
  retriveMenuClass() {
    if (this.ismenuopen)
      return "menu-opened";
  }
  handleToggle() {
    this.ismenuopen = !this.ismenuopen;
  }
  handleFocus(e) {
    if (e instanceof KeyboardEvent && e.keyCode !== KeyboardKeyCodeEnum.TAB)
      return;
    const tree = getElementTree(getClickedElement());
    const menuParent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-menu-dropdown");
    if (!menuParent) {
      document.removeEventListener("click", this.handleFocus);
      document.removeEventListener("keyup", this.handleFocus);
      this.ismenuopen = false;
    }
  }
  render() {
    return (h("a", { class: this.retriveMenuClass(), role: "button", tabindex: "0", onFocus: () => {
        document.addEventListener("click", this.handleFocus);
        document.addEventListener("keyup", this.handleFocus);
      }, onKeyUp: (e) => handleKeyboardSubmit(e, this.handleToggle) }, h("div", { class: "container", onClick: () => this.handleToggle() }, h("span", { class: "user-wrapper" }, h("z-icon", { name: "user-avatar", width: 14, height: 14 }), h("span", { class: "user" }, this.nomeutente)), this.renderButtonMenu()), this.renderMenuOpen()));
  }
  static get is() { return "z-menu-dropdown"; }
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
      "nomeutente": {
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
          "text": "user name text"
        },
        "attribute": "nomeutente",
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
              "path": "../../../beans/index"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Json stringified or array to fill menu dropdown"
        },
        "attribute": "menucontent",
        "reflect": false
      },
      "buttonid": {
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
          "text": "unique button id"
        },
        "attribute": "buttonid",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "ismenuopen": {}
    };
  }
}
