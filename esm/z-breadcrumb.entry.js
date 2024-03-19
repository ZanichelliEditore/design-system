import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-f16bc2ca.js';
import { V as BreadcrumbPathStyle, W as BreadcrumbHomepageVariant, p as Device, P as PopoverPosition, g as KeyboardCode, i as ListSize } from './index-2255c6c8.js';
import { g as getDevice, a as handleKeyboardSubmit } from './utils-7983d02c.js';
import './breakpoints-680e0e56.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);--line-clamp-popover:0;--line-clamp-mobile:1}button{padding:0;border:none;margin:0;background-color:transparent}nav{display:flex;height:30px;align-items:center;padding-left:calc(var(--space-unit) / 2);overflow-x:hidden}li{display:flex;align-items:baseline}:host a:focus,:host button:focus{box-shadow:var(--shadow-focus-primary);outline:0}:host a{color:var(--color-link-primary);font-size:var(--font-size-2);text-decoration:none;white-space:nowrap}:host a.homepage-icon{display:list-item}:host a.homepage-text{display:initial;margin-top:calc(var(--space-unit) / 4);margin-right:var(--space-unit)}:host a.missing-path{color:var(--color-text01)}:host a.text-ellipsis{display:-webkit-box !important;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:var(--line-clamp-mobile);text-overflow:ellipsis;white-space:normal}:host ol{display:flex;padding:0;margin:0;list-style-type:none}:host ol>li:not(:first-child,:last-child){margin-right:var(--space-unit)}nav.underlined>ol>li a:not(.missing-path),nav.underlined>ol>li button{text-decoration:underline}nav.semibold>ol>li a:not(.missing-path),nav.semibold>ol>li button{font-weight:var(--font-sb)}:host z-icon{margin-right:var(--space-unit);--z-icon-width:12px;--z-icon-height:12px}:host button.dots{display:inline-block;color:var(--color-link-primary);cursor:pointer}:host .hidden-paths-popover .popover-content{max-width:302px;padding:calc(var(--space-unit) / 2) var(--space-unit);text-align:left}:host .hidden-paths-popover .popover-content a{font-weight:var(--font-rg);text-decoration:none}:host .hidden-paths-popover{--z-popover-theme--surface:var(--color-surface02);--z-popover-padding:0}:host .hidden-paths-popover::before,.full-path-tooltip::before{--arrow-edge-offset:calc(100% - (var(--space-unit) * 2.55))}:host .full-path-tooltip{--z-popover-theme--surface:var(--color-surface05);--z-popover-theme--text:var(--color-text-inverse);--z-popover-padding:0}:host .tooltip-content{padding:0 var(--space-unit);font-size:var(--font-size-2)}@media (min-width: 768px){:host ol>li+li::before{display:inline-block;width:10px;height:10px;flex:1;margin-right:2px;color:var(--color-disabled03);content:\"\\203A\"}:host a.text-ellipsis{-webkit-line-clamp:var(--line-clamp-popover)}}";
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
        this.initializeBreadcrumb(this.viewPortWidth === Device.MOBILE);
    }
    handleResizeUp(newValue, oldValue) {
        if (newValue === Device.MOBILE ||
            (oldValue === Device.MOBILE && newValue === Device.TABLET) ||
            (oldValue === Device.MOBILE && newValue === Device.DESKTOP) ||
            (oldValue === Device.MOBILE && newValue === Device.DESKTOP_WIDE) ||
            (oldValue === Device.TABLET && newValue === Device.DESKTOP) ||
            (oldValue === Device.TABLET && newValue === Device.DESKTOP_WIDE) ||
            (oldValue === Device.DESKTOP && newValue === Device.DESKTOP_WIDE)) {
            this.initializeBreadcrumb(this.viewPortWidth === Device.MOBILE);
        }
    }
    componentWillLoad() {
        this.viewPortWidth = getDevice();
        this.initializeBreadcrumb(this.viewPortWidth === Device.MOBILE);
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
    initializeBreadcrumb(isMobile) {
        if (isMobile) {
            this.pathsList = this.getPathsItemsList().filter((item) => !!item.path);
        }
        else {
            this.pathsList = this.getPathsItemsList();
        }
        this.totalLenght = this.pathsList.length;
        this.homepageNode = this.pathsList.shift();
        this.pathListCopy = JSON.parse(JSON.stringify(this.pathsList));
        this.collapsedElements = [];
        if (this.totalLenght > this.maxNodesToShow) {
            this.collapsedElements = this.pathsList.splice(0, this.pathsList.length - 2);
        }
    }
    checkEllipsisOrOverflowMenu() {
        if (this.pathListCopy.length > 0) {
            for (let i = 0; i < this.pathsList.length; i++) {
                if (this.pathsList[i].text.length > this.truncateChar) {
                    if (this.truncatePosition !== null) {
                        if (this.truncatePosition > 0) {
                            const arrayToPush = this.pathListCopy.splice(0, this.truncatePosition);
                            arrayToPush.forEach((item) => {
                                this.collapsedElements.push(item);
                            });
                            this.pathsList.splice(0, this.truncatePosition);
                            this.truncatePosition = 0;
                            return;
                        }
                        if (this.truncatePosition === 0) {
                            const arrayToPush = this.pathListCopy.splice(0, this.truncatePosition + 1);
                            this.collapsedElements.push(...arrayToPush);
                            this.pathsList.splice(0, this.truncatePosition + 1);
                            this.truncatePosition = null;
                            return;
                        }
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
        }
    }
    truncateWithEllipsis(str, length) {
        const ending = "&mldr;";
        if (str.length > length) {
            return str.substring(0, length - 1) + ending;
        }
        return str;
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
    renderMobileBreadcrumb() {
        const lastPath = this.pathsList[this.pathsList.length - 1];
        return (h("nav", { "aria-label": "Breadcrumb", class: {
                underlined: this.pathStyle === BreadcrumbPathStyle.UNDERLINED,
                semibold: this.pathStyle === BreadcrumbPathStyle.SEMIBOLD,
            } }, h("ol", null, this.renderNode(lastPath, true))));
    }
    renderHomepageNode(item) {
        return (h("li", null, h("a", { class: {
                "homepage-icon": this.homepageVariant === BreadcrumbHomepageVariant.ICON,
                "homepage-text": this.homepageVariant === BreadcrumbHomepageVariant.TEXT,
            }, href: item.path, onClick: (e) => this.handlePreventFollowUrl(e, item) }, this.homepageVariant === BreadcrumbHomepageVariant.ICON ? (h("z-icon", { name: "home", fill: "color-link-primary", height: 16, width: 16 })) : ("Home"))));
    }
    renderNode(item, mobile) {
        return (h("li", null, item.hasTooltip && (h("z-popover", { class: "full-path-tooltip", "bind-to": this.triggerEllipsis, open: this.popoverEllipsisOpen, position: PopoverPosition.BOTTOM_RIGHT, closable: false, showArrow: true }, h("span", { class: "tooltip-content" }, this.currentEllipsisText))), h("a", { class: {
                "missing-path": !item.path,
                "text-ellipsis": mobile,
            }, ref: (val) => (this.triggerEllipsis = val), "aria-current": item.path ? undefined : "page", href: item.path, onClick: (e) => this.handlePreventFollowUrl(e, item), onMouseOver: () => {
                if (item.hasTooltip) {
                    this.popoverEllipsisOpen = true;
                }
            }, onMouseLeave: () => {
                if (item.hasTooltip) {
                    this.popoverEllipsisOpen = false;
                }
            }, innerHTML: mobile ? `<z-icon fill="color-link-primary" name="chevron-left"></z-icon>${item.text}` : item.text })));
    }
    renderBreadcrumb() {
        return (h("nav", { ref: (val) => (this.wrapElement = val), "aria-label": "Breadcrumb", class: {
                underlined: this.pathStyle === BreadcrumbPathStyle.UNDERLINED,
                semibold: this.pathStyle === BreadcrumbPathStyle.SEMIBOLD,
            } }, h("ol", null, this.renderHomepageNode(this.homepageNode), this.collapsedElements.length ? this.renderOverflowMenu() : "", this.pathsList.map((item) => this.renderNode(item, false)))));
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
        if (this.collapsedElements.length) {
            return (h("li", null, h("z-popover", { class: "hidden-paths-popover", ref: (val) => (this.collapsedElementsRef = val), "bind-to": this.triggerButton, position: PopoverPosition.BOTTOM_RIGHT, closable: true, showArrow: true }, h("div", { class: "popover-content" }, h("z-list", null, h("z-list-group", { size: ListSize.SMALL }, this.collapsedElements.map((item, index, array) => {
                return (h("div", null, h("z-list-element", { clickable: true }, h("a", { class: "text-ellipsis", href: item.path, onClick: (e) => this.handlePreventFollowUrl(e, item), onKeyDown: (e) => this.handleOverflowMenuAccessibility(e) }, item.text)), index < array.length - 1 && h("z-divider", { color: "color-surface03" })));
            }))))), h("button", { "aria-label": "Mostra pi\u00F9 breadcrumb", "aria-haspopup": "true", ref: (el) => (this.triggerButton = el), class: "dots", onClick: () => {
                    this.togglePopover();
                }, onKeyDown: (e) => {
                    handleKeyboardSubmit(e, this.togglePopover.bind(this));
                    setTimeout(() => {
                        this.anchorElements[0].focus();
                    }, 100);
                } }, "...")));
        }
    }
    render() {
        return (h(Host, { key: '0fdd2556f767ddc969bb26ad157149092c28976f', style: { "--line-clamp-popover": `${this.overflowMenuItemRows}` } }, this.viewPortWidth === Device.MOBILE ? this.renderMobileBreadcrumb() : this.renderBreadcrumb()));
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