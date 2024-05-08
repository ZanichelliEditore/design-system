import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { L as LicenseType } from './index2.js';

const stylesCss = "footer{position:relative;z-index:5;top:0;width:auto;height:calc(var(--space-unit) * 6);padding:0;border-top:var(--border-size-medium) solid var(--color-surface03);margin:0;background-color:var(--color-surface01);border-radius:0 0 var(--border-radius) var(--border-radius);color:var(--color-surface05);font-family:var(--font-family-sans);font-weight:var(--font-rg);transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.real,footer.trial,footer.temp{border-top:var(--border-size-medium) solid var(--blue100)}footer .bold{font-family:var(--font-family-sans);font-weight:var(--font-sb)}footer>p{overflow:hidden;height:40px;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 2) var(--space-unit) calc(var(--space-unit) * 2);margin:0;background-color:var(--color-surface01);font-family:var(--font-family-sans);font-size:16px;font-weight:var(--font-rg);line-height:22px;transition:all 200ms linear}footer.isopen>p{background-color:var(--gray200);font-size:14px;font-weight:var(--font-sb);transition:all 200ms linear}footer.isopen.real>p,footer.isopen.trial>p,footer.isopen.temp>p{background-color:var(--blue100)}footer .visible{display:block}footer .hidden{display:none}footer>div.content{overflow:hidden;height:60px}footer>div.content>div:not(.slot-handler){padding:var(--space-unit) calc(var(--space-unit) * 2)}footer>div.content>div>p{overflow:hidden;height:20px;padding:0;margin:0;font-size:14px;line-height:20px;text-overflow:ellipsis;white-space:nowrap}footer>div.content>div>p.year-isbn{display:flex;flex-direction:row;justify-content:space-between;padding-top:var(--space-unit)}footer>div.content>div>p.year-isbn>span.isbn{overflow:hidden;text-overflow:ellipsis}footer.isopen>div.content>div:not(.slot-handler){height:68px}footer.isopen>div.content>div>p.authors{height:40px;text-overflow:initial;white-space:initial}footer.isopen>div.content>div>p.year-isbn{height:50px;flex-direction:column;padding-left:0}footer.isopen>div.content>div>p.year-isbn>span.isbn{display:inline-grid;padding-left:0}footer.isopen{top:-212px;height:295px;transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.isopen.custom-content{top:-292px}footer.isopen>div.content{height:280px;transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.isopen.custom-content>div.content{height:230px}.toggle{position:absolute;z-index:10;top:-24px;left:16px}.faded{opacity:0.3;pointer-events:none}footer>p.custom-content,footer .content.custom-content{display:none}footer.isopen>p.custom-content,footer.isopen .content.custom-content{display:block}div.wrapper{position:relative;height:100%}div.wrapper ::slotted([slot=\"content\"]){position:absolute;z-index:10;top:calc(var(--space-unit) * 2);display:block;width:100%;height:112px;box-sizing:border-box;padding:0 calc(var(--space-unit) * 2);border-top:var(--border-size-medium) solid transparent;background:var(--color-white)}div.wrapper.isopen ::slotted([slot=\"content\"]){top:0;bottom:0;height:128px;padding:calc(var(--space-unit) * 2);border-color:var(--blue100)}";
const ZMyzCardFooterStyle0 = stylesCss;

const ZMyzCardFooter$1 = /*@__PURE__*/ proxyCustomElement(class ZMyzCardFooter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.titolo = undefined;
        this.autori = undefined;
        this.isbn = undefined;
        this.faded = undefined;
        this.cardtype = undefined;
        this.opened = false;
        this.customContent = false;
        this.isOpen = false;
        this.allowTooltipAuthors = false;
    }
    handleToggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            const firstElem = this.getFirstListItem();
            if (firstElem) {
                requestAnimationFrame(() => {
                    firstElem.focus();
                });
            }
        }
    }
    getTitleAuthors() {
        return this.allowTooltipAuthors ? this.autori : "";
    }
    componentWillLoad() {
        if (this.opened) {
            this.isOpen = true;
        }
    }
    elementsEllipsis() {
        this.allowTooltipAuthors = this.elementAuthorsHasEllipsis() ? true : false;
    }
    elementAuthorsHasEllipsis() {
        return this.ellipsisAuthors.offsetWidth < this.ellipsisAuthors.scrollWidth;
    }
    retrieveClass() {
        return {
            "isopen": this.isOpen,
            "real": this.cardtype === LicenseType.REAL,
            "trial": this.cardtype === LicenseType.TRIAL,
            "temp": this.cardtype === LicenseType.TEMP,
            "custom-content": this.customContent,
        };
    }
    footerTransitionHandler(e) {
        if (["visibility", "height"].includes(e.propertyName)) {
            this.elementsEllipsis();
        }
    }
    getFirstListItem() {
        return this.host.querySelector("[slot=list] > li a");
    }
    render() {
        return (h("div", { key: '6ed5373d90bd7f80f1412066b09b7291e6d283b7', class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) }, h("footer", { key: '447aa1915840f306ab875aa0a8843b959772dfd6', class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, h("span", { key: '8c31afb6a3241cacbdec78490a95bc31e0e03e74', class: "toggle" }, h("slot", { key: '64015f7e978dec828cc2402b808d0b373b5a0409', name: "toggle" })), this.titolo && h("p", { class: { "custom-content": this.customContent } }, this.titolo), h("div", { key: 'e690589525fba6098379f05c7fb60151cb1089fd', class: { "content": true, "custom-content": this.customContent } }, h("div", { key: '99e39a4546bfc31bac37b1cac1f43a1303d61e08' }, h("p", { key: '457c28e40fd112283c9d2f4a21d770352fd256e5', class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, h("span", { key: 'a8a8c1b5e5333ec3558fa4c3cba38921dd4ea33c', title: this.getTitleAuthors() }, h("span", { key: 'ca6ebb69ebaa9af15e213edca5e5b3a847a88902', "aria-description": "Autori", class: "bold" }, this.autori))), h("p", { key: 'e5e6d7ea2a83fbf92725e835482dc09c09977fad', class: "year-isbn" }, h("span", { key: '4d8e0f8e9e6fde5c82ede3051f558c53db7bc5c2', class: "isbn" }, h("span", { key: 'b44adc460b940b90d08f53a2d9b6c053fd9c1360' }, h("span", { key: '2ca37f42a5b91c792c312eda3651b03e1603d408', "aria-description": "ISBN edizione cartacea", class: "bold" }, this.isbn), " ", "(ed. cartacea)")))), h("div", { key: '96006f998673ed1b7eaf230aaa6dd55ff6119efd', class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, h("slot", { key: '0ee8accf4ee783005fa2e4c148b4e6c39da79bfc', name: "list" })))), this.customContent && h("slot", { name: "content" })));
    }
    get host() { return this; }
    static get style() { return ZMyzCardFooterStyle0; }
}, [1, "z-myz-card-footer", {
        "titolo": [1],
        "autori": [1],
        "isbn": [1],
        "faded": [4],
        "cardtype": [1],
        "opened": [4],
        "customContent": [4, "custom-content"],
        "isOpen": [32],
        "allowTooltipAuthors": [32]
    }, [[0, "toggleClick", "handleToggle"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-myz-card-footer"];
    components.forEach(tagName => { switch (tagName) {
        case "z-myz-card-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMyzCardFooter$1);
            }
            break;
    } });
}

const ZMyzCardFooter = ZMyzCardFooter$1;
const defineCustomElement = defineCustomElement$1;

export { ZMyzCardFooter, defineCustomElement };

//# sourceMappingURL=z-myz-card-footer.js.map