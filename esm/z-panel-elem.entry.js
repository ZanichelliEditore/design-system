import { r as registerInstance, h } from './index-a2130b6a.js';

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
    render() {
        const elemId = this.elemid ? this.elemid : "";
        return (h("div", { key: '7364ce8b1efc2b30e792693a93f41834a65dd7c6', class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (h("div", { key: '815580b59284ea71764fd9f18b98be4ab69ff1e5', "aria-hidden": "true", class: "panel-elem-icon" }, h("img", { key: 'a736866758f35a8284310a5bc81d08f166aec78c', src: this.imgurl, alt: this.imgalt }))), h("div", { key: '1d154781e2bf59a9a6b1c8ddff324e035095c5ec', class: "panel-elem-link" }, h("a", { key: '3531d557c2145fa3fb96f13c2952d4c2c6e366b8', class: {
                "z-link": true,
                "z-link-disabled": this.isdisabled,
                "z-link-icon": true,
            }, id: elemId + "link_id", href: this.url, target: this.target }, h("z-icon", { key: 'dd6a4750589fe913eeb211025beebb3da7cfc8fd', height: 14, width: 14, name: this.linkicon }), this.linklabel)), this.descrSlotName && (h("div", { key: 'b2cbea114008c9f5c6a560c0e52f60ff9e6f7722', class: "panel-elem-desc" }, h("slot", { key: '73a350ea0ca8bc51e56a5a2879651883669a79b4', name: this.descrSlotName })))));
    }
};
ZPanelElem.style = ZPanelElemStyle0;

export { ZPanelElem as z_panel_elem };

//# sourceMappingURL=z-panel-elem.entry.js.map