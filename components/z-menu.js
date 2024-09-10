import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { g as KeyboardCode } from './index2.js';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = ":host,::slotted(*),*{box-sizing:border-box;outline:none}:host{position:relative;display:inline-flex;flex-direction:column;flex-shrink:0;--z-menu-label-color:var(--color-default-text)}::slotted(a){text-decoration:none}::slotted(*){color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}.menu-label{width:100%;padding:0;border:0;margin:0;background:transparent;border-radius:0;color:inherit;outline:none;text-align:left}.menu-wrapper{display:flex;align-items:center}.menu-wrapper:focus-visible,.menu-label-content:focus-visible,button:focus-visible{outline:none}button.menu-label{cursor:pointer}.menu-label:focus-within{z-index:1;box-shadow:var(--shadow-focus-primary)}.menu-label .menu-label-content{position:relative;display:flex;height:30px;align-items:center}:host(:is([active],[open])) .menu-label-content,.menu-label:focus-within .menu-label-content{color:var(--color-primary01);font-weight:var(--font-bd)}:host(:is([active],[open])) .menu-label-content ::slotted(*),.menu-label:focus-within .menu-label-content ::slotted(*),.menu-label:focus-within .menu-label-content z-icon{color:var(--color-primary01);letter-spacing:normal}:host .menu-label .menu-label-content ::slotted(*:not([slot]):focus:focus-visible){box-shadow:none !important}:host(:is([active],[open],[vertical-context])) .menu-label .menu-label-content::after,.menu-label .menu-label-content:hover::after,.menu-label:focus-within .menu-label-content::after{position:absolute;bottom:0;left:0;width:100%;content:\"\";pointer-events:none}:host([vertical-context]) .menu-label-content::after{height:var(--border-size-small);background-color:var(--color-surface03)}:host(:is([active],[open])) .menu-label .menu-label-content::after,.menu-label .menu-label-content:hover::after,.menu-label:focus-within .menu-label-content::after{height:var(--border-size-large);background-color:var(--color-secondary01)}::slotted([data-text])::after{height:0;content:attr(data-text);content:attr(data-text) / \"\";font-weight:var(--font-bd);letter-spacing:normal;pointer-events:none;user-select:none;visibility:hidden}@media speech{::slotted([data-text])::after{display:none}}::slotted([data-text]){display:inline-flex;flex-direction:column}.menu-label .menu-label-content ::slotted(*){display:inline-flex;width:100%;min-width:fit-content;margin:0;appearance:none;color:var(--z-menu-label-color);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:inherit;outline:none}.menu-label .menu-label-content ::slotted(*),.menu-label .menu-label-content z-icon{padding:var(--space-unit) 0}.menu-label .menu-label-content z-icon{margin-left:calc(var(--space-unit) * 1.5);fill:currentcolor}.content{background:var(--color-surface01)}:host(:not([open])) .content{display:none}:host([floating]) .content{position:absolute;top:100%;left:0;width:375px;min-width:100%;max-width:100vw;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2);box-shadow:var(--shadow-2)}:host(:not([floating])) .content{width:100%}.header{display:flex;align-items:center;padding:var(--space-unit) 0 calc(var(--space-unit) * 2)}.header ::slotted(img[slot=\"header\"]){width:calc(var(--space-unit) * 11.25);height:auto;object-fit:contain}.header ::slotted([slot=\"header\"]:not(:first-child)){margin:auto 0;margin-left:calc(var(--space-unit) * 2.5);font-size:var(--font-size-3);font-weight:var(--font-sb);line-height:1.5}.items{display:flex;flex-direction:column;align-items:flex-start;background:inherit}.items>::slotted([slot=\"item\"]){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.25;outline:none}.items>::slotted([slot=\"item\"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}.items>::slotted([slot=\"item\"]:not(z-menu-section)){padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);border-bottom:var(--border-size-small) solid var(--color-surface05)}.items>::slotted([slot=\"item\"]:hover),.items>::slotted([slot=\"item\"]:focus:focus-visible),.items>::slotted([slot=\"item\"]:active){border-color:var(--color-secondary01);font-weight:var(--font-bd)}";
const ZMenuStyle0 = stylesCss;

const ZMenu$1 = /*@__PURE__*/ proxyCustomElement(class ZMenu extends HTMLElement {
    toggle() {
        if (!this.hasContent) {
            return;
        }
        this.open = !this.open;
        this.open ? this.opened.emit() : this.closed.emit();
    }
    /** Close the floating list when a click is performed outside of this Element. */
    handleClick(ev) {
        if (!this.floating || !this.open || this.hostElement.contains(ev.target)) {
            return;
        }
        this.reflow();
        this.open = false;
        this.closed.emit();
    }
    canvasOpenStatusChanged(e) {
        this.currentCanvasOpenStatus = e.detail;
    }
    handleKeyDown(e) {
        if (e.code === KeyboardCode.ENTER) {
            return;
        }
        if (this.open && !this.currentCanvasOpenStatus) {
            this.handleNavigationSideArrow(e);
        }
        this.handleArrowsNav(e);
    }
    handleNavigationSideArrow(e) {
        if (e.code !== KeyboardCode.ARROW_RIGHT && e.code !== KeyboardCode.ARROW_LEFT) {
            return;
        }
        if (e.code === KeyboardCode.ARROW_RIGHT) {
            const nextElement = this.hostElement.nextElementSibling;
            if (!nextElement) {
                const firstMenuItem = this.firstElMenu.shadowRoot.querySelector(".menu-label");
                firstMenuItem.focus();
                this.open = false;
            }
            if (nextElement && nextElement.tagName === "Z-MENU") {
                const menuButton = nextElement.shadowRoot.querySelector(".menu-label");
                menuButton.focus();
                if (nextElement.children.length > 1) {
                    nextElement.setAttribute("open", "true");
                }
                this.open = false;
            }
        }
        else if (e.code === KeyboardCode.ARROW_LEFT) {
            const prevElement = this.hostElement.previousElementSibling;
            if (prevElement.tagName !== "Z-MENU") {
                const lastElMenuItem = this.lastElMenu.shadowRoot.querySelector(".menu-label");
                lastElMenuItem.focus();
                this.open = false;
            }
            if (prevElement && prevElement.tagName === "Z-MENU") {
                const menuButton = prevElement.shadowRoot.querySelector(".menu-label");
                menuButton.focus();
                if (prevElement.children.length > 1) {
                    prevElement.setAttribute("open", "true");
                }
                this.open = false;
            }
        }
    }
    handleArrowsNav(e) {
        const menuItems = Array.from(this.hostElement.querySelectorAll("[slot='item']"));
        const newMenuItems = menuItems.map((el) => {
            if (el.tagName === "Z-MENU-SECTION") {
                return el.shadowRoot.querySelector("button");
            }
            return el;
        });
        if (this.open) {
            e.preventDefault();
            e.stopPropagation();
            if (e.code === KeyboardCode.ARROW_DOWN || e.code === KeyboardCode.ARROW_UP) {
                let nextFocusableItem;
                // INFO: reset focus on all menu items
                newMenuItems.forEach((item) => item.setAttribute("tabindex", "-1"));
                if (e.code === KeyboardCode.ARROW_DOWN) {
                    nextFocusableItem = this.getNextItem(newMenuItems, 1);
                }
                else if (e.code === KeyboardCode.ARROW_UP) {
                    nextFocusableItem = this.getNextItem(newMenuItems, -1);
                }
                if (nextFocusableItem) {
                    nextFocusableItem.setAttribute("tabindex", "0");
                    nextFocusableItem.focus();
                }
            }
            else if (e.code === KeyboardCode.ESC) {
                this.focusToParentAndCloseMenu();
            }
            else if (e.shiftKey && e.code === KeyboardCode.TAB) {
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
        const menuButton = this.hostElement.shadowRoot.querySelector(".menu-label");
        menuButton.focus();
        this.currentIndex = -1;
        this.open = false;
    }
    onOpenChanged() {
        if (this.open) {
            this.reflow(true);
        }
        else {
            cancelAnimationFrame(this.raf);
        }
    }
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.opened = createEvent(this, "opened", 7);
        this.closed = createEvent(this, "closed", 7);
        this.currentIndex = -1;
        this.currentCanvasOpenStatus = false;
        this.active = undefined;
        this.floating = true;
        this.open = false;
        this.verticalContext = false;
        this.hasHeader = undefined;
        this.hasContent = undefined;
        this.toggle = this.toggle.bind(this);
        this.checkContent = this.checkContent.bind(this);
        this.onLabelSlotChange = this.onLabelSlotChange.bind(this);
        this.onItemsChange = this.onItemsChange.bind(this);
    }
    componentWillLoad() {
        const menuItems = Array.from(this.hostElement.parentElement.querySelectorAll('[slot="menu"]'));
        this.firstElMenu = menuItems[0];
        this.lastElMenu = menuItems[menuItems.length - 1];
        this.checkContent();
    }
    /**
     * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
     * @param ev Slotchange event
     */
    onLabelSlotChange(ev) {
        const labelElement = ev.target.assignedElements()[0];
        labelElement.dataset.text = labelElement === null || labelElement === void 0 ? void 0 : labelElement.textContent;
    }
    /**
     * Correctly set position of the floating menu in order to prevent overflow.
     * @param live Should run the method on every refresh frame.
     */
    reflow(live = false) {
        if (this.content) {
            const { style } = this.content;
            const { left } = this.hostElement.getBoundingClientRect();
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
        this.hasHeader = !!this.hostElement.querySelectorAll("[slot=header]").length;
        this.hasContent = !!this.hostElement.querySelectorAll("[slot=item]").length || this.hasHeader;
    }
    /**
     * Set `menuitem` role to all menu items.
     * Set the item's inner text to the `data-text` attribute (this is for using bold text avoiding layout shifts).
     */
    onItemsChange() {
        this.checkContent();
        const items = this.hostElement.querySelectorAll("[slot=item]");
        items.forEach((item) => {
            item.setAttribute("role", "menuitem");
            item.setAttribute("tabindex", "-1");
            item.dataset.text = item.textContent;
        });
    }
    focusFirstItemOnKeyUp() {
        const firstElement = this.hostElement.querySelectorAll("[slot='item']")[0];
        if (firstElement) {
            firstElement.focus();
            this.currentIndex = 0;
        }
    }
    renderMenuLabel() {
        if (this.hasContent) {
            return (h("div", { class: "menu-wrapper" }, h("button", { class: "menu-label", "aria-expanded": this.open ? "true" : "false", "aria-label": this.open ? "Chiudi menù" : "Apri menù", onClick: this.toggle, onKeyUp: this.focusFirstItemOnKeyUp.bind(this) }, h("div", { class: "menu-label-content" }, h("slot", { onSlotchange: this.onLabelSlotChange }), h("z-icon", { name: this.open ? "chevron-up" : "chevron-down" })))));
        }
        return (h("div", { class: "menu-wrapper" }, h("div", { class: "menu-label" }, h("div", { class: "menu-label-content" }, h("slot", { onSlotchange: this.onLabelSlotChange })))));
    }
    render() {
        return (h(Host, { key: 'e2ab0535d927c4ef1dbaf75746a1e7ee1a87858a' }, this.renderMenuLabel(), this.hasContent && (h("div", { key: '3f0a5da5e77bd229ff0ee232afbbf0273d4245cf', class: "content", ref: (el) => (this.content = el) }, this.hasHeader && (h("header", { key: '4264de0204704ad5f16cb1b0617532220ab121fb', class: "header" }, h("slot", { key: '6b88411ff1c87fa1d12f2e6dedcec19605921df9', name: "header", onSlotchange: this.checkContent }))), h("div", { key: '4fab11ecc9b79b5b95d3238da7f25b05b6e36ec9', class: "items", role: "menu" }, h("slot", { key: '42d1e2006d0588e337a5cb9df4688081e128c9f9', name: "item", onSlotchange: this.onItemsChange }))))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "open": ["onOpenChanged"]
    }; }
    static get style() { return ZMenuStyle0; }
}, [1, "z-menu", {
        "active": [516],
        "floating": [516],
        "open": [1540],
        "verticalContext": [516, "vertical-context"],
        "hasHeader": [32],
        "hasContent": [32]
    }, [[4, "click", "handleClick"], [4, "canvasOpenStatusChanged", "canvasOpenStatusChanged"], [0, "keydown", "handleKeyDown"]], {
        "open": ["onOpenChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-menu", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMenu$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZMenu = ZMenu$1;
const defineCustomElement = defineCustomElement$1;

export { ZMenu, defineCustomElement };

//# sourceMappingURL=z-menu.js.map