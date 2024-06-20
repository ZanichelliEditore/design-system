'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>z-pocket{width:100%}:host>z-pocket.closed{width:158px}:host>z-pocket>z-pocket-header{color:var(--color-primary01);fill:var(--color-primary01);font-size:12px;font-weight:var(--font-sb)}:host>z-pocket>z-pocket-header span.badge{display:inline-block;padding:0 calc(var(--space-unit) * 0.5);margin-left:var(--space-unit);background:var(--color-secondary02);border-radius:50%;color:var(--color-surface01)}:host>z-pocket>z-pocket-header>z-icon{margin-left:var(--space-unit)}:host>z-pocket>z-pocket-body>div.body{overflow:hidden;padding:var(--space-unit);margin:0 var(--space-unit)}:host>z-pocket.preview>z-pocket-body{position:relative}:host>z-pocket.preview>z-pocket-body>div.gradient{position:absolute;top:0;right:0;bottom:0;left:0;background-image:-webkit-gradient(linear, left top, left bottom, from(rgb(255 0 0 / 0%)), to(white));background-image:linear-gradient(rgb(255 0 0 / 0%), white)}:host>z-pocket.open>z-pocket-body>div.body{overflow:auto;max-height:calc(100vh - 166px);scrollbar-width:none}:host ::-webkit-scrollbar{width:0}@media only screen and (min-width: 768px){:host>z-pocket{width:768px;margin:0 calc((100% - 768px) / 2)}:host>z-pocket.closed{margin:0 calc((100% - 158px) / 2)}:host>z-pocket.open>z-pocket-body>div.body{max-height:326px}}@media only screen and (min-width: 1152px){:host>z-pocket.open>z-pocket-body>div.body{scrollbar-color:var(--color-primary01) var(--color-surface03);scrollbar-width:thin}:host ::-webkit-scrollbar{width:10px;background:linear-gradient(\n      90deg,\n      var(--color-surface01) 2px,\n      var(--color-surface03) 4px,\n      var(--color-surface01) 8px\n    );border-radius:var(--border-radius)}:host ::-webkit-scrollbar-thumb{width:var(--space-unit);background-color:var(--color-primary01);border-radius:var(--border-radius)}}";
const ZMessagesPocketStyle0 = stylesCss;

const ZMessagesPocket = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.pocketid = undefined;
        this.messages = undefined;
        this.status = index$1.PocketStatus.PREVIEW;
    }
    handlePocketToggle(e) {
        if (e.detail.id === this.pocketid) {
            this.status = e.detail.status;
        }
    }
    renderHeader() {
        let message;
        let icon;
        switch (this.status) {
            case index$1.PocketStatus.PREVIEW:
            case index$1.PocketStatus.CLOSED:
                message = (index.h("span", null, "Messaggi ", index.h("span", { class: "badge" }, this.messages)));
                icon = "chevron-up";
                break;
            case index$1.PocketStatus.OPEN:
                message = index.h("span", null, "Riduci");
                icon = "chevron-down";
                break;
        }
        return (index.h("z-pocket-header", { pocketid: this.pocketid }, message, index.h("z-icon", { name: icon, width: 14, height: 14 })));
    }
    renderBody() {
        return (index.h("z-pocket-body", { pocketid: this.pocketid }, index.h("div", { class: "body" }, index.h("slot", null)), index.h("div", { class: "gradient" })));
    }
    render() {
        return (index.h("z-pocket", { key: '5be608e84b6e356a29b5f1d7b96a36646ee0299a', pocketid: this.pocketid, status: this.status, class: this.status }, this.renderHeader(), this.renderBody()));
    }
};
ZMessagesPocket.style = ZMessagesPocketStyle0;

exports.z_messages_pocket = ZMessagesPocket;

//# sourceMappingURL=z-messages-pocket.cjs.entry.js.map