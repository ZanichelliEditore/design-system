'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = ":host{--z-section-title--divider-color:var(--red500);display:flex;width:fit-content;flex-direction:column;align-items:flex-start;font-family:var(--font-family-sans)}:host,:host ::slotted(*){box-sizing:border-box}::slotted(*){margin:0}::slotted([slot=\"secondary-title\"]){padding-bottom:calc(var(--space-unit) / 2);border-bottom:var(--border-size-large) solid var(--z-section-title--divider-color);font-size:var(--font-size-3);font-weight:var(--font-sb);line-height:1.5rem;text-transform:uppercase}::slotted([slot=\"primary-title\"]){font-size:var(--font-size-6);font-weight:var(--font-sb);line-height:2rem}:host([uppercase]:not([uppercase=\"false\"])) ::slotted([slot=\"primary-title\"]){text-transform:uppercase}@media (min-width: 1152px){::slotted([slot=\"primary-title\"]){font-size:var(--font-size-7);line-height:2.25rem}}";
const ZSectionTitleStyle0 = stylesCss;

const ZSectionTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dividerPosition = index$1.ZSectionTitleDividerPosition.BEFORE;
        this.uppercase = true;
    }
    componentWillRender() {
        this.hasSecondaryTitle = !!this.host.querySelector("[slot=secondary-title]");
    }
    render() {
        return (index.h(index.Host, { key: 'aae886e9941d8767af39a351671a7aaaf844176a' }, index.h("slot", { key: '08a1466c1d96e8f2dc754d3566bc2567bfd26dfd', name: "secondary-title" }), !this.hasSecondaryTitle && this.dividerPosition === index$1.ZSectionTitleDividerPosition.BEFORE && (index.h("z-divider", { key: 'ab9e30f7c179c37482d84db65729a3fa78fd9e06', size: index$1.DividerSize.LARGE, color: "z-section-title--divider-color" })), index.h("slot", { key: '4cad003315cf3df2e0dd6a7391035fd8e056e8b0', name: "primary-title" }), !this.hasSecondaryTitle && this.dividerPosition === index$1.ZSectionTitleDividerPosition.AFTER && (index.h("z-divider", { key: '6e99ca4877aba8c76e4484be6fced23aa5b8e165', size: index$1.DividerSize.LARGE, color: "z-section-title--divider-color" }))));
    }
    get host() { return index.getElement(this); }
};
ZSectionTitle.style = ZSectionTitleStyle0;

exports.z_section_title = ZSectionTitle;

//# sourceMappingURL=z-section-title.cjs.entry.js.map