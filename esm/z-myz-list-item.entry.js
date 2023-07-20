import { r as registerInstance, c as createEvent, h } from './index-a2ca4b97.js';
import { a as handleKeyboardSubmit } from './utils-456f447b.js';
import './index-fd62a73e.js';
import './breakpoints-9b81eb1b.js';

const stylesCss = ":host li{all:unset;all:reset;width:100%;line-height:14px;list-style-type:none}:host li>span{display:flex;padding:calc(var(--space-unit) * 2) 0;color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-size:16px;font-weight:var(--font-rg);letter-spacing:0.23px;line-height:14px}:host(.small) li>span{padding:calc(var(--space-unit) * 1.5) 0;font-size:var(--font-size-2)}:host(.x-small) li>span{padding:var(--space-unit) 0;font-size:var(--font-size-2)}:host(.small) li>span>z-icon,:host(.x-small) li>span>z-icon{--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:calc(var(--space-unit) * 0.5);padding:0}:host li>span.border{border-bottom:2px solid var(--bg-grey-200)}:host li span:hover,a:hover{color:var(--myz-blue);fill:var(--myz-blue)}a,a:visited,a:active{color:inherit;fill:inherit;text-decoration:none}:host li span z-icon{width:calc(var(--space-unit) * 2);height:calc(var(--space-unit) * 2);padding:0 calc(var(--space-unit) * 1.5) 0 0;background-repeat:no-repeat;background-size:contain;color:var(--myz-blue);fill:var(--myz-blue)}";

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
