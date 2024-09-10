import { Host, h } from "@stencil/core";
import { BreadcrumbHomepageVariant, BreadcrumbPathStyle, Device, KeyboardCode, ListSize, PopoverPosition, } from "../../beans";
import { getDevice, handleKeyboardSubmit } from "../../utils/utils";
export class ZBreadcrumb {
    constructor() {
        this.collapsedElements = [];
        this.currentIndex = 0;
        this.truncatePosition = null;
        this.pathStyle = BreadcrumbPathStyle.UNDERLINED;
        this.homepageVariant = BreadcrumbHomepageVariant.ICON;
        this.maxNodesToShow = 5;
        this.preventFollowUrl = false;
        this.overflowMenuItemRows = 0;
        this.truncateChar = 30;
        this.viewPortWidth = undefined;
        this.hasOverflow = false;
        this.popoverEllipsisOpen = false;
    }
    handleResize() {
        this.viewPortWidth = getDevice();
        if (this.viewPortWidth !== Device.MOBILE &&
            this.wrapElement &&
            this.wrapElement.scrollWidth > this.wrapElement.clientWidth) {
            this.hasOverflow = true;
        }
    }
    // eslint-disable-next-line lines-between-class-members
    handlePropChange() {
        this.initializeBreadcrumb();
    }
    handleResizeUp(newValue, oldValue) {
        if (newValue === Device.MOBILE ||
            (oldValue === Device.MOBILE && newValue === Device.TABLET) ||
            (oldValue === Device.MOBILE && newValue === Device.DESKTOP) ||
            (oldValue === Device.MOBILE && newValue === Device.DESKTOP_WIDE) ||
            (oldValue === Device.TABLET && newValue === Device.DESKTOP) ||
            (oldValue === Device.TABLET && newValue === Device.DESKTOP_WIDE) ||
            (oldValue === Device.DESKTOP && newValue === Device.DESKTOP_WIDE)) {
            this.initializeBreadcrumb();
        }
    }
    componentWillLoad() {
        this.viewPortWidth = getDevice();
        this.initializeBreadcrumb();
    }
    componentWillRender() {
        if (this.viewPortWidth !== Device.MOBILE && this.hasOverflow) {
            this.checkEllipsisOrOverflowMenu();
            this.hasOverflow = false;
        }
    }
    componentDidRender() {
        if (this.collapsedElementsRef) {
            this.anchorElements = Array.from(this.hostElement.shadowRoot.querySelectorAll("z-list-group a"));
        }
        if (this.viewPortWidth !== Device.MOBILE && this.wrapElement.scrollWidth > this.wrapElement.clientWidth) {
            this.hasOverflow = true;
        }
    }
    initializeBreadcrumb() {
        if (this.viewPortWidth === Device.MOBILE) {
            this.pathsList = this.getPathsItemsList().filter((item) => !!item.path);
        }
        else {
            this.pathsList = this.getPathsItemsList();
        }
        this.homepageNode = this.pathsList.shift();
        this.pathListCopy = [...this.pathsList];
        this.collapsedElements = [];
        if (this.pathsList.length > this.maxNodesToShow) {
            this.collapsedElements = this.pathsList.splice(0, this.pathsList.length - 2);
        }
    }
    checkEllipsisOrOverflowMenu() {
        for (let i = 0; i < this.pathsList.length; i++) {
            if (this.pathsList[i].text.length <= this.truncateChar) {
                continue;
            }
            if (this.truncatePosition > 0) {
                this.collapsedElements.push(...this.pathListCopy.splice(0, this.truncatePosition));
                this.pathsList.splice(0, this.truncatePosition);
                this.truncatePosition = 0;
                return;
            }
            else if (this.truncatePosition === 0) {
                this.collapsedElements.push(...this.pathListCopy.splice(0, this.truncatePosition + 1));
                this.pathsList.splice(0, this.truncatePosition + 1);
                this.truncatePosition = null;
                return;
            }
            if (i !== this.pathsList.length - 1) {
                const truncatedString = this.truncateWithEllipsis(this.pathsList[i].text, this.truncateChar);
                this.currentEllipsisText = this.pathsList[i].text;
                this.pathsList[i].text = truncatedString;
                this.pathsList[i].hasTooltip = true;
                this.truncatePosition = i;
                return;
            }
        }
    }
    truncateWithEllipsis(str, maxLength) {
        if (str.length <= maxLength) {
            return str;
        }
        return str.substring(0, maxLength - 1) + "&mldr;";
    }
    getPathsItemsList() {
        return Array.from(this.hostElement.children).map((item) => {
            return {
                text: item.textContent,
                path: item.href,
                hasTooltip: false,
            };
        });
    }
    renderHomepageNode() {
        return (h("li", null, h("a", { class: {
                "homepage-text": this.homepageVariant === BreadcrumbHomepageVariant.TEXT,
            }, href: this.homepageNode.path, onClick: (e) => this.handlePreventFollowUrl(e, this.homepageNode), innerHTML: this.homepageVariant === BreadcrumbHomepageVariant.ICON
                ? `<z-icon name="home" />`
                : this.homepageNode.text || "Home" }), this.pathsList.length > 0 && (h("z-icon", { class: "separator", name: "chevron-right" }))));
    }
    togglePopover() {
        if (!this.collapsedElementsRef.open) {
            this.collapsedElementsRef.open = true;
        }
    }
    handlePreventFollowUrl(e, item) {
        if (this.preventFollowUrl) {
            e.preventDefault();
            this.clickOnNode.emit(item.path);
        }
    }
    handleOverflowMenuAccessibility(e) {
        const anchorElementsLenght = this.anchorElements.length;
        if (e.key === KeyboardCode.TAB) {
            e.preventDefault();
            return;
        }
        e.stopPropagation();
        const arrows = [KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP];
        if (arrows.includes(e.key)) {
            e.preventDefault();
            if (e.key === KeyboardCode.ARROW_DOWN) {
                this.currentIndex = anchorElementsLenght === this.currentIndex + 1 ? 0 : this.currentIndex + 1;
            }
            if (e.key === KeyboardCode.ARROW_UP) {
                this.currentIndex = this.currentIndex <= 0 ? anchorElementsLenght - 1 : this.currentIndex - 1;
            }
            this.anchorElements[this.currentIndex].focus();
        }
        if (e.key === KeyboardCode.ESC) {
            this.triggerButton.focus();
        }
    }
    renderOverflowMenu() {
        return (h("li", null, h("z-popover", { class: "hidden-paths-popover", ref: (val) => (this.collapsedElementsRef = val), bindTo: this.triggerButton, position: PopoverPosition.BOTTOM_RIGHT, closable: true, showArrow: true }, h("div", { class: "popover-content" }, h("z-list", null, h("z-list-group", { size: ListSize.SMALL }, this.collapsedElements.map((item, index, array) => {
            return (h("div", null, h("z-list-element", { clickable: true }, h("a", { class: "text-ellipsis", href: item.path, onClick: (e) => this.handlePreventFollowUrl(e, item), onKeyDown: (e) => this.handleOverflowMenuAccessibility(e), innerHTML: item.text })), index < array.length - 1 && h("z-divider", { color: "color-surface03" })));
        }))))), h("button", { class: "dots", ref: (el) => (this.triggerButton = el), "aria-label": "Mostra pi\u00F9 breadcrumb", "aria-haspopup": "true", onClick: () => {
                this.togglePopover();
            }, onKeyDown: (e) => {
                handleKeyboardSubmit(e, this.togglePopover.bind(this));
                setTimeout(() => {
                    this.anchorElements[0].focus();
                }, 100);
            }, innerHTML: "&mldr;" }), this.pathsList.length > 0 && (h("z-icon", { class: "separator", name: "chevron-right" }))));
    }
    renderMobileItems() {
        // show only the second to last element
        const secondToLastPath = this.pathsList[this.pathsList.length - 1];
        if (!secondToLastPath) {
            return;
        }
        return (h("li", null, h("a", { "aria-current": secondToLastPath.path ? undefined : "page", href: secondToLastPath.path, onClick: (e) => this.handlePreventFollowUrl(e, secondToLastPath) }, h("z-icon", { name: "chevron-left" }), h("span", { class: {
                "missing-path": !secondToLastPath.path,
                "text-ellipsis": true,
            } }, secondToLastPath.text))));
    }
    renderItems() {
        let trigger;
        return [
            this.renderHomepageNode(),
            this.collapsedElements.length > 0 && this.renderOverflowMenu(),
            ...this.pathsList.map((item, index) => (h("li", null, item.hasTooltip && (h("z-popover", { class: "full-path-tooltip", bindTo: trigger, open: this.popoverEllipsisOpen, position: PopoverPosition.BOTTOM_RIGHT, closable: false, showArrow: true }, h("span", { class: "tooltip-content" }, this.currentEllipsisText))), h("a", { class: { "missing-path": !item.path }, ref: (val) => (trigger = val), "aria-current": item.path ? undefined : "page", href: item.path, onClick: (e) => this.handlePreventFollowUrl(e, item), onMouseOver: () => {
                    if (item.hasTooltip) {
                        this.popoverEllipsisOpen = true;
                    }
                }, onMouseLeave: () => {
                    if (item.hasTooltip) {
                        this.popoverEllipsisOpen = false;
                    }
                }, innerHTML: item.text }), index !== this.pathsList.length - 1 && (h("z-icon", { class: "separator", name: "chevron-right" }))))),
        ];
    }
    render() {
        return (h(Host, { key: '103caf1740a6663402282211d961204bce9b8a70', style: { "--line-clamp-popover": `${this.overflowMenuItemRows}` } }, h("nav", { key: '6fea4845c60c77671d59abc70d9b4d10ce33c0f7', ref: (val) => (this.wrapElement = val), "aria-label": "Breadcrumb", class: {
                semibold: this.pathStyle === BreadcrumbPathStyle.SEMIBOLD,
                underlined: this.pathStyle === BreadcrumbPathStyle.UNDERLINED,
            } }, h("ol", { key: '608d68e56a5810e77358afc316d5d4d721155628' }, this.viewPortWidth === Device.MOBILE ? this.renderMobileItems() : this.renderItems()))));
    }
    static get is() { return "z-breadcrumb"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["styles.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["styles.css"]
        };
    }
    static get properties() {
        return {
            "pathStyle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BreadcrumbPathStyle",
                    "resolved": "BreadcrumbPathStyle.SEMIBOLD | BreadcrumbPathStyle.UNDERLINED",
                    "references": {
                        "BreadcrumbPathStyle": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::BreadcrumbPathStyle"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Sets the path style"
                },
                "attribute": "path-style",
                "reflect": true,
                "defaultValue": "BreadcrumbPathStyle.UNDERLINED"
            },
            "homepageVariant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BreadcrumbHomepageVariant",
                    "resolved": "BreadcrumbHomepageVariant.ICON | BreadcrumbHomepageVariant.TEXT",
                    "references": {
                        "BreadcrumbHomepageVariant": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::BreadcrumbHomepageVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Variant of first node"
                },
                "attribute": "homepage-variant",
                "reflect": false,
                "defaultValue": "BreadcrumbHomepageVariant.ICON"
            },
            "maxNodesToShow": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Sets max number of element to show"
                },
                "attribute": "max-nodes-to-show",
                "reflect": false,
                "defaultValue": "5"
            },
            "preventFollowUrl": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Controls the behaviour on <a> tag click/enter"
                },
                "attribute": "prevent-follow-url",
                "reflect": false,
                "defaultValue": "false"
            },
            "overflowMenuItemRows": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Sets max number of row for each path inside the popover. Zero equals unlimited"
                },
                "attribute": "overflow-menu-item-rows",
                "reflect": false,
                "defaultValue": "0"
            },
            "truncateChar": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Sets the maximun number of chars per single node"
                },
                "attribute": "truncate-char",
                "reflect": false,
                "defaultValue": "30"
            }
        };
    }
    static get states() {
        return {
            "viewPortWidth": {},
            "hasOverflow": {},
            "popoverEllipsisOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "clickOnNode",
                "name": "clickOnNode",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when preventFollowUrl=true to handle custom page transition"
                },
                "complexType": {
                    "original": "BreadcrumbPath[\"path\"]",
                    "resolved": "string",
                    "references": {
                        "BreadcrumbPath": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::BreadcrumbPath"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "maxNodesToShow",
                "methodName": "handlePropChange"
            }, {
                "propName": "viewPortWidth",
                "methodName": "handleResizeUp"
            }];
    }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "handleResize",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=index.js.map
