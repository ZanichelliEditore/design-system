import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { x as ZChipType } from './index2.js';
import { d as defineCustomElement$1 } from './index9.js';

const stylesCss = ".sc-z-chip-h>.z-chip-container.sc-z-chip{display:inline-flex;min-height:28px;align-items:center;padding:0 calc(var(--space-unit) * 1.5);border:var(--border-size-small) solid var(--gray400);background-color:var(--color-surface01);border-radius:14px;color:var(--color-text01);fill:var(--color-text01);font-family:var(--font-family-sans);font-size:14px;line-height:28px}.sc-z-chip-h>.z-chip-interactive.sc-z-chip{font-weight:var(--font-sb)}.sc-z-chip-h>.z-chip-container.sc-z-chip>button.sc-z-chip{padding:0;border:none;margin-left:var(--space-unit);background-color:transparent;cursor:pointer}.sc-z-chip-h>.z-chip-container.sc-z-chip>z-icon.sc-z-chip:first-child{margin-right:calc(var(--space-unit) / 2)}.sc-z-chip-h>.z-chip-container.sc-z-chip:not([aria-disabled]):hover>z-icon.sc-z-chip:first-child{fill:var(--color-icon02)}.sc-z-chip-h>.z-chip-container.sc-z-chip .interactive-icon.sc-z-chip{fill:var(--color-primary01)}.sc-z-chip-h>.z-chip-container.sc-z-chip:not([aria-disabled]) .interactive-icon.sc-z-chip:hover{color:var(--color-hover-primary);fill:var(--color-hover-primary)}.sc-z-chip-h>.z-chip-container[aria-disabled].sc-z-chip,.sc-z-chip-h>.z-chip-container[aria-disabled].sc-z-chip z-icon.sc-z-chip{color:var(--color-disabled03);cursor:auto;fill:var(--color-disabled03)}.sc-z-chip-h>.z-chip-container[aria-disabled].sc-z-chip{border:var(--border-size-small) solid var(--color-disabled01)}.sc-z-chip-h>.z-chip-container.sc-z-chip>button.sc-z-chip:focus:focus-visible{border-radius:100%;box-shadow:var(--shadow-focus-primary);outline:none}.sc-z-chip-h>button.sc-z-chip:not([disabled]):active:hover .interactive-icon.sc-z-chip{color:var(--color-primary01);fill:var(--color-primary01)}.sc-z-chip-h>.z-chip-container.sc-z-chip>z-icon.sc-z-chip,.sc-z-chip-h>.z-chip-container.sc-z-chip .interactive-icon.sc-z-chip{--z-icon-width:22px;--z-icon-height:22px}.sc-z-chip-h>.z-chip-container.default.sc-z-chip{min-height:44px;border-radius:22px;line-height:44px}.sc-z-chip-h>.z-chip-container.medium.sc-z-chip{min-height:40px;border-radius:22px;line-height:40px}.sc-z-chip-h>.z-chip-container.small.sc-z-chip{min-height:36px;border-radius:22px;line-height:36px}@media (min-width: 1152px){.sc-z-chip-h>.z-chip-container.sc-z-chip{font-size:12px}.sc-z-chip-h>.z-chip-container.default.sc-z-chip{min-height:32px;border-radius:16px;line-height:32px}.sc-z-chip-h>.z-chip-container.medium.sc-z-chip{min-height:28px;border-radius:16px;line-height:28px}.sc-z-chip-h>.z-chip-container.small.sc-z-chip{min-height:24px;border-radius:16px;line-height:24px}.sc-z-chip-h>.z-chip-container.sc-z-chip>z-icon.sc-z-chip,.sc-z-chip-h>.z-chip-container.sc-z-chip .interactive-icon.sc-z-chip{--z-icon-width:14px;--z-icon-height:14px}}";
const ZChipStyle0 = stylesCss;

const ZChip = /*@__PURE__*/ proxyCustomElement(class ZChip extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.interactiveIconClick = createEvent(this, "interactiveIconClick", 7);
        this.icon = undefined;
        this.type = ZChipType.DEFAULT;
        this.interactiveIcon = undefined;
        this.disabled = false;
        this.ariaLabel = "";
    }
    render() {
        return (h("div", { key: '6f854f9af61641c48e7870b320f330e08fa10115', class: {
                "z-chip-container": true,
                "z-chip-interactive": !!this.interactiveIcon,
                [this.type]: true,
            }, "aria-disabled": this.disabled }, this.icon && h("z-icon", { name: this.icon }), h("slot", { key: '17dd6eacc4edf0df59bd68f4c453126e954c5e86' }), this.interactiveIcon && (h("button", { type: "button", onClick: () => this.interactiveIconClick.emit(), "aria-label": this.ariaLabel, disabled: this.disabled }, h("z-icon", { class: "interactive-icon", name: this.interactiveIcon })))));
    }
    get el() { return this; }
    static get style() { return ZChipStyle0; }
}, [6, "z-chip", {
        "icon": [1],
        "type": [513],
        "interactiveIcon": [513, "interactive-icon"],
        "disabled": [516],
        "ariaLabel": [1, "aria-label"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-chip", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-chip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZChip);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ZChip as Z, defineCustomElement as d };

//# sourceMappingURL=index5.js.map