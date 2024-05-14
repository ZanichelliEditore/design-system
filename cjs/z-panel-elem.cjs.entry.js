'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');

const stylesCss = ".sc-z-panel-elem-h{width:inherit;font-family:var(--font-family sans);font-weight:var(--font-rg)}.panel-elem-container.sc-z-panel-elem{width:100%}.panel-elem-icon.sc-z-panel-elem{margin:auto calc(var(--space-unit) * 3)}.panel-elem-icon.sc-z-panel-elem img.sc-z-panel-elem{display:block;max-width:96px;height:32px;margin:auto;object-fit:contain}.panel-elem-link.sc-z-panel-elem{display:flex;align-items:center;justify-content:center;margin:var(--space-unit) auto 0;border-radius:var(--border-no-radius);font-size:12px}.panel-elem-link.sc-z-panel-elem>a.z-link.sc-z-panel-elem{padding:calc(var(--space-unit) * 0.5) 0;font-weight:var(--font-sb)}.panel-elem-desc.sc-z-panel-elem{padding-top:var(--space-unit);margin:0;letter-spacing:0.16px;text-align:center}a.sc-z-panel-elem>z-icon.sc-z-panel-elem{margin-right:var(--space-unit)}";
const ZPanelElemStyle0 = stylesCss;

const ZPanelElem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.elemid = undefined;
        this.imgurl = undefined;
        this.imgalt = undefined;
        this.linkicon = undefined;
        this.linklabel = undefined;
        this.url = undefined;
        this.target = "_blank";
        this.isdisabled = false;
        this.descrSlotName = undefined;
    }
    render() {
        const elemId = this.elemid ? this.elemid : "";
        return (index.h("div", { key: 'bdc30d88a3eb7ba48958701df00b9ef7e8516bba', class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (index.h("div", { "aria-hidden": "true", class: "panel-elem-icon" }, index.h("img", { src: this.imgurl, alt: this.imgalt }))), index.h("div", { key: 'fe7f4ba7d0851986d693be0a88b463cedabb5934', class: "panel-elem-link" }, index.h("a", { key: '7325188fe40d6a2726d542607581b1517e6d5b3b', class: {
                "z-link": true,
                "z-link-disabled": this.isdisabled,
                "z-link-icon": true,
            }, id: elemId + "link_id", href: this.url, target: this.target }, index.h("z-icon", { key: 'df0f7f98e88de69f4894bfa8250a884aa6da9c3a', height: 14, width: 14, name: this.linkicon }), this.linklabel)), this.descrSlotName && (index.h("div", { class: "panel-elem-desc" }, index.h("slot", { name: this.descrSlotName })))));
    }
};
ZPanelElem.style = ZPanelElemStyle0;

exports.z_panel_elem = ZPanelElem;

//# sourceMappingURL=z-panel-elem.cjs.entry.js.map