import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import { O as OffCanvasVariant, x as TransitionDirection } from './index-aee91593.js';

const stylesCss = ".sc-z-offcanvas-h{--z-offcanvas--container-width:375px;--z-offcanvas--top-space:0;z-index:1000;display:none;min-width:100%;height:100%;justify-content:end;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.canvas-container.sc-z-offcanvas{z-index:1010;display:flex;overflow:-moz-scrollbars-none;overflow:hidden;min-width:100%;height:100%;flex-direction:column;background:var(--color-surface01);transform:translateX(100%)}@keyframes enter-right{from{transform:translateX(100%)}to{transform:translateX(0)}}[open].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{animation-duration:0.4s;animation-name:enter-right;animation-timing-function:ease-out;transform:translateX(0)}@keyframes exit-right{from{transform:translateX(0)}to{transform:translateX(100%)}}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"]>.canvas-container.sc-z-offcanvas{animation-duration:0.4s;animation-name:exit-right;animation-timing-function:ease-out;transform:translateX(100%)}[variant=\"overlay\"].sc-z-offcanvas-h{position:fixed;top:var(--z-offcanvas--top-space);right:0;bottom:0;left:0;height:calc(100% - var(--z-offcanvas--top-space))}[variant=\"overlay\"].sc-z-offcanvas-h .canvas-background.sc-z-offcanvas{position:absolute;left:0;width:100%;height:100%;background-color:var(--gray900);opacity:0.7}[transitiondirection=\"right\"].sc-z-offcanvas-h{justify-content:start}[transitiondirection=\"right\"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{transform:translateX(-100%)}@keyframes enter-left{from{transform:translateX(-100%)}to{transform:translateX(0)}}[transitiondirection=\"right\"][open].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{animation-duration:0.4s;animation-name:enter-left;animation-timing-function:ease-out;transform:translateX(0)}@keyframes exit-left{from{transform:translateX(0)}to{transform:translateX(-100%)}}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"][transitiondirection=\"right\"]>.canvas-container.sc-z-offcanvas{animation-duration:0.4s;animation-name:exit-left;animation-timing-function:ease-out;transform:translateX(-100%)}.canvas-container.sc-z-offcanvas>.canvas-content.sc-z-offcanvas{overflow:auto;flex:1 auto;padding:0 calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2) calc(var(--space-unit) * 2) 0;overflow-x:hidden}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-track{background-color:transparent}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas{scrollbar-color:var(--color-primary01) transparent}@media only screen and (min-width: 768px){.sc-z-offcanvas-h{min-width:auto}.canvas-container.sc-z-offcanvas{width:auto;min-width:max(var(--z-offcanvas--container-width), 375px);max-width:max(var(--z-offcanvas--container-width), 375px);height:auto;min-height:calc(var(--space-unit) * 40)}@keyframes grow{from{width:0}to{width:max(var(--z-offcanvas--container-width), 375px)}}.sc-z-offcanvas-h:not([variant=\"overlay\"])[open]{width:auto;animation-duration:0.4s;animation-name:grow;animation-timing-function:ease-out}}";

const ZOffcanvas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.canvasOpenStatusChanged = createEvent(this, "canvasOpenStatusChanged", 7);
    /**
     * Offcanvas variant.
     * Can be one of "overlay", "pushcontent"
     * Default variant: pushcontent
     */
    this.variant = OffCanvasVariant.PUSHCONTENT;
    /** open component. Default: false */
    this.open = false;
    /** open content transitioning in a specified direction left | right. Default: left */
    this.transitiondirection = TransitionDirection.LEFT;
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
    else if (this.variant === OffCanvasVariant.PUSHCONTENT) {
      this.hostElement.style.display = "none";
      document.body.style.overflowX = "hidden";
    }
  }
  handleAnimationEnd() {
    if (this.hostElement.hasAttribute("open")) {
      this.hostElement.querySelector(`.canvas-content`).focus();
    }
    else if (this.variant === OffCanvasVariant.OVERLAY) {
      this.hostElement.style.display = "none";
      document.body.style.overflowX = "initial";
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "canvas-container", onAnimationEnd: () => this.handleAnimationEnd() }, h("div", { class: "canvas-content" }, h("slot", { name: "canvasContent" }))), h("div", { class: "canvas-background", "data-action": "canvasBackground", onClick: () => (this.open = false) })));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "open": ["onOpenChanged"]
  }; }
};
ZOffcanvas.style = stylesCss;

export { ZOffcanvas as z_offcanvas };