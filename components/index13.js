import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { j as ExpandableListButtonAlign, l as ListDividerType, D as DividerSize, E as ExpandableListStyle, i as ListSize, m as ListType, g as KeyboardCode } from './index2.js';
import { d as defineCustomElement$2 } from './index6.js';
import { d as defineCustomElement$1 } from './index9.js';

const stylesCss = ":host{outline:none}:host>.container,:host>.container-contextual-menu{--background-color-list-element:var(--color-surface01);--background-hover-color-list-element:var(--color-surface02);--background-active-color-list-element:var(--color-surface02);display:flex;box-sizing:border-box;flex-direction:column;justify-content:center;font-family:var(--font-family-sans);font-weight:var(--font-rg);outline:none}:host([size=\"small\"])>.container{min-height:calc(var(--space-unit) * 4);padding:calc(var(--space-unit) / 2) 0}:host([size=\"medium\"])>.container{min-height:calc(var(--space-unit) * 5);padding:var(--space-unit) 0}:host([size=\"large\"])>.container{min-height:calc(var(--space-unit) * 7);padding:calc(var(--space-unit) * 2) 0}:host([size=\"x-large\"])>.container{min-height:calc(var(--space-unit) * 9);padding:calc(var(--space-unit) * 3) 0}:host([expandable])>.container,:host([expandable])>.container-contextual-menu,:host([clickable])>.container,:host([clickable])>.container-contextual-menu{cursor:pointer}:host([expandable]:hover)>.container,:host([expandable]:hover)>.container-contextual-menu,:host([clickable]:hover)>.container,:host([clickable]:hover)>.container-contextual-menu{background-color:var(--background-hover-color-list-element)}:host([expandable]:focus:focus-visible)>.container,:host([expandable]:focus:focus-visible)>.container-contextual-menu,:host([clickable]:focus:focus-visible)>.container,:host([clickable]:focus:focus-visible)>.container-contextual-menu{box-shadow:var(--shadow-focus-primary)}:host([clickable]:not([expandable]))>.container.clicked,:host([clickable]:not([expandable]))>.container-contextual-menu.clicked{box-shadow:var(--shadow-focus-primary)}:host([expandable]:active)>.container,:host([expandable]:active)>.container-contextual-menu,:host([clickable]:active)>.container,:host([clickable]:active)>.container-contextual-menu{background-color:var(--background-active-color-list-element)}:host([align-button=\"left\"][expandable])>.container>.z-list-element-container,:host([align-button=\"left\"][expandable])>.container-contextual-menu>.z-list-element-container{display:flex}:host([align-button=\"right\"][expandable])>.container>.z-list-element-container,:host([align-button=\"right\"][expandable])>.container-contextual-menu>.z-list-element-container{display:flex;flex-direction:row-reverse;justify-content:space-between}:host([align-button=\"left\"][expandable])>.container>.z-list-element-container>z-icon,:host([align-button=\"left\"][expandable])>.container-contextual-menu>.z-list-element-container>z-icon{margin-right:var(--space-unit)}:host([align-button=\"right\"][expandable])>.container>.z-list-element-container>z-icon,:host([align-button=\"right\"][expandable])>.container-contextual-menu>.z-list-element-container>z-icon{margin-left:var(--space-unit)}:host>.container>.z-list-element-inner-container,:host>.container-contextual-menu>.z-list-element-inner-container{display:none}:host>.container>.z-list-element-inner-container.expanded,:host>.container-contextual-menu>.z-list-element-inner-container.expanded{display:block}:host([clickable]:hover)>.container-contextual-menu{background-color:var(--color-surface03)}.container-contextual-menu:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.z-list-content-container{display:flex;align-items:center}";
const ZListElementStyle0 = stylesCss;

const ZListElement = /*@__PURE__*/ proxyCustomElement(class ZListElement extends HTMLElement {
    accessibleFocusHandler(e) {
        if (this.listElementId === e.detail) {
            const toFocus = this.host.shadowRoot.getElementById(`z-list-element-id-${e.detail}`);
            toFocus.focus();
        }
    }
    /**
     * Constructor.
     */
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.accessibleFocus = createEvent(this, "accessibleFocus", 7);
        this.ariaDescendantFocus = createEvent(this, "ariaDescendantFocus", 7);
        this.clickItem = createEvent(this, "clickItem", 7);
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
        this.alignButton = ExpandableListButtonAlign.LEFT;
        this.clickable = false;
        this.dividerColor = "color-surface03";
        this.dividerType = ListDividerType.NONE;
        this.dividerSize = DividerSize.SMALL;
        this.expandable = false;
        this.expandableStyle = ExpandableListStyle.ACCORDION;
        this.listElementId = undefined;
        this.size = ListSize.MEDIUM;
        this.color = "none";
        this.disabled = false;
        this.isContextualMenu = false;
        this.listElementPosition = "0";
        this.listType = ListType.NONE;
        this.role = "listitem";
        this.showInnerContent = false;
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
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
        const expandByKey = event.code === KeyboardCode.ENTER;
        switch (event.code) {
            case KeyboardCode.ARROW_DOWN:
                event.preventDefault();
                this.accessibleFocus.emit(this.listElementId + 1);
                break;
            case KeyboardCode.ARROW_UP:
                event.preventDefault();
                this.accessibleFocus.emit(this.listElementId - 1);
                break;
            case KeyboardCode.ENTER:
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
        return (h("z-icon", { name: this.showInnerContent
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
        return (h("div", { class: {
                "z-list-element-inner-container": true,
                "expanded": this.showInnerContent,
            } }, h("slot", { name: "inner-content" })));
    }
    /**
     * Renders content of the z-list-element
     * @returns list content
     */
    renderContent() {
        if (this.listType === ListType.NONE) {
            return h("slot", null);
        }
        if (this.listType === ListType.ORDERED) {
            return (h("div", { class: "z-list-content-container" }, h("div", null, this.listElementPosition, ".\u2003"), h("slot", null)));
        }
        if (this.listType === ListType.UNORDERED) {
            return (h("div", { class: "z-list-content-container" }, h("span", null, "\u2022\u2003"), h("slot", null)));
        }
    }
    render() {
        return (h(Host, { key: '3c55ce5744a82e1b1871f658d0d63dc49a55fbba', "aria-expanded": this.expandable ? this.showInnerContent : null, onClick: this.handleClick, onFocus: () => this.ariaDescendantFocus.emit(this.listElementId), onKeyDown: this.handleKeyDown, clickable: this.clickable && !this.disabled, tabIndex: !this.isContextualMenu ? "0" : null }, h("div", { key: 'f9ccf0529e72d61ffed2f8da94461b6d0d904447', class: `${this.calculateClass()}`, style: { color: `var(--${this.color})` }, tabindex: this.isContextualMenu ? "0" : "-1", id: `z-list-element-id-${this.listElementId}`, part: "list-item-container" }, h("div", { key: '9747b70e158f1e0a50bd392bc11724df0951196e', class: "z-list-element-container" }, this.renderExpandableButton(), this.renderContent()), this.renderExpandedContent()), this.dividerType === ListDividerType.ELEMENT && (h("z-divider", { color: this.dividerColor, size: this.dividerSize }))));
    }
    get host() { return this; }
    static get style() { return ZListElementStyle0; }
}, [1, "z-list-element", {
        "alignButton": [513, "align-button"],
        "clickable": [516],
        "dividerColor": [1, "divider-color"],
        "dividerType": [1, "divider-type"],
        "dividerSize": [1, "divider-size"],
        "expandable": [516],
        "expandableStyle": [1, "expandable-style"],
        "listElementId": [514, "list-element-id"],
        "size": [513],
        "color": [513],
        "disabled": [516],
        "isContextualMenu": [516, "is-contextual-menu"],
        "listElementPosition": [513, "list-element-position"],
        "listType": [513, "list-type"],
        "role": [513],
        "showInnerContent": [32]
    }, [[4, "accessibleFocus", "accessibleFocusHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-list-element", "z-divider", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-list-element":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZListElement);
            }
            break;
        case "z-divider":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ZListElement as Z, defineCustomElement as d };

//# sourceMappingURL=index13.js.map