import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { x as ZSectionTitleDividerPosition, D as DividerSize } from './index2.js';
import { d as defineCustomElement$2 } from './index6.js';

const stylesCss = ":host{--z-section-title--divider-color:var(--red500);display:flex;width:fit-content;flex-direction:column;align-items:flex-start;font-family:var(--font-family-sans)}:host,:host ::slotted(*){box-sizing:border-box}::slotted(*){margin:0}::slotted([slot=\"secondary-title\"]){padding-bottom:calc(var(--space-unit) / 2);border-bottom:var(--border-size-large) solid var(--z-section-title--divider-color);font-size:var(--font-size-3);font-weight:var(--font-sb);line-height:1.5rem;text-transform:uppercase}::slotted([slot=\"primary-title\"]){font-size:var(--font-size-6);font-weight:var(--font-sb);line-height:2rem}:host([uppercase]:not([uppercase=\"false\"])) ::slotted([slot=\"primary-title\"]){text-transform:uppercase}@media (min-width: 1152px){::slotted([slot=\"primary-title\"]){font-size:var(--font-size-7);line-height:2.25rem}}";
const ZSectionTitleStyle0 = stylesCss;

const ZSectionTitle$1 = /*@__PURE__*/ proxyCustomElement(class ZSectionTitle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dividerPosition = ZSectionTitleDividerPosition.BEFORE;
        this.uppercase = true;
    }
    componentWillRender() {
        this.hasSecondaryTitle = !!this.host.querySelector("[slot=secondary-title]");
    }
    render() {
        return (h(Host, { key: '5718215a4b4b42735d8045c3de73998189f38bf7' }, h("slot", { key: '99e51ba27a27a3100ae7fc88df7537624f8682bb', name: "secondary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.BEFORE && (h("z-divider", { key: 'd62ca69ea2ecdbb75ef8c034ca6beffc6041ede0', size: DividerSize.LARGE, color: "z-section-title--divider-color" })), h("slot", { key: 'cb8a5a51554a90e8749d664f3d6d19af67e5afeb', name: "primary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.AFTER && (h("z-divider", { key: 'bdf9d80c19154f8f89947d277f6a7234986b605e', size: DividerSize.LARGE, color: "z-section-title--divider-color" }))));
    }
    get host() { return this; }
    static get style() { return ZSectionTitleStyle0; }
}, [1, "z-section-title", {
        "dividerPosition": [1, "divider-position"],
        "uppercase": [516]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-section-title", "z-divider"];
    components.forEach(tagName => { switch (tagName) {
        case "z-section-title":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZSectionTitle$1);
            }
            break;
        case "z-divider":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZSectionTitle = ZSectionTitle$1;
const defineCustomElement = defineCustomElement$1;

export { ZSectionTitle, defineCustomElement };

//# sourceMappingURL=z-section-title.js.map