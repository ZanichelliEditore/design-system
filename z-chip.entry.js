import { r as registerInstance, c as createEvent, h, d as getElement } from './index-DafJ7_Il.js';
import { x as ZChipType, y as ZChipVariant } from './index-DdetsoIY.js';

const stylesCss = () => `.sc-z-chip-h,.sc-z-chip-h *.sc-z-chip{box-sizing:border-box}.sc-z-chip-h{display:block}.sc-z-chip-h>.z-chip-container.sc-z-chip{display:inline-flex;min-height:28px;align-items:center;padding:0 calc(var(--space-unit) * 2);border:var(--border-size-small) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:14px;color:var(--color-primary01);fill:var(--color-default-icon);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);gap:var(--space-unit);line-height:1}.sc-z-chip-h>.z-chip-container.sc-z-chip>button.sc-z-chip{position:relative;display:flex;width:28px;height:28px;align-items:center;justify-content:center;padding:0;border:none;background-color:transparent;border-radius:50%;cursor:pointer}.sc-z-chip-h>.z-chip-container.sc-z-chip .interactive-icon.sc-z-chip{fill:var(--color-primary01)}.sc-z-chip-h>.z-chip-container.sc-z-chip:not([aria-disabled]) button.sc-z-chip:hover .interactive-icon.sc-z-chip{color:var(--color-hover-primary);fill:var(--color-hover-primary)}.sc-z-chip-h>.z-chip-container.filled.sc-z-chip{border-color:transparent;background-color:var(--color-primary01);color:var(--color-text-inverse);fill:var(--color-inverse-icon)}.sc-z-chip-h>.z-chip-container.filled.sc-z-chip .interactive-icon.sc-z-chip{fill:var(--color-inverse-icon)}.sc-z-chip-h>.z-chip-container.filled.sc-z-chip:not([aria-disabled]) button.sc-z-chip::before{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-inverse-icon);border-radius:50%;content:"";opacity:0;pointer-events:none;transition:opacity 0.2s}.sc-z-chip-h>.z-chip-container.filled.sc-z-chip:not([aria-disabled]) button.sc-z-chip:hover::before{opacity:0.16}.sc-z-chip-h>.z-chip-container.filled.sc-z-chip:not([aria-disabled]) button.sc-z-chip:hover .interactive-icon.sc-z-chip{color:var(--color-inverse-icon);fill:var(--color-inverse-icon)}.sc-z-chip-h>.z-chip-container.soft.sc-z-chip{border-color:transparent;background-color:var(--color-primary02);color:var(--color-default-text)}.sc-z-chip-h>.z-chip-container.soft.sc-z-chip .interactive-icon.sc-z-chip{fill:var(--color-primary01)}.sc-z-chip-h>.z-chip-container[aria-disabled].sc-z-chip,.sc-z-chip-h>.z-chip-container[aria-disabled].sc-z-chip .interactive-icon.sc-z-chip{color:var(--color-disabled03);cursor:auto;fill:var(--color-disabled03)}.sc-z-chip-h>.z-chip-container[aria-disabled].sc-z-chip{border:var(--border-size-small) solid var(--color-disabled01);background-color:transparent}.sc-z-chip-h>.z-chip-container.filled[aria-disabled].sc-z-chip,.sc-z-chip-h>.z-chip-container.soft[aria-disabled].sc-z-chip{border-color:transparent;background-color:var(--color-disabled01)}.sc-z-chip-h>.z-chip-container.sc-z-chip>button.sc-z-chip:focus:focus-visible{border-radius:100%;box-shadow:var(--shadow-focus-primary);outline:none}.sc-z-chip-h>.z-chip-container.sc-z-chip>z-icon.sc-z-chip,.sc-z-chip-h>.z-chip-container.sc-z-chip .interactive-icon.sc-z-chip{--z-icon-width:22px;--z-icon-height:22px}.sc-z-chip-h>.z-chip-container.default.sc-z-chip{min-height:44px;border-radius:22px}.sc-z-chip-h>.z-chip-container.medium.sc-z-chip{min-height:40px;border-radius:22px}.sc-z-chip-h>.z-chip-container.small.sc-z-chip{min-height:36px;border-radius:22px}@media (min-width: 1152px){.sc-z-chip-h>.z-chip-container.sc-z-chip{padding:0 calc(var(--space-unit) * 1.5);font-size:12px;gap:calc(var(--space-unit) / 2)}.sc-z-chip-h>.z-chip-container.default.sc-z-chip{min-height:32px;border-radius:16px}.sc-z-chip-h>.z-chip-container.medium.sc-z-chip{min-height:28px;border-radius:16px}.sc-z-chip-h>.z-chip-container.small.sc-z-chip{min-height:24px;border-radius:16px}.sc-z-chip-h>.z-chip-container.sc-z-chip>z-icon.sc-z-chip,.sc-z-chip-h>.z-chip-container.sc-z-chip .interactive-icon.sc-z-chip{--z-icon-width:14px;--z-icon-height:14px}.sc-z-chip-h>.z-chip-container.sc-z-chip>button.sc-z-chip{width:20px;height:20px}}`;

const ZChip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.interactiveIconClick = createEvent(this, "interactiveIconClick", 7);
        /** z-chip size type, can be default, medium or small */
        this.type = ZChipType.DEFAULT;
        /** z-chip variant type, can be outline, filled or soft */
        this.variant = ZChipVariant.OUTLINE;
        /** set z-chip as disabled */
        this.disabled = false;
    }
    render() {
        return (h("div", { key: '7c193d4f98e2caddd979a9583099e50d710f36a0', class: {
                "z-chip-container": true,
                "z-chip-interactive": !!this.interactiveIcon,
                [this.type]: true,
                [this.variant]: true,
            }, "aria-disabled": this.disabled ? "true" : undefined }, this.icon && h("z-icon", { key: 'cf16aec1373dbab96a6631e842bab6d1819ff7fb', name: this.icon }), h("slot", { key: 'b2bead0fa564bda7098aaa89b277fa113c0af783' }), this.interactiveIcon && (h("button", { key: '2ae74ae46a7a47b646eb36dae752b5eaee95af7e', type: "button", onClick: () => this.interactiveIconClick.emit(), "aria-label": this.htmlAriaLabel || undefined, disabled: this.disabled }, h("z-icon", { key: '64a298c0312904caf16112d2f3816732262dd0ed', class: "interactive-icon", name: this.interactiveIcon })))));
    }
    get el() { return getElement(this); }
};
ZChip.style = stylesCss();

export { ZChip as z_chip };
