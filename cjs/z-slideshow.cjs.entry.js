'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-69339d64.js');
const utils = require('./utils-98ed20af.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);display:block;width:inherit}:host>div{display:flex;flex-direction:column;width:inherit}main{position:relative;overflow:hidden;width:100%}main z-icon.scroll{position:absolute;top:50%;width:auto;cursor:pointer;transition:0.6s ease;margin:0 var(--space-unit);fill:var(--color-primary01);z-index:10}main .scroll.disabled{opacity:50%;pointer-events:none}main .scroll.right{right:0}#slides{display:flex;flex-wrap:wrap;transition:all 300ms;line-height:0px;overflow-y:hidden}footer{height:56px;width:100%;align-items:center;display:grid;grid-template-columns:2;grid-template-rows:2;grid-template-areas:\"center center\" \"left right\";border-top:var(--border-base) solid var(--color-surface02)}footer>div{align-items:center;width:100%}footer .footerCenter{grid-area:center}footer .footerLeft{grid-area:left}footer .footerRight{grid-area:right}footer .bulletContainer{display:flex;margin:0 auto;justify-content:center;align-items:center;min-height:60px}footer .bulletContainer .bullet{width:8px;height:8px;border-radius:50%;background-color:var(--bg-neutral-150);margin:var(--space-unit) 2px;pointer-events:none}footer .bulletContainer .bullet.selected{background-color:var(--bg-neutral-400)}@media only screen and (min-width: 768px){footer{grid-template-columns:1fr 2fr 1fr;grid-template-rows:1;grid-template-areas:\"left center right\";height:76px;border-top:var(--border-base) solid var(--color-surface02)}footer .bulletContainer .bullet{width:10px;height:10px;margin:var(--space-unit) 3px}}@media only screen and (min-width: 1025px){main z-icon.scroll{margin:0 10px}footer .bulletContainer .bullet{width:16px;height:16px;margin:var(--space-unit) calc(var(--space-unit) * 0.5);pointer-events:auto;cursor:pointer}}";

const ZSlideshow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      case "string":
        return (this.links = (_a = utils.convertJson(this.data)) !== null && _a !== void 0 ? _a : []);
      default:
        return (this.links = this.data);
    }
  }
  setStyle() {
    const refSlides = this.el.shadowRoot.querySelector("#slides");
    if (!refSlides)
      return;
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
      case index$1.DeviceEnum.mobile:
        return 24;
      case index$1.DeviceEnum.tablet:
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
    return (index.h("footer", null, index.h("div", { class: "footerLeft" }, index.h("slot", { name: "footer-left" })), index.h("div", { class: "footerCenter" }, index.h("div", { class: "bulletContainer" }, Object.keys(this.links).map(i => this.renderBullet(parseInt(i))))), index.h("div", { class: "footerRight" }, index.h("slot", { name: "footer-right" }))));
  }
  render() {
    if (!this.links || !this.links.length)
      return index.h("div", null);
    return (index.h("div", { id: this.slideshowid }, this.renderSlideshowMain(), this.renderSlideshowFooter()));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "data": ["watchData"]
  }; }
};
ZSlideshow.style = stylesCss;

exports.z_slideshow = ZSlideshow;
