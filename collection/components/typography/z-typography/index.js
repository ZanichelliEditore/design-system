import { h, Host } from "@stencil/core";
export class ZTypography {
  constructor() {
    /** Font weight variant */
    this.variant = "regular";
  }
  render() {
    const el = document.createElement(this.component || "span");
    el.innerHTML = `<slot />`;
    this.hostElement.shadowRoot.appendChild(el);
    return (h(Host, { class: {
        [this.level]: Boolean(this.level),
        regular: this.variant === "regular",
        semibold: this.variant === "semibold",
        light: this.variant === "light",
      } }));
  }
  static get is() { return "z-typography"; }
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
      "level": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ZTypographyLevels",
          "resolved": "\"b1\" | \"b2\" | \"b3\" | \"b4\" | \"b5\" | \"h1\" | \"h2\" | \"h3\" | \"h4\"",
          "references": {
            "ZTypographyLevels": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Typography level"
        },
        "attribute": "level",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "\"regular\" | \"semibold\" | \"light\"",
          "resolved": "\"light\" | \"regular\" | \"semibold\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Font weight variant"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "\"regular\""
      },
      "component": {
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
          "text": "HTML tag to use to wrap slotted content"
        },
        "attribute": "component",
        "reflect": false
      }
    };
  }
  static get elementRef() { return "hostElement"; }
}
