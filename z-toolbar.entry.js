import { r as registerInstance, h, H as Host, d as getElement } from './index-SFwvdS4t.js';
import { g as KeyboardCode } from './index-DdetsoIY.js';

const stylesCss = () => `:host,*{box-sizing:border-box}:host{display:flex;width:fit-content;align-items:center;padding:0;border:var(--border-size-small) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:calc(var(--border-radius) + var(--border-size-small));box-shadow:var(--shadow-4);gap:calc(var(--space-unit) / 2)}::slotted(z-divider){height:calc(var(--space-unit) * 4.5) !important}@media (max-width: 767px){:host{--z-toolbar-columns:6;position:relative;display:grid;max-width:100%;background:repeating-linear-gradient(         to bottom,         transparent 0,         transparent calc(var(--space-unit) * 5.5),         var(--color-surface03) calc(var(--space-unit) * 5.5),         var(--color-surface03) calc(var(--space-unit) * 5.5 + 1px)       )       center / calc(100% - var(--space-unit)) 100% no-repeat var(--color-surface01);gap:var(--border-size-small) calc(var(--space-unit) / 2);grid-template-columns:repeat(var(--z-toolbar-columns, auto-fill), minmax(44px, auto))}::slotted(z-divider){display:none !important}}`;

const ZToolbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Index of the currently focusable item (roving tabindex). */
        this.currentFocusIndex = 0;
        /** List of focusable tool elements. */
        this.toolItems = [];
    }
    componentDidLoad() {
        this.collectToolItems();
        this.updateTabIndexes();
        // set css variable `--z-toolbar-columns` based on the number of tools in the toolbar, so that the background pattern can adapt to the number of rows
        let mobileColumnCount = parseInt(getComputedStyle(this.hostElement).getPropertyValue("--z-toolbar-columns") || "6");
        mobileColumnCount = this.toolItems.length <= mobileColumnCount ? this.toolItems.length : mobileColumnCount;
        this.hostElement.style.setProperty("--z-toolbar-columns", mobileColumnCount.toString());
    }
    /** Collect first level children `z-tool` elements in the toolbar (not nested ones). */
    collectToolItems() {
        this.toolItems = Array.from(this.hostElement.querySelectorAll("z-tool:not(:scope z-tool z-tool)"));
    }
    /**
     * Update the `tabindex` of all children tools based on the current focus index,
     * so that only the currently focusable tool is in the tab order (tabindex="0") and all others are not focusable via keyboard (tabindex="-1").
     */
    updateTabIndexes() {
        this.toolItems.forEach((tool, index) => {
            tool.setTabIndex(index === this.currentFocusIndex ? 0 : -1);
        });
    }
    focusToolAt(index, fallback = "next") {
        const tool = this.toolItems[index];
        if (!tool) {
            return;
        }
        this.currentFocusIndex = index;
        if (!tool.disabled) {
            tool.setFocus();
            this.updateTabIndexes();
            return;
        }
        if (fallback === "next") {
            this.focusNextTool();
        }
        else {
            this.focusPreviousTool();
        }
    }
    focusNextTool() {
        const nextIndex = (this.currentFocusIndex + 1) % this.toolItems.length;
        this.focusToolAt(nextIndex);
    }
    focusPreviousTool() {
        const prevIndex = (this.currentFocusIndex - 1 + this.toolItems.length) % this.toolItems.length;
        this.focusToolAt(prevIndex, "previous");
    }
    /**
     * Listen for custom "toggleSubmenu" events from child tools and close sibling submenus when one is opened,
     * to prevent multiple submenus from being open at the same time.
     */
    closeSiblingSubmenusOnOpen(event) {
        if (event.detail !== true) {
            return;
        }
        const targetTool = event.target.closest("z-tool");
        if (!targetTool || !this.toolItems.includes(targetTool)) {
            return;
        }
        this.toolItems.forEach((tool) => {
            if (tool !== targetTool && tool.open) {
                tool.open = false;
            }
        });
    }
    /**
     * Listen for custom "toggleTooltip" events from child tools and close sibling tooltips when one is opened,
     * to prevent multiple tooltips from being open at the same time.
     */
    closeSiblingTooltipsOnOpen(event) {
        if (event.detail !== true) {
            return;
        }
        const targetTool = event.target;
        if (!this.toolItems.includes(targetTool)) {
            return;
        }
        this.toolItems.forEach((tool) => {
            if (tool !== targetTool) {
                tool.closeTooltip();
            }
        });
    }
    handleKeyDown(event) {
        const target = event.target;
        const toolElement = target.closest("z-tool");
        if (!toolElement || !this.toolItems.includes(toolElement)) {
            return;
        }
        const focusedIndex = this.toolItems.indexOf(toolElement);
        if (focusedIndex !== -1) {
            this.currentFocusIndex = focusedIndex;
        }
        switch (event.key) {
            case KeyboardCode.ARROW_RIGHT:
                event.preventDefault();
                this.focusNextTool();
                break;
            case KeyboardCode.ARROW_LEFT:
                event.preventDefault();
                this.focusPreviousTool();
                break;
        }
    }
    /**
     * When focus enters the toolbar, update the current focus index to match the focused tool,
     * so that roving tabindex is in sync with actual focus.
     */
    handleFocusIn(event) {
        const target = event.target;
        const toolElement = target.closest("z-tool");
        const index = this.toolItems.indexOf(toolElement);
        if (index !== -1 && index !== this.currentFocusIndex) {
            this.currentFocusIndex = index;
            this.updateTabIndexes();
        }
    }
    render() {
        return (h(Host, { key: '4707441ebdff23322f9290c40106b59e06d2fd04', role: "toolbar", "aria-label": this.htmlAriaLabel }, h("slot", { key: '7ff3c1fa0c854de1690103522adcf02f6716a5d2', onSlotchange: () => {
                this.collectToolItems();
                this.updateTabIndexes();
            } })));
    }
    get hostElement() { return getElement(this); }
};
ZToolbar.style = stylesCss();

export { ZToolbar as z_toolbar };
