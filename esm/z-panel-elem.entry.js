import { r as registerInstance, h } from './index-f16bc2ca.js';

const stylesCss = ".sc-z-panel-elem-h{width:inherit;font-family:var(--font-family sans);font-weight:var(--font-rg)}.panel-elem-container.sc-z-panel-elem{width:100%}.panel-elem-icon.sc-z-panel-elem{margin:auto calc(var(--space-unit) * 3)}.panel-elem-icon.sc-z-panel-elem img.sc-z-panel-elem{display:block;max-width:96px;height:32px;margin:auto;object-fit:contain}.panel-elem-link.sc-z-panel-elem{display:flex;align-items:center;justify-content:center;margin:var(--space-unit) auto 0;border-radius:var(--border-no-radius);font-size:12px}.panel-elem-link.sc-z-panel-elem>a.z-link.sc-z-panel-elem{padding:calc(var(--space-unit) * 0.5) 0;font-weight:var(--font-sb)}.panel-elem-desc.sc-z-panel-elem{padding-top:var(--space-unit);margin:0;letter-spacing:0.16px;text-align:center}a.sc-z-panel-elem>z-icon.sc-z-panel-elem{margin-right:var(--space-unit)}";
const ZPanelElemStyle0 = stylesCss;

const ZPanelElem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    renderIcon() {
        if (this.isdisabled) {
            return (h("img", { src: this.imgurl, alt: this.imgalt }));
        }
        return (h("a", { class: "elem-icon", href: this.url, target: this.target }, h("img", { src: this.imgurl, alt: this.imgalt })));
    }
    render() {
        const elemId = this.elemid ? this.elemid : "";
        return (h("div", { key: 'ef6db6ad212d9675eca3c713a1b4f91cd18f78e0', class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (h("div", { "aria-hidden": "true", class: "panel-elem-icon" }, this.renderIcon())), h("div", { key: '3735e07d1d2f29df948cc305a0dc03f8f18bf136', class: "panel-elem-link" }, h("a", { key: '4ddfc8fa8ee168e4b92bf7a8c2c13bc3c3b365c5', class: {
                "z-link": true,
                "z-link-disabled": this.isdisabled,
                "z-link-icon": true,
            }, id: elemId + "link_id", href: this.url, target: this.target }, h("z-icon", { key: 'fe5d6af74bba6f36ef4b5458c51e3e4b4d17db54', height: 14, width: 14, name: this.linkicon }), this.linklabel)), this.descrSlotName && (h("div", { class: "panel-elem-desc" }, h("slot", { name: this.descrSlotName })))));
    }
};
ZPanelElem.style = ZPanelElemStyle0;

export { ZPanelElem as z_panel_elem };

//# sourceMappingURL=z-panel-elem.entry.js.map