import { Host, h } from "@stencil/core";
/**
 * @slot - slot for `z-stepper-item`
 */
export class ZStepper {
    render() {
        return (h(Host, { key: '5fbfa9cc1b0e6f672f054427828d56560059c160', role: "list" }, h("slot", { key: 'd2c5abd53c5c9e8569696aafb6101b7878e1a10c' })));
    }
    static get is() { return "z-stepper"; }
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
}
//# sourceMappingURL=index.js.map
