import { Host, h } from "@stencil/core";
import { PopoverPosition, ZChipType } from "../../../beans";
import { tabletBreakpoint } from "../../../constants/breakpoints";
export class ZFile {
    constructor() {
        this.fileNumber = undefined;
        this.fileName = undefined;
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
        return (h(Host, { key: '03c2efd6f2abf7ba920eb9ac47f268ade6ec1404' }, this.allowPopover && (h("z-popover", { key: 'f916e0f4aed0a9c7d2a8ff59ee0a073baff02ad5', open: this.popoverVisible, position: PopoverPosition.AUTO, bindTo: this.chip }, h("span", { key: '1f364c21b8bd45ff52c23a40df45ee1684271122', class: "body-5 tooltip-content" }, this.ellipsis.innerText))), h("z-chip", { key: '0c69ec654a4fb7f251bdd904ffec476c911e545a', ref: (el) => (this.chip = el), id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: ZChipType.DEFAULT }, h("span", { key: 'b71ea54ee7156bfb324f7d5f2fa71d9b50c167bf', ref: (el) => (this.ellipsis = el), tabIndex: -1 }, this.fileName))));
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
                    "text": "File chip id"
                },
                "attribute": "file-number",
                "reflect": false
            },
            "fileName": {
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
//# sourceMappingURL=index.js.map
