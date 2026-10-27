import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-SFwvdS4t.js';
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
        return (h(Host, { key: 'adfcabed5689b1b9648ec3881f78bc7a1bad7094', open: this.open }, h("button", { key: 'a5f41661fca36232c158b87d32c75a6cb578bd27', ref: (el) => (this.label = el), class: "label", "aria-haspopup": `${!!this.hasItems}`, "aria-expanded": `${!!this.open}`, role: "menuitem", tabindex: this.htmlTabindex, onClick: this.onLabelClick, onKeyDown: this.onLabelKeydown }, h("slot", { key: '8d7bdca8acddd555357691e320bd7a51e2a678c9', onSlotchange: this.onLabelSlotChange }), this.hasItems && h("z-icon", { key: 'c9e4ee66443c5c004f1ee1f7dff51a046ee77bc5', name: this.open ? "chevron-up" : "chevron-down" })), h("div", { key: '3948366c3e4bd092c0e89d31642f163ab92dc68c', class: "items", role: "menu", hidden: !this.open }, h("slot", { key: '97d9b2583d493173ccb8271d02bf2b6d947f1141', name: "section", onSlotchange: this.onItemsChange }))));
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
