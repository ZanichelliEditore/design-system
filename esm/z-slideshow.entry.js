import { r as registerInstance, h, g as getElement } from './index-a2130b6a.js';
import { p as Device } from './index-b7dbacb4.js';
import { f as convertJson, g as getDevice, a as handleKeyboardSubmit } from './utils-8ade9e2d.js';
import './breakpoints-680e0e56.js';

const stylesCss = ":host{display:block;width:inherit;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:flex;width:inherit;flex-direction:column}main{position:relative;overflow:hidden;width:100%}main z-icon.scroll{position:absolute;z-index:10;top:50%;width:auto;margin:0 var(--space-unit);cursor:pointer;fill:var(--color-primary01);transition:0.6s ease}main .scroll.disabled{opacity:0.5;pointer-events:none}main .scroll.right{right:0}#slides{display:flex;flex-wrap:wrap;line-height:0px;overflow-y:hidden;transition:all 300ms}footer{display:grid;width:100%;height:56px;align-items:center;border-top:var(--border-size-medium) solid var(--color-surface02);grid-template:2 / 2;grid-template-areas:\"center center\" \"left right\"}footer>div{width:100%;align-items:center}footer .footer-center{grid-area:center}footer .footer-left{grid-area:left}footer .footer-right{grid-area:right}footer .bullet-container{display:flex;min-height:60px;align-items:center;justify-content:center;margin:0 auto}footer .bullet-container .bullet{width:8px;height:8px;margin:var(--space-unit) 2px;background-color:var(--gray200);border-radius:50%;pointer-events:none}footer .bullet-container .bullet.selected{background-color:var(--gray400)}main z-icon:focus,footer .bullet-container .bullet:focus{border-radius:50%;box-shadow:var(--shadow-focus-primary);outline:none !important}@media only screen and (min-width: 768px){footer{height:76px;border-top:var(--border-size-medium) solid var(--color-surface02);grid-template:1 / 1fr 2fr 1fr;grid-template-areas:\"left center right\"}footer .bullet-container .bullet{width:10px;height:10px;margin:var(--space-unit) 3px}}@media only screen and (min-width: 1025px){main z-icon.scroll{margin:0 10px}footer .bullet-container .bullet{width:16px;height:16px;margin:var(--space-unit) calc(var(--space-unit) * 0.5);cursor:pointer;pointer-events:auto}}";
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
        registerInstance(this, hostRef);
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
                const parsed = (_a = convertJson(this.data)) !== null && _a !== void 0 ? _a : [];
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
        this.device = getDevice();
    }
    setCurrentSlide(index) {
        this.currentSlide = index;
    }
    getBulletDimension() {
        switch (this.device) {
            case Device.MOBILE:
                return 24;
            case Device.TABLET:
                return 32;
            default:
                return 40;
        }
    }
    renderSlides(items) {
        return (h("div", { id: "slides" }, items.map((item, i) => (h("div", { id: "slide" + i, class: `slide ${this.currentSlide !== i && "hide"}` }, h("img", { src: item }))))));
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
        return (h("z-icon", { class: `scroll ${direction} ${disabled && "disabled"}`, width: this.getBulletDimension(), height: this.getBulletDimension(), name: `chevron-${direction}-circle`, onClick: () => {
                !disabled && this.setCurrentSlide(nextSlide);
            }, onKeyUp: (e) => !disabled &&
                handleKeyboardSubmit(e, () => {
                    this.setCurrentSlide(nextSlide);
                }), tabindex: 0, role: "button" }));
    }
    renderSlideshowMain() {
        return (h("main", null, this.renderScroll("left"), this.renderSlides(this.links), this.renderScroll("right")));
    }
    renderBullet(i) {
        return (h("a", { class: `bullet ${this.currentSlide === i && "selected"}`, onClick: () => this.setCurrentSlide(i), onKeyUp: (e) => handleKeyboardSubmit(e, () => this.setCurrentSlide(i)), tabindex: 0, role: "button" }));
    }
    renderSlideshowFooter() {
        return (h("footer", null, h("div", { class: "footer-left" }, h("slot", { name: "footer-left" })), h("div", { class: "footer-center" }, h("div", { class: "bullet-container" }, Object.keys(this.links).map((i) => this.renderBullet(parseInt(i))))), h("div", { class: "footer-right" }, h("slot", { name: "footer-right" }))));
    }
    render() {
        if (!this.links || !this.links.length) {
            return h("div", null);
        }
        return (h("div", { id: this.slideshowid }, this.renderSlideshowMain(), this.renderSlideshowFooter()));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "data": ["watchData"]
    }; }
};
ZSlideshow.style = ZSlideshowStyle0;

export { ZSlideshow as z_slideshow };

//# sourceMappingURL=z-slideshow.entry.js.map