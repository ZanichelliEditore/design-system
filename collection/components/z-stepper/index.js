import { Host, h } from "@stencil/core";
/**
 * @slot - slot for `z-stepper-item`
 */
export class ZStepper {
    render() {
        return (h(Host, { key: '80b89caa35e9adb82ad413783b16eae491a26f48', role: "list" }, h("slot", { key: '140e35a55637873b1eee70d5a7a8c2b03af3eed7' })));
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
