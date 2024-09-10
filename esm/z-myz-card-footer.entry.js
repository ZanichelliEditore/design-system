import { r as registerInstance, h, g as getElement } from './index-a2130b6a.js';
import { L as LicenseType } from './index-b7dbacb4.js';

const stylesCss = "footer{position:relative;z-index:5;top:0;width:auto;height:calc(var(--space-unit) * 6);padding:0;border-top:var(--border-size-medium) solid var(--color-surface03);margin:0;background-color:var(--color-surface01);border-radius:0 0 var(--border-radius) var(--border-radius);color:var(--color-surface05);font-family:var(--font-family-sans);font-weight:var(--font-rg);transition:height 500ms ease-in-out,\n    top 500ms ease-in-out}footer.real,footer.trial,footer.temp{border-top:var(--border-size-medium) solid var(--blue100)}footer .bold{font-family:var(--font-family-sans);font-weight:var(--font-sb)}footer>p{overflow:hidden;height:40px;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 2) var(--space-unit) calc(var(--space-unit) * 2);margin:0;background-color:var(--color-surface01);font-family:var(--font-family-sans);font-size:16px;font-weight:var(--font-rg);line-height:22px;transition:all 200ms linear}footer.isopen>p{background-color:var(--gray200);font-size:14px;font-weight:var(--font-sb);transition:all 200ms linear}footer.isopen.real>p,footer.isopen.trial>p,footer.isopen.temp>p{background-color:var(--blue100)}footer .visible{display:block}footer .hidden{display:none}footer>div.content{overflow:hidden;height:60px}footer>div.content>div:not(.slot-handler){padding:var(--space-unit) calc(var(--space-unit) * 2)}footer>div.content>div>p{overflow:hidden;height:20px;padding:0;margin:0;font-size:14px;line-height:20px;text-overflow:ellipsis;white-space:nowrap}footer>div.content>div>p.year-isbn{display:flex;flex-direction:row;justify-content:space-between;padding-top:var(--space-unit)}footer>div.content>div>p.year-isbn>span.isbn{overflow:hidden;text-overflow:ellipsis}footer.isopen>div.content>div:not(.slot-handler){height:68px}footer.isopen>div.content>div>p.authors{height:40px;text-overflow:initial;white-space:initial}footer.isopen>div.content>div>p.year-isbn{height:50px;flex-direction:column;padding-left:0}footer.isopen>div.content>div>p.year-isbn>span.isbn{display:inline-grid;padding-left:0}footer.isopen{top:-212px;height:295px;transition:height 500ms ease-in-out,\n    top 500ms ease-in-out}footer.isopen.custom-content{top:-292px}footer.isopen>div.content{height:280px;transition:height 500ms ease-in-out,\n    top 500ms ease-in-out}footer.isopen.custom-content>div.content{height:230px}.toggle{position:absolute;z-index:10;top:-24px;left:16px}.faded{opacity:0.3;pointer-events:none}footer>p.custom-content,footer .content.custom-content{display:none}footer.isopen>p.custom-content,footer.isopen .content.custom-content{display:block}div.wrapper{position:relative;height:100%}div.wrapper ::slotted([slot=\"content\"]){position:absolute;z-index:10;top:calc(var(--space-unit) * 2);display:block;width:100%;height:112px;box-sizing:border-box;padding:0 calc(var(--space-unit) * 2);border-top:var(--border-size-medium) solid transparent;background:var(--color-white)}div.wrapper.isopen ::slotted([slot=\"content\"]){top:0;bottom:0;height:128px;padding:calc(var(--space-unit) * 2);border-color:var(--blue100)}";
const ZMyzCardFooterStyle0 = stylesCss;

const ZMyzCardFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: '5e52bb4e61efb15a9e45cfc35635edf162c1348b', class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) }, h("footer", { key: 'e58bbf1f64147496f82422ea45e0c7769145f5d2', class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, h("span", { key: '7733adaf9bd6739ce95b53c963c5fef169fe5617', class: "toggle" }, h("slot", { key: '43c3727d4206f3538f82298da583634338df147f', name: "toggle" })), this.titolo && h("p", { key: '8d895c1628c00fdf053cd413c93a71bd2ed7fe2e', class: { "custom-content": this.customContent } }, this.titolo), h("div", { key: '8bc2964e1e62e7dc2b9c4198fc3d19572702fc04', class: { "content": true, "custom-content": this.customContent } }, h("div", { key: '75c1a00ee5b83cc1202ff7ea8ae96fab7d24e09a' }, h("p", { key: 'b2a545232bba45aac1aa7615dead6354327dcbff', class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, h("span", { key: '4869f5bb8a75bc51b3fddde7fe46a23811d061f9', title: this.getTitleAuthors() }, h("span", { key: '43f8c9ff3eb8a794f9be628b8d0a1d8853bc1510', "aria-description": "Autori", class: "bold" }, this.autori))), h("p", { key: '15ed7ba2687e6aafdf7704da66dcbcee7ec25445', class: "year-isbn" }, h("span", { key: 'a05d17196f49c90c025ef545586dc162444efd03', class: "isbn" }, h("span", { key: '6481dac818d211c724aaddf1e17cf71637099376' }, h("span", { key: '6d27dc2a43d5e6e3367ad77e05c76b6d096f08a1', "aria-description": "ISBN edizione cartacea", class: "bold" }, this.isbn), " ", "(ed. cartacea)")))), h("div", { key: '6df905d3cedea3ed63029851103a4a4f919e8b20', class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, h("slot", { key: 'b71e8974d82d8b45f1bd53d8d73b893924a8a84d', name: "list" })))), this.customContent && h("slot", { key: 'a2269175a16d7f2f2cdc48035969e6fab3d64052', name: "content" })));
    }
    get host() { return getElement(this); }
};
ZMyzCardFooter.style = ZMyzCardFooterStyle0;

export { ZMyzCardFooter as z_myz_card_footer };

//# sourceMappingURL=z-myz-card-footer.entry.js.map