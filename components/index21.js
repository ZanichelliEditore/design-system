import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { O as OffCanvasVariant, v as TransitionDirection } from './index2.js';

const stylesCss = ".sc-z-offcanvas-h{--z-offcanvas--container-width:375px;--z-offcanvas--top-space:0;min-width:100%;height:100%;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.canvas-container.sc-z-offcanvas{display:flex;overflow:-moz-scrollbars-none;overflow:hidden;min-width:100%;height:100%;flex-direction:column;background:var(--color-surface01)}[variant=\"pushcontent\"].sc-z-offcanvas-h{display:none}[open].sc-z-offcanvas-h{display:flex;visibility:visible}.sc-z-offcanvas-h:not([open]){visibility:hidden}[variant=\"overlay\"].sc-z-offcanvas-h{position:fixed;z-index:1000;top:var(--z-offcanvas--top-space);right:0;bottom:0;left:0;display:flex;height:calc(100% - var(--z-offcanvas--top-space))}[variant=\"overlay\"][transitiondirection=\"left\"].sc-z-offcanvas-h{justify-content:end}[variant=\"overlay\"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{z-index:1010}[variant=\"overlay\"].sc-z-offcanvas-h .canvas-background.sc-z-offcanvas{position:absolute;left:0;width:100%;height:100%;background-color:var(--gray900);opacity:0.7}.canvas-container.sc-z-offcanvas>.canvas-content.sc-z-offcanvas{overflow:auto;flex:1 auto;padding:0 calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2) calc(var(--space-unit) * 2) 0;overflow-x:hidden}[variant=\"overlay\"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas>.canvas-content.sc-z-offcanvas{padding:0 calc(var(--space-unit) * 2) calc(var(--space-unit) * 2) calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2) 0 0}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-track{background-color:transparent}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas{scrollbar-color:var(--color-primary01) transparent}@media only screen and (max-width: 767px){[open][transitiondirection=\"left\"].sc-z-offcanvas-h:not(.skip-animation)>.canvas-container.sc-z-offcanvas{animation:enter-right 0.4s ease-out}[open][transitiondirection=\"right\"].sc-z-offcanvas-h:not(.skip-animation)>.canvas-container.sc-z-offcanvas{animation:enter-left 0.4s ease-out}}@media only screen and (min-width: 768px){.sc-z-offcanvas-h{min-width:auto}.canvas-container.sc-z-offcanvas{width:auto;min-width:max(var(--z-offcanvas--container-width), 375px);max-width:max(var(--z-offcanvas--container-width), 375px);height:auto;min-height:calc(var(--space-unit) * 40)}.sc-z-offcanvas-h:not([variant=\"overlay\"])[open]:not(.skip-animation){width:auto;animation:grow 0.4s ease-out}}@keyframes grow{from{width:0}to{width:max(var(--z-offcanvas--container-width), 375px)}}@keyframes enter-left{from{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes enter-right{from{transform:translateX(100%)}to{transform:translateX(0)}}[open][variant=\"overlay\"][transitiondirection=\"left\"].sc-z-offcanvas-h:not(.skip-animation)>.canvas-container.sc-z-offcanvas{animation:enter-right 0.4s ease-out}[open][transitiondirection=\"right\"].sc-z-offcanvas-h:not(.skip-animation)>.canvas-container.sc-z-offcanvas{animation:enter-left 0.4s ease-out}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"][transitiondirection=\"right\"]>.canvas-container.sc-z-offcanvas{transform:translateX(-100%);transition:visibility 0.4s ease-out,\n    transform 0.4s ease-out}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"][transitiondirection=\"left\"]>.canvas-container.sc-z-offcanvas{transform:translateX(100%);transition:visibility 0.4s ease-out,\n    transform 0.4s ease-out}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"] .canvas-background.sc-z-offcanvas{transition:visibility 0.4s ease-out;visibility:hidden}";
const ZOffcanvasStyle0 = stylesCss;

const ZOffcanvas = /*@__PURE__*/ proxyCustomElement(class ZOffcanvas extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.canvasOpenStatusChanged = createEvent(this, "canvasOpenStatusChanged", 7);
        this.variant = OffCanvasVariant.PUSHCONTENT;
        this.open = false;
        this.transitiondirection = TransitionDirection.LEFT;
        this.skipLoadAnimation = false;
    }
    onOpenChanged() {
        if (!this.open && this.skipLoadAnimation) {
            this.skipLoadAnimation = false;
        }
        this.handlePageOverflow();
        this.canvasOpenStatusChanged.emit(this.open);
    }
    handlePageOverflow() {
        const overflow = this.variant === OffCanvasVariant.OVERLAY ? "overflow-y" : "overflow-x";
        document.body.style[overflow] = this.open ? "hidden" : "";
    }
    disconnectedCallback() {
        this.open = false;
    }
    render() {
        return (h(Host, { key: '69d5f44707b4971fd19969ed8ff8b44cc5e8dad2', class: { "skip-animation": this.skipLoadAnimation } }, h("div", { key: '7b4045fe3c4bbc5dcd298683d445aa4800825fd7', role: "presentation", class: "canvas-container", onTransitionEnd: () => this.handlePageOverflow() }, h("div", { key: '90f6a83e5710059f24a4f99aea8e2f48786fb74f', role: "presentation", class: "canvas-content" }, h("slot", { key: 'ae14e2f2ea5771bb97dd58a986cde3b31e07c77f', name: "canvasContent" }))), this.variant == OffCanvasVariant.OVERLAY && (h("div", { key: 'd9bc6afc4d788a7b0011494b5951294a08ab8812', class: "canvas-background", "data-action": "canvasBackground", onClick: () => (this.open = false) }))));
    }
    static get watchers() { return {
        "open": ["onOpenChanged"]
    }; }
    static get style() { return ZOffcanvasStyle0; }
}, [6, "z-offcanvas", {
        "variant": [513],
        "open": [1540],
        "transitiondirection": [513],
        "skipLoadAnimation": [1028, "skip-load-animation"]
    }, undefined, {
        "open": ["onOpenChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-offcanvas"];
    components.forEach(tagName => { switch (tagName) {
        case "z-offcanvas":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZOffcanvas);
            }
            break;
    } });
}

export { ZOffcanvas as Z, defineCustomElement as d };

//# sourceMappingURL=index21.js.map