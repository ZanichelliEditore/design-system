import { r as registerInstance, c as createEvent, h } from './index-a2130b6a.js';

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
        return (h("div", { key: '7b95574bc12ca15eb80f5a710f75e8bcff2ea0cd', id: this.boxid }, h("slot", { key: 'fcd4a9ae4a4efdae1e6a7aa89c77104344122a1a', name: "content" }), this.isclosable && (h("z-icon", { key: '9a757d25f508088be59f2c51ea5ac5c6067f579a', name: "multiply", "data-action": "infoBoxClose", onClick: () => this.emitInfoBoxClose() }))));
    }
};
ZInfoBox.style = ZInfoBoxStyle0;

export { ZInfoBox as z_info_box };

//# sourceMappingURL=z-info-box.entry.js.map