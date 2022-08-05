import { r as registerInstance, h } from './index-90e18641.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-carousel-gutter:0}.z-carousel-items-container{display:flex;overflow-x:scroll;padding-inline-start:0;margin:0;list-style:none;-ms-overflow-style:none;scrollbar-width:none;}.z-carousel-items-container::-webkit-scrollbar{display:none}.z-carousel-items-container>*:not(:last-child){margin-right:var(--z-carousel-gutter)}";

const ZCarousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** sets the height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show. */
    this.ghostLoadingHeight = 100;
  }
  render() {
    if (this.isLoading) {
      return (h("div", { style: { height: `${this.ghostLoadingHeight}px` } }, h("z-ghost-loading", null), h("div", { style: { display: "none" } }, h("slot", null))));
    }
    return (h("ul", { class: "z-carousel-items-container" }, h("slot", null)));
  }
};
ZCarousel.style = stylesCss;

export { ZCarousel as z_carousel };
