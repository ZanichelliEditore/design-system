import { Host, h } from "@stencil/core";
import { ZAriaAlertMode } from "../../beans";
export class ZAriaAlert {
    constructor() {
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: '3dc09efdfb273cbb3700c75f6e83112d6d158fb0', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: '109c1e5fa0fa0bd7fa990c7fdb23c0f65dd6811e' })));
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
