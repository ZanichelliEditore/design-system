import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-DafJ7_Il.js';
import { g as KeyboardCode } from './index-DdetsoIY.js';
import { a as containsElement } from './utils-CJc3A9NX.js';
import './breakpoints-Q-tWjk7P.js';

const stylesCss = () => `:host,::slotted(*),*{box-sizing:border-box;outline:none}:host{position:relative;display:inline-flex;height:fit-content;flex-direction:column}::slotted(a){text-decoration:none}::slotted(*){color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}.menu-label{position:relative;display:flex;width:100%;align-items:center;padding:0;border:0;border-bottom:var(--border-size-large) solid transparent;margin:0;background:transparent;border-radius:0;color:inherit;text-align:left}button.menu-label{cursor:pointer}.menu-label:focus-visible,div.menu-label:focus-within{box-shadow:var(--shadow-focus-primary)}:host(:is([active],[open])) .menu-label ::slotted(*),.menu-label:focus-visible ::slotted(*),div.menu-label:focus-within ::slotted(*){color:var(--color-primary01);font-weight:var(--font-bd)}:host([vertical-context]) .menu-label{padding:var(--space-unit) 0;border-width:var(--border-size-small);border-color:var(--color-surface03)}:host(:is([active],[open])) .menu-label,.menu-label:hover,.menu-label:focus-visible,div.menu-label:focus-within{border-color:var(--color-primary01)}:host([vertical-context]:is([active],[open])) .menu-label::after,:host([vertical-context]) .menu-label:hover::after,:host([vertical-context]) .menu-label:focus-visible::after,:host([vertical-context]) div.menu-label:focus-within::after{position:absolute;bottom:calc(var(--border-size-small) * -1);left:0;width:100%;height:var(--border-size-large);background-color:var(--color-primary01);content:""}:host([vertical-context]) .menu-label ::slotted(*){padding:0}.menu-label ::slotted(*){display:inline-flex;width:100%;min-width:fit-content;padding-bottom:2px;margin:0;appearance:none;color:var(--z-menu-label-color, var(--color-default-text));font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:inherit;line-height:1.5;white-space:nowrap}.menu-label z-icon{margin-left:calc(var(--space-unit) * 1.5);fill:var(--color-default-icon)}::slotted([data-text]:not([slot]))::after{height:0;content:attr(data-text);content:attr(data-text) / "";font-weight:var(--font-bd);letter-spacing:normal;pointer-events:none;user-select:none;visibility:hidden}@media speech{::slotted([data-text]:not([slot]))::after{display:none}}::slotted([data-text]:not([slot])){display:inline-flex;flex-direction:column}.content{background:var(--color-surface01)}:host(:not([open])) .content{display:none}:host([floating]:not([vertical-context])) .content{position:absolute;top:100%;left:0;width:375px;min-width:100%;max-width:100vw;padding:0 calc(var(--space-unit) * 2);box-shadow:var(--shadow-2)}:host(:not([floating])) .content{width:100%}.header{display:flex;align-items:center;padding:var(--space-unit) 0 calc(var(--space-unit) * 2)}.header ::slotted(img[slot="header"]){width:calc(var(--space-unit) * 11.25);height:auto;object-fit:contain}.header ::slotted([slot="header"]:not(:first-child)){margin:auto 0;margin-left:calc(var(--space-unit) * 2.5);font-size:var(--font-size-3);font-weight:var(--font-sb);line-height:1.5}.items{display:flex;flex-direction:column;align-items:flex-start;background:inherit}.items>::slotted([slot="item"]){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.5}.items>::slotted([slot="item"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}.items>::slotted([slot="item"]:not(z-menu-section)){padding:var(--space-unit) 0;border-bottom:var(--border-size-small) solid var(--color-surface03)}:host(:not([vertical-context])) .items>::slotted([slot="item"]:last-child){border-bottom:0}.items>::slotted([slot="item"]:hover),.items>::slotted([slot="item"]:focus:focus-visible),.items>::slotted([slot="item"]:active),.items>::slotted([slot="item"][active]),.items>::slotted([slot="item"][data-active]){border-color:var(--color-primary01);font-weight:var(--font-bd)}`;

const isZMenuSection = (el) => (el === null || el === void 0 ? void 0 : el.tagName) === "Z-MENU-SECTION";
const ZMenu = class {
    get focusableItem() {
        return this.items.find((item) => (isZMenuSection(item) ? item.htmlTabindex === 0 : item.tabIndex === 0));
    }
    toggle() {
        if (!this.hasContent) {
            return;
        }
        this.open = !this.open;
    }
    /**
     * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
     * @param ev Slotchange event
     */
    onLabelSlotChange(ev) {
        const labelElement = ev.target.assignedElements()[0];
        labelElement.dataset.text = labelElement === null || labelElement === void 0 ? void 0 : labelElement.textContent;
        this.setLabelA11yAttrs();
    }
    /**
     * Correctly set position of the floating menu in order to prevent overflow.
     * @param live Should run the method on every refresh frame.
     */
    reflow(live = false) {
        if (!this.floating) {
            return;
        }
        if (this.content && this.hasContent) {
            const { style } = this.content;
            const { left } = this.host.getBoundingClientRect();
            const widthPx = getComputedStyle(this.content).width;
            const width = widthPx ? parseFloat(widthPx.replace("px", "")) : 375;
            const safeScrollbarSpace = 30;
            style.left = `${Math.min(window.innerWidth - left - width - safeScrollbarSpace, 0)}px`;
        }
        if (live) {
            this.raf = requestAnimationFrame(this.reflow.bind(this, live));
        }
    }
    /**
     * Check if some content slot is set.
     */
    checkContent() {
        this.hasHeader = !!this.host.querySelectorAll("[slot=header]").length;
        this.hasContent = !!this.host.querySelectorAll("[slot=item]").length || this.hasHeader;
    }
    setItemTabindex(item, tabIndex) {
        if (isZMenuSection(item)) {
            item.htmlTabindex = tabIndex;
        }
        else {
            item.tabIndex = tabIndex;
        }
    }
    /**
     * Set `menuitem` role to all menu items (ZMenuSection items already have it).
     * Set -1 to the tabindex of the items and 0 to the first one.
     */
    setItemsA11yAttrs() {
        this.items.forEach((item, index) => {
            const tabindex = index === 0 ? 0 : -1;
            this.setItemTabindex(item, tabindex);
            if (!isZMenuSection(item)) {
                item.setAttribute("role", "menuitem");
            }
        });
    }
    onItemsChange() {
        this.checkContent();
        this.items = Array.from(this.host.children).filter(({ slot }) => slot === "item");
        this.setItemsA11yAttrs();
        this.items.forEach((item) => {
            if (!isZMenuSection(item)) {
                item.dataset.text = item.textContent;
            }
        });
    }
    /**
     * Move focus and adjust the tabindex value of `receiver` and `current` elements,
     * setting -1 to the `current` and 0 to the `receiver`, then focus the `receiver` element.
     * If the receiver is a ZMenuSection and it's open, focus its first focusable item.
     */
    moveFocus(receiver, current) {
        if (isZMenuSection(receiver)) {
            receiver.setFocus();
        }
        else {
            receiver.tabIndex = 0;
            setTimeout(() => {
                receiver.focus();
            }, 100);
        }
        if (!current) {
            return;
        }
        this.setItemTabindex(current, -1);
    }
    onLabelClick() {
        this.toggle();
        this.setFocus();
    }
    onLabelKeydown(ev) {
        if (ev.key === KeyboardCode.ENTER || ev.key === KeyboardCode.SPACE) {
            ev.preventDefault();
            ev.stopPropagation();
            this.toggle();
            if (this.open) {
                this.moveFocus(this.items[0]);
            }
            return;
        }
        if (!this.verticalContext) {
            return;
        }
        if (ev.key === KeyboardCode.ARROW_RIGHT && !this.open) {
            ev.preventDefault();
            ev.stopPropagation();
            this.open = true;
            this.moveFocus(this.items[0]);
        }
    }
    /** Set tabindex of the label to 0, then focus it. */
    async setFocus() {
        this.htmlTabindex = 0;
        const label = this.hasContent ? this.labelButton : this.host.firstElementChild;
        label.focus();
    }
    /**
     * Focus the last item.
     */
    async focusLastItem() {
        const lastItem = this.items[this.items.length - 1];
        if (isZMenuSection(lastItem) && lastItem.open) {
            lastItem.focusLastItem();
            return;
        }
        this.moveFocus(lastItem);
    }
    onOpenChanged() {
        if (!this.open) {
            cancelAnimationFrame(this.raf);
            this.closed.emit();
            this.items.forEach((item) => {
                if (isZMenuSection(item) && item.open) {
                    item.open = false;
                }
            });
            return;
        }
        this.setItemsA11yAttrs();
        this.opened.emit();
        if (this.floating) {
            this.reflow(true);
        }
    }
    setLabelA11yAttrs() {
        if (this.hasContent && this.labelButton) {
            this.labelButton.tabIndex = this.htmlTabindex;
            return;
        }
        const slottedLabel = this.host.firstElementChild;
        slottedLabel.role = "menuitem";
        slottedLabel.tabIndex = this.htmlTabindex;
    }
    /**
     * Set tabindex to -1 to all siblings of the clicked item.
     */
    onItemClick(ev) {
        const clickedItem = this.items.find((item) => containsElement(item, ev.target));
        if (clickedItem) {
            this.items.forEach((item) => {
                if (item === clickedItem) {
                    return;
                }
                if (isZMenuSection(item)) {
                    item.htmlTabindex = -1;
                }
                else {
                    item.tabIndex = -1;
                }
            });
        }
    }
    onKeyDown(ev) {
        var _a;
        if (!this.hasContent) {
            return;
        }
        switch (ev.key) {
            case KeyboardCode.ESC:
                if (!this.open) {
                    break;
                }
                ev.stopPropagation();
                ev.preventDefault();
                this.open = false;
                this.setFocus();
                break;
            case KeyboardCode.ARROW_DOWN: {
                if (document.activeElement === this.host) {
                    if (this.verticalContext && !this.open) {
                        break;
                    }
                    ev.stopPropagation();
                    ev.preventDefault();
                    if (!this.open) {
                        this.open = true;
                    }
                    this.moveFocus(this.items[0]);
                    break;
                }
                const currentIndex = this.items.indexOf(this.focusableItem);
                if (this.verticalContext && currentIndex === this.items.length - 1) {
                    // navigation is going to leave this menu. restore tabindex to the label and let the parent handle it
                    this.setItemTabindex(this.items[currentIndex], -1);
                    this.htmlTabindex = 0;
                    break;
                }
                ev.stopPropagation();
                ev.preventDefault();
                const receiver = this.items[currentIndex + 1];
                // if the last item is already focused, navigate to the first one
                this.moveFocus(receiver !== null && receiver !== void 0 ? receiver : this.items[0], this.focusableItem);
                break;
            }
            case KeyboardCode.ARROW_UP: {
                if (document.activeElement === this.host) {
                    if (this.verticalContext) {
                        break;
                    }
                    ev.stopPropagation();
                    ev.preventDefault();
                    // open the menu and focus the last item
                    if (!this.open) {
                        this.open = true;
                    }
                    this.moveFocus(this.items[this.items.length - 1], this.focusableItem);
                    break;
                }
                ev.stopPropagation();
                ev.preventDefault();
                const currentIndex = this.items.indexOf(this.focusableItem);
                if (currentIndex === 0 && this.verticalContext) {
                    this.setItemTabindex(this.focusableItem, -1);
                    this.setFocus();
                    break;
                }
                const receiver = (_a = this.items[currentIndex - 1]) !== null && _a !== void 0 ? _a : this.items[this.items.length - 1];
                // if the receiver is a ZMenuSection and it's open, focus its last item
                if (isZMenuSection(receiver) && receiver.open) {
                    this.setItemTabindex(this.focusableItem, -1);
                    receiver.focusLastItem();
                    break;
                }
                this.moveFocus(receiver, this.focusableItem);
                break;
            }
            case KeyboardCode.ARROW_LEFT:
                if (!this.open || !this.verticalContext) {
                    break;
                }
                // close the menu and focus the label
                ev.preventDefault();
                ev.stopPropagation();
                this.open = false;
                this.setFocus();
        }
    }
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.opened = createEvent(this, "opened", 7);
        this.closed = createEvent(this, "closed", 7);
        /**
         * Flag to set the display mode of the list.
         * If true, the list will be absolutely positioned under the menu label,
         * stacked beneath it otherwise.
         */
        this.floating = true;
        /** The opening state of the menu. */
        this.open = false;
        /**
         * Tells the component that it's placed in a vertical context with other `ZMenu`s (usually in the ZAppHeader's offcanvas).
         * A small border is placed under it as a separator from other elements.
         */
        this.verticalContext = false;
        /**
         * Tabindex value to set on the menu label.
         * Useful to manage keyboard navigation focus with roving tabindex handled by this component's parent (usually ZAppHeader).
         */
        this.htmlTabindex = -1;
        this.items = [];
        this.toggle = this.toggle.bind(this);
        this.checkContent = this.checkContent.bind(this);
        this.onLabelSlotChange = this.onLabelSlotChange.bind(this);
        this.onLabelClick = this.onLabelClick.bind(this);
        this.onItemsChange = this.onItemsChange.bind(this);
        this.onLabelKeydown = this.onLabelKeydown.bind(this);
    }
    componentWillLoad() {
        this.setLabelA11yAttrs();
        this.onItemsChange();
    }
    render() {
        if (!this.hasContent) {
            return (h("div", { class: "menu-label" }, h("slot", { onSlotchange: this.onLabelSlotChange })));
        }
        return (h(Host, null, h("button", { ref: (el) => (this.labelButton = el), class: "menu-label", "aria-expanded": `${!!this.open}`, "aria-haspopup": `${this.hasContent}`, "aria-label": this.open ? "Chiudi menù" : "Apri menù", role: "menuitem", tabIndex: this.htmlTabindex, onClick: this.onLabelClick, onKeyDown: this.onLabelKeydown }, h("slot", { onSlotchange: this.onLabelSlotChange }), h("z-icon", { name: this.open ? "chevron-up" : "chevron-down" })), h("div", { class: "content", ref: (el) => (this.content = el) }, this.hasHeader && (h("header", { class: "header" }, h("slot", { name: "header", onSlotchange: this.checkContent }))), h("div", { class: "items", role: "menu" }, h("slot", { name: "item", onSlotchange: this.onItemsChange })))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "open": [{
                "onOpenChanged": 0
            }],
        "htmlTabindex": [{
                "setLabelA11yAttrs": 0
            }]
    }; }
};
ZMenu.style = stylesCss();

export { ZMenu as z_menu };
