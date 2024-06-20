import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { L as LicenseType } from './index2.js';

const stylesCss = "footer{position:relative;z-index:5;top:0;width:auto;height:calc(var(--space-unit) * 6);padding:0;border-top:var(--border-size-medium) solid var(--color-surface03);margin:0;background-color:var(--color-surface01);border-radius:0 0 var(--border-radius) var(--border-radius);color:var(--color-surface05);font-family:var(--font-family-sans);font-weight:var(--font-rg);-webkit-transition:height 500ms ease-in-out,\n    top 500ms ease-in-out;transition:height 500ms ease-in-out,\n    top 500ms ease-in-out}footer.real,footer.trial,footer.temp{border-top:var(--border-size-medium) solid var(--blue100)}footer .bold{font-family:var(--font-family-sans);font-weight:var(--font-sb)}footer>p{overflow:hidden;height:40px;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 2) var(--space-unit) calc(var(--space-unit) * 2);margin:0;background-color:var(--color-surface01);font-family:var(--font-family-sans);font-size:16px;font-weight:var(--font-rg);line-height:22px;-webkit-transition:all 200ms linear;transition:all 200ms linear}footer.isopen>p{background-color:var(--gray200);font-size:14px;font-weight:var(--font-sb);-webkit-transition:all 200ms linear;transition:all 200ms linear}footer.isopen.real>p,footer.isopen.trial>p,footer.isopen.temp>p{background-color:var(--blue100)}footer .visible{display:block}footer .hidden{display:none}footer>div.content{overflow:hidden;height:60px}footer>div.content>div:not(.slot-handler){padding:var(--space-unit) calc(var(--space-unit) * 2)}footer>div.content>div>p{overflow:hidden;height:20px;padding:0;margin:0;font-size:14px;line-height:20px;text-overflow:ellipsis;white-space:nowrap}footer>div.content>div>p.year-isbn{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;padding-top:var(--space-unit)}footer>div.content>div>p.year-isbn>span.isbn{overflow:hidden;text-overflow:ellipsis}footer.isopen>div.content>div:not(.slot-handler){height:68px}footer.isopen>div.content>div>p.authors{height:40px;text-overflow:initial;white-space:initial}footer.isopen>div.content>div>p.year-isbn{height:50px;-ms-flex-direction:column;flex-direction:column;padding-left:0}footer.isopen>div.content>div>p.year-isbn>span.isbn{display:inline-grid;padding-left:0}footer.isopen{top:-212px;height:295px;-webkit-transition:height 500ms ease-in-out,\n    top 500ms ease-in-out;transition:height 500ms ease-in-out,\n    top 500ms ease-in-out}footer.isopen.custom-content{top:-292px}footer.isopen>div.content{height:280px;-webkit-transition:height 500ms ease-in-out,\n    top 500ms ease-in-out;transition:height 500ms ease-in-out,\n    top 500ms ease-in-out}footer.isopen.custom-content>div.content{height:230px}.toggle{position:absolute;z-index:10;top:-24px;left:16px}.faded{opacity:0.3;pointer-events:none}footer>p.custom-content,footer .content.custom-content{display:none}footer.isopen>p.custom-content,footer.isopen .content.custom-content{display:block}div.wrapper{position:relative;height:100%}div.wrapper ::slotted([slot=\"content\"]){position:absolute;z-index:10;top:calc(var(--space-unit) * 2);display:block;width:100%;height:112px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 calc(var(--space-unit) * 2);border-top:var(--border-size-medium) solid transparent;background:var(--color-white)}div.wrapper.isopen ::slotted([slot=\"content\"]){top:0;bottom:0;height:128px;padding:calc(var(--space-unit) * 2);border-color:var(--blue100)}";
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
        return (h("div", { key: 'e5711063557dce84367650a81a3313e4d4755ca7', class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) }, h("footer", { key: '81fe8ba76037d6aabf6a34123ef7e16b9fdcf6bf', class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, h("span", { key: 'fe8a8eb5e9668ef98052aa77ea006e36e1da4362', class: "toggle" }, h("slot", { key: '1b31d051074a5c49783adced5ab8a08ffce34c2c', name: "toggle" })), this.titolo && h("p", { key: 'fd5184ba3211dcaec0fbbada7e66c2424e8683a1', class: { "custom-content": this.customContent } }, this.titolo), h("div", { key: 'eb56f5377d285fa66090865f3750267827a55b30', class: { "content": true, "custom-content": this.customContent } }, h("div", { key: '73df88cb7871a4aeb47414cdfb2c248f4cae0454' }, h("p", { key: 'bcee7b1836e87540bb9ea7a0dae9b20717acb84b', class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, h("span", { key: '1a2741b228850ea9b438e2d0d3bbe161f1c58223', title: this.getTitleAuthors() }, h("span", { key: '78e8afea170e944a119670a1f3ff35d9b1e68cca', "aria-description": "Autori", class: "bold" }, this.autori))), h("p", { key: '46339663289bca4d4c0d18f5a8a1e5c7f967a2c7', class: "year-isbn" }, h("span", { key: '885b4e716717a5e7faf0b2cdd0eb0a120c6b02a5', class: "isbn" }, h("span", { key: '8eb8fe819c2208bcd85a4ff75bcea45d126bbcfd' }, h("span", { key: 'adce63e9a8982d61692c899da383374914db342d', "aria-description": "ISBN edizione cartacea", class: "bold" }, this.isbn), " ", "(ed. cartacea)")))), h("div", { key: 'b36ed0288ce7e14a3c8770cd097f712440d10c5b', class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, h("slot", { key: 'f7eca7603fd10d49a68f7c41505d50ee185e206f', name: "list" })))), this.customContent && h("slot", { key: '4f80af2d5fe5bba71f5d1704f4816aa395effe88', name: "content" })));
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