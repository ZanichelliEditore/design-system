import { Component, h, Host, Element, Listen, Prop, State, } from "@stencil/core";
import { getElementTree, handleKeyboardSubmit } from "../../utils/utils";
import { ThemeVariant } from "../../beans";
/**
 * Component short description.
 */
export class ZSkipToContent {
  constructor() {
    /** Array to fill link into skip-content */
    this.links = [];
    this.visible = false;
    this.visibleLink = "";
  }
  handleFocusOutSkipToContent(e) {
    if (this.isInSkipToContent(e.target))
      this.visible = false;
  }
  handleFocusSkipToContent(e) {
    if (this.isInSkipToContent(e.target))
      this.visible = true;
  }
  componentDidLoad() {
    this.showFirstChild();
  }
  componentWillRender() {
    if (this.links) {
      this.links =
        typeof this.links === "string" ? JSON.parse(this.links) : this.links;
    }
  }
  isInSkipToContent(elem) {
    const tree = getElementTree(elem);
    const menuParent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-skip-to-content");
    if (menuParent)
      return true;
    return false;
  }
  getFirstChild() {
    const children = this.hostElement.children;
    if (children.length)
      return children[0];
    return false;
  }
  showFirstChild() {
    const firstChild = this.getFirstChild();
    if (firstChild)
      this.visibleLink = firstChild.id;
  }
  handleLinkClick() {
    this.visible = false;
  }
  render() {
    return (h(Host, { class: `${this.variant} ${this.visible && "skip-to-content-visible"} `, ref: (el) => el }, this.links.map((link, i) => {
      const id = `skip-to-content-${i}`;
      return (h("z-link", { id: id, underline: true, "aria-label": link.ariaLabel || link.label, class: `t-weight-sb ${id == this.visibleLink ? "link-visible" : "link-invisible"}`, href: link.href, textcolor: this.variant === ThemeVariant.dark ? "white" : "black", onFocus: () => (this.visibleLink = id), onClick: () => this.handleLinkClick(), onKeyUp: (e) => handleKeyboardSubmit(e, this.handleLinkClick.bind(this)) }, link.label));
    })));
  }
  static get is() { return "z-skip-to-content"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ThemeVariant",
        "resolved": "ThemeVariant.dark | ThemeVariant.light",
        "references": {
          "ThemeVariant": {
            "location": "import",
            "path": "../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Graphical variant: `dark`, `light`."
      },
      "attribute": "variant",
      "reflect": true
    },
    "links": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string | SkipToContentLink[]",
        "resolved": "SkipToContentLink[] | string",
        "references": {
          "SkipToContentLink": {
            "location": "import",
            "path": "../../beans"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Array to fill link into skip-content"
      },
      "attribute": "links",
      "reflect": false,
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "visible": {},
    "visibleLink": {}
  }; }
  static get elementRef() { return "hostElement"; }
  static get listeners() { return [{
      "name": "focusout",
      "method": "handleFocusOutSkipToContent",
      "target": "document",
      "capture": false,
      "passive": false
    }, {
      "name": "focusin",
      "method": "handleFocusSkipToContent",
      "target": "document",
      "capture": false,
      "passive": false
    }]; }
}
