'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const utils = require('./utils-d0b10736.js');
require('./index-39ce4edf.js');
require('./breakpoints-5c22092a.js');

const stylesCss = ":host li{all:unset;all:reset;width:100%;line-height:14px;list-style-type:none}:host li>span{display:flex;padding:calc(var(--space-unit) * 2) 0;color:var(--color-default-text);fill:var(--color-default-icon);font-family:var(--font-family-sans);font-size:16px;font-weight:var(--font-rg);letter-spacing:0.23px;line-height:14px}:host(.small) li>span{padding:calc(var(--space-unit) * 1.5) 0;font-size:var(--font-size-2)}:host(.x-small) li>span{padding:var(--space-unit) 0;font-size:var(--font-size-2)}:host(.small) li>span>z-icon,:host(.x-small) li>span>z-icon{--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:calc(var(--space-unit) * 0.5);padding:0}:host li>span.border{border-bottom:2px solid var(--color-surface03)}:host li span:hover,a:hover{color:var(--color-primary01);fill:var(--color-primary01)}a,a:visited,a:active{color:inherit;fill:inherit;text-decoration:none}:host li span z-icon{width:calc(var(--space-unit) * 2);height:calc(var(--space-unit) * 2);padding:0 calc(var(--space-unit) * 1.5) 0 0;background-repeat:no-repeat;background-size:contain;color:var(--color-primary01);fill:var(--color-primary01)}";
const ZMyzListItemStyle0 = stylesCss;

const ZMyzListItem = class {
    emitZListItemLinkClick(e, linkId) {
        this.zListItemLinkClick.emit({ e, linkId });
    }
    emitZListItemClick(e, listitemid) {
        this.zListItemClick.emit({ e, listitemid });
    }
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.zListItemLinkClick = index.createEvent(this, "zListItemLinkClick", 7);
        this.zListItemClick = index.createEvent(this, "zListItemClick", 7);
        this.text = undefined;
        this.link = undefined;
        this.linktarget = "_self";
        this.icon = undefined;
        this.listitemid = undefined;
        this.action = undefined;
        this.underlined = true;
        this.emitZListItemLinkClick = this.emitZListItemLinkClick.bind(this);
        this.emitZListItemClick = this.emitZListItemClick.bind(this);
    }
    render() {
        const linkId = this.listitemid ? `link_${this.listitemid}` : "";
        return (index.h("li", { key: '914bc78b92ddae7aa62c5a695c7b92343dd5dab3', role: "button", id: this.listitemid, "data-action": this.action, onClick: (e) => this.emitZListItemClick(e, this.listitemid), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitZListItemClick, this.listitemid) }, index.h("span", { key: 'e673a5e63e48760fdf00bc8c74a7b22f850fca8c', class: this.underlined && "border" }, this.icon && index.h("z-icon", { name: this.icon }), this.link ? (index.h("a", { href: this.link ? this.link : null, target: this.linktarget, id: linkId, onClick: (e) => this.emitZListItemLinkClick(e, linkId), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitZListItemLinkClick, linkId), role: this.link ? "link" : "button", tabindex: "0" }, this.text)) : (index.h("span", { innerHTML: this.text })), index.h("slot", { key: '05aaf3b526046e02ef2505c74a64c907c6f66444' }))));
    }
};
ZMyzListItem.style = ZMyzListItemStyle0;

exports.z_myz_list_item = ZMyzListItem;

//# sourceMappingURL=z-myz-list-item.cjs.entry.js.map