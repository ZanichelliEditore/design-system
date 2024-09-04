'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const utils = require('./utils-1a8655c7.js');
require('./index-e3835c94.js');
require('./breakpoints-5c22092a.js');

const stylesCss = ":host li{all:unset;all:reset;width:100%;line-height:14px;list-style-type:none}:host li>span{display:-ms-flexbox;display:flex;padding:calc(var(--space-unit) * 2) 0;color:var(--color-default-text);fill:var(--color-default-icon);font-family:var(--font-family-sans);font-size:16px;font-weight:var(--font-rg);letter-spacing:0.23px;line-height:14px}:host(.small) li>span{padding:calc(var(--space-unit) * 1.5) 0;font-size:var(--font-size-2)}:host(.x-small) li>span{padding:var(--space-unit) 0;font-size:var(--font-size-2)}:host(.small) li>span>z-icon,:host(.x-small) li>span>z-icon{--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:calc(var(--space-unit) * 0.5);padding:0}:host li>span.border{border-bottom:2px solid var(--color-surface03)}:host li span:hover,a:hover{color:var(--color-primary01);fill:var(--color-primary01)}a,a:visited,a:active{color:inherit;fill:inherit;text-decoration:none}:host li span z-icon{width:calc(var(--space-unit) * 2);height:calc(var(--space-unit) * 2);padding:0 calc(var(--space-unit) * 1.5) 0 0;background-repeat:no-repeat;background-size:contain;color:var(--color-primary01);fill:var(--color-primary01)}";
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
        return (index.h("li", { key: 'de14506aedfc2f75ad3314a6491118e42c3f845b', role: "button", id: this.listitemid, "data-action": this.action, onClick: (e) => this.emitZListItemClick(e, this.listitemid), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitZListItemClick, this.listitemid) }, index.h("span", { key: '1fd3c77d35ba7c9d93235f1dee870fcccd8c9861', class: this.underlined && "border" }, this.icon && index.h("z-icon", { key: 'e154e814209d09377037d9df89e6c0018b6e02b3', name: this.icon }), this.link ? (index.h("a", { href: this.link ? this.link : null, target: this.linktarget, id: linkId, onClick: (e) => this.emitZListItemLinkClick(e, linkId), onKeyPress: (ev) => utils.handleKeyboardSubmit(ev, this.emitZListItemLinkClick, linkId), role: this.link ? "link" : "button", tabindex: "0" }, this.text)) : (index.h("span", { innerHTML: this.text })), index.h("slot", { key: '3c3a24c8332321e062d0d3ac864ee3c92a699ace' }))));
    }
};
ZMyzListItem.style = ZMyzListItemStyle0;

exports.z_myz_list_item = ZMyzListItem;

//# sourceMappingURL=z-myz-list-item.cjs.entry.js.map