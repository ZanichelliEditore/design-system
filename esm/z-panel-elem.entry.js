import { r as registerInstance, h } from './index-a2ca4b97.js';

const stylesCss = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg);width:inherit}.panel-elem-container{width:100%}.panel-elem-icon{margin:auto calc(var(--space-unit) * 3)}.panel-elem-icon img{display:block;object-fit:contain;max-width:96px;height:32px;margin:auto}.panel-elem-link{border-radius:var(--border-no-radius);margin:var(--space-unit) auto 0;text-align:center;font-size:12px}.panel-elem-link>z-link{font-weight:var(--font-sb)}.panel-elem-desc{letter-spacing:0.16px;text-align:center;margin:0;padding-top:var(--space-unit)}";

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
      return h("img", { src: this.imgurl, alt: this.imgalt });
    }
    return (h("a", { class: "elem-icon", href: this.url, target: this.target }, h("img", { src: this.imgurl, alt: this.imgalt })));
  }
  render() {
    const elemId = this.elemid ? this.elemid : "";
    return (h("div", { class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (h("div", { class: "panel-elem-icon" }, this.renderIcon())), h("div", { class: "panel-elem-link" }, h("z-link", { href: this.url, icon: this.linkicon, isdisabled: this.isdisabled, target: this.target, htmlid: elemId + "link_id" }, this.linklabel)), this.descr_slot_name && (h("div", { class: "panel-elem-desc body-long-01" }, h("slot", { name: this.descr_slot_name })))));
  }
};
ZPanelElem.style = stylesCss;

export { ZPanelElem as z_panel_elem };
