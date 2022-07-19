'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$2 = require('./index-1fda0714.js');
const index$1 = require('./index-6b6a3299.js');
const utils = require('./utils-8cc414c9.js');
require('./_commonjsHelpers-537d719a.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ".sc-z-popover-h{font-family:var(--dashboard-font);font-weight:var(--font-rg);position:relative;display:inline-block;--shadow-arrow-color:rgba(66, 69, 72, 0.2);--shadow-arrow-below-color:rgba(66, 69, 72, 0.1)}.popover-content-container.sc-z-popover{box-sizing:border-box;visibility:hidden;position:absolute;min-width:64px;min-height:32px;z-index:999}.popover-content-container.visible.sc-z-popover{visibility:visible}.popover-content-container.border-radius-none.sc-z-popover{border-radius:0}.popover-content-container.border-radius-small.sc-z-popover{border-radius:var(--border-radius-small)}.popover-content-container.border-radius-medium.sc-z-popover{border-radius:var(--border-radius)}.popover-content-container.shadow-1.sc-z-popover{box-shadow:var(--shadow-1)}.popover-content-container.shadow-2.sc-z-popover{box-shadow:var(--shadow-2)}.popover-content-container.shadow-3.sc-z-popover{box-shadow:var(--shadow-3)}.popover-content-container.shadow-4.sc-z-popover{box-shadow:var(--shadow-4)}.popover-content-container.shadow-6.sc-z-popover{box-shadow:var(--shadow-6)}.popover-content-container.shadow-8.sc-z-popover{box-shadow:var(--shadow-8)}.popover-content-container.shadow-12.sc-z-popover{box-shadow:var(--shadow-12)}.popover-content-container.shadow-16.sc-z-popover{box-shadow:var(--shadow-16)}.popover-content-container.shadow-24.sc-z-popover{box-shadow:var(--shadow-24)}.popover-content-container.after-down.sc-z-popover{top:0;left:calc(100% + var(--space-unit))}.popover-content-container.after-center.sc-z-popover{top:50%;left:calc(100% + var(--space-unit));transform:translateY(-50%)}.popover-content-container.after-up.sc-z-popover{bottom:0;left:calc(100% + var(--space-unit))}.popover-content-container.below-right.sc-z-popover{left:0;top:calc(100% + var(--space-unit))}.popover-content-container.below-center.sc-z-popover{left:50%;top:calc(100% + var(--space-unit));transform:translateX(-50%)}.popover-content-container.below-left.sc-z-popover{right:0;top:calc(100% + var(--space-unit))}.popover-content-container.before-down.sc-z-popover{top:0;right:calc(100% + var(--space-unit))}.popover-content-container.before-center.sc-z-popover{top:50%;right:calc(100% + var(--space-unit));transform:translateY(-50%)}.popover-content-container.before-up.sc-z-popover{bottom:0;right:calc(100% + var(--space-unit))}.popover-content-container.above-right.sc-z-popover{left:0;bottom:calc(100% + var(--space-unit))}.popover-content-container.above-center.sc-z-popover{left:50%;bottom:calc(100% + var(--space-unit));transform:translateX(-50%)}.popover-content-container.above-left.sc-z-popover{right:0;bottom:calc(100% + var(--space-unit))}.popover-content-container.sc-z-popover:before{display:none;position:absolute;content:\"\";width:8px;height:8px;z-index:-1;background-color:inherit;transform:rotate(45deg)}.popover-content-container.after-down.sc-z-popover:before{top:12px;left:-4px;box-shadow:-1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.after-center.sc-z-popover:before{top:calc(50% - 4px);left:-4px;box-shadow:-1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.after-up.sc-z-popover:before{bottom:12px;left:-4px;box-shadow:-1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.below-right.sc-z-popover:before{left:12px;top:-4px;box-shadow:-1px -1px 2px var(--shadow-arrow-below-color)}.popover-content-container.below-center.sc-z-popover:before{left:calc(50% - 4px);top:-4px;box-shadow:-1px -1px 2px var(--shadow-arrow-below-color)}.popover-content-container.below-left.sc-z-popover:before{right:12px;top:-4px;box-shadow:-1px -1px 2px var(--shadow-arrow-below-color)}.popover-content-container.before-down.sc-z-popover:before{top:12px;right:-4px;box-shadow:1px -1px 1.5px var(--shadow-arrow-color)}.popover-content-container.before-center.sc-z-popover:before{top:calc(50% - 4px);right:-4px;box-shadow:1px -1px 1.5px var(--shadow-arrow-color)}.popover-content-container.before-up.sc-z-popover:before{bottom:12px;right:-4px;box-shadow:1px -1px 1.5px var(--shadow-arrow-color)}.popover-content-container.above-right.sc-z-popover:before{left:12px;bottom:-4px;box-shadow:1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.above-center.sc-z-popover:before{left:calc(50% - 4px);bottom:-4px;box-shadow:1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.above-left.sc-z-popover:before{right:12px;bottom:-4px;box-shadow:1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.show-arrow.sc-z-popover:before{display:block}";

const ZPopover = class {
  /**
   * Constructor.
   */
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.triggerClick = index.createEvent(this, "triggerClick", 7);
    /** [optional] Popover position */
    this.position = index$1.PopoverPosition["after-up"];
    /** [optional] Background color token for popover */
    this.backgroundColor = "color-white";
    /** [optional] Border radius token for popover */
    this.borderRadius = index$1.PopoverBorderRadius.small;
    /** [optional] Box shadow token for popover */
    this.boxShadow = index$1.PopoverShadow["shadow-1"];
    /** [optional] Show or hide arrow */
    this.showArrow = false;
    /** [optional] Sets padding for Popover container */
    this.padding = "8px";
    this.isVisible = false;
    this.popoverPosition = this.position;
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  emitTriggerClick() {
    this.triggerClick.emit({
      isVisible: this.isVisible,
    });
  }
  openPopover() {
    const width = document.body.clientWidth;
    const height = window.innerHeight;
    const rect = this.popoverElem.getBoundingClientRect();
    const l = rect.left;
    const r = rect.right;
    const t = rect.top;
    const b = rect.bottom;
    let firstSide = this.position.split("-")[0];
    let secondSide = this.position.split("-")[1];
    // If top is outside viewport
    if (t < 0) {
      if (this.position.startsWith("above")) {
        firstSide = "below";
      }
      else {
        secondSide = "down";
      }
    }
    // If bottom is outside viewport
    if (b > height) {
      if (this.position.startsWith("below")) {
        firstSide = "above";
      }
      else {
        secondSide = "up";
      }
    }
    // If right is outside viewport
    if (r > width) {
      if (this.position.startsWith("above") ||
        this.position.startsWith("below")) {
        secondSide = "left";
      }
      else {
        firstSide = "before";
      }
    }
    // If left is outside viewport
    if (l < 0) {
      if (this.position.startsWith("above") ||
        this.position.startsWith("below")) {
        secondSide = "right";
      }
      else {
        firstSide = "after";
      }
    }
    this.popoverPosition = index$1.PopoverPosition[`${firstSide}-${secondSide}`];
    this.isVisible = true;
  }
  closePopover() {
    this.popoverPosition = this.position;
    this.isVisible = false;
  }
  closePopoverWithKeyboard(e) {
    if (e.key === index$1.KeyboardKeys.ESC) {
      this.closePopover();
    }
  }
  handleClick(event) {
    this.isVisible ? this.closePopover() : this.openPopover();
    this.emitTriggerClick();
    event.stopPropagation();
  }
  handleKeyDown(event) {
    if (event.code === index$1.KeyboardKeys.ENTER) {
      this.isVisible ? this.closePopover() : this.openPopover();
    }
  }
  handleOutsideClick(e) {
    const tree = utils.getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover");
    if (!parent) {
      this.closePopover();
    }
  }
  render() {
    return (index.h(index.Host, { onKeyDown: this.handleKeyDown }, index.h("div", { tabindex: "0", onClick: (event) => this.handleClick(event), onKeyDown: (event) => {
        if (event.key === index$1.KeyboardKeys.ENTER) {
          this.handleClick(event);
        }
      } }, index.h("slot", { name: "trigger" })), index.h("div", { ref: (e) => (this.popoverElem = e), class: index$2.classnames("popover-content-container", this.popoverPosition, `border-radius-${this.borderRadius}`, this.boxShadow, { "show-arrow": this.showArrow }, { visible: this.isVisible }), style: {
        backgroundColor: `var(--${this.backgroundColor})`,
        padding: this.padding,
      } }, index.h("slot", { name: "popover" }))));
  }
};
ZPopover.style = stylesCss;

exports.z_popover = ZPopover;
