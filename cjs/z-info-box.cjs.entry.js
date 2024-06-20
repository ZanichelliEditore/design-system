'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:-ms-flexbox;display:flex;width:inherit;padding:calc(var(--space-unit) * 2);background:var(--color-primary03);border-radius:var(--border-radius)}:host>div>slot{color:var(--color-default-text);font-size:14px}:host>div>z-icon{margin-left:calc(var(--space-unit) * 2);cursor:pointer;fill:var(--color-primary01)}";
const ZInfoBoxStyle0 = stylesCss;

const ZInfoBox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.infoBoxClose = index.createEvent(this, "infoBoxClose", 7);
        this.boxid = undefined;
        this.isclosable = true;
    }
    emitInfoBoxClose() {
        this.infoBoxClose.emit({ boxid: this.boxid });
    }
    render() {
        return (index.h("div", { key: '52cbca4a972a1fb53f65bf86428ee23f8933b616', id: this.boxid }, index.h("slot", { key: '3b83aa34338ceb6c11f74a316bf50dd77bd0c662', name: "content" }), this.isclosable && (index.h("z-icon", { key: '2b3f8bbb5ce69105bddac3253047199028f4e2c0', name: "multiply", "data-action": "infoBoxClose", onClick: () => this.emitInfoBoxClose() }))));
    }
};
ZInfoBox.style = ZInfoBoxStyle0;

exports.z_info_box = ZInfoBox;

//# sourceMappingURL=z-info-box.cjs.entry.js.map