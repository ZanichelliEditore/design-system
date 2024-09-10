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
        return (h(Host, { key: 'fd8490c60c3266c39e2b4fa7b3cc4097da8222cf' }, this.allowPopover && (h("z-popover", { key: 'af7c9370bdaa644ecfb50e1ae69fd425b1347b36', open: this.popoverVisible, position: PopoverPosition.AUTO, bindTo: this.chip }, h("span", { key: 'faa8e08ffbae25222396effe24db44e53ccfb892', class: "body-5 tooltip-content" }, this.ellipsis.innerText))), h("z-chip", { key: 'ed790fdb2b1639e4f44cde4da98daa101a44abb0', ref: (el) => (this.chip = el), id: `chip-${this.fileNumber}`, interactiveIcon: "multiply-circled", type: ZChipType.DEFAULT }, h("span", { key: '0bae3bda90db4e3793a22629b30439017e3543a3', ref: (el) => (this.ellipsis = el), tabIndex: -1 }, this.fileName))));
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
