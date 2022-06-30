import { Component, Prop, h, Event } from "@stencil/core";
import { ButtonVariantEnum } from "../../../beans";
export class ZCookiebar {
  emitAccept(ev) {
    this.accept.emit({ ev });
  }
  handleOkButtonClick(ev) {
    this.emitAccept(ev);
    if (typeof this.callback === "function") {
      this.callback();
    }
  }
  handleOkButtonKeyUp(ev) {
    this.emitAccept(ev);
    if (ev.code === "Enter") {
      if (typeof this.callback !== "undefined" &&
        typeof this.callback === "function") {
        this.callback();
      }
    }
  }
  renderContentSlot() {
    return (h("div", { class: "content", slot: "content" },
      h("div", null,
        h("h2", null, "Su questo sito usiamo i cookie."),
        h("div", null,
          h("p", null,
            "Se continui a navigare ci permetti di farlo secondo le regole spiegate nella nostra informativa sulla privacy relativa ai \u00A0",
            h("a", { href: this.cookiepolicyurl, target: "_blank" }, "cookie"),
            "."))),
      h("z-button-deprecated", { variant: ButtonVariantEnum.primary, onClick: (ev) => this.handleOkButtonClick(ev), onKeyUp: (ev) => this.handleOkButtonKeyUp(ev) }, "ACCETTA")));
  }
  render() {
    return (h("z-candybar", { class: `${this.hide ? "hidden" : ""}` }, this.renderContentSlot()));
  }
  static get is() { return "z-cookiebar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "cookiepolicyurl": {
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
        "text": "cookie policy link url"
      },
      "attribute": "cookiepolicyurl",
      "reflect": false
    },
    "hide": {
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
        "text": "hide cookie bar (optional)"
      },
      "attribute": "hide",
      "reflect": false
    },
    "callback": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "() => any",
        "resolved": "() => any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "callback to handle ok button action (optional)"
      }
    }
  }; }
  static get events() { return [{
      "method": "accept",
      "name": "accept",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emitted on ACCETTA button click, returns event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
