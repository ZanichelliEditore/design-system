import { h } from "@stencil/core";
import { PopoverPositions } from "../../../beans";
/**
 * Tooltip component.
 * It is basically a wrapper for the `<z-popover>` component with custom configuration.
 *
 * @cssprop --z-popover-theme--surface - background color of the popover.
 * @cssprop --z-popover-theme--text - foreground color of the popover.
 * @cssprop --z-popover-shadow-filter - drop-shadow filter of the popover.
 */
export class ZTooltip {
  constructor() {
    /** Tooltip position. */
    this.position = PopoverPositions.AUTO;
    /** Enable tooltip dark mode. */
    this.dark = false;
    /**
     * The open state of the tooltip.
     */
    this.open = false;
  }
  onPopoverOpenChange() {
    this.open = this.popover.open;
  }
  render() {
    return (h("z-popover", { ref: (el) => (this.popover = el), bindTo: this.bindTo, open: this.open, position: this.position, center: true, showArrow: true }, h("slot", null)));
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
          "original": "PopoverPositions",
          "resolved": "PopoverPositions.AUTO | PopoverPositions.BOTTOM | PopoverPositions.BOTTOM_LEFT | PopoverPositions.BOTTOM_RIGHT | PopoverPositions.LEFT | PopoverPositions.LEFT_BOTTOM | PopoverPositions.LEFT_TOP | PopoverPositions.RIGHT | PopoverPositions.RIGHT_BOTTOM | PopoverPositions.RIGHT_TOP | PopoverPositions.TOP | PopoverPositions.TOP_LEFT | PopoverPositions.TOP_RIGHT",
          "references": {
            "PopoverPositions": {
              "location": "import",
              "path": "../../../beans"
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
        "defaultValue": "PopoverPositions.AUTO"
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
              "location": "global"
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
