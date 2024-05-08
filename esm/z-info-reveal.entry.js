import { r as registerInstance, h, a as Host, g as getElement } from './index-f16bc2ca.js';
import { J as InfoRevealPosition } from './index-2255c6c8.js';

const stylesCss = ":host{--z-info-reveal-theme--surface:var(--color-black);--z-info-reveal-theme--text:var(--color-white);--z-info-reveal-shadow:var(--shadow-2);--z-info-reveal-max-width:375px;position:relative;display:flex;width:fit-content;background-color:var(--z-info-reveal-theme--surface);color:var(--z-info-reveal-theme--text);font-size:var(--font-size-3);font-weight:var(--font-rg);letter-spacing:0;line-height:1.5}button{padding:0;border:none;background-color:transparent;border-radius:0;color:inherit;cursor:pointer;fill:currentcolor;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}z-icon{--z-icon-width:calc(var(--space-unit) * 3);--z-icon-height:calc(var(--space-unit) * 3);display:flex}.z-info-reveal-trigger{display:flex;width:fit-content;height:100%;align-items:center;padding:calc(var(--space-unit) / 2);box-shadow:var(--z-info-reveal-shadow);column-gap:calc(var(--space-unit) / 2)}:host([position=\"top_left\"]) .z-info-reveal-trigger,:host([position=\"bottom_left\"]) .z-info-reveal-trigger{flex-direction:row-reverse}:host([open]) .z-info-reveal-trigger{box-shadow:none}.info-box{position:absolute;display:flex;max-width:var(--z-info-reveal-max-width);padding:calc(var(--space-unit) / 2);background-color:var(--z-info-reveal-theme--surface);box-shadow:var(--z-info-reveal-shadow);column-gap:calc(var(--space-unit) / 2);cursor:pointer}:host([position=\"bottom_left\"]) .info-box,:host([position=\"bottom_right\"]) .info-box{bottom:0}:host([position=\"top_right\"]) .info-box,:host([position=\"bottom_right\"]) .info-box{right:0}:host([position=\"top_left\"]) .info-box,:host([position=\"bottom_left\"]) .info-box{left:0;flex-direction:row-reverse}::slotted(*){display:none;width:max-content}::slotted([data-current]){display:block}:host([position=\"top_left\"]) .z-info-reveal-close,:host([position=\"top_right\"]) .z-info-reveal-close{align-self:flex-start}:host([position=\"bottom_left\"]) .z-info-reveal-close,:host([position=\"bottom_right\"]) .z-info-reveal-close{align-self:flex-end}";
const ZInfoRevealStyle0 = stylesCss;

const ZInfoReveal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icon = "informationsource";
        this.position = InfoRevealPosition.BOTTOM_RIGHT;
        this.label = undefined;
        this.open = false;
        this.currentIndex = null;
    }
    watchItems() {
        Array.from(this.el.children).forEach((child, index) => {
            if (this.currentIndex === index) {
                child.setAttribute("data-current", "");
            }
            else {
                child.removeAttribute("data-current");
            }
        });
    }
    /**
     * Open the info box.
     */
    openInfoBox() {
        this.currentIndex = 0;
        this.open = true;
    }
    /**
     * Close the info box.
     */
    closeInfoBox() {
        this.open = false;
    }
    /**
     * Navigate slotted info.
     * It closes the info box after the last info has been navigated.
     */
    next() {
        this.currentIndex = this.currentIndex + 1;
        if (this.currentIndex === this.el.children.length) {
            this.closeInfoBox();
        }
    }
    render() {
        return (h(Host, { key: '1cc6cbacd33676a39d804037c786a37fd7aa9864', open: this.open }, h("button", { key: '5ad8966b67c365f654c0ddb50e879a0859a9e785', class: "z-info-reveal-trigger", onClick: this.openInfoBox.bind(this) }, this.label && h("span", { class: "z-info-reveal-label" }, this.label), h("z-icon", { key: '5314f51f922a64ee58162687bab764835401d6a2', name: this.icon })), this.open && (h("div", { class: "info-box", onClick: this.next.bind(this), tabIndex: 0 }, h("slot", null), h("button", { class: "z-info-reveal-close", onClick: this.closeInfoBox.bind(this) }, h("z-icon", { name: "close" }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "currentIndex": ["watchItems"]
    }; }
};
ZInfoReveal.style = ZInfoRevealStyle0;

export { ZInfoReveal as z_info_reveal };

//# sourceMappingURL=z-info-reveal.entry.js.map