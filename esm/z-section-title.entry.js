import { r as registerInstance, h, a as Host, g as getElement } from './index-ab5f1eaa.js';
import { y as ZSectionTitleDividerPosition, D as DividerSize } from './index-2255c6c8.js';

const stylesCss = ":host{--z-section-title--divider-color:var(--red500);display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;font-family:var(--font-family-sans)}:host,:host ::slotted(*){-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(*){margin:0}::slotted([slot=\"secondary-title\"]){padding-bottom:calc(var(--space-unit) / 2);border-bottom:var(--border-size-large) solid var(--z-section-title--divider-color);font-size:var(--font-size-3);font-weight:var(--font-sb);line-height:1.5rem;text-transform:uppercase}::slotted([slot=\"primary-title\"]){font-size:var(--font-size-6);font-weight:var(--font-sb);line-height:2rem}:host([uppercase]:not([uppercase=\"false\"])) ::slotted([slot=\"primary-title\"]){text-transform:uppercase}@media (min-width: 1152px){::slotted([slot=\"primary-title\"]){font-size:var(--font-size-7);line-height:2.25rem}}";
const ZSectionTitleStyle0 = stylesCss;

const ZSectionTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dividerPosition = ZSectionTitleDividerPosition.BEFORE;
        this.uppercase = true;
    }
    componentWillRender() {
        this.hasSecondaryTitle = !!this.host.querySelector("[slot=secondary-title]");
    }
    render() {
        return (h(Host, { key: 'aae886e9941d8767af39a351671a7aaaf844176a' }, h("slot", { key: '08a1466c1d96e8f2dc754d3566bc2567bfd26dfd', name: "secondary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.BEFORE && (h("z-divider", { key: 'ab9e30f7c179c37482d84db65729a3fa78fd9e06', size: DividerSize.LARGE, color: "z-section-title--divider-color" })), h("slot", { key: '4cad003315cf3df2e0dd6a7391035fd8e056e8b0', name: "primary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.AFTER && (h("z-divider", { key: '6e99ca4877aba8c76e4484be6fced23aa5b8e165', size: DividerSize.LARGE, color: "z-section-title--divider-color" }))));
    }
    get host() { return getElement(this); }
};
ZSectionTitle.style = ZSectionTitleStyle0;

export { ZSectionTitle as z_section_title };

//# sourceMappingURL=z-section-title.entry.js.map