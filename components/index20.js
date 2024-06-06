import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as handleKeyboardSubmit } from './utils.js';
import { d as defineCustomElement$1 } from './index9.js';

const stylesCss = ":host li{all:unset;all:reset;width:100%;line-height:14px;list-style-type:none}:host li>span{display:flex;padding:calc(var(--space-unit) * 2) 0;color:var(--color-default-text);fill:var(--color-default-icon);font-family:var(--font-family-sans);font-size:16px;font-weight:var(--font-rg);letter-spacing:0.23px;line-height:14px}:host(.small) li>span{padding:calc(var(--space-unit) * 1.5) 0;font-size:var(--font-size-2)}:host(.x-small) li>span{padding:var(--space-unit) 0;font-size:var(--font-size-2)}:host(.small) li>span>z-icon,:host(.x-small) li>span>z-icon{--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:calc(var(--space-unit) * 0.5);padding:0}:host li>span.border{border-bottom:2px solid var(--color-surface03)}:host li span:hover,a:hover{color:var(--color-primary01);fill:var(--color-primary01)}a,a:visited,a:active{color:inherit;fill:inherit;text-decoration:none}:host li span z-icon{width:calc(var(--space-unit) * 2);height:calc(var(--space-unit) * 2);padding:0 calc(var(--space-unit) * 1.5) 0 0;background-repeat:no-repeat;background-size:contain;color:var(--color-primary01);fill:var(--color-primary01)}";
const ZMyzListItemStyle0 = stylesCss;

const ZMyzListItem = /*@__PURE__*/ proxyCustomElement(class ZMyzListItem extends HTMLElement {
    emitZListItemLinkClick(e, linkId) {
        this.zListItemLinkClick.emit({ e, linkId });
    }
    emitZListItemClick(e, listitemid) {
        this.zListItemClick.emit({ e, listitemid });
    }
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.zListItemLinkClick = createEvent(this, "zListItemLinkClick", 7);
        this.zListItemClick = createEvent(this, "zListItemClick", 7);
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
        return (h("li", { key: '914bc78b92ddae7aa62c5a695c7b92343dd5dab3', role: "button", id: this.listitemid, "data-action": this.action, onClick: (e) => this.emitZListItemClick(e, this.listitemid), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitZListItemClick, this.listitemid) }, h("span", { key: 'e673a5e63e48760fdf00bc8c74a7b22f850fca8c', class: this.underlined && "border" }, this.icon && h("z-icon", { name: this.icon }), this.link ? (h("a", { href: this.link ? this.link : null, target: this.linktarget, id: linkId, onClick: (e) => this.emitZListItemLinkClick(e, linkId), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitZListItemLinkClick, linkId), role: this.link ? "link" : "button", tabindex: "0" }, this.text)) : (h("span", { innerHTML: this.text })), h("slot", { key: '05aaf3b526046e02ef2505c74a64c907c6f66444' }))));
    }
    static get style() { return ZMyzListItemStyle0; }
}, [1, "z-myz-list-item", {
        "text": [1],
        "link": [1],
        "linktarget": [1],
        "icon": [1],
        "listitemid": [1],
        "action": [1],
        "underlined": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-myz-list-item", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-myz-list-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMyzListItem);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ZMyzListItem as Z, defineCustomElement as d };

//# sourceMappingURL=index20.js.map