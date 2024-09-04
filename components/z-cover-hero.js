import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { J as CoverHeroVariant, M as CoverHeroContentPosition } from './index2.js';

const stylesCss = ":host{--cover-hero-overlay:linear-gradient(270deg, #0000 0%, #000000e6 100%);--cover-hero-text-color:var(--color-text-inverse);display:block;overflow:hidden}:host,*{-webkit-box-sizing:border-box;box-sizing:border-box}:host .main-container{position:relative;width:100%;-ms-flex-align:baseline;align-items:baseline}:host .content-container{color:var(--cover-hero-text-color);fill:var(--cover-hero-text-color)}:host .main-container .cover-container{position:relative;width:100%;padding-top:calc(100% / (var(--cover-hero-aspect-ratio, var(--image-aspect-ratio, 16/9))));background-color:var(--gray600)}::slotted([slot=\"cover\"]){position:absolute;display:block;width:100%;height:100%;inset:0;-o-object-fit:cover;object-fit:cover;-o-object-position:top center;object-position:top center}::slotted(z-info-reveal){position:absolute;z-index:1;right:var(--grid-margin);bottom:var(--grid-margin)}:host([variant=\"overlay\"]:not([preserve-aspect-ratio=\"\"],[preserve-aspect-ratio=\"true\"])) .main-container{height:100%}:host([variant=\"overlay\"]:not([preserve-aspect-ratio=\"\"],[preserve-aspect-ratio=\"true\"])) .main-container .cover-container{position:absolute;z-index:-1;height:100%;padding:0}:host([variant=\"overlay\"]) .main-container .cover-container::after{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--cover-hero-overlay);content:\"\"}:host([variant=\"overlay\"]:is([preserve-aspect-ratio=\"\"],[preserve-aspect-ratio=\"true\"])) .main-container .content-container{position:absolute;inset:0}:host([variant=\"overlay\"]) .main-container .content-container{height:100%;padding:var(--grid-margin)}:host([variant=\"stacked\"]){--cover-hero-text-color:var(--color-default-text)}:host([variant=\"stacked\"]) .content-container ::slotted(*){padding:var(--grid-margin) 0}";
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
        return (h(Host, { key: '782c8ef237b2744069752392ab29176ae65bf798' }, this.variant === CoverHeroVariant.STACKED &&
            this.contentPosition === CoverHeroContentPosition.TOP &&
            this.renderContent(), h("div", { key: '97f1b49350218a75b19946a46190c63c15f70058', class: "main-container" }, h("div", { key: '2dc3210d8807b998ad1823bb2776d59a762f15dd', class: "cover-container" }, h("slot", { key: '2ab5b85aa02c25ee81ecafb3db91e0e57df549b3', name: "cover" })), h("slot", { key: 'a77f81fef651d1aae577079c4918cb26fb9af328', name: "info-reveal" }), this.variant === CoverHeroVariant.OVERLAY && this.renderContent()), this.variant === CoverHeroVariant.STACKED &&
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