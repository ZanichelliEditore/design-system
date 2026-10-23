import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-DafJ7_Il.js';
import { g as KeyboardCode } from './index-DdetsoIY.js';

const stylesCss = () => `:host{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:0;font-family:var(--font-family-sans)}:host,::slotted(*),*{box-sizing:border-box}::slotted(a){text-decoration:none}::slotted(*){color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}.label{display:flex;width:100%;align-items:center;padding:var(--space-unit) 0;border:0;border-bottom:var(--border-size-small) solid var(--color-surface03);margin:0;background:transparent;border-radius:0;cursor:pointer;text-align:left}:host(:last-child:not([open])) .label{border-bottom:none}:host(:is([active],[open])) .label,.label:focus:focus-visible,.label:hover{border-color:var(--color-primary01)}.label:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}:host(:is([active],[open])) .label ::slotted(*),.label:focus:focus-visible ::slotted(*),.label:hover ::slotted(*){font-weight:var(--font-bd)}::slotted([data-text]){display:inline-flex;flex-direction:column}::slotted([data-text])::after{overflow:hidden;height:0;content:attr(data-text);content:attr(data-text) / "";font-weight:var(--font-bd);pointer-events:none;user-select:none;visibility:hidden}@media speech{::slotted([data-text])::after{display:none}}.label ::slotted(*){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.5}.label z-icon{margin-left:calc(var(--space-unit) * 4);fill:var(--color-default-icon)}.items{display:flex;width:100%;flex-direction:column;padding:calc(var(--space-unit) / 2);padding-bottom:calc(var(--space-unit) * 1.5)}.items[hidden]{display:none}::slotted([slot="section"]){display:inline-flex;padding:calc(var(--space-unit) / 2);margin:0;font-size:var(--font-size-1);line-height:1.333;outline:none}::slotted([slot="section"]:last-of-type){border:none}::slotted([slot="section"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary);color:var(--color-primary01)}::slotted([slot="section"]:hover),::slotted([slot="section"]:focus:focus-visible),::slotted([slot="section"]:active),::slotted([slot="section"][active]),::slotted([slot="section"][data-active]){color:var(--color-primary01);font-weight:var(--font-bd)}`;

const ZMenuSection = class {
    get focusableItem() {
        return this.items.find(({ tabIndex }) => tabIndex === 0);
    }
    toggle() {
        if (!this.hasItems) {
            return;
        }
        this.open = !this.open;
    }
    setItemsA11yAttrs() {
        if (!this.hasItems) {
            return;
        }
        this.items.forEach((item) => {
            item.setAttribute("role", "menuitem");
            item.tabIndex = -1;
        });
    }
    onItemsChange() {
        this.items = Array.from(this.host.querySelectorAll('[slot="section"]'));
        this.hasItems = this.items.length > 0;
        this.setItemsA11yAttrs();
    }
    /**
     * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
     * @param ev Slotchange event
     */
    onLabelSlotChange(ev) {
        const labelElement = ev.target.assignedElements()[0];
        labelElement.dataset.text = labelElement === null || labelElement === void 0 ? void 0 : labelElement.textContent;
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
                this.focustFirstItem();
            }
        }
    }
    /**
     * Move focus and adjust the tabindex value of `receiver` and `current` elements,
     * setting -1 to the `current` and 0 to the `receiver`, then focus the `receiver` element.
     */
    moveFocus(receiver, current) {
        receiver.tabIndex = 0;
        setTimeout(() => {
            receiver.focus();
        }, 100);
        if (current) {
            current.tabIndex = -1;
        }
    }
    focustFirstItem() {
        this.moveFocus(this.items[0]);
    }
    /** Focus the last item. */
    async focusLastItem() {
        this.moveFocus(this.items[this.items.length - 1]);
    }
    /** Set tabindex of the label to 0, then focus it. */
    async setFocus() {
        this.htmlTabindex = 0;
        setTimeout(() => {
            this.label.focus();
        }, 100);
    }
    onOpenChange() {
        if (!this.open) {
            this.setItemsA11yAttrs();
            this.closed.emit();
        }
        else {
            this.opened.emit();
        }
    }
    onTabindexChange() {
        if (!this.label) {
            return;
        }
        this.label.tabIndex = this.htmlTabindex;
    }
    onItemsKeydown(ev) {
        switch (ev.key) {
            case KeyboardCode.ESC:
            case KeyboardCode.ARROW_LEFT:
                if (!this.open) {
                    break;
                }
                ev.preventDefault();
                ev.stopPropagation();
                this.moveFocus(this.label, this.focusableItem);
                this.open = false;
                break;
            case KeyboardCode.ARROW_RIGHT:
                if (this.open) {
                    break;
                }
                ev.preventDefault();
                ev.stopPropagation();
                this.open = true;
                this.focustFirstItem();
                break;
            case KeyboardCode.ARROW_DOWN: {
                if (!this.open) {
                    break;
                }
                if (document.activeElement === this.host) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this.focustFirstItem();
                    break;
                }
                const currentIndex = this.items.indexOf(this.focusableItem);
                const receiver = this.items[currentIndex + 1];
                if (receiver) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this.moveFocus(receiver, this.focusableItem);
                }
                else {
                    this.htmlTabindex = 0;
                    this.focusableItem.tabIndex = -1;
                }
                break;
            }
            case KeyboardCode.ARROW_UP: {
                if (!this.open || document.activeElement === this.host) {
                    break;
                }
                const currentIndex = this.items.indexOf(this.focusableItem);
                const receiver = this.items[currentIndex - 1];
                ev.preventDefault();
                ev.stopPropagation();
                if (receiver) {
                    this.moveFocus(receiver, this.focusableItem);
                }
                else {
                    // since there isn't a previous item to focus, give the focus to the label element
                    this.focusableItem.tabIndex = -1;
                    this.setFocus();
                }
                break;
            }
        }
    }
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.opened = createEvent(this, "opened", 7);
        this.closed = createEvent(this, "closed", 7);
        /**
         * Tabindex value to set on the label button.
         * Useful to manage keyboard navigation focus with roving tabindex handled by this component's parent (usually ZMenu).
         */
        this.htmlTabindex = -1;
        this.toggle = this.toggle.bind(this);
        this.onItemsChange = this.onItemsChange.bind(this);
        this.onLabelSlotChange = this.onLabelSlotChange.bind(this);
        this.onLabelClick = this.onLabelClick.bind(this);
        this.onLabelKeydown = this.onLabelKeydown.bind(this);
        this.onItemsKeydown = this.onItemsKeydown.bind(this);
    }
    connectedCallback() {
        this.onItemsChange();
    }
    render() {
        return (h(Host, { key: '64aaea4f98c08d9d570aedb2a73847247d6972cf', open: this.open }, h("button", { key: '3a3e7917674e8db446e986b24fed9a3079d7d6ab', ref: (el) => (this.label = el), class: "label", "aria-haspopup": `${!!this.hasItems}`, "aria-expanded": `${!!this.open}`, role: "menuitem", tabindex: this.htmlTabindex, onClick: this.onLabelClick, onKeyDown: this.onLabelKeydown }, h("slot", { key: '3e13783b40135def11773286f16c45070ee9eade', onSlotchange: this.onLabelSlotChange }), this.hasItems && h("z-icon", { key: 'be1dffed69eabe2fb40b46d7c1ff4cbef9512cf0', name: this.open ? "chevron-up" : "chevron-down" })), h("div", { key: '51c8c7e3560941fe67614c92c8e153233cc97691', class: "items", role: "menu", hidden: !this.open }, h("slot", { key: 'c37e273f536f6d1f8d3e4585b14290fc70ddce86', name: "section", onSlotchange: this.onItemsChange }))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "open": [{
                "onOpenChange": 0
            }],
        "htmlTabindex": [{
                "onTabindexChange": 0
            }]
    }; }
};
ZMenuSection.style = stylesCss();

export { ZMenuSection as z_menu_section };
