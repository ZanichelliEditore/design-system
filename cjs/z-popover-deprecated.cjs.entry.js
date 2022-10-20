'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-199cd650.js');
const utils = require('./utils-ce225fb3.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ".sc-z-popover-deprecated-h{position:relative;display:inline-block;font-family:var(--dashboard-font);font-weight:var(--font-rg);--shadow-arrow-color:rgb(66 69 72 / 20%);--shadow-arrow-below-color:rgb(66 69 72 / 10%)}.popover-content-container.sc-z-popover-deprecated{position:absolute;z-index:999;min-width:64px;min-height:32px;box-sizing:border-box;visibility:hidden}.popover-content-container.visible.sc-z-popover-deprecated{visibility:visible}.popover-content-container.border-radius-none.sc-z-popover-deprecated{border-radius:0}.popover-content-container.border-radius-small.sc-z-popover-deprecated{border-radius:var(--border-radius-small)}.popover-content-container.border-radius-medium.sc-z-popover-deprecated{border-radius:var(--border-radius)}.popover-content-container.shadow-1.sc-z-popover-deprecated{box-shadow:var(--shadow-1)}.popover-content-container.shadow-2.sc-z-popover-deprecated{box-shadow:var(--shadow-2)}.popover-content-container.shadow-3.sc-z-popover-deprecated{box-shadow:var(--shadow-3)}.popover-content-container.shadow-4.sc-z-popover-deprecated{box-shadow:var(--shadow-4)}.popover-content-container.shadow-6.sc-z-popover-deprecated{box-shadow:var(--shadow-6)}.popover-content-container.shadow-8.sc-z-popover-deprecated{box-shadow:var(--shadow-8)}.popover-content-container.shadow-12.sc-z-popover-deprecated{box-shadow:var(--shadow-12)}.popover-content-container.shadow-16.sc-z-popover-deprecated{box-shadow:var(--shadow-16)}.popover-content-container.shadow-24.sc-z-popover-deprecated{box-shadow:var(--shadow-24)}.popover-content-container.after-down.sc-z-popover-deprecated{top:0;left:calc(100% + var(--space-unit))}.popover-content-container.after-center.sc-z-popover-deprecated{top:50%;left:calc(100% + var(--space-unit));transform:translateY(-50%)}.popover-content-container.after-up.sc-z-popover-deprecated{bottom:0;left:calc(100% + var(--space-unit))}.popover-content-container.below-right.sc-z-popover-deprecated{top:calc(100% + var(--space-unit));left:0}.popover-content-container.below-center.sc-z-popover-deprecated{top:calc(100% + var(--space-unit));left:50%;transform:translateX(-50%)}.popover-content-container.below-left.sc-z-popover-deprecated{top:calc(100% + var(--space-unit));right:0}.popover-content-container.before-down.sc-z-popover-deprecated{top:0;right:calc(100% + var(--space-unit))}.popover-content-container.before-center.sc-z-popover-deprecated{top:50%;right:calc(100% + var(--space-unit));transform:translateY(-50%)}.popover-content-container.before-up.sc-z-popover-deprecated{right:calc(100% + var(--space-unit));bottom:0}.popover-content-container.above-right.sc-z-popover-deprecated{bottom:calc(100% + var(--space-unit));left:0}.popover-content-container.above-center.sc-z-popover-deprecated{bottom:calc(100% + var(--space-unit));left:50%;transform:translateX(-50%)}.popover-content-container.above-left.sc-z-popover-deprecated{right:0;bottom:calc(100% + var(--space-unit))}.popover-content-container.sc-z-popover-deprecated::before{position:absolute;z-index:-1;display:none;width:8px;height:8px;background-color:inherit;content:\"\";transform:rotate(45deg)}.popover-content-container.after-down.sc-z-popover-deprecated::before{top:12px;left:-4px;box-shadow:-1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.after-center.sc-z-popover-deprecated::before{top:calc(50% - 4px);left:-4px;box-shadow:-1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.after-up.sc-z-popover-deprecated::before{bottom:12px;left:-4px;box-shadow:-1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.below-right.sc-z-popover-deprecated::before{top:-4px;left:12px;box-shadow:-1px -1px 2px var(--shadow-arrow-below-color)}.popover-content-container.below-center.sc-z-popover-deprecated::before{top:-4px;left:calc(50% - 4px);box-shadow:-1px -1px 2px var(--shadow-arrow-below-color)}.popover-content-container.below-left.sc-z-popover-deprecated::before{top:-4px;right:12px;box-shadow:-1px -1px 2px var(--shadow-arrow-below-color)}.popover-content-container.before-down.sc-z-popover-deprecated::before{top:12px;right:-4px;box-shadow:1px -1px 1.5px var(--shadow-arrow-color)}.popover-content-container.before-center.sc-z-popover-deprecated::before{top:calc(50% - 4px);right:-4px;box-shadow:1px -1px 1.5px var(--shadow-arrow-color)}.popover-content-container.before-up.sc-z-popover-deprecated::before{right:-4px;bottom:12px;box-shadow:1px -1px 1.5px var(--shadow-arrow-color)}.popover-content-container.above-right.sc-z-popover-deprecated::before{bottom:-4px;left:12px;box-shadow:1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.above-center.sc-z-popover-deprecated::before{bottom:-4px;left:calc(50% - 4px);box-shadow:1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.above-left.sc-z-popover-deprecated::before{right:12px;bottom:-4px;box-shadow:1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.show-arrow.sc-z-popover-deprecated::before{display:block}";

const ZPopoverDeprecated = class {
  /**
   * Constructor.
   */
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.triggerClick = index.createEvent(this, "triggerClick", 7);
    /** [optional] Popover position */
    this.position = index$1.PopoverPosition.AFTER_UP;
    /** [optional] Background color token for popover */
    this.backgroundColor = "color-white";
    /** [optional] Border radius token for popover */
    this.borderRadius = index$1.PopoverBorderRadius.SMALL;
    /** [optional] Box shadow token for popover */
    this.boxShadow = index$1.PopoverShadow.SHADOW_1;
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
      if (this.position.startsWith("above") || this.position.startsWith("below")) {
        secondSide = "left";
      }
      else {
        firstSide = "before";
      }
    }
    // If left is outside viewport
    if (l < 0) {
      if (this.position.startsWith("above") || this.position.startsWith("below")) {
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
    if (e.key === index$1.KeyboardCode.ESC) {
      this.closePopover();
    }
  }
  handleClick(event) {
    this.isVisible ? this.closePopover() : this.openPopover();
    this.emitTriggerClick();
    event.stopPropagation();
  }
  handleKeyDown(event) {
    if (event.code === index$1.KeyboardCode.ENTER) {
      this.isVisible ? this.closePopover() : this.openPopover();
    }
  }
  handleOutsideClick(e) {
    const tree = utils.getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover-deprecated");
    if (!parent) {
      this.closePopover();
    }
  }
  render() {
    return (index.h(index.Host, { onKeyDown: this.handleKeyDown }, index.h("div", { tabindex: "0", onClick: (event) => this.handleClick(event), onKeyDown: (event) => {
        if (event.key === index$1.KeyboardCode.ENTER) {
          this.handleClick(event);
        }
      } }, index.h("slot", { name: "trigger" })), index.h("div", { ref: (e) => (this.popoverElem = e), class: {
        "popover-content-container": true,
        [this.popoverPosition]: true,
        [`border-radius-${this.borderRadius}`]: true,
        [this.boxShadow]: true,
        "show-arrow": this.showArrow,
        "visible": this.isVisible,
      }, style: {
        backgroundColor: `var(--${this.backgroundColor})`,
        padding: this.padding,
      } }, index.h("slot", { name: "popover" }))));
  }
};
ZPopoverDeprecated.style = stylesCss;

exports.z_popover_deprecated = ZPopoverDeprecated;
