'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-745c0423.js');

const stylesCss = ".sc-z-offcanvas-h{--z-offcanvas--container-width:375px;--z-offcanvas--top-space:0px;z-index:1000;display:none;justify-content:end;height:100%;min-width:100%;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.canvas-container.sc-z-offcanvas{display:flex;flex-direction:column;z-index:1010;min-width:100%;height:100%;overflow:-moz-scrollbars-none;overflow:hidden;background:var(--color-surface01);transform:translateX(100%)}@keyframes enterRight{from{transform:translateX(100%)}to{transform:translateX(0)}}[open].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{animation-name:enterRight;animation-duration:0.4s;animation-timing-function:ease-out;transform:translateX(0)}@keyframes exitRight{from{transform:translateX(0)}to{transform:translateX(100%)}}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"]>.canvas-container.sc-z-offcanvas{animation-name:exitRight;animation-duration:0.4s;animation-timing-function:ease-out;transform:translateX(100%)}[variant=\"overlay\"].sc-z-offcanvas-h{position:fixed;height:calc(100% - var(--z-offcanvas--top-space));top:var(--z-offcanvas--top-space);left:0;right:0;bottom:0}[variant=\"overlay\"].sc-z-offcanvas-h .canvas-background.sc-z-offcanvas{position:absolute;left:0;width:100%;height:100%;background-color:var(--gray900);opacity:0.7}[transitiondirection=\"right\"].sc-z-offcanvas-h{justify-content:start}[transitiondirection=\"right\"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{transform:translateX(-100%)}@keyframes enterLeft{from{transform:translateX(-100%)}to{transform:translateX(0)}}[transitiondirection=\"right\"][open].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{animation-name:enterLeft;animation-duration:0.4s;animation-timing-function:ease-out;transform:translateX(0)}@keyframes exitLeft{from{transform:translateX(0)}to{transform:translateX(-100%)}}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"][transitiondirection=\"right\"]>.canvas-container.sc-z-offcanvas{animation-name:exitLeft;animation-duration:0.4s;animation-timing-function:ease-out;transform:translateX(-100%)}.canvas-container.sc-z-offcanvas>.canvas-content.sc-z-offcanvas{flex:1 auto;overflow:auto;overflow-x:hidden;padding:0 calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2) calc(var(--space-unit) * 2) 0}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar{background:linear-gradient(\n    to right,\n    transparent 0 3px,\n    var(--gray200) 3px 7px,\n    transparent 7px 10px\n  );width:10px;border-radius:var(--border-radius)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-track{background-color:transparent}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-thumb{background-color:var(--color-primary01);border-radius:var(--border-radius);width:10px}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas{scrollbar-color:var(--color-primary01) transparent}@media only screen and (min-width: 768px){.sc-z-offcanvas-h{min-width:auto}.canvas-container.sc-z-offcanvas{width:auto;height:auto;min-width:max(var(--z-offcanvas--container-width), 375px);min-height:calc(var(--space-unit) * 40);max-width:max(var(--z-offcanvas--container-width), 375px)}@keyframes grow{from{width:0}to{width:max(var(--z-offcanvas--container-width), 375px)}}.sc-z-offcanvas-h:not([variant=\"overlay\"])[open]{animation-name:grow;animation-duration:0.4s;animation-timing-function:ease-out;width:auto}}";

const ZOffcanvas = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.canvasOpenStatusChanged = index.createEvent(this, "canvasOpenStatusChanged", 7);
    /**
    * Offcanvas variant.
    * Can be one of "overlay", "pushcontent"
    * Default variant: pushcontent
    */
    this.variant = index$1.OffCanvasVariantsEnum.pushcontent;
    /** open component. Default: false */
    this.open = false;
    /** open content transitioning in a specified direction left | right. Default: left */
    this.transitiondirection = index$1.TransitionDirectionEnum.left;
  }
  componentWillLoad() {
    this.handleOpenStatus();
  }
  onOpenChanged() {
    this.handleOpenStatus();
    this.canvasOpenStatusChanged.emit(this.open);
  }
  handleOpenStatus() {
    if (this.open) {
      this.hostElement.style.display = "flex";
    }
    else if (this.variant === index$1.OffCanvasVariantsEnum.pushcontent) {
      this.hostElement.style.display = "none";
      document.body.style.overflowX = "hidden";
    }
  }
  handleAnimationEnd() {
    if (this.hostElement.hasAttribute("open")) {
      this.hostElement.querySelector(`.canvas-content`).focus();
    }
    else if (this.variant === index$1.OffCanvasVariantsEnum.overlay) {
      this.hostElement.style.display = "none";
      document.body.style.overflowX = "initial";
    }
  }
  render() {
    return [
      index.h("div", { class: "canvas-container", onAnimationEnd: () => this.handleAnimationEnd() }, index.h("div", { class: "canvas-content", tabindex: "0" }, index.h("slot", { name: "canvasContent" }))),
      index.h("div", { class: "canvas-background", "data-action": "canvasBackground", onClick: () => this.open = false })
    ];
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "open": ["onOpenChanged"]
  }; }
};
ZOffcanvas.style = stylesCss;

exports.z_offcanvas = ZOffcanvas;
