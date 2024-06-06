import { r as registerInstance, h, a as Host, g as getElement } from './index-f16bc2ca.js';
import { y as ZSectionTitleDividerPosition, D as DividerSize } from './index-2255c6c8.js';

const stylesCss = ":host{--z-section-title--divider-color:var(--red500);display:flex;width:fit-content;flex-direction:column;align-items:flex-start;font-family:var(--font-family-sans)}:host,:host ::slotted(*){box-sizing:border-box}::slotted(*){margin:0}::slotted([slot=\"secondary-title\"]){padding-bottom:calc(var(--space-unit) / 2);border-bottom:var(--border-size-large) solid var(--z-section-title--divider-color);font-size:var(--font-size-3);font-weight:var(--font-sb);line-height:1.5rem;text-transform:uppercase}::slotted([slot=\"primary-title\"]){font-size:var(--font-size-6);font-weight:var(--font-sb);line-height:2rem}:host([uppercase]:not([uppercase=\"false\"])) ::slotted([slot=\"primary-title\"]){text-transform:uppercase}@media (min-width: 1152px){::slotted([slot=\"primary-title\"]){font-size:var(--font-size-7);line-height:2.25rem}}";
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
        return (h(Host, { key: '98a5c82a7087e6a67f0d76f91f87274b9fb4dcaa' }, h("slot", { key: 'c24aeee90fdcf9e7a68c6cbaff2d1a490b252c46', name: "secondary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.BEFORE && (h("z-divider", { size: DividerSize.LARGE, color: "z-section-title--divider-color" })), h("slot", { key: 'c7f5595456cc7601afb0fccb20b948802c58ad41', name: "primary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.AFTER && (h("z-divider", { size: DividerSize.LARGE, color: "z-section-title--divider-color" }))));
    }
    get host() { return getElement(this); }
};
ZSectionTitle.style = ZSectionTitleStyle0;

export { ZSectionTitle as z_section_title };

//# sourceMappingURL=z-section-title.entry.js.map