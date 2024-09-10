'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e801ae96.js');
const index$1 = require('./index-bab7a651.js');

const stylesCss = ":host{display:inline-flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:0;font-family:var(--font-family-sans)}:host,::slotted(*),*{box-sizing:border-box}::slotted(a){text-decoration:none}::slotted(*){color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host(:is([active],[open])) .label,.label:hover{border-color:var(--color-secondary01)}:host(:is([active],[open])) .label ::slotted(*),.label:focus:focus-visible ::slotted(*),.label:hover ::slotted(*){font-weight:var(--font-bd)}.label{display:flex;width:100%;align-items:center;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2);border:0;border-bottom:var(--border-size-small) solid var(--color-surface05);margin:0;background:transparent;border-radius:0;cursor:pointer;text-align:left}::slotted([data-text]){display:inline-flex;flex-direction:column}::slotted([data-text])::after{overflow:hidden;height:0;content:attr(data-text);content:attr(data-text) / \"\";font-weight:var(--font-bd);pointer-events:none;user-select:none;visibility:hidden}@media speech{::slotted([data-text])::after{display:none}}.label ::slotted(*){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.25}.label:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.label z-icon{margin-left:calc(var(--space-unit) * 4);fill:var(--color-default-icon)}.items{display:flex;width:100%;flex-direction:column;padding:calc(var(--space-unit) / 2);padding-bottom:calc(var(--space-unit) * 1.5)}.items>::slotted([slot=\"section\"]){display:inline-flex;padding:calc(var(--space-unit) / 2);margin:0;font-size:var(--font-size-2);line-height:1.4;outline:none}.items>::slotted([slot=\"section\"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary);color:var(--color-secondary01)}.items>::slotted([slot=\"section\"]:hover),.items>::slotted([slot=\"section\"]:focus:focus-visible),.items>::slotted([slot=\"section\"][active]){color:var(--color-secondary01);font-weight:var(--font-bd)}";
const ZMenuSectionStyle0 = stylesCss;

const ZMenuSection = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.opened = index.createEvent(this, "opened", 7);
        this.closed = index.createEvent(this, "closed", 7);
        this.currentIndex = -1;
        this.currentCanvasOpenStatus = false;
        this.active = undefined;
        this.open = undefined;
        this.hasContent = undefined;
    }
    canvasOpenStatusChanged(e) {
        this.currentCanvasOpenStatus = e.detail;
    }
    handleKeyDown(e) {
        if (e.code === index$1.KeyboardCode.ENTER) {
            return;
        }
        if (this.open && !this.currentCanvasOpenStatus) {
            this.handleNavigationSideArrow(e);
        }
        this.handleArrowsNav(e);
    }
    handleNavigationSideArrow(e) {
        if (e.code !== index$1.KeyboardCode.ARROW_RIGHT && e.code !== index$1.KeyboardCode.ARROW_LEFT) {
            return;
        }
        if (e.code === index$1.KeyboardCode.ARROW_RIGHT) {
            const nextElement = this.hostElement.parentElement.nextElementSibling;
            if (nextElement) {
                const menuButton = nextElement.shadowRoot.querySelector(".menu-label");
                console.log(this.hostElement.parentElement);
                menuButton.focus();
            }
            this.open = false;
            nextElement.setAttribute("open", "true");
        }
        else if (e.code === index$1.KeyboardCode.ARROW_LEFT) {
            const prevElement = this.hostElement.parentElement.previousElementSibling;
            if (prevElement) {
                const menuButton = prevElement.shadowRoot.querySelector(".menu-label");
                menuButton.focus();
            }
            prevElement.setAttribute("open", "true");
            this.open = false;
        }
    }
    handleArrowsNav(e) {
        const menuItems = Array.from(this.hostElement.querySelectorAll('[slot="section"]'));
        if (this.open) {
            e.preventDefault();
            e.stopPropagation();
            if (e.code === index$1.KeyboardCode.ARROW_DOWN || e.code === index$1.KeyboardCode.ARROW_UP) {
                let nextFocusableItem;
                // INFO: reset focus on all menu items
                menuItems.forEach((item) => item.setAttribute("tabindex", "-1"));
                if (e.code === index$1.KeyboardCode.ARROW_DOWN) {
                    nextFocusableItem = this.getNextItem(menuItems, 1);
                }
                else if (e.code === index$1.KeyboardCode.ARROW_UP) {
                    nextFocusableItem = this.getNextItem(menuItems, -1);
                }
                if (nextFocusableItem) {
                    nextFocusableItem.setAttribute("tabindex", "0");
                    nextFocusableItem.focus();
                }
            }
            else if (e.code === index$1.KeyboardCode.ESC) {
                this.focusToParentAndCloseMenu();
            }
            else if (e.shiftKey && e.code === index$1.KeyboardCode.TAB) {
                this.focusToParentAndCloseMenu();
            }
        }
    }
    getNextItem(menuItems, direction) {
        if (this.currentIndex === -1) {
            this.currentIndex = direction === 1 ? 0 : menuItems.length - 1;
            return menuItems[this.currentIndex];
        }
        this.currentIndex = (this.currentIndex + direction + menuItems.length) % menuItems.length;
        return menuItems[this.currentIndex];
    }
    focusToParentAndCloseMenu() {
        const menuButton = this.hostElement.shadowRoot.querySelector("button");
        menuButton.focus();
        this.currentIndex = -1;
        this.open = false;
    }
    toggle() {
        if (!this.hasContent) {
            return;
        }
        this.open = !this.open;
        this.open ? this.opened.emit() : this.closed.emit();
    }
    /** Close the list when a click is performed outside of this Element. */
    handleClick(ev) {
        if (!this.open || this.hostElement.contains(ev.target)) {
            return;
        }
        this.open = false;
        this.closed.emit();
    }
    /**
     * Check if some content slot is set.
     */
    checkContent() {
        this.hasContent = this.hostElement.querySelectorAll('[slot="section"]').length > 0;
    }
    /**
     * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
     * @param ev Slotchange event
     */
    onLabelSlotChange(ev) {
        const labelElement = ev.target.assignedElements()[0];
        labelElement.dataset.text = (labelElement === null || labelElement === void 0 ? void 0 : labelElement.innerText) || null;
    }
    focusFirstSectionItemOnKeyUp() {
        const firstElement = this.hostElement.querySelectorAll('[slot="section"]')[0];
        if (firstElement) {
            firstElement.focus();
            this.currentIndex = 0;
        }
    }
    componentWillLoad() {
        this.checkContent();
    }
    render() {
        return (index.h(index.Host, { key: '1370ec8c9379a204ed8bfb387ef53f6ad976ce0f', role: "menu", open: this.open }, index.h("button", { key: '4a474f4f47b9f72f3621a4c1f043f287ebf98d66', class: "label", "aria-pressed": this.open ? "true" : "false", onClick: this.toggle.bind(this), onKeyUp: this.focusFirstSectionItemOnKeyUp.bind(this) }, index.h("slot", { key: '1332d96212421fd936b1ee1e295c856219bfb1cc', onSlotchange: this.onLabelSlotChange.bind(this) }), this.hasContent && index.h("z-icon", { key: '04b94f8f22bd56d16f7cdb3f394024c5726435e5', name: this.open ? "chevron-up" : "chevron-down" })), this.open && (index.h("div", { key: '01353c9f9b57cce04361849e79c3264f5f106472', class: "items" }, index.h("slot", { key: '29379c69dff6189d4226246eb859dad6c67ca0ec', name: "section", onSlotchange: this.checkContent.bind(this) })))));
    }
    get hostElement() { return index.getElement(this); }
};
ZMenuSection.style = ZMenuSectionStyle0;

exports.z_menu_section = ZMenuSection;

//# sourceMappingURL=z-menu-section.cjs.entry.js.map