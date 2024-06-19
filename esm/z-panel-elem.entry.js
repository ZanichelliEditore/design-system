import { r as registerInstance, h } from './index-ab5f1eaa.js';

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
        return (h("div", { key: 'bbae0bd29656529b2019a66668d6dfbf66b9b0a1', class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (h("div", { key: '620411ca326a5975d3cc21549cfc51a7d7eea519', "aria-hidden": "true", class: "panel-elem-icon" }, h("img", { key: '79a77af32280e5f1e58f794f07c1365da1fa30a7', src: this.imgurl, alt: this.imgalt }))), h("div", { key: '67ad3e575caab6d93bf8d0a17de138ae59fffb35', class: "panel-elem-link" }, h("a", { key: 'f79f44642cbceefd484bbe63e4af6ea03d197fec', class: {
                "z-link": true,
                "z-link-disabled": this.isdisabled,
                "z-link-icon": true,
            }, id: elemId + "link_id", href: this.url, target: this.target }, h("z-icon", { key: '0f112223c94273b9baa33da513c60a51dba33e7b', height: 14, width: 14, name: this.linkicon }), this.linklabel)), this.descrSlotName && (h("div", { key: '4ae5da7e8a2a92be4c801790a90b6907e7ffe6b3', class: "panel-elem-desc" }, h("slot", { key: '4c4e6872a2fe1cb443002a004b5aa1ce18a8f96f', name: this.descrSlotName })))));
    }
};
ZPanelElem.style = ZPanelElemStyle0;

export { ZPanelElem as z_panel_elem };

//# sourceMappingURL=z-panel-elem.entry.js.map