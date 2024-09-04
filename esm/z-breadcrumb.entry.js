import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-ab5f1eaa.js';
import { U as BreadcrumbPathStyle, V as BreadcrumbHomepageVariant, p as Device, g as KeyboardCode, P as PopoverPosition, i as ListSize } from './index-a7f69d42.js';
import { g as getDevice, a as handleKeyboardSubmit } from './utils-0ce33738.js';
import './breakpoints-680e0e56.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);--line-clamp-popover:0;--line-clamp-mobile:1}*{-webkit-box-sizing:border-box;box-sizing:border-box}button{padding:0;border:none;margin:0;background-color:transparent}nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}ol{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0;margin:0;-webkit-column-gap:var(--space-unit);-moz-column-gap:var(--space-unit);column-gap:var(--space-unit);list-style:none}li{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-webkit-column-gap:var(--space-unit);-moz-column-gap:var(--space-unit);column-gap:var(--space-unit)}ol li>a,ol li>button{font-size:var(--font-size-2);letter-spacing:0.16px;line-height:1.4}a:focus,button:focus{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none}a{color:var(--color-link-primary);white-space:nowrap}a.missing-path{color:var(--color-default-text)}.text-ellipsis{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:var(--line-clamp-mobile);text-overflow:ellipsis;white-space:initial}nav.semibold>ol>li>a:not(.missing-path),nav.semibold>ol>li>button{font-weight:var(--font-sb);text-decoration:none}nav.underlined a,nav.underlined button{text-decoration:underline}z-icon{--z-icon-width:16px;--z-icon-height:16px;display:block;fill:var(--color-link-primary)}z-icon.separator{--z-icon-width:10px;--z-icon-height:10px;fill:var(--gray500)}button.dots{display:inline-block;color:var(--color-link-primary);cursor:pointer}.hidden-paths-popover .popover-content{max-width:302px;padding:calc(var(--space-unit) / 2) var(--space-unit);text-align:left}.hidden-paths-popover .popover-content a{font-weight:var(--font-rg);text-decoration:none}.hidden-paths-popover{--z-popover-theme--surface:var(--color-surface02);--z-popover-padding:0}.hidden-paths-popover::before,.full-path-tooltip::before{--arrow-edge-offset:calc(100% - (var(--space-unit) * 2.55))}.full-path-tooltip{--z-popover-theme--surface:var(--color-surface05);--z-popover-theme--text:var(--color-text-inverse);--z-popover-padding:0}.tooltip-content{padding:0 var(--space-unit);font-size:var(--font-size-2)}@media (min-width: 768px){.text-ellipsis{-webkit-line-clamp:var(--line-clamp-popover)}}@media (max-width: 767px){li a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-column-gap:var(--space-unit);-moz-column-gap:var(--space-unit);column-gap:var(--space-unit)}}";
const ZBreadcrumbStyle0 = stylesCss;

const ZBreadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickOnNode = createEvent(this, "clickOnNode", 7);
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
        return (h(Host, { key: 'bba9d5bf2b1316c4e29eebcc00cb23c3e6635a36', style: { "--line-clamp-popover": `${this.overflowMenuItemRows}` } }, h("nav", { key: '4d916bcbb730f4e3cd0d051b630336db7222aa30', ref: (val) => (this.wrapElement = val), "aria-label": "Breadcrumb", class: {
                semibold: this.pathStyle === BreadcrumbPathStyle.SEMIBOLD,
                underlined: this.pathStyle === BreadcrumbPathStyle.UNDERLINED,
            } }, h("ol", { key: '654d8e9cad8417a155f1bc349b7b16687c8db96e' }, this.viewPortWidth === Device.MOBILE ? this.renderMobileItems() : this.renderItems()))));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "maxNodesToShow": ["handlePropChange"],
        "viewPortWidth": ["handleResizeUp"]
    }; }
};
ZBreadcrumb.style = ZBreadcrumbStyle0;

export { ZBreadcrumb as z_breadcrumb };

//# sourceMappingURL=z-breadcrumb.entry.js.map