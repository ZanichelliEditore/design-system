'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dee3e21d.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-carousel-gutter:0}.z-carousel-items-container{display:flex;overflow-x:scroll;padding-inline-start:0;margin:0;list-style:none;-ms-overflow-style:none;scrollbar-width:none;}.z-carousel-items-container::-webkit-scrollbar{display:none}.z-carousel-items-container>*:not(:last-child){margin-right:var(--z-carousel-gutter)}";

const ZCarousel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("ul", { class: "z-carousel-items-container" }, index.h("slot", null)));
  }
};
ZCarousel.style = stylesCss;

exports.z_carousel = ZCarousel;
