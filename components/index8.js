import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const stylesCss = ":host{display:inline-block;overflow:hidden;width:100%;height:100%;background:var(--color-surface02);border-radius:var(--border-radius);transform:translate3d(0, 0, 0)}:host::after{display:block;width:100%;height:100%;animation:progress 1.6s ease-in-out infinite;background-image:linear-gradient(\n    90deg,\n    var(--color-surface02) 0%,\n    var(--color-surface03) 95%,\n    var(--color-surface02) 100%\n  );content:\"\";filter:blur(6px)}@keyframes progress{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}";
const ZGhostLoadingStyle0 = stylesCss;

const ZGhostLoading = /*@__PURE__*/ proxyCustomElement(class ZGhostLoading extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return h(Host, { key: 'dbc7747f3cf3b0578212c4d86f28410d40826cdc' });
    }
    static get style() { return ZGhostLoadingStyle0; }
}, [1, "z-ghost-loading"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-ghost-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "z-ghost-loading":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZGhostLoading);
            }
            break;
    } });
}

export { ZGhostLoading as Z, defineCustomElement as d };

//# sourceMappingURL=index8.js.map