import { r as registerInstance, c as createEvent, h, H as Host } from './index-fa9e549c.js';
import { P as PopoverPosition } from './index-09b57d95.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host(:focus-within)>z-popover{box-shadow:var(--shadow-focus-primary)}.popover-content-container{min-width:112px;max-width:280px;white-space:nowrap;padding:calc(var(--space-unit) / 2) 0}.element-container:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}.element-text{overflow:hidden;text-overflow:ellipsis;font-size:14px}.element-container,.disabled-element-container{display:flex;align-items:center;gap:var(--space-unit);fill:var(--color-disabled03);padding:calc(var(--space-unit) / 2) var(--space-unit);min-height:calc(var(--space-unit) * 4);box-sizing:border-box}.element-container{fill:var(--color-primary01)}.element-icon{display:flex}";

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
    this.popoverPosition = PopoverPosition["after-down"];
  }
  componentWillRender() {
    if (this.elements) {
      this.jsonElements = JSON.parse(this.elements.replace(/&quot;/g, '"'));
    }
  }
  showIcon() {
    return !this.jsonElements.some((element) => !element.icon);
  }
  render() {
    var _a;
    return (h(Host, null, h("z-popover", { "background-color": "color-background", "box-shadow": "shadow-2", position: this.popoverPosition, padding: "0" }, h("z-icon", { "aria-label": "apri-menu-contestuale", slot: "trigger", name: "contextual-menu", fill: this.color, style: { cursor: "pointer" } }), h("div", { class: "popover-content-container", slot: "popover" }, h("z-list", null, h("z-list-group", { "divider-type": "element" }, (_a = this.jsonElements) === null || _a === void 0 ? void 0 : _a.map((element, index) => (h("z-list-element", { clickable: !element.disabled, class: "my-z-list-element", "align-button": "left", "expandable-style": "accordion", color: element.disabled ? `color-disabled03` : this.color, isContextualMenu: true, listElementId: index, onClickItem: (event) => this.clickContextualMenu.emit(event.detail) }, h("div", { class: element.disabled
        ? "disabled-element-container"
        : "element-container" }, this.showIcon() && (h("div", { class: "element-icon" }, h("z-icon", { name: element.icon, width: 16, height: 16 }))), h("div", { class: "element-text" }, h("span", null, element.text))))))))))));
  }
};
ZContextualMenu.style = stylesCss;

export { ZContextualMenu as z_contextual_menu };
