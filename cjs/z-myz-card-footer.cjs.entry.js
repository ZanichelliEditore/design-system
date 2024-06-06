'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = "footer{position:relative;z-index:5;top:0;width:auto;height:calc(var(--space-unit) * 6);padding:0;border-top:var(--border-size-medium) solid var(--color-surface03);margin:0;background-color:var(--color-surface01);border-radius:0 0 var(--border-radius) var(--border-radius);color:var(--color-surface05);font-family:var(--font-family-sans);font-weight:var(--font-rg);transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.real,footer.trial,footer.temp{border-top:var(--border-size-medium) solid var(--blue100)}footer .bold{font-family:var(--font-family-sans);font-weight:var(--font-sb)}footer>p{overflow:hidden;height:40px;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 2) var(--space-unit) calc(var(--space-unit) * 2);margin:0;background-color:var(--color-surface01);font-family:var(--font-family-sans);font-size:16px;font-weight:var(--font-rg);line-height:22px;transition:all 200ms linear}footer.isopen>p{background-color:var(--gray200);font-size:14px;font-weight:var(--font-sb);transition:all 200ms linear}footer.isopen.real>p,footer.isopen.trial>p,footer.isopen.temp>p{background-color:var(--blue100)}footer .visible{display:block}footer .hidden{display:none}footer>div.content{overflow:hidden;height:60px}footer>div.content>div:not(.slot-handler){padding:var(--space-unit) calc(var(--space-unit) * 2)}footer>div.content>div>p{overflow:hidden;height:20px;padding:0;margin:0;font-size:14px;line-height:20px;text-overflow:ellipsis;white-space:nowrap}footer>div.content>div>p.year-isbn{display:flex;flex-direction:row;justify-content:space-between;padding-top:var(--space-unit)}footer>div.content>div>p.year-isbn>span.isbn{overflow:hidden;text-overflow:ellipsis}footer.isopen>div.content>div:not(.slot-handler){height:68px}footer.isopen>div.content>div>p.authors{height:40px;text-overflow:initial;white-space:initial}footer.isopen>div.content>div>p.year-isbn{height:50px;flex-direction:column;padding-left:0}footer.isopen>div.content>div>p.year-isbn>span.isbn{display:inline-grid;padding-left:0}footer.isopen{top:-212px;height:295px;transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.isopen.custom-content{top:-292px}footer.isopen>div.content{height:280px;transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.isopen.custom-content>div.content{height:230px}.toggle{position:absolute;z-index:10;top:-24px;left:16px}.faded{opacity:0.3;pointer-events:none}footer>p.custom-content,footer .content.custom-content{display:none}footer.isopen>p.custom-content,footer.isopen .content.custom-content{display:block}div.wrapper{position:relative;height:100%}div.wrapper ::slotted([slot=\"content\"]){position:absolute;z-index:10;top:calc(var(--space-unit) * 2);display:block;width:100%;height:112px;box-sizing:border-box;padding:0 calc(var(--space-unit) * 2);border-top:var(--border-size-medium) solid transparent;background:var(--color-white)}div.wrapper.isopen ::slotted([slot=\"content\"]){top:0;bottom:0;height:128px;padding:calc(var(--space-unit) * 2);border-color:var(--blue100)}";
const ZMyzCardFooterStyle0 = stylesCss;

const ZMyzCardFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            "real": this.cardtype === index$1.LicenseType.REAL,
            "trial": this.cardtype === index$1.LicenseType.TRIAL,
            "temp": this.cardtype === index$1.LicenseType.TEMP,
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
        return (index.h("div", { key: '2355ce5bf7f86132e0ea79faaa7fb2ce7929e253', class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) }, index.h("footer", { key: '3ccb3f1f774258d7a25c67848142cc9424925ed0', class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, index.h("span", { key: '072816a3c2bc1cdd1ac691a8f8f1452b4c38f47d', class: "toggle" }, index.h("slot", { key: '2303be81faa22efd971ddd23664c65f6ad978113', name: "toggle" })), this.titolo && index.h("p", { class: { "custom-content": this.customContent } }, this.titolo), index.h("div", { key: '705cc32194d0f9a299785561c90fd87bd17f6506', class: { "content": true, "custom-content": this.customContent } }, index.h("div", { key: '631266505175cbc65aa8933350aa3d4aa05aa3d2' }, index.h("p", { key: '1c41fcd3eca98e064a3840d66674381d483ed992', class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, index.h("span", { key: '3c85536ddd4b9ec90afb6526d4511a20d450f16d', title: this.getTitleAuthors() }, index.h("span", { key: '90228e4567255c5dec27cfabb025200e21bab63c', "aria-description": "Autori", class: "bold" }, this.autori))), index.h("p", { key: 'c1c94511536c15f8faa87b4f4e25c378fdd360f2', class: "year-isbn" }, index.h("span", { key: '39796f2025296859dd920d653a2ee94739d62fc9', class: "isbn" }, index.h("span", { key: 'a4c6930d1e4ada79bf9ef68501cae51003587082' }, index.h("span", { key: 'aeeadffeac35d8abd57d35fc7e7a80657baf53b2', "aria-description": "ISBN edizione cartacea", class: "bold" }, this.isbn), " ", "(ed. cartacea)")))), index.h("div", { key: 'b34741423e777b90d389f690508e02096aec0670', class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, index.h("slot", { key: '58b736facd35b9618ba7e24787278578fc3270bf', name: "list" })))), this.customContent && index.h("slot", { name: "content" })));
    }
    get host() { return index.getElement(this); }
};
ZMyzCardFooter.style = ZMyzCardFooterStyle0;

exports.z_myz_card_footer = ZMyzCardFooter;

//# sourceMappingURL=z-myz-card-footer.cjs.entry.js.map