'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-195ca522.js');

const stylesCss = ".sc-z-panel-elem-h{width:inherit;font-family:var(--font-family sans);font-weight:var(--font-rg)}.panel-elem-container.sc-z-panel-elem{width:100%}.panel-elem-icon.sc-z-panel-elem{margin:auto calc(var(--space-unit) * 3)}.panel-elem-icon.sc-z-panel-elem img.sc-z-panel-elem{display:block;max-width:96px;height:32px;margin:auto;object-fit:contain}.panel-elem-link.sc-z-panel-elem{display:flex;align-items:center;justify-content:center;margin:var(--space-unit) auto 0;border-radius:var(--border-no-radius);font-size:12px}.panel-elem-link.sc-z-panel-elem>a.z-link.sc-z-panel-elem{padding:calc(var(--space-unit) * 0.5) 0;font-weight:var(--font-sb)}.panel-elem-desc.sc-z-panel-elem{padding-top:var(--space-unit);margin:0;letter-spacing:0.16px;text-align:center}a.sc-z-panel-elem>z-icon.sc-z-panel-elem{margin-right:var(--space-unit)}";

const ZPanelElem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** link target (optional) */
    this.target = "_blank";
    /** disabled status flag (optional) */
    this.isdisabled = false;
  }
  renderIcon() {
    if (this.isdisabled) {
      return (index.h("img", { src: this.imgurl, alt: this.imgalt }));
    }
    return (index.h("a", { class: "elem-icon", href: this.url, target: this.target }, index.h("img", { src: this.imgurl, alt: this.imgalt })));
  }
  render() {
    const elemId = this.elemid ? this.elemid : "";
    return (index.h("div", { class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (index.h("div", { "aria-hidden": "true", class: "panel-elem-icon" }, this.renderIcon())), index.h("div", { class: "panel-elem-link" }, index.h("a", { class: {
        "z-link": true,
        "z-link-disabled": this.isdisabled,
        "z-link-icon": true,
      }, id: elemId + "link_id", href: this.url, target: this.target }, index.h("z-icon", { height: 14, width: 14, name: this.linkicon }), this.linklabel)), this.descrSlotName && (index.h("div", { class: "panel-elem-desc" }, index.h("slot", { name: this.descrSlotName })))));
  }
};
ZPanelElem.style = stylesCss;

exports.z_panel_elem = ZPanelElem;
