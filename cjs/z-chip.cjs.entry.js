'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e801ae96.js');
const index$1 = require('./index-bab7a651.js');

const stylesCss = ".sc-z-chip-h>.z-chip-container.sc-z-chip{display:inline-flex;min-height:28px;align-items:center;padding:0 calc(var(--space-unit) * 1.5);border:var(--border-size-small) solid var(--gray400);background-color:var(--color-surface01);border-radius:14px;color:var(--color-default-text);fill:var(--color-default-text);font-family:var(--font-family-sans);font-size:14px;line-height:28px}.sc-z-chip-h>.z-chip-interactive.sc-z-chip{font-weight:var(--font-sb)}.sc-z-chip-h>.z-chip-container.sc-z-chip>button.sc-z-chip{padding:0;border:none;margin-left:var(--space-unit);background-color:transparent;cursor:pointer}.sc-z-chip-h>.z-chip-container.sc-z-chip>z-icon.sc-z-chip:first-child{margin-right:calc(var(--space-unit) / 2)}.sc-z-chip-h>.z-chip-container.sc-z-chip:not([aria-disabled]):hover>z-icon.sc-z-chip:first-child{fill:var(--color-default-icon)}.sc-z-chip-h>.z-chip-container.sc-z-chip .interactive-icon.sc-z-chip{fill:var(--color-primary01)}.sc-z-chip-h>.z-chip-container.sc-z-chip:not([aria-disabled]) .interactive-icon.sc-z-chip:hover{color:var(--color-hover-primary);fill:var(--color-hover-primary)}.sc-z-chip-h>.z-chip-container[aria-disabled].sc-z-chip,.sc-z-chip-h>.z-chip-container[aria-disabled].sc-z-chip z-icon.sc-z-chip{color:var(--color-disabled03);cursor:auto;fill:var(--color-disabled03)}.sc-z-chip-h>.z-chip-container[aria-disabled].sc-z-chip{border:var(--border-size-small) solid var(--color-disabled01)}.sc-z-chip-h>.z-chip-container.sc-z-chip>button.sc-z-chip:focus:focus-visible{border-radius:100%;box-shadow:var(--shadow-focus-primary);outline:none}.sc-z-chip-h>button.sc-z-chip:not([disabled]):active:hover .interactive-icon.sc-z-chip{color:var(--color-primary01);fill:var(--color-primary01)}.sc-z-chip-h>.z-chip-container.sc-z-chip>z-icon.sc-z-chip,.sc-z-chip-h>.z-chip-container.sc-z-chip .interactive-icon.sc-z-chip{--z-icon-width:22px;--z-icon-height:22px}.sc-z-chip-h>.z-chip-container.default.sc-z-chip{min-height:44px;border-radius:22px;line-height:44px}.sc-z-chip-h>.z-chip-container.medium.sc-z-chip{min-height:40px;border-radius:22px;line-height:40px}.sc-z-chip-h>.z-chip-container.small.sc-z-chip{min-height:36px;border-radius:22px;line-height:36px}@media (min-width: 1152px){.sc-z-chip-h>.z-chip-container.sc-z-chip{font-size:12px}.sc-z-chip-h>.z-chip-container.default.sc-z-chip{min-height:32px;border-radius:16px;line-height:32px}.sc-z-chip-h>.z-chip-container.medium.sc-z-chip{min-height:28px;border-radius:16px;line-height:28px}.sc-z-chip-h>.z-chip-container.small.sc-z-chip{min-height:24px;border-radius:16px;line-height:24px}.sc-z-chip-h>.z-chip-container.sc-z-chip>z-icon.sc-z-chip,.sc-z-chip-h>.z-chip-container.sc-z-chip .interactive-icon.sc-z-chip{--z-icon-width:14px;--z-icon-height:14px}}";
const ZChipStyle0 = stylesCss;

const ZChip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.interactiveIconClick = index.createEvent(this, "interactiveIconClick", 7);
        this.icon = undefined;
        this.type = index$1.ZChipType.DEFAULT;
        this.interactiveIcon = undefined;
        this.disabled = false;
        this.ariaLabel = "";
    }
    render() {
        return (index.h("div", { key: '53ee49e87ccaa13c3c80be83f799d48b5d43b09a', class: {
                "z-chip-container": true,
                "z-chip-interactive": !!this.interactiveIcon,
                [this.type]: true,
            }, "aria-disabled": this.disabled }, this.icon && index.h("z-icon", { key: 'd8d6c51f9aeeeec166898f263f75588f3c666cef', name: this.icon }), index.h("slot", { key: '3f1e2925b5e3ae370d4c37bcbdc95f142ff22a3f' }), this.interactiveIcon && (index.h("button", { key: '13b028125d5718b882351ab017418246e8bf900d', type: "button", onClick: () => this.interactiveIconClick.emit(), "aria-label": this.ariaLabel, disabled: this.disabled }, index.h("z-icon", { key: '913f66b93c948aeaf67e89a76d6870c26ce48a31', class: "interactive-icon", name: this.interactiveIcon })))));
    }
    get el() { return index.getElement(this); }
};
ZChip.style = ZChipStyle0;

exports.z_chip = ZChip;

//# sourceMappingURL=z-chip.cjs.entry.js.map