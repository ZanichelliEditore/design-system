'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-39ce4edf.js');
const utils = require('./utils-d0b10736.js');
require('./breakpoints-5c22092a.js');

const stylesCss = ":host{display:block;width:inherit;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:flex;width:inherit;flex-direction:column}main{position:relative;overflow:hidden;width:100%}main z-icon.scroll{position:absolute;z-index:10;top:50%;width:auto;margin:0 var(--space-unit);cursor:pointer;fill:var(--color-primary01);transition:0.6s ease}main .scroll.disabled{opacity:0.5;pointer-events:none}main .scroll.right{right:0}#slides{display:flex;flex-wrap:wrap;line-height:0px;overflow-y:hidden;transition:all 300ms}footer{display:grid;width:100%;height:56px;align-items:center;border-top:var(--border-size-medium) solid var(--color-surface02);grid-template:2 / 2;grid-template-areas:\"center center\" \"left right\"}footer>div{width:100%;align-items:center}footer .footer-center{grid-area:center}footer .footer-left{grid-area:left}footer .footer-right{grid-area:right}footer .bullet-container{display:flex;min-height:60px;align-items:center;justify-content:center;margin:0 auto}footer .bullet-container .bullet{width:8px;height:8px;margin:var(--space-unit) 2px;background-color:var(--gray200);border-radius:50%;pointer-events:none}footer .bullet-container .bullet.selected{background-color:var(--gray400)}@media only screen and (min-width: 768px){footer{height:76px;border-top:var(--border-size-medium) solid var(--color-surface02);grid-template:1 / 1fr 2fr 1fr;grid-template-areas:\"left center right\"}footer .bullet-container .bullet{width:10px;height:10px;margin:var(--space-unit) 3px}}@media only screen and (min-width: 1025px){main z-icon.scroll{margin:0 10px}footer .bullet-container .bullet{width:16px;height:16px;margin:var(--space-unit) calc(var(--space-unit) * 0.5);cursor:pointer;pointer-events:auto}}";
const ZSlideshowStyle0 = stylesCss;

/**
 * Check if data is an array of strings.
 * @param {unknown} data Data to check
 * @returns {boolean}
 */
function isStringArray(data) {
    return Array.isArray(data) && data.every((datum) => typeof datum === "string");
}
const ZSlideshow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.slideshowid = undefined;
        this.data = undefined;
        this.device = undefined;
        this.currentSlide = 0;
    }
    watchData() {
        this.parseLinks();
    }
    componentWillLoad() {
        this.parseLinks();
        this.setDevice();
        window.addEventListener("resize", this.handleResize.bind(this));
    }
    componentDidRender() {
        this.setStyle();
    }
    handleResize() {
        this.setDevice();
        this.setStyle();
    }
    parseLinks() {
        var _a;
        switch (typeof this.data) {
            case "string": {
                const parsed = (_a = utils.convertJson(this.data)) !== null && _a !== void 0 ? _a : [];
                if (!isStringArray(parsed)) {
                    throw new Error("Passed data is invalid");
                }
                this.links = parsed;
                break;
            }
            default:
                this.links = this.data;
                break;
        }
    }
    setStyle() {
        const refSlides = this.el.shadowRoot.querySelector("#slides");
        if (!refSlides) {
            return;
        }
        const allImages = this.el.shadowRoot.querySelectorAll(".slide");
        const width = this.el.offsetWidth;
        const fullwidth = width * this.links.length;
        refSlides.style.width = `${fullwidth}px`;
        refSlides.style.transform = `translate(-${width * this.currentSlide}px)`;
        allImages.forEach((item) => {
            const img = item.querySelector("img");
            img.style.width = `${width}px`;
        });
    }
    setDevice() {
        this.device = utils.getDevice();
    }
    setCurrentSlide(index) {
        this.currentSlide = index;
    }
    getBulletDimension() {
        switch (this.device) {
            case index$1.Device.MOBILE:
                return 24;
            case index$1.Device.TABLET:
                return 32;
            default:
                return 40;
        }
    }
    renderSlides(items) {
        return (index.h("div", { id: "slides" }, items.map((item, i) => (index.h("div", { id: "slide" + i, class: `slide ${this.currentSlide !== i && "hide"}` }, index.h("img", { src: item }))))));
    }
    renderScroll(direction) {
        let disabled = false, nextSlide = this.currentSlide;
        if (direction === "left") {
            disabled = this.currentSlide === 0;
            nextSlide--;
        }
        else if (direction === "right") {
            disabled = this.currentSlide === this.links.length - 1;
            nextSlide++;
        }
        return (index.h("z-icon", { class: `scroll ${direction} ${disabled && "disabled"}`, width: this.getBulletDimension(), height: this.getBulletDimension(), name: `chevron-${direction}-circle`, onClick: () => {
                !disabled && this.setCurrentSlide(nextSlide);
            }, onKeyUp: (e) => !disabled &&
                utils.handleKeyboardSubmit(e, () => {
                    this.setCurrentSlide(nextSlide);
                }), tabindex: 0, role: "button" }));
    }
    renderSlideshowMain() {
        return (index.h("main", null, this.renderScroll("left"), this.renderSlides(this.links), this.renderScroll("right")));
    }
    renderBullet(i) {
        return (index.h("a", { class: `bullet ${this.currentSlide === i && "selected"}`, onClick: () => this.setCurrentSlide(i), onKeyUp: (e) => utils.handleKeyboardSubmit(e, () => this.setCurrentSlide(i)), tabindex: 0, role: "button" }));
    }
    renderSlideshowFooter() {
        return (index.h("footer", null, index.h("div", { class: "footer-left" }, index.h("slot", { name: "footer-left" })), index.h("div", { class: "footer-center" }, index.h("div", { class: "bullet-container" }, Object.keys(this.links).map((i) => this.renderBullet(parseInt(i))))), index.h("div", { class: "footer-right" }, index.h("slot", { name: "footer-right" }))));
    }
    render() {
        if (!this.links || !this.links.length) {
            return index.h("div", null);
        }
        return (index.h("div", { id: this.slideshowid }, this.renderSlideshowMain(), this.renderSlideshowFooter()));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "data": ["watchData"]
    }; }
};
ZSlideshow.style = ZSlideshowStyle0;

exports.z_slideshow = ZSlideshow;

//# sourceMappingURL=z-slideshow.cjs.entry.js.map