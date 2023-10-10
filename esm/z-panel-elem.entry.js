import { r as registerInstance, h } from './index-a2ca4b97.js';

const stylesCss = ".sc-z-panel-elem-h{width:inherit;font-family:var(--dashboard-font);font-weight:var(--font-rg)}.panel-elem-container.sc-z-panel-elem{width:100%}.panel-elem-icon.sc-z-panel-elem{margin:auto calc(var(--space-unit) * 3)}.panel-elem-icon.sc-z-panel-elem img.sc-z-panel-elem{display:block;max-width:96px;height:32px;margin:auto;object-fit:contain}.panel-elem-link.sc-z-panel-elem{display:flex;align-items:center;justify-content:center;margin:var(--space-unit) auto 0;border-radius:var(--border-no-radius);font-size:12px}.panel-elem-link.sc-z-panel-elem>a.z-link.sc-z-panel-elem{padding:calc(var(--space-unit) * 0.5) 0;font-weight:var(--font-sb)}.panel-elem-desc.sc-z-panel-elem{padding-top:var(--space-unit);margin:0;letter-spacing:0.16px;text-align:center}a.sc-z-panel-elem>z-icon.sc-z-panel-elem{margin-right:var(--space-unit)}";

const ZPanelElem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** link target (optional) */
    this.target = "_blank";
    /** disabled status flag (optional) */
    this.isdisabled = false;
  }
  renderIcon() {
    if (this.isdisabled) {
      return (h("img", { src: this.imgurl, alt: this.imgalt }));
    }
    return (h("a", { class: "elem-icon", href: this.url, target: this.target }, h("img", { src: this.imgurl, alt: this.imgalt })));
  }
  render() {
    const elemId = this.elemid ? this.elemid : "";
    return (h("div", { class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (h("div", { "aria-hidden": "true", class: "panel-elem-icon" }, this.renderIcon())), h("div", { class: "panel-elem-link" }, h("a", { class: {
        "z-link": true,
        "z-link-disabled": this.isdisabled,
        "z-link-icon": true,
      }, id: elemId + "link_id", href: this.url, target: this.target }, h("z-icon", { class: "z-link-icon-left", height: 14, width: 14, name: this.linkicon }), this.linklabel)), this.descrSlotName && (h("div", { class: "panel-elem-desc" }, h("slot", { name: this.descrSlotName })))));
  }
};
ZPanelElem.style = stylesCss;

export { ZPanelElem as z_panel_elem };
