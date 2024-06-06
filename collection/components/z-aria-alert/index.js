import { h, Host } from "@stencil/core";
import { ZAriaAlertMode } from "../../beans";
export class ZAriaAlert {
    constructor() {
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: '88e0d50e7f29c2e80aaa047a32902bc6347ad8d9', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: 'c76710250968f02393f69652d148ddf22eb1839e' })));
    }
    static get is() { return "z-aria-alert"; }
    static get properties() {
        return {
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ZAriaAlertMode",
                    "resolved": "ZAriaAlertMode.ASSERTIVE | ZAriaAlertMode.POLITE",
                    "references": {
                        "ZAriaAlertMode": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::ZAriaAlertMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Aria live mode"
                },
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "ZAriaAlertMode.POLITE"
            }
        };
    }
}
//# sourceMappingURL=index.js.map
