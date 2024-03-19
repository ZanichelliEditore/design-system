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
        return (h("div", { key: '3f351c6ae37e9756acb54ba18a33141902b36f66', class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) }, h("footer", { key: 'a7813aa007cc2a85dbb2b14cfc26fc174e49929d', class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, h("span", { key: 'ab1b726546099b8f5ac53294e9ecfefb8501cf8a', class: "toggle" }, h("slot", { key: 'acda20d4eb36305f614d74aa930131f8f4ecd270', name: "toggle" })), this.titolo && h("p", { class: { "custom-content": this.customContent } }, this.titolo), h("div", { key: '0f090b00007fa5b7f5fe6b7d9553e83449d0a11a', class: { "content": true, "custom-content": this.customContent } }, h("div", { key: '4f9c2e93e4e73f38dd9012b8a7e12be58ed506f7' }, h("p", { key: '342ce9c1c2a3b0d8eb0a585b84933441bccc044b', class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, h("span", { key: '0c7fbe530be3eae718701f62bcfc190cfe1c3cbe', title: this.getTitleAuthors() }, h("span", { key: 'c6f1cd41b9353bbb39eb2a0f3a92664c05cb45d9', "aria-description": "Autori", class: "bold" }, this.autori))), h("p", { key: '8f5930ae90e38554151c10e5996014103f6fae6a', class: "year-isbn" }, h("span", { key: '18ebc65de360d4fdbc09a31f1e35fb07af7930d0', class: "isbn" }, h("span", { key: '25b8d2bf3bd332132b28f16b72ad81ee870a0202' }, h("span", { key: '7ba427f38f89b31f0228c09419281188d9f0e6a9', "aria-description": "ISBN edizione cartacea", class: "bold" }, this.isbn), " ", "(ed. cartacea)")))), h("div", { key: '1b553a8af97ebf9035a3411dbefc34db332ae3bb', class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, h("slot", { key: 'e38a67048f019687d6b0a40b84ccdf0075adf98a', name: "list" })))), this.customContent && h("slot", { name: "content" })));
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