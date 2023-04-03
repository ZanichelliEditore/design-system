'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-7a9a8430.js');

const stylesCss = ".sc-z-offcanvas-h{--z-offcanvas--container-width:375px;--z-offcanvas--top-space:0;min-width:100%;height:100%;font-family:var(--font-family-sans);font-weight:var(--font-rg);visibility:hidden}.canvas-container.sc-z-offcanvas{display:flex;overflow:-moz-scrollbars-none;overflow:hidden;min-width:100%;height:100%;flex-direction:column;background:var(--color-surface01)}[variant=\"pushcontent\"].sc-z-offcanvas-h{display:none}[open].sc-z-offcanvas-h{display:flex;visibility:visible}[variant=\"overlay\"].sc-z-offcanvas-h{position:fixed;z-index:1000;top:var(--z-offcanvas--top-space);right:0;bottom:0;left:0;display:flex;height:calc(100% - var(--z-offcanvas--top-space))}[variant=\"overlay\"][transitiondirection=\"left\"].sc-z-offcanvas-h{justify-content:end}[variant=\"overlay\"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{z-index:1010}[variant=\"overlay\"].sc-z-offcanvas-h .canvas-background.sc-z-offcanvas{position:absolute;left:0;width:100%;height:100%;background-color:var(--gray900);opacity:0.7}.canvas-container.sc-z-offcanvas>.canvas-content.sc-z-offcanvas{overflow:auto;flex:1 auto;padding:0 calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2) calc(var(--space-unit) * 2) 0;overflow-x:hidden}[variant=\"overlay\"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas>.canvas-content.sc-z-offcanvas{padding:0 calc(var(--space-unit) * 2) calc(var(--space-unit) * 2) calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2) 0 0}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-track{background-color:transparent}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas{scrollbar-color:var(--color-primary01) transparent}@media only screen and (max-width: 768px){[open][transitiondirection=\"left\"].sc-z-offcanvas-h:not(.skip-animation)>.canvas-container.sc-z-offcanvas{animation:enter-right 0.4s ease-out}[open][transitiondirection=\"right\"].sc-z-offcanvas-h:not(.skip-animation)>.canvas-container.sc-z-offcanvas{animation:enter-left 0.4s ease-out}}@media only screen and (min-width: 768px){.sc-z-offcanvas-h{min-width:auto}.canvas-container.sc-z-offcanvas{width:auto;min-width:max(var(--z-offcanvas--container-width), 375px);max-width:max(var(--z-offcanvas--container-width), 375px);height:auto;min-height:calc(var(--space-unit) * 40)}.sc-z-offcanvas-h:not([variant=\"overlay\"])[open]:not(.skip-animation){width:auto;animation:grow 0.4s ease-out}}@keyframes grow{from{width:0}to{width:max(var(--z-offcanvas--container-width), 375px)}}@keyframes enter-left{from{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes enter-right{from{transform:translateX(100%)}to{transform:translateX(0)}}[open][variant=\"overlay\"][transitiondirection=\"left\"].sc-z-offcanvas-h:not(.skip-animation)>.canvas-container.sc-z-offcanvas{animation:enter-right 0.4s ease-out}[open][transitiondirection=\"right\"].sc-z-offcanvas-h:not(.skip-animation)>.canvas-container.sc-z-offcanvas{animation:enter-left 0.4s ease-out}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"][transitiondirection=\"right\"]>.canvas-container.sc-z-offcanvas{transform:translateX(-100%);transition:visibility 0.4s ease-out, transform 0.4s ease-out}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"][transitiondirection=\"left\"]>.canvas-container.sc-z-offcanvas{transform:translateX(100%);transition:visibility 0.4s ease-out, transform 0.4s ease-out}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"] .canvas-background.sc-z-offcanvas{transition:visibility 0.4s ease-out;visibility:hidden}";

const ZOffcanvas = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.canvasOpenStatusChanged = index.createEvent(this, "canvasOpenStatusChanged", 7);
    /**
     * Offcanvas variant.
     * Can be one of "overlay", "pushcontent"
     * Default variant: pushcontent
     */
    this.variant = index$1.OffCanvasVariant.PUSHCONTENT;
    /** open component. Default: false */
    this.open = false;
    /** open content transitioning in a specified direction left | right. Default: left */
    this.transitiondirection = index$1.TransitionDirection.LEFT;
    /** manages the skip for the entry animation*/
    this.skipanimationonload = false;
  }
  /** this method allows you to skip the page loading animation, to be used with the prop set to true */
  async setSkipAanimationOnLoad(value) {
    this.skipanimationonload = value;
  }
  onOpenChanged() {
    if (!this.open && this.skipanimationonload) {
      this.skipanimationonload = false;
    }
    if (this.open) {
      this.handleOverflowProperty();
    }
    this.canvasOpenStatusChanged.emit(this.open);
  }
  handleOverflowProperty() {
    const overflow = this.variant === index$1.OffCanvasVariant.OVERLAY ? "overflow-y" : "overflow-x";
    document.body.style[overflow] = this.open ? "hidden" : "";
  }
  handledTransitionEnd() {
    this.handleOverflowProperty();
  }
  render() {
    return (index.h(index.Host, { class: { "skip-animation": this.skipanimationonload } }, index.h("div", { role: "presentation", class: "canvas-container", onTransitionEnd: () => this.handledTransitionEnd() }, index.h("div", { role: "presentation", class: "canvas-content" }, index.h("slot", { name: "canvasContent" }))), this.variant == index$1.OffCanvasVariant.OVERLAY && (index.h("div", { class: "canvas-background", "data-action": "canvasBackground", onClick: () => (this.open = false) }))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "open": ["onOpenChanged"]
  }; }
};
ZOffcanvas.style = stylesCss;

exports.z_offcanvas = ZOffcanvas;
