import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { y as ZSectionTitleDividerPosition, D as DividerSize } from './index2.js';
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
        return (h(Host, { key: 'ffae3cccc6d4923d5904055ab083a1d581818e5b' }, h("slot", { key: 'a8bad3881acb225f24dafd28316bc08be97657f1', name: "secondary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.BEFORE && (h("z-divider", { size: DividerSize.LARGE, color: "z-section-title--divider-color" })), h("slot", { key: '7121066325d4be6c5385d70083da300f15eacf2b', name: "primary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.AFTER && (h("z-divider", { size: DividerSize.LARGE, color: "z-section-title--divider-color" }))));
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