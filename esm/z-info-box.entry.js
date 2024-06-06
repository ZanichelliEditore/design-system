import { r as registerInstance, c as createEvent, h } from './index-f16bc2ca.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:flex;width:inherit;padding:calc(var(--space-unit) * 2);background:var(--color-primary03);border-radius:var(--border-radius)}:host>div>slot{color:var(--color-default-text);font-size:14px}:host>div>z-icon{margin-left:calc(var(--space-unit) * 2);cursor:pointer;fill:var(--color-primary01)}";
const ZInfoBoxStyle0 = stylesCss;

const ZInfoBox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.infoBoxClose = createEvent(this, "infoBoxClose", 7);
        this.boxid = undefined;
        this.isclosable = true;
    }
    emitInfoBoxClose() {
        this.infoBoxClose.emit({ boxid: this.boxid });
    }
    render() {
        return (h("div", { key: 'ca557ef255dac8cd5e349193e1a737ebbbc89e67', id: this.boxid }, h("slot", { key: '1be32b81bde96ac8f548a4bd84698ddbbc2485f1', name: "content" }), this.isclosable && (h("z-icon", { name: "multiply", "data-action": "infoBoxClose", onClick: () => this.emitInfoBoxClose() }))));
    }
};
ZInfoBox.style = ZInfoBoxStyle0;

export { ZInfoBox as z_info_box };

//# sourceMappingURL=z-info-box.entry.js.map