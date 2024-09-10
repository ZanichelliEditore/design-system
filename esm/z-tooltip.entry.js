import { r as registerInstance, h } from './index-a2130b6a.js';
import { P as PopoverPosition } from './index-b7dbacb4.js';

const stylesCss = ":host{--z-tooltip-theme--surface:var(--color-surface01);--z-tooltip-theme--text:var(--color-default-text);--z-tooltip-shadow-filter:drop-shadow(0 1px 2px var(--shadow-color-base))}:host([dark]) z-popover{--z-popover-theme--surface:var(--color-surface05);--z-popover-theme--text:var(--color-text-inverse)}z-popover{--z-popover-padding:var(--space-unit);--z-popover-theme--surface:var(--z-tooltip-theme--surface);--z-popover-theme--text:var(--z-tooltip-theme--text);--z-popover-shadow-filter:var(--z-tooltip-shadow-filter)}";
const ZTooltipStyle0 = stylesCss;

const ZTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.position = PopoverPosition.AUTO;
        this.dark = false;
        this.open = false;
        this.bindTo = undefined;
        this.closable = true;
    }
    onPopoverOpenChange() {
        this.open = this.popoverEl.open;
    }
    render() {
        return (h("z-popover", { key: '2df25a3fa481ccc045d4a49f464c06d9d9c3e555', ref: (el) => (this.popoverEl = el), bindTo: this.bindTo, open: this.open, position: this.position, closable: this.closable, center: true, showArrow: true }, h("slot", { key: '136991637393809eba3d6c6fad0f44209b8c8960' })));
    }
};
ZTooltip.style = ZTooltipStyle0;

export { ZTooltip as z_tooltip };

//# sourceMappingURL=z-tooltip.entry.js.map