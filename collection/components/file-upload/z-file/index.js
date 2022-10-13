import { h, Host, } from "@stencil/core";
import { PopoverPositions, ZChipType } from "../../../beans";
import { tabletBreakpoint } from "../../../constants/breakpoints";
export class ZFile {
  constructor() {
    this.allowPopover = false;
    this.popoverVisible = false;
  }
  removeFileHandler() {
    this.removeFile.emit({ fileName: this.fileName });
    this.el.remove();
  }
  onMouseOver() {
    this.popoverVisible = true;
  }
  onMouseLeave() {
    this.popoverVisible = false;
  }
  onInteractiveIconClick() {
    this.removeFileHandler();
  }
  componentDidLoad() {
    var _a, _b;
    if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint) {
      this.allowPopover = true;
    }
    (_b = (_a = this.icon) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  elementHasEllipsis() {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  render() {
    return (h(Host, null, this.allowPopover && (h("z-popover", { open: this.popoverVisible, position: PopoverPositions.auto, bindTo: this.chip }, h("span", { class: "body-5 tooltip-content" }, this.ellipsis.innerText))), h("z-chip", { ref: (el) => (this.chip = el), id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: ZChipType.default }, h("span", { ref: (el) => (this.ellipsis = el), tabIndex: -1 }, this.fileName))));
  }
  static get is() { return "z-file"; }
  static get encapsulation() { return "scoped"; }
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
      },
      "fileName": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "File name"
        },
        "attribute": "file-name",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "allowPopover": {},
      "popoverVisible": {}
    };
  }
  static get events() {
    return [{
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
      }];
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
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
      }];
  }
}
