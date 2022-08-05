'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-carousel-gutter:0}.z-carousel-items-container{display:flex;overflow-x:scroll;padding-inline-start:0;margin:0;list-style:none;-ms-overflow-style:none;scrollbar-width:none;}.z-carousel-items-container::-webkit-scrollbar{display:none}.z-carousel-items-container>*:not(:last-child){margin-right:var(--z-carousel-gutter)}";

const ZCarousel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** sets the height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show. */
    this.ghostLoadingHeight = 100;
  }
  render() {
    if (this.isLoading) {
      return (index.h("div", { style: { height: `${this.ghostLoadingHeight}px` } }, index.h("z-ghost-loading", null), index.h("div", { style: { display: "none" } }, index.h("slot", null))));
    }
    return (index.h("ul", { class: "z-carousel-items-container" }, index.h("slot", null)));
  }
};
ZCarousel.style = stylesCss;

exports.z_carousel = ZCarousel;
