import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { M as CoverHeroVariant, Q as CoverHeroContentPosition } from './index2.js';

const stylesCss = ":host{--cover-hero-overlay:linear-gradient(270deg, #0000 0%, #000000e6 100%);--cover-hero-text-color:var(--color-text-inverse);display:block;overflow:hidden}:host,*{box-sizing:border-box}:host .main-container{position:relative;width:100%;align-items:baseline}:host .content-container{color:var(--cover-hero-text-color);fill:var(--cover-hero-text-color)}:host .main-container .cover-container{position:relative;width:100%;padding-top:calc(100% / (var(--cover-hero-aspect-ratio, var(--image-aspect-ratio, 16/9))));background-color:var(--gray600)}::slotted([slot=\"cover\"]){position:absolute;display:block;width:100%;height:100%;inset:0;object-fit:cover;object-position:top center}::slotted(z-info-reveal){position:absolute;z-index:1;right:var(--grid-margin);bottom:var(--grid-margin)}:host([variant=\"overlay\"]:not([preserve-aspect-ratio=\"\"],[preserve-aspect-ratio=\"true\"])) .main-container{height:100%}:host([variant=\"overlay\"]:not([preserve-aspect-ratio=\"\"],[preserve-aspect-ratio=\"true\"])) .main-container .cover-container{position:absolute;z-index:-1;height:100%;padding:0}:host([variant=\"overlay\"]) .main-container .cover-container::after{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--cover-hero-overlay);content:\"\"}:host([variant=\"overlay\"]:is([preserve-aspect-ratio=\"\"],[preserve-aspect-ratio=\"true\"])) .main-container .content-container{position:absolute;inset:0}:host([variant=\"overlay\"]) .main-container .content-container{height:100%;padding:var(--grid-margin)}:host([variant=\"stacked\"]){--cover-hero-text-color:var(--color-default-text)}:host([variant=\"stacked\"]) .content-container ::slotted(*){padding:var(--grid-margin) 0}";
const ZCoverHeroStyle0 = stylesCss;

const ZCoverHero$1 = /*@__PURE__*/ proxyCustomElement(class ZCoverHero extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.variant = CoverHeroVariant.OVERLAY;
        this.contentPosition = CoverHeroContentPosition.TOP;
        this.preserveAspectRatio = true;
    }
    /**
     * Store the intrinsic aspect ratio of the slotted image when loaded,
     * to have a default when `--cover-hero-aspect-ratio` is not set.
     * @param target The event target
     */
    onImgLoad({ target }) {
        if (target instanceof Image && target.closest("[slot=cover]")) {
            const ratio = target.naturalWidth / target.naturalHeight;
            this.host.style.setProperty("--image-aspect-ratio", ratio.toString());
        }
    }
    /**
     * Template for the content.
     */
    renderContent() {
        return (h("div", { class: "content-container" }, h("slot", { name: "content" })));
    }
    render() {
        return (h(Host, { key: '5fe68ea4b76b9938e202f20e2f3d41bdc2346553' }, this.variant === CoverHeroVariant.STACKED &&
            this.contentPosition === CoverHeroContentPosition.TOP &&
            this.renderContent(), h("div", { key: 'c39734aada37cc8d7d0c3953caf8ba42c4276ead', class: "main-container" }, h("div", { key: '6b749c89d1c8ba23e08c694de457981f8cde8ffb', class: "cover-container" }, h("slot", { key: 'dbb58f0a9f1b657e0c867b18458a2cc0903f6c6e', name: "cover" })), h("slot", { key: 'd8b93de81c83a1080b7a5e0f6aed6475be67af53', name: "info-reveal" }), this.variant === CoverHeroVariant.OVERLAY && this.renderContent()), this.variant === CoverHeroVariant.STACKED &&
            this.contentPosition === CoverHeroContentPosition.BOTTOM &&
            this.renderContent()));
    }
    get host() { return this; }
    static get style() { return ZCoverHeroStyle0; }
}, [1, "z-cover-hero", {
        "variant": [513],
        "contentPosition": [513, "content-position"],
        "preserveAspectRatio": [516, "preserve-aspect-ratio"]
    }, [[2, "load", "onImgLoad"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-cover-hero"];
    components.forEach(tagName => { switch (tagName) {
        case "z-cover-hero":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZCoverHero$1);
            }
            break;
    } });
}

const ZCoverHero = ZCoverHero$1;
const defineCustomElement = defineCustomElement$1;

export { ZCoverHero, defineCustomElement };

//# sourceMappingURL=z-cover-hero.js.map