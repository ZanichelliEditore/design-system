'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-f08f7171.js');

const stylesCss$2 = ":host{display:flex;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}";

const ZList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = index$1.ListSize.MEDIUM;
    /**
     * [optional] type of the list marker for each element
     */
    this.listType = index$1.ListType.NONE;
  }
  setChildrenSizeType() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      children[i].setAttribute("size", this.size);
      children[i].setAttribute("list-type", this.listType);
      children[i].setAttribute("list-element-position", (i + 1).toString());
    }
  }
  componentDidLoad() {
    this.setChildrenSizeType();
  }
  render() {
    return (index.h(index.Host, { role: "list" }, index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
ZList.style = stylesCss$2;

const stylesCss$1 = ":host{outline:none}:host>.container,:host>.container-contextual-menu{--background-color-list-element:var(--bg-white);--background-hover-color-list-element:var(--color-surface02);--background-active-color-list-element:var(--color-surface02);display:flex;box-sizing:border-box;flex-direction:column;justify-content:center;font-family:var(--font-family-sans);font-weight:var(--font-rg);outline:none}:host([size=\"small\"])>.container{min-height:calc(var(--space-unit) * 4);padding:calc(var(--space-unit) / 2) 0}:host([size=\"medium\"])>.container{min-height:calc(var(--space-unit) * 5);padding:var(--space-unit) 0}:host([size=\"large\"])>.container{min-height:calc(var(--space-unit) * 7);padding:calc(var(--space-unit) * 2) 0}:host([size=\"x-large\"])>.container{min-height:calc(var(--space-unit) * 9);padding:calc(var(--space-unit) * 3) 0}:host([expandable])>.container,:host([expandable])>.container-contextual-menu,:host([clickable])>.container,:host([clickable])>.container-contextual-menu{cursor:pointer}:host([expandable]:hover)>.container,:host([expandable]:hover)>.container-contextual-menu,:host([clickable]:hover)>.container,:host([clickable]:hover)>.container-contextual-menu{background-color:var(--background-hover-color-list-element)}:host([expandable]:focus:focus-visible)>.container,:host([expandable]:focus:focus-visible)>.container-contextual-menu,:host([clickable]:focus:focus-visible)>.container,:host([clickable]:focus:focus-visible)>.container-contextual-menu{box-shadow:var(--shadow-focus-primary)}:host([clickable]:not([expandable]))>.container.clicked,:host([clickable]:not([expandable]))>.container-contextual-menu.clicked{box-shadow:var(--shadow-focus-primary)}:host([expandable]:active)>.container,:host([expandable]:active)>.container-contextual-menu,:host([clickable]:active)>.container,:host([clickable]:active)>.container-contextual-menu{background-color:var(--background-active-color-list-element)}:host([align-button=\"left\"][expandable])>.container>.z-list-element-container,:host([align-button=\"left\"][expandable])>.container-contextual-menu>.z-list-element-container{display:flex}:host([align-button=\"right\"][expandable])>.container>.z-list-element-container,:host([align-button=\"right\"][expandable])>.container-contextual-menu>.z-list-element-container{display:flex;flex-direction:row-reverse;justify-content:space-between}:host([align-button=\"left\"][expandable])>.container>.z-list-element-container>z-icon,:host([align-button=\"left\"][expandable])>.container-contextual-menu>.z-list-element-container>z-icon{margin-right:var(--space-unit)}:host([align-button=\"right\"][expandable])>.container>.z-list-element-container>z-icon,:host([align-button=\"right\"][expandable])>.container-contextual-menu>.z-list-element-container>z-icon{margin-left:var(--space-unit)}:host>.container>.z-list-element-inner-container,:host>.container-contextual-menu>.z-list-element-inner-container{display:none}:host>.container>.z-list-element-inner-container.expanded,:host>.container-contextual-menu>.z-list-element-inner-container.expanded{display:block}:host([clickable]:hover)>.container-contextual-menu{background-color:var(--color-surface03)}.container-contextual-menu:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.z-list-content-container{display:flex;align-items:center}";

const ZListElement = class {
  /**
   * Constructor.
   */
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.accessibleFocus = index.createEvent(this, "accessibleFocus", 7);
    this.clickItem = index.createEvent(this, "clickItem", 7);
    /**
     * [optional] Align expandable button left or right.
     */
    this.alignButton = index$1.ExpandableListButtonAlign.LEFT;
    /**
     * [optional] Sets element clickable.
     */
    this.clickable = false;
    /**
     * [optional] Sets the divider color.
     */
    this.dividerColor = "color-surface03";
    /**
     * [optional] Sets the position where to insert the divider.
     */
    this.dividerType = index$1.ListDividerType.NONE;
    /**
     * [optional] Sets the divider size.
     */
    this.dividerSize = index$1.DividerSize.SMALL;
    /**
     * [optional] Sets element as expandable.
     */
    this.expandable = false;
    /**
     * [optional] Sets expandable style to element.
     */
    this.expandableStyle = index$1.ExpandableListStyle.ACCORDION;
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = index$1.ListSize.MEDIUM;
    /**
     * [optional] Sets text color of the element.
     */
    this.color = "none";
    /**
     * [optional] Sets disabled style of the element.
     */
    this.disabled = false;
    /**
     * [optional] If is used in ZContextualMenu component
     */
    this.isContextualMenu = false;
    /**
     * [optional] position of the list element inside the list or the group
     */
    this.listElementPosition = "0";
    /**
     * [optional] type of the list marker for each element
     */
    this.listType = index$1.ListType.NONE;
    this.showInnerContent = false;
    this.openElementConfig = {
      accordion: {
        open: "minus-circled",
        close: "plus-circled",
      },
      menu: {
        open: "chevron-up",
        close: "chevron-down",
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  accessibleFocusHandler(e) {
    if (this.listElementId === e.detail) {
      const toFocus = this.host.shadowRoot.getElementById(`z-list-element-id-${e.detail}`);
      toFocus.focus();
    }
  }
  /**
   * Handler for click on element. If element is expandable, change state.
   * @returns void
   */
  handleClick() {
    this.clickItem.emit(this.listElementId);
    if (!this.expandable) {
      return;
    }
    this.showInnerContent = !this.showInnerContent;
  }
  calculateClass() {
    if (this.isContextualMenu) {
      return "container-contextual-menu";
    }
    return "container";
  }
  handleKeyDown(event) {
    const expandByKey = event.code === index$1.KeyboardCode.ENTER;
    switch (event.code) {
      case index$1.KeyboardCode.ARROW_DOWN:
        event.preventDefault();
        this.accessibleFocus.emit(this.listElementId + 1);
        break;
      case index$1.KeyboardCode.ARROW_UP:
        event.preventDefault();
        this.accessibleFocus.emit(this.listElementId - 1);
        break;
      case index$1.KeyboardCode.ENTER:
        event.preventDefault();
        this.clickItem.emit(this.listElementId);
        break;
    }
    if (!this.expandable || !expandByKey) {
      return;
    }
    this.showInnerContent = !this.showInnerContent;
  }
  /**
   * Renders button to expand element.
   * @returns expadable button
   */
  renderExpandableButton() {
    if (!this.expandable) {
      return null;
    }
    return (index.h("z-icon", { name: this.showInnerContent
        ? this.openElementConfig[this.expandableStyle].open
        : this.openElementConfig[this.expandableStyle].close }));
  }
  /**
   * Renders expanded content if element is expandable.
   * @returns expanded content
   */
  renderExpandedContent() {
    if (!this.expandable) {
      return null;
    }
    return (index.h("div", { class: {
        "z-list-element-inner-container": true,
        "expanded": this.showInnerContent,
      } }, index.h("slot", { name: "inner-content" })));
  }
  /**
   * Renders content of the z-list-element
   * @returns list content
   */
  renderContent() {
    if (this.listType === index$1.ListType.NONE) {
      return index.h("slot", null);
    }
    if (this.listType === index$1.ListType.ORDERED) {
      return (index.h("div", { class: "z-list-content-container" }, index.h("div", null, this.listElementPosition, ".\u2003"), index.h("slot", null)));
    }
    if (this.listType === index$1.ListType.UNORDERED) {
      return (index.h("div", { class: "z-list-content-container" }, index.h("span", null, "\u2022\u2003"), index.h("slot", null)));
    }
  }
  render() {
    return (index.h(index.Host, { role: "listitem", "aria-expanded": this.expandable ? this.showInnerContent : null, onClick: this.handleClick, onKeyDown: this.handleKeyDown, clickable: this.clickable && !this.disabled, tabIndex: !this.isContextualMenu ? "0" : null }, index.h("div", { class: `${this.calculateClass()}`, style: { color: `var(--${this.color})` }, tabindex: this.isContextualMenu ? "0" : "-1", id: `z-list-element-id-${this.listElementId}` }, index.h("div", { class: "z-list-element-container" }, this.renderExpandableButton(), this.renderContent()), this.renderExpandedContent()), this.dividerType === index$1.ListDividerType.ELEMENT && (index.h("z-divider", { color: this.dividerColor, size: this.dividerSize }))));
  }
  get host() { return index.getElement(this); }
};
ZListElement.style = stylesCss$1;

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.z-list-group-header-container{color:var(--gray700);font-size:var(--font-size-2);font-weight:var(--font-sb) !important;letter-spacing:0.16px;line-height:1.4}:host>.z-list-group-header-container.has-header{padding-top:var(--space-unit);padding-bottom:var(--space-unit)}:host>.z-list-group-header-container.has-header>z-divider{margin-top:var(--space-unit)}";

const ZListGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = index$1.ListSize.MEDIUM;
    /**
     * [optional] Sets the position where to insert the divider.
     */
    this.dividerType = index$1.ListDividerType.NONE;
    /**
     * [optional] Sets the divider size.
     */
    this.dividerSize = index$1.DividerSize.SMALL;
    /**
     * [optional] Sets the divider color.
     */
    this.dividerColor = "gray200";
    /**
     * [optional] type of the list marker for each element
     */
    this.listType = index$1.ListType.NONE;
  }
  componentDidLoad() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      if (children.length - 1 > i) {
        children[i].setAttribute("divider-type", this.dividerType);
        children[i].setAttribute("divider-size", this.dividerSize);
        children[i].setAttribute("divider-color", this.dividerColor);
      }
      children[i].setAttribute("size", this.size);
      children[i].setAttribute("list-type", this.listType);
      children[i].setAttribute("list-element-position", i.toString());
    }
  }
  componentWillLoad() {
    this.hasHeader = !!this.host.querySelector('[slot="header-title"]');
  }
  render() {
    return (index.h(index.Host, { role: "group" }, index.h("div", { class: {
        "z-list-group-header-container": true,
        "has-header": this.hasHeader,
      } }, index.h("slot", { name: "header-title" }), this.dividerType === index$1.ListDividerType.HEADER && (index.h("z-divider", { color: this.dividerColor, size: this.dividerSize }))), index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
ZListGroup.style = stylesCss;

exports.z_list = ZList;
exports.z_list_element = ZListElement;
exports.z_list_group = ZListGroup;