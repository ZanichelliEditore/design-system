import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-SFwvdS4t.js';
import { g as KeyboardCode } from './index-DdetsoIY.js';

const stylesCss = () => `:host{font-family:var(--font-family-sans)}z-list-element{position:relative;display:block;padding-top:var(--space-unit)}z-list-element::before,z-list-element::after{position:absolute;z-index:100;top:0.125rem;left:-0.5rem;content:""}z-list z-list-element::before{width:var(--space-unit);height:calc(var(--space-unit) * 2);border-bottom:var(--border-size-small) solid var(--color-disabled01-icon);border-left:var(--border-size-small) solid var(--color-disabled01-icon)}z-list z-list-element::after{width:var(--space-unit);height:100%;border-left:var(--border-size-small) solid var(--color-disabled01-icon)}z-list z-list-element:last-child::after,z-list>z-list-element::before,z-list>z-list-element::after,z-list>z-list-group>z-list-element::before,z-list>z-list-group>z-list-element::after{display:none}z-list>div.children-node{padding-left:calc(var(--space-unit) * 2)}z-list-element>.list-element{z-index:100;display:flex;justify-content:space-between;padding:0;color:var(--color-default-text);font-size:var(--font-size-2);font-style:normal;font-weight:var(--font-rg);text-decoration:none}z-list-element>.list-element.link-clickable{color:var(--color-primary01)}z-list-element>.list-element.link-clickable:hover{text-decoration:underline}z-list-element>.list-element .item.ellipsis{overflow:hidden}z-list-element .list-element::after{position:absolute;top:0;right:-0.0625rem;display:block;width:100%;height:calc(var(--space-unit) * 5);content:"";transform:translateX(-100%)}.item-label{overflow:hidden;flex-grow:1;font-size:var(--font-size-2);font-style:normal;font-weight:var(--font-rg);letter-spacing:0.0032rem;line-height:1.25rem;text-overflow:ellipsis;white-space:nowrap}.item-label.bold-item{font-weight:var(--font-sb)}.item.ellipsis{display:flex;overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap}.children-node>z-list-element{padding:0;padding-top:0.125;padding-left:calc(var(--space-unit) * 1.25)}.item-icon{margin-right:var(--space-unit)}.no-icon-label{padding-left:var(--space-unit)}.children-node>z-list-element.no-icon-elm{padding-left:0}z-list-element>.list-element:focus:focus-visible{position:relative;z-index:200;box-shadow:var(--shadow-focus-primary);outline:none}@media (max-width: 767px){z-list-element::before,z-list-element::after{top:0.1875rem}z-list z-list-element::before{height:calc(var(--space-unit) * 2.5)}.children-node>z-list-element{padding-top:var(--space-unit)}}`;

const ZTreeList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.treeItemClicked = createEvent(this, "treeItemClicked", 7);
        /** Items to render, if they have the url property they will be rendered as clickable links */
        this.items = [];
        this.parsedItems = [];
    }
    watchItems() {
        this.parsedItems = typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    }
    componentWillLoad() {
        this.watchItems();
    }
    handleClick(item) {
        this.treeItemClicked.emit({ id: item.id, name: item.name, url: item.url });
    }
    getFocusableElements() {
        return Array.from(this.host.shadowRoot.querySelectorAll('a[tabindex="0"]'));
    }
    getAncestor(element, levels) {
        let ancestor = element;
        for (let i = 0; i < levels; i++) {
            ancestor = ancestor === null || ancestor === void 0 ? void 0 : ancestor.parentElement;
            if (!ancestor) {
                return;
            }
        }
        return ancestor;
    }
    handleArrowNav(event) {
        if (event.code === KeyboardCode.TAB) {
            event.preventDefault();
            return;
        }
        const focusableElements = this.getFocusableElements();
        const currentIndex = focusableElements.indexOf(event.target);
        if (currentIndex === -1) {
            return;
        }
        if (event.code === KeyboardCode.ARROW_DOWN || event.code === KeyboardCode.ARROW_UP) {
            event.preventDefault();
            const nextIndex = currentIndex + (event.code === KeyboardCode.ARROW_DOWN ? 1 : -1);
            if (nextIndex < 0 || nextIndex >= focusableElements.length) {
                return;
            }
            focusableElements[nextIndex].focus();
        }
        if (event.code === KeyboardCode.ARROW_LEFT) {
            event.preventDefault();
            const ancestor = this.getAncestor(focusableElements[currentIndex], 4);
            if (!ancestor ||
                !ancestor.children[0] ||
                (ancestor.children[0].tagName.toLowerCase() !== "a" && ancestor.getAttribute("tabindex") === null)) {
                return;
            }
            ancestor.children[0].focus();
        }
        if (event.code === KeyboardCode.ARROW_RIGHT) {
            event.preventDefault();
            const parentElm = event.target.closest("z-list-element");
            if (!parentElm) {
                return;
            }
            const childrenContainer = parentElm.querySelector("z-list");
            if (!childrenContainer) {
                return;
            }
            const firstChild = childrenContainer.querySelector('a[tabindex="0"]');
            if (!firstChild) {
                return;
            }
            firstChild.focus();
        }
    }
    renderTreeList(item, key, level = 1) {
        var _a, _b;
        this.htmlTag = item.url ? "a" : "span";
        const treeListContent = (h("z-list-element", { id: key, class: !item.icon ? "no-icon-elm" : "", clickable: Boolean(item.url), hasTreeItems: true, role: "none", "aria-hidden": undefined }, h(this.htmlTag, { class: {
                "list-element": true,
                "z-link": Boolean(item.url),
                "link-clickable": Boolean(item.url),
            }, tabIndex: item.url ? 0 : -1, onClick: () => this.handleClick(item), onKeyUp: (event) => {
                if (event.code === KeyboardCode.ENTER || event.code === KeyboardCode.SPACE) {
                    this.handleClick(item);
                }
            }, onKeyDown: (event) => this.handleArrowNav(event), role: item.url ? "treeitem" : undefined, "aria-hidden": item.url ? undefined : "true", "aria-expanded": ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) > 0 && true, "aria-level": level, "aria-label": item.name, href: item.url }, h("span", { class: "item ellipsis" }, item.icon && (h("z-icon", { width: 16, height: 16, fill: item.url ? "color-primary01" : "color-default-icon", class: "item-icon", name: item.icon })), h("span", { class: {
                "item-label": true,
                "no-icon-label": !item.icon,
                "bold-item": item.bold,
            }, title: item.name }, item.name))), ((_b = item.children) === null || _b === void 0 ? void 0 : _b.length) > 0 && (h("z-list", { role: "group" }, h("div", { class: "children-node" }, item.children.map((child, key) => this.renderTreeList(child, `${key}`, level + 1)))))));
        return treeListContent;
    }
    render() {
        const hasClickableItems = this.parsedItems.some((item) => !!item.url);
        return (h(Host, { key: '8bc473fe54ef8e0cea9e2deeb85cc798a9201482', class: "tree-list", role: hasClickableItems ? "navigation" : "none", "aria-hidden": hasClickableItems ? undefined : "true", "aria-labelledby": this.htmlAriaLabelledby }, h("div", { key: 'da18ff5c34d384aa37ef1edbdb242a3f572f471b', tabIndex: -1, role: hasClickableItems ? "tree" : "none", "aria-hidden": hasClickableItems ? undefined : "true", "aria-label": this.htmlSectionTitle }, this.parsedItems.map((item, key) => this.renderTreeList(item, `${key}`)))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "items": [{
                "watchItems": 0
            }]
    }; }
};
ZTreeList.style = stylesCss();

export { ZTreeList as z_tree_list };
