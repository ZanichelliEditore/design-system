import { h, Host } from "@stencil/core";
import { DividerOrientation, ThemeVariant } from "../../../beans";
import { mobileBreakpoint } from "../../../constants/breakpoints";
export class ZAppTopbar {
  constructor() {
    /** theme variant, default 'dark' */
    this.theme = ThemeVariant.DARK;
    this.topbarLinks = [];
  }
  handleResize() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }
  componentWillLoad() {
    this.isMobile = window.screen.width <= mobileBreakpoint || window.innerWidth <= mobileBreakpoint;
  }
  componentWillRender() {
    if (this.topbarContent) {
      this.topbarLinks = typeof this.topbarContent === "string" ? JSON.parse(this.topbarContent) : this.topbarContent;
    }
  }
  renderTopbarLinks() {
    return this.topbarLinks.map((link) => (h("z-link", { htmlid: link.id, textcolor: this.theme === ThemeVariant.LIGHT ? "black" : "white", href: link.link, target: link.target, icon: this.isMobile ? link.icon : undefined }, !this.isMobile && link.label)));
  }
  render() {
    return (h(Host, { class: {
        [this.theme]: true,
        "limited-width": !!this.contentMaxWidth,
      } }, h("div", { id: "content-container", style: this.contentMaxWidth ? { "--mw": `${this.contentMaxWidth}px` } : {} }, h("div", { id: "left-panel", class: "content-panel" }, h("z-logo", { mobileLogo: this.isMobile, width: this.isMobile ? 32 : 128, height: this.isMobile ? 40 : 32, imageAlt: "zanichelli-logo", link: this.logoLink, targetBlank: true }), this.isMobile && this.renderTopbarLinks()), h("div", { id: "right-panel", class: "content-panel" }, !this.isMobile && this.renderTopbarLinks(), this.showAppSwitcher && h("z-app-switcher", { theme: this.theme }), h("div", { id: "divider-container" }, h("z-divider", { orientation: DividerOrientation.VERTICAL, color: this.theme === ThemeVariant.LIGHT ? "gray800" : "color-white" })), h("slot", { name: "login" })))));
  }
  static get is() { return "z-app-topbar"; }
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
      "theme": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ThemeVariant",
          "resolved": "ThemeVariant.DARK | ThemeVariant.LIGHT",
          "references": {
            "ThemeVariant": {
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
        "defaultValue": "ThemeVariant.DARK"
      },
      "contentMaxWidth": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "maximum width of topbar content"
        },
        "attribute": "content-max-width",
        "reflect": false
      },
      "topbarContent": {
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
          "text": "JSON string or MenuItem array to define topbar links"
        },
        "attribute": "topbar-content",
        "reflect": false
      },
      "logoLink": {
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
          "text": "link URL used by z-logo"
        },
        "attribute": "logo-link",
        "reflect": false
      },
      "showAppSwitcher": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "add app-switcher"
        },
        "attribute": "show-app-switcher",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isMobile": {}
    };
  }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "handleResize",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}
