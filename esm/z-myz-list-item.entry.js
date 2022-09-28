import { r as registerInstance, c as createEvent, h } from './index-90e18641.js';
import { h as handleKeyboardSubmit } from './utils-57be09c8.js';
import './index-3c2d757b.js';
import './breakpoints-c386984e.js';

const stylesCss = ":host li{all:unset;all:reset;width:100%}:host li{list-style-type:none;line-height:14px}:host li>span{line-height:14px;padding:calc(var(--space-unit) * 2) 0;display:flex;font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:16px;letter-spacing:0.23px;color:var(--text-grey-800);fill:var(--text-grey-800)}:host li>span.border{border-bottom:2px solid var(--bg-grey-200)}:host li span:hover,a:hover{color:var(--myz-blue);fill:var(--myz-blue)}a,a:visited,a:active{color:inherit;fill:inherit;text-decoration:none}:host li span z-icon{color:var(--myz-blue);fill:var(--myz-blue);height:calc(var(--space-unit) * 2);width:calc(var(--space-unit) * 2);padding:0 calc(var(--space-unit) * 1.5) 0 0;background-size:contain;background-repeat:no-repeat}";

const ZMyzListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.zListItemLinkClick = createEvent(this, "zListItemLinkClick", 7);
    this.zListItemClick = createEvent(this, "zListItemClick", 7);
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
    return (h("li", { role: "button", id: this.listitemid, "data-action": this.action, onClick: (e) => this.emitZListItemClick(e, this.listitemid), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitZListItemClick, this.listitemid) }, h("span", { class: this.underlined && "border" }, this.icon && h("z-icon", { name: this.icon }), this.link ? (h("a", { href: this.link ? this.link : null, target: this.linktarget, id: linkId, onClick: (e) => this.emitZListItemLinkClick(e, linkId), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitZListItemLinkClick, linkId), role: this.link ? "link" : "button", tabindex: "0" }, this.text)) : (h("span", { innerHTML: this.text })), h("slot", null))));
  }
};
ZMyzListItem.style = stylesCss;

export { ZMyzListItem as z_myz_list_item };
