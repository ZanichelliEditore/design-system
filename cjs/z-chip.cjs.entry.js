'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = ".sc-z-chip-h>.z-chip-container.sc-z-chip{display:-ms-inline-flexbox;display:inline-flex;min-height:28px;-ms-flex-align:center;align-items:center;padding:0 calc(var(--space-unit) * 1.5);border:var(--border-size-small) solid var(--gray400);background-color:var(--color-surface01);border-radius:14px;color:var(--color-default-text);fill:var(--color-default-text);font-family:var(--font-family-sans);font-size:14px;line-height:28px}.sc-z-chip-h>.z-chip-interactive.sc-z-chip{font-weight:var(--font-sb)}.sc-z-chip-h>.z-chip-container.sc-z-chip>button.sc-z-chip{padding:0;border:none;margin-left:var(--space-unit);background-color:transparent;cursor:pointer}.sc-z-chip-h>.z-chip-container.sc-z-chip>z-icon.sc-z-chip:first-child{margin-right:calc(var(--space-unit) / 2)}.sc-z-chip-h>.z-chip-container.sc-z-chip:not([aria-disabled]):hover>z-icon.sc-z-chip:first-child{fill:var(--color-default-icon)}.sc-z-chip-h>.z-chip-container.sc-z-chip .interactive-icon.sc-z-chip{fill:var(--color-primary01)}.sc-z-chip-h>.z-chip-container.sc-z-chip:not([aria-disabled]) .interactive-icon.sc-z-chip:hover{color:var(--color-hover-primary);fill:var(--color-hover-primary)}.sc-z-chip-h>.z-chip-container[aria-disabled].sc-z-chip,.sc-z-chip-h>.z-chip-container[aria-disabled].sc-z-chip z-icon.sc-z-chip{color:var(--color-disabled03);cursor:auto;fill:var(--color-disabled03)}.sc-z-chip-h>.z-chip-container[aria-disabled].sc-z-chip{border:var(--border-size-small) solid var(--color-disabled01)}.sc-z-chip-h>.z-chip-container.sc-z-chip>button.sc-z-chip:focus:focus-visible{border-radius:100%;-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none}.sc-z-chip-h>button.sc-z-chip:not([disabled]):active:hover .interactive-icon.sc-z-chip{color:var(--color-primary01);fill:var(--color-primary01)}.sc-z-chip-h>.z-chip-container.sc-z-chip>z-icon.sc-z-chip,.sc-z-chip-h>.z-chip-container.sc-z-chip .interactive-icon.sc-z-chip{--z-icon-width:22px;--z-icon-height:22px}.sc-z-chip-h>.z-chip-container.default.sc-z-chip{min-height:44px;border-radius:22px;line-height:44px}.sc-z-chip-h>.z-chip-container.medium.sc-z-chip{min-height:40px;border-radius:22px;line-height:40px}.sc-z-chip-h>.z-chip-container.small.sc-z-chip{min-height:36px;border-radius:22px;line-height:36px}@media (min-width: 1152px){.sc-z-chip-h>.z-chip-container.sc-z-chip{font-size:12px}.sc-z-chip-h>.z-chip-container.default.sc-z-chip{min-height:32px;border-radius:16px;line-height:32px}.sc-z-chip-h>.z-chip-container.medium.sc-z-chip{min-height:28px;border-radius:16px;line-height:28px}.sc-z-chip-h>.z-chip-container.small.sc-z-chip{min-height:24px;border-radius:16px;line-height:24px}.sc-z-chip-h>.z-chip-container.sc-z-chip>z-icon.sc-z-chip,.sc-z-chip-h>.z-chip-container.sc-z-chip .interactive-icon.sc-z-chip{--z-icon-width:14px;--z-icon-height:14px}}";
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
        return (index.h("div", { key: '97f98567047b81864de0326e6ec89153d83cc1c1', class: {
                "z-chip-container": true,
                "z-chip-interactive": !!this.interactiveIcon,
                [this.type]: true,
            }, "aria-disabled": this.disabled }, this.icon && index.h("z-icon", { key: '45a3661a2cbda05351c56bbc9fd697fad9bc96ea', name: this.icon }), index.h("slot", { key: '9d81610f7d11777a0ab71772f35e610796d65e98' }), this.interactiveIcon && (index.h("button", { key: '53c13cdad61a96cb139c32923c469e9e1237bc15', type: "button", onClick: () => this.interactiveIconClick.emit(), "aria-label": this.ariaLabel, disabled: this.disabled }, index.h("z-icon", { key: '0baf684cbd662f7b3cedbd2a7468215f896472c6', class: "interactive-icon", name: this.interactiveIcon })))));
    }
    get el() { return index.getElement(this); }
};
ZChip.style = ZChipStyle0;

exports.z_chip = ZChip;

//# sourceMappingURL=z-chip.cjs.entry.js.map