import { h } from "@stencil/core";
import { PopoverPosition } from "../../beans";
/**
 * Tooltip component.
 * It is basically a wrapper for the `<z-popover>` component with custom configuration.
 *
 * @cssprop --z-tooltip-theme--surface - background color of the popover.
 * @cssprop --z-tooltip-theme--text - foreground color of the popover.
 * @cssprop --z-tooltip-shadow-filter - drop-shadow filter of the popover.
 */
export class ZTooltip {
    constructor() {
        this.position = PopoverPosition.AUTO;
        this.dark = false;
        this.open = false;
        this.bindTo = undefined;
        this.closable = true;
    }
    onPopoverOpenChange() {
        this.open = this.popoverEl.open;
    }
    render() {
        return (h("z-popover", { key: '2df25a3fa481ccc045d4a49f464c06d9d9c3e555', ref: (el) => (this.popoverEl = el), bindTo: this.bindTo, open: this.open, position: this.position, closable: this.closable, center: true, showArrow: true }, h("slot", { key: '136991637393809eba3d6c6fad0f44209b8c8960' })));
    }
    static get is() { return "z-tooltip"; }
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
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PopoverPosition",
                    "resolved": "PopoverPosition.AUTO | PopoverPosition.BOTTOM | PopoverPosition.BOTTOM_LEFT | PopoverPosition.BOTTOM_RIGHT | PopoverPosition.LEFT | PopoverPosition.LEFT_BOTTOM | PopoverPosition.LEFT_TOP | PopoverPosition.RIGHT | PopoverPosition.RIGHT_BOTTOM | PopoverPosition.RIGHT_TOP | PopoverPosition.TOP | PopoverPosition.TOP_LEFT | PopoverPosition.TOP_RIGHT",
                    "references": {
                        "PopoverPosition": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::PopoverPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tooltip position."
                },
                "attribute": "position",
                "reflect": true,
                "defaultValue": "PopoverPosition.AUTO"
            },
            "dark": {
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
                    "text": "Enable tooltip dark mode."
                },
                "attribute": "dark",
                "reflect": true,
                "defaultValue": "false"
            },
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The open state of the tooltip."
                },
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            },
            "bindTo": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | HTMLElement",
                    "resolved": "HTMLElement | string",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The selector or the element bound with the tooltip."
                },
                "attribute": "bind-to",
                "reflect": false
            },
            "closable": {
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
                    "text": "Reflects `closable` prop of the popover.\n\"If true, the popover can be closed by clicking outside of it or pressing the escape key.\nOtherwise, it will be closed only programmatically (by setting `open` to `false`).\""
                },
                "attribute": "closable",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get listeners() {
        return [{
                "name": "openChange",
                "method": "onPopoverOpenChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
