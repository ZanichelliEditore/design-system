'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-e8ce94a1.js');

const stylesCss = ":host{--z-tooltip-theme--surface:var(--color-surface01);--z-tooltip-theme--text:var(--color-text01);--z-tooltip-shadow-filter:drop-shadow(0 1px 2px var(--shadow-color-base))}:host([dark]) z-popover{--z-popover-theme--surface:var(--color-surface05);--z-popover-theme--text:var(--color-text-inverse)}z-popover{--z-popover-padding:var(--space-unit);--z-popover-theme--surface:var(--z-tooltip-theme--surface);--z-popover-theme--text:var(--z-tooltip-theme--text);--z-popover-shadow-filter:var(--z-tooltip-shadow-filter)}";

const ZTooltip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Tooltip position. */
    this.position = index$1.PopoverPosition.AUTO;
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
    return (index.h("z-popover", { ref: (el) => (this.popoverEl = el), bindTo: this.bindTo, open: this.open, position: this.position, closable: this.closable, center: true, showArrow: true }, index.h("slot", null)));
  }
};
ZTooltip.style = stylesCss;

exports.z_tooltip = ZTooltip;