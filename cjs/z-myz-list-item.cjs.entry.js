'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const utils = require('./utils-2fa62b67.js');
require('./index-bc9a5c2b.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ":host li{all:unset;all:reset;width:100%}:host li{list-style-type:none;line-height:14px}:host li>span{line-height:14px;padding:calc(var(--space-unit) * 2) 0;display:flex;font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:16px;letter-spacing:0.23px;color:var(--text-grey-800);fill:var(--text-grey-800)}:host li>span.border{border-bottom:2px solid var(--bg-grey-200)}:host li span:hover,a:hover{color:var(--myz-blue);fill:var(--myz-blue)}a,a:visited,a:active{color:inherit;fill:inherit;text-decoration:none}:host li span z-icon{color:var(--myz-blue);fill:var(--myz-blue);height:calc(var(--space-unit) * 2);width:calc(var(--space-unit) * 2);padding:0 calc(var(--space-unit) * 1.5) 0 0;background-size:contain;background-repeat:no-repeat}";

const ZMyzListItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.zListItemLinkClick = index.createEvent(this, "zListItemLinkClick", 7);
    this.zListItemClick = index.createEvent(this, "zListItemClick", 7);
    /** link target (optional) */
    this.linktarget = "_self";
    /** underlined style flag */
    this.underlined = true;
    this.emitZListItemLinkClick = this.emitZListItemLinkClick.bind(this);
    this.emitZListItemClick = this.emitZListItemClick.bind(this);
  }
  emitZListItemLinkClick(e, linkId) {
    this.zListItemLinkClick.emit({ e, linkId });
  }
  emitZListItemClick(e, listitemid) {
    this.zListItemClick.emit({ e, listitemid });
  }
  render() {
    const linkId = this.listitemid ? `link_${this.listitemid}` : "";
    return (index.h("li", { role: "button", id: this.listitemid, "data-action": this.action, onClick: (e) => this.emitZListItemClick(e, this.listitemid), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitZListItemClick, this.listitemid) }, index.h("span", { class: this.underlined && "border" }, this.icon && index.h("z-icon", { name: this.icon }), this.link ? (index.h("a", { href: this.link ? this.link : null, target: this.linktarget, id: linkId, onClick: (e) => this.emitZListItemLinkClick(e, linkId), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitZListItemLinkClick, linkId), role: this.link ? "link" : "button", tabindex: "0" }, this.text)) : (index.h("span", { innerHTML: this.text })), index.h("slot", null))));
  }
};
ZMyzListItem.style = stylesCss;

exports.z_myz_list_item = ZMyzListItem;
