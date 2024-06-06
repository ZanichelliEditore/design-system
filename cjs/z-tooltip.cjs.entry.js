'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = ":host{--z-tooltip-theme--surface:var(--color-surface01);--z-tooltip-theme--text:var(--color-default-text);--z-tooltip-shadow-filter:drop-shadow(0 1px 2px var(--shadow-color-base))}:host([dark]) z-popover{--z-popover-theme--surface:var(--color-surface05);--z-popover-theme--text:var(--color-text-inverse)}z-popover{--z-popover-padding:var(--space-unit);--z-popover-theme--surface:var(--z-tooltip-theme--surface);--z-popover-theme--text:var(--z-tooltip-theme--text);--z-popover-shadow-filter:var(--z-tooltip-shadow-filter)}";
const ZTooltipStyle0 = stylesCss;

const ZTooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.position = index$1.PopoverPosition.AUTO;
        this.dark = false;
        this.open = false;
        this.bindTo = undefined;
        this.closable = true;
    }
    onPopoverOpenChange() {
        this.open = this.popoverEl.open;
    }
    render() {
        return (index.h("z-popover", { key: '9f666fd17b7051e4ab7a766c46887c7e41579052', ref: (el) => (this.popoverEl = el), bindTo: this.bindTo, open: this.open, position: this.position, closable: this.closable, center: true, showArrow: true }, index.h("slot", { key: 'e50d24a8bebabcc40645baf2afd6cafb396b520a' })));
    }
};
ZTooltip.style = ZTooltipStyle0;

exports.z_tooltip = ZTooltip;

//# sourceMappingURL=z-tooltip.cjs.entry.js.map