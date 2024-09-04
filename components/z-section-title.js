import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { x as ZSectionTitleDividerPosition, D as DividerSize } from './index2.js';
import { d as defineCustomElement$2 } from './index6.js';

const stylesCss = ":host{--z-section-title--divider-color:var(--red500);display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;font-family:var(--font-family-sans)}:host,:host ::slotted(*){-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(*){margin:0}::slotted([slot=\"secondary-title\"]){padding-bottom:calc(var(--space-unit) / 2);border-bottom:var(--border-size-large) solid var(--z-section-title--divider-color);font-size:var(--font-size-3);font-weight:var(--font-sb);line-height:1.5rem;text-transform:uppercase}::slotted([slot=\"primary-title\"]){font-size:var(--font-size-6);font-weight:var(--font-sb);line-height:2rem}:host([uppercase]:not([uppercase=\"false\"])) ::slotted([slot=\"primary-title\"]){text-transform:uppercase}@media (min-width: 1152px){::slotted([slot=\"primary-title\"]){font-size:var(--font-size-7);line-height:2.25rem}}";
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
        return (h(Host, { key: 'aae886e9941d8767af39a351671a7aaaf844176a' }, h("slot", { key: '08a1466c1d96e8f2dc754d3566bc2567bfd26dfd', name: "secondary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.BEFORE && (h("z-divider", { key: 'ab9e30f7c179c37482d84db65729a3fa78fd9e06', size: DividerSize.LARGE, color: "z-section-title--divider-color" })), h("slot", { key: '4cad003315cf3df2e0dd6a7391035fd8e056e8b0', name: "primary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.AFTER && (h("z-divider", { key: '6e99ca4877aba8c76e4484be6fced23aa5b8e165', size: DividerSize.LARGE, color: "z-section-title--divider-color" }))));
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