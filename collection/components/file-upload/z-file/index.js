import { Component, h, Event, Element, Host, State, Listen, Prop, } from "@stencil/core";
import { TooltipPosition, ZChipType } from "../../../beans";
import { tabletBreakpoint } from "../../../constants/breakpoints";
import "./index";
export class ZFile {
  constructor() {
    this.allowTooltip = false;
    this.tooltipVisible = false;
  }
  removeFileHandler() {
    this.removeFile.emit();
    this.el.remove();
  }
  onMouseOver() {
    this.tooltipVisible = true;
  }
  onMouseLeave() {
    this.tooltipVisible = false;
  }
  onInteractiveIconClick() {
    this.removeFileHandler();
  }
  componentDidLoad() {
    var _a, _b;
    if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint)
      this.allowTooltip = true;
    (_b = (_a = this.icon) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  elementHasEllipsis() {
    console.log(this.ellipsis, this.ellipsis.offsetWidth, this.ellipsis.scrollWidth);
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  render() {
    return (h(Host, null,
      this.allowTooltip && (h("z-tooltip", { open: this.tooltipVisible, type: TooltipPosition.AUTO, "bind-to": `#chip-${this.fileNumber}` },
        h("span", { class: "body-5 tootip-content" }, this.ellipsis.innerText))),
      h("z-chip", { id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: ZChipType.default },
        h("span", { ref: (el) => (this.ellipsis = el), tabIndex: -1 },
          h("slot", null)))));
  }
  static get is() { return "z-file"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "fileNumber": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "file-number",
      "reflect": false
    }
  }; }
  static get states() { return {
    "allowTooltip": {},
    "tooltipVisible": {}
  }; }
  static get events() { return [{
      "method": "removeFile",
      "name": "removeFile",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when a z-file component is removed from the DOM"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "mouseover",
      "method": "onMouseOver",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseleave",
      "method": "onMouseLeave",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "interactiveIconClick",
      "method": "onInteractiveIconClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
