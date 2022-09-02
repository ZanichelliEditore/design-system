import { r as registerInstance, c as createEvent, h } from './index-90e18641.js';
import { P as PopoverPositions } from './index-0944317b.js';

const stylesCss = ":host{position:relative;display:flex;justify-content:center;align-items:center;font-family:var(--font-family-sans);font-weight:var(--font-rg)}button{width:100%;height:100%;border:none;background:transparent;cursor:pointer;padding:0}z-popover{overflow:hidden}.popover-content-container{position:relative;min-width:112px;max-width:280px;white-space:nowrap;background-color:var(--color-surface02);box-shadow:var(--shadow-2)}.element-container:hover{color:var(--color-hover-primary);fill:var(--color-hover-primary)}.element-text{overflow:hidden;text-overflow:ellipsis;font-size:14px}.element-container,.disabled-element-container{display:flex;align-items:center;gap:var(--space-unit);fill:var(--color-disabled03);padding:calc(var(--space-unit) / 2) var(--space-unit);min-height:calc(var(--space-unit) * 4);box-sizing:border-box}.element-container{fill:var(--color-primary01)}.element-icon{display:flex}";

const ZContextualMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickContextualMenu = createEvent(this, "clickContextualMenu", 7);
    /**
     * [optional] Sets text color of ZContextualMenu's content
     */
    this.color = "color-primary01";
    /**
     * [optional] Sets the position of the popover
     */
    this.popoverPosition = PopoverPositions.bottom_right;
  }
  componentWillRender() {
    if (this.elements) {
      this.jsonElements = JSON.parse(this.elements.replace(/&quot;/g, '"'));
    }
  }
  componentDidLoad() {
    this.popover.bindTo = this.triggerButton;
  }
  showIcon() {
    return !this.jsonElements.some((element) => !element.icon);
  }
  togglePopover() {
    if (!this.popover.open) {
      this.popover.open = true;
    }
  }
  render() {
    var _a, _b;
    return [
      h("button", { ref: (el) => (this.triggerButton = el), "aria-label": ((_a = this.popover) === null || _a === void 0 ? void 0 : _a.open) ? "chiudi menu contestuale" : "apri menu contestuale", onClick: () => this.togglePopover() }, h("z-icon", { name: "contextual-menu", fill: this.color })),
      h("z-popover", { ref: (el) => (this.popover = el), position: this.popoverPosition }, h("div", { class: "popover-content-container" }, h("z-list", null, h("z-list-group", { "divider-type": "element" }, (_b = this.jsonElements) === null || _b === void 0 ? void 0 : _b.map((element, index) => (h("z-list-element", { clickable: !element.disabled, class: "my-z-list-element", "align-button": "left", "expandable-style": "accordion", color: element.disabled ? `color-disabled03` : this.color, isContextualMenu: true, listElementId: index, onClickItem: (event) => this.clickContextualMenu.emit(event.detail) }, h("div", { class: element.disabled
          ? "disabled-element-container"
          : "element-container" }, this.showIcon() && (h("div", { class: "element-icon" }, h("z-icon", { name: element.icon, width: 16, height: 16 }))), h("div", { class: "element-text" }, h("span", null, element.text))))))))))
    ];
  }
};
ZContextualMenu.style = stylesCss;

export { ZContextualMenu as z_contextual_menu };
