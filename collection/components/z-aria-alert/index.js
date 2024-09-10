import { Host, h } from "@stencil/core";
import { ZAriaAlertMode } from "../../beans";
export class ZAriaAlert {
    constructor() {
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: '851bdac7b9b7c2dd4a5042a78cfacfe234051928', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: 'e3217c0633b68f55bd62c26fd1afb6d00dfe2708' })));
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
