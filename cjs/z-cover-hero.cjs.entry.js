'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = ":host{--cover-hero-overlay:linear-gradient(270deg, #0000 0%, #000000e6 100%);--cover-hero-text-color:var(--color-text-inverse);display:block;overflow:hidden}:host,*{box-sizing:border-box}:host .main-container{position:relative;width:100%;align-items:baseline}:host .content-container{color:var(--cover-hero-text-color);fill:var(--cover-hero-text-color)}:host .main-container .cover-container{position:relative;width:100%;padding-top:calc(100% / (var(--cover-hero-aspect-ratio, var(--image-aspect-ratio, 16/9))));background-color:var(--gray600)}::slotted([slot=\"cover\"]){position:absolute;display:block;width:100%;height:100%;inset:0;object-fit:cover;object-position:top center}::slotted(z-info-reveal){position:absolute;z-index:1;right:var(--grid-margin);bottom:var(--grid-margin)}:host([variant=\"overlay\"]:not([preserve-aspect-ratio=\"\"],[preserve-aspect-ratio=\"true\"])) .main-container{height:100%}:host([variant=\"overlay\"]:not([preserve-aspect-ratio=\"\"],[preserve-aspect-ratio=\"true\"])) .main-container .cover-container{position:absolute;z-index:-1;height:100%;padding:0}:host([variant=\"overlay\"]) .main-container .cover-container::after{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--cover-hero-overlay);content:\"\"}:host([variant=\"overlay\"]:is([preserve-aspect-ratio=\"\"],[preserve-aspect-ratio=\"true\"])) .main-container .content-container{position:absolute;inset:0}:host([variant=\"overlay\"]) .main-container .content-container{height:100%;padding:var(--grid-margin)}:host([variant=\"stacked\"]){--cover-hero-text-color:var(--color-default-text)}:host([variant=\"stacked\"]) .content-container ::slotted(*){padding:var(--grid-margin) 0}";
const ZCoverHeroStyle0 = stylesCss;

const ZCoverHero = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.variant = index$1.CoverHeroVariant.OVERLAY;
        this.contentPosition = index$1.CoverHeroContentPosition.TOP;
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
        return (index.h("div", { class: "content-container" }, index.h("slot", { name: "content" })));
    }
    render() {
        return (index.h(index.Host, { key: '5e168fcc860cb006f3512b6097a51e3888678ae7' }, this.variant === index$1.CoverHeroVariant.STACKED &&
            this.contentPosition === index$1.CoverHeroContentPosition.TOP &&
            this.renderContent(), index.h("div", { key: 'bb67889d35a522ce0e284781a6038c6d87c7ecf3', class: "main-container" }, index.h("div", { key: 'a849722c3fab8946e03f869609fb4fb694a407fd', class: "cover-container" }, index.h("slot", { key: '72943b0eed0785b90925661579a4bb288ac765c5', name: "cover" })), index.h("slot", { key: '65997d8731e9ad963e64dcb3cd5bd5c4922aa49c', name: "info-reveal" }), this.variant === index$1.CoverHeroVariant.OVERLAY && this.renderContent()), this.variant === index$1.CoverHeroVariant.STACKED &&
            this.contentPosition === index$1.CoverHeroContentPosition.BOTTOM &&
            this.renderContent()));
    }
    get host() { return index.getElement(this); }
};
ZCoverHero.style = ZCoverHeroStyle0;

exports.z_cover_hero = ZCoverHero;

//# sourceMappingURL=z-cover-hero.cjs.entry.js.map