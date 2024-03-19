import { h, Host } from "@stencil/core";
import { ZAriaAlertMode } from "../../beans";
export class ZAriaAlert {
    constructor() {
        this.mode = ZAriaAlertMode.POLITE;
    }
    render() {
        return (h(Host, { key: 'a3275876421862b2b2c80c044ca50f50464cfd55', "aria-live": this.mode, "aria-atomic": "true", "aria-relevant": "additions" }, h("slot", { key: '3767d930ccea80abbd79b4f3ee6d1733df29b934' })));
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
