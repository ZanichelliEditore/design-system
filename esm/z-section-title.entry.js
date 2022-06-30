import { r as registerInstance, h, g as getElement } from './index-90e18641.js';
import { r as ZSectionTitleDividerPositions, d as DividerSize } from './index-7424c64c.js';

const stylesCss = ":host{--z-section-title--divider-color:var(--red500);display:flex;flex-direction:column;align-items:flex-start;width:fit-content;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,:host ::slotted(*){box-sizing:border-box}::slotted(*){margin:0}::slotted([slot=\"secondary-title\"]){padding-bottom:calc(var(--space-unit) / 2);border-bottom:var(--border-size-large) solid var(--z-section-title--divider-color);text-transform:uppercase;font-size:var(--font-size-3);line-height:1.5rem}::slotted([slot=\"primary-title\"]){font-size:var(--font-size-6);line-height:2rem}:host([uppercase]) ::slotted([slot=\"primary-title\"]){text-transform:uppercase}@media (min-width: 1152px){::slotted([slot=\"primary-title\"]){font-size:var(--font-size-7);line-height:2.25rem}}";

const ZSectionTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Divider position for the primary title.
     * This prop only works if the secondary title is not set.
     */
    this.dividerPosition = ZSectionTitleDividerPositions.before;
    /**
     * Whether the primary title text is uppercase.
     */
    this.uppercase = true;
  }
  componentWillRender() {
    this.hasSecondaryTitle = !!this.host.querySelector("[slot=secondary-title]");
  }
  render() {
    return [
      h("slot", { name: "secondary-title" }),
      !this.hasSecondaryTitle &&
        this.dividerPosition == ZSectionTitleDividerPositions.before &&
        h("z-divider", { size: DividerSize.large, color: "z-section-title--divider-color" }),
      h("slot", { name: "primary-title" }),
      !this.hasSecondaryTitle &&
        this.dividerPosition == ZSectionTitleDividerPositions.after &&
        h("z-divider", { size: DividerSize.large, color: "z-section-title--divider-color" }),
    ];
  }
  get host() { return getElement(this); }
};
ZSectionTitle.style = stylesCss;

export { ZSectionTitle as z_section_title };
