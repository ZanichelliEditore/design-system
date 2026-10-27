import { r as registerInstance, c as createEvent, h } from './index-SFwvdS4t.js';
import { P as PopoverPosition } from './index-DdetsoIY.js';

const stylesCss = () => `:host{--z-tooltip-theme--surface:var(--color-surface01);--z-tooltip-theme--text:var(--color-default-text);--z-tooltip-shadow-filter:drop-shadow(0 1px 2px var(--shadow-color-base));--z-tooltip-padding:var(--space-unit)}z-popover{--z-popover-theme--surface:var(--z-tooltip-theme--surface);--z-popover-theme--text:var(--z-tooltip-theme--text);--z-popover-padding:var(--z-tooltip-padding);--z-popover-shadow-filter:var(--z-tooltip-shadow-filter)}:host([dark]) z-popover{--z-popover-theme--surface:var(--color-surface05);--z-popover-theme--text:var(--color-text-inverse)}`;

const ZTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openChange = createEvent(this, "openChange", 7);
        /** Tooltip position. */
        this.position = PopoverPosition.AUTO;
        /** Enable tooltip dark mode. */
        this.dark = false;
        /**
         * The open state of the tooltip.
         */
        this.open = false;
        /**
         * Reflects `closable` prop of the popover.
         * "If true, the popover can be closed by clicking outside of it or pressing the escape key.
         * Otherwise, it will be closed only programmatically (by setting `open` to `false`)."
         */
        this.closable = true;
    }
    onPopoverOpenChange() {
        this.open = this.popoverEl.open;
    }
    render() {
        return (h("z-popover", { key: 'd3f19e99267f91b94244f9b788ce3856f273a40e', ref: (el) => (this.popoverEl = el), bindTo: this.bindTo, open: this.open, position: this.position, closable: this.closable, center: true, showArrow: true, onOpenChange: (event) => this.openChange.emit(event.detail) }, h("slot", { key: 'fc2bf22da928d1cae04552f776a31d8edb32b966' })));
    }
};
ZTooltip.style = stylesCss();

export { ZTooltip as z_tooltip };
