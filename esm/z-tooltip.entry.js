import { r as registerInstance, h } from './index-a2ca4b97.js';
import { P as PopoverPosition } from './index-968a240f.js';

const stylesCss = ":host{--z-tooltip-theme--surface:var(--color-surface01);--z-tooltip-theme--text:var(--color-text01);--z-tooltip-shadow-filter:drop-shadow(0 1px 2px var(--shadow-color-base))}:host([dark]) z-popover{--z-popover-theme--surface:var(--color-surface05)}z-popover{--z-popover-padding:var(--space-unit);--z-popover-theme--surface:var(--z-tooltip-theme--surface);--z-popover-theme--text:var(--z-tooltip-theme--text);--z-popover-shadow-filter:var(--z-tooltip-shadow-filter)}";

const ZTooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Tooltip position. */
    this.position = PopoverPosition.AUTO;
    /** Enable tooltip dark mode. */
    this.dark = false;
    /**
     * The open state of the tooltip.
     */
    this.open = false;
  }
  onPopoverOpenChange() {
    this.open = this.popover.open;
  }
  render() {
    return (h("z-popover", { ref: (el) => (this.popover = el), bindTo: this.bindTo, open: this.open, position: this.position, center: true, showArrow: true }, h("slot", null)));
  }
};
ZTooltip.style = stylesCss;

export { ZTooltip as z_tooltip };
