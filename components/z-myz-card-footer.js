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
        return (h("div", { key: '5dd8a1450395437b275fb926b09da03549915574', class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) }, h("footer", { key: '7b7e36ef2959885e4a560982cb7e08ac04818780', class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, h("span", { key: '1c40adf2f5d502c07c9376b63a8698d4667db396', class: "toggle" }, h("slot", { key: 'bd6af616f75d683d7be56058acc8b73b3bf93df6', name: "toggle" })), this.titolo && h("p", { class: { "custom-content": this.customContent } }, this.titolo), h("div", { key: '65e8bf56114cffbd456848ee1f8d1114e6e5080a', class: { "content": true, "custom-content": this.customContent } }, h("div", { key: '66e9bc72b76b51fd62b480fdcd79fb1275fa6025' }, h("p", { key: '3ed9294e4344921197fab0e6514060c44fbb1e1b', class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, h("span", { key: '59377aadd8b9390fe356ef2b43c19deba9215ef8', title: this.getTitleAuthors() }, h("span", { key: 'ee5c8a2ae408e4e5188dc446155c9aeb718166d4', "aria-description": "Autori", class: "bold" }, this.autori))), h("p", { key: 'e18fb80f72dcc4167f9f3a9b01125bee192d93c4', class: "year-isbn" }, h("span", { key: '2bd10075dbcad13130986d76b0a1876b83c38a3e', class: "isbn" }, h("span", { key: '0db0267195bbac8406e70f4476b5f47063fe94b5' }, h("span", { key: '2353a8330af27b7cb67b581867684fd8038aa482', "aria-description": "ISBN edizione cartacea", class: "bold" }, this.isbn), " ", "(ed. cartacea)")))), h("div", { key: 'bcd81eae284110276be84b0493386f50280714bb', class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, h("slot", { key: '74920df025462ca9464bbe269036a5c72a1b239e', name: "list" })))), this.customContent && h("slot", { name: "content" })));
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