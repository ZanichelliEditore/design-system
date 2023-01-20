import { r as registerInstance, h } from './index-a2ca4b97.js';

const stylesCss = ":host{width:inherit;font-family:var(--dashboard-font);font-weight:var(--font-rg)}.panel-elem-container{width:100%}.panel-elem-icon{margin:auto calc(var(--space-unit) * 3)}.panel-elem-icon img{display:block;max-width:96px;height:32px;margin:auto;object-fit:contain}.panel-elem-link{margin:var(--space-unit) auto 0;border-radius:var(--border-no-radius);font-size:12px;text-align:center}.panel-elem-link>z-link{font-weight:var(--font-sb)}.panel-elem-desc{padding-top:var(--space-unit);margin:0;letter-spacing:0.16px;text-align:center}";

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
    return (h("div", { class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (h("div", { "aria-hidden": "true", class: "panel-elem-icon" }, this.renderIcon())), h("div", { class: "panel-elem-link" }, h("z-link", { href: this.url, icon: this.linkicon, isdisabled: this.isdisabled, target: this.target, htmlid: elemId + "link_id" }, this.linklabel)), this.descrSlotName && (h("div", { class: "panel-elem-desc body-long-01" }, h("slot", { name: this.descrSlotName })))));
  }
};
ZPanelElem.style = stylesCss;

export { ZPanelElem as z_panel_elem };
