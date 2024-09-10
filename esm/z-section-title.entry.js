import { r as registerInstance, h, a as Host, g as getElement } from './index-a2130b6a.js';
import { x as ZSectionTitleDividerPosition, D as DividerSize } from './index-b7dbacb4.js';

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
        return (h(Host, { key: '5718215a4b4b42735d8045c3de73998189f38bf7' }, h("slot", { key: '99e51ba27a27a3100ae7fc88df7537624f8682bb', name: "secondary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.BEFORE && (h("z-divider", { key: 'd62ca69ea2ecdbb75ef8c034ca6beffc6041ede0', size: DividerSize.LARGE, color: "z-section-title--divider-color" })), h("slot", { key: 'cb8a5a51554a90e8749d664f3d6d19af67e5afeb', name: "primary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.AFTER && (h("z-divider", { key: 'bdf9d80c19154f8f89947d277f6a7234986b605e', size: DividerSize.LARGE, color: "z-section-title--divider-color" }))));
    }
    get host() { return getElement(this); }
};
ZSectionTitle.style = ZSectionTitleStyle0;

export { ZSectionTitle as z_section_title };

//# sourceMappingURL=z-section-title.entry.js.map