import { h } from "@stencil/core";
import { Device } from "../../../beans";
import { convertJson, getDevice, handleKeyboardSubmit } from "../../../utils/utils";
/**
 * Check if data is an array of strings.
 * @param {unknown} data Data to check
 * @returns {boolean}
 */
function isStringArray(data) {
    return Array.isArray(data) && data.every((datum) => typeof datum === "string");
}
/**
 * @slot footer-right - right content slot in footer
 * @slot footer-left - left content slot in footer
 */
export class ZSlideshow {
    constructor() {
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
    static get is() { return "z-slideshow"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["styles.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["styles.css"]
        };
    }
    static get properties() {
        return {
            "slideshowid": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "slideshow id"
                },
                "attribute": "slideshowid",
                "reflect": false
            },
            "data": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string[] | string",
                    "resolved": "string | string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "array or JSON stringified images urls"
                },
                "attribute": "data",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "device": {},
            "currentSlide": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "data",
                "methodName": "watchData"
            }];
    }
}
//# sourceMappingURL=index.js.map
