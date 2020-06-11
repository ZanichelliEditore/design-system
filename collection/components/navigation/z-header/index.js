import { Component, Prop, h, State, Element, Listen, Watch } from "@stencil/core";
import { ButtonVariantEnum } from "../../../beans";
import { mobileBreakpoint } from "../../../constants/breakpoints";
/**
 * @slot editors - top menu editors images bar (only with ismyz prop === true)
 */
export class ZHeader {
    constructor() {
        this.isMobile = true;
        this.isMenuMobileOpen = false;
        this.intMenuData = [];
        this.extMenuData = [];
        this.isLogged = false;
    }
    activeIntLinkChange(newValue) {
        this.activeMenuItem = this.currentMenuItem = this.intMenuData.find((item) => item.id === newValue);
    }
    handleResize() {
        this.isMobile = window.innerWidth <= mobileBreakpoint;
    }
    handleZListItemLinkClick() {
        this.isMenuMobileOpen = false;
    }
    handleZListItemClick() {
        this.isMenuMobileOpen = false;
    }
    componentWillLoad() {
        if (this.intlinkdata) {
            this.intMenuData =
                typeof this.intlinkdata === "string"
                    ? JSON.parse(this.intlinkdata)
                    : this.intlinkdata;
        }
        this.activeMenuItem = this.currentMenuItem = this.intMenuData.find((item) => item.id === this.activeintlinkid);
        if (this.extlinkdata) {
            this.extMenuData =
                typeof this.extlinkdata === "string"
                    ? JSON.parse(this.extlinkdata)
                    : this.extlinkdata;
        }
        if (this.userdata) {
            this.userData =
                typeof this.userdata === "string"
                    ? JSON.parse(this.userdata)
                    : this.userdata;
            this.isLogged = this.userData.islogged;
        }
        this.handleResize();
    }
    renderTopHeader() {
        if (!this.ismyz)
            return;
        return (h("div", { class: "top-header" },
            h("div", { class: "editors" },
                h("slot", { name: "editors" }))));
    }
    renderLogoDiv() {
        return (h("div", { class: "logo" },
            h("z-logo", { link: this.logolink ? this.logolink : null, targetblank: true, width: 144, height: 36, imagealt: this.imagealt })));
    }
    renderIntMenu(menuItems) {
        if (!this.isLogged || !this.ismyz)
            return;
        return (h("div", { id: "link-int", class: "link-int" }, menuItems.map(item => this.renderIntMenuItem(item))));
    }
    renderIntMenuItem(menuItem) {
        const { id, label, link } = menuItem;
        return (h("span", null,
            h("a", { href: link ? link : null, id: id, class: "menu-item", onClick: () => {
                    this.activeMenuItem = this.currentMenuItem = menuItem;
                    this.activeintlinkid = menuItem.id;
                    if (menuItem.subMenu)
                        this.handleToggleMobileMenuItem(menuItem.id);
                }, onMouseEnter: () => {
                    this.activeMenuItem = menuItem;
                }, onMouseLeave: () => {
                    this.activeMenuItem = this.currentMenuItem;
                }, role: link ? "link" : "button", tabindex: this.getIntMenuItemTabindex(menuItem) },
                h("span", null, label),
                menuItem.subMenu ? h("i", null) : null),
            h("svg", { height: "8", width: "16", class: this.activeMenuItem
                    ? id !== this.activeMenuItem.id && "hidden"
                    : "hidden" },
                h("polygon", { points: "8,0 16,8 0,8", class: "arrow" })),
            this.isMobile && this.renderMenuItemsData(menuItem)));
    }
    getIntMenuItemTabindex(item) {
        return this.intMenuData.indexOf(item) + 1;
    }
    handleToggleMobileMenuItem(elementId) {
        if (!this.isMobile)
            return;
        this.element.shadowRoot
            .getElementById(elementId)
            .classList.toggle("isopen");
        this.element.shadowRoot
            .getElementById("mobile-dropdown-" + elementId)
            .classList.toggle("visible");
    }
    renderMenuItemsData(menuItem) {
        if (!menuItem.subMenu)
            return null;
        const listItems = menuItem.subMenu.map((item) => {
            return {
                id: item.id,
                text: item.label,
                link: item.link,
                listitemid: item.id
            };
        });
        return this.renderMobileSubMenu(listItems, menuItem.id);
    }
    renderMobileSubMenu(menuItems, id) {
        return (h("span", { class: "mobile-dropdown", id: id ? `mobile-dropdown-${id}` : "" },
            h("z-list", { list: menuItems })));
    }
    renderSubMenu(menuItem) {
        if (!this.ismyz || !this.isLogged)
            return;
        if (!menuItem || !menuItem["subMenu"]) {
            return h("div", { id: "dropdown-menu", class: `dropdown-menu hidden` });
        }
        return (h("div", { id: "dropdown-menu", class: `dropdown-menu` },
            h("ul", { class: "dropdown-links" }, menuItem.subMenu.map((item) => (h("li", null,
                h("a", { id: item.id, class: item.id === this.activesublinkid ? "active" : "", href: item.link ? item.link : null, role: item.link ? "link" : "button", tabindex: this.getIntMenuItemTabindex(menuItem) }, item.label)))))));
    }
    renderExtMenu(menuItems) {
        if (!this.isLogged)
            return h("div", null);
        return (h("div", { id: "link-ext", class: "link-ext" }, menuItems.map((menuItem) => {
            const { id, label, link, icon } = menuItem;
            return (h("span", { class: `link-ext-span ${this.ismyz && "myz"}` },
                h("z-link", { id: id, htmlid: id, href: link, icon: icon, iswhite: this.ismyz ? true : false, target: "_blank", htmltabindex: 10 }, label)));
        })));
    }
    renderLoginDiv(userData) {
        return (h("div", { class: "login" }, this.isLogged ? (h("z-menu-dropdown", { nomeutente: userData.name, menucontent: JSON.stringify(userData.userlinks) })) : (this.renderLoginButton())));
    }
    renderLoginButton() {
        return (h("z-button", { htmlid: "login-button", variant: this.ismyz ? ButtonVariantEnum.secondary : ButtonVariantEnum.tertiary, icon: "enter", issmall: true }, "entra"));
    }
    renderMobileLoginDiv(userData) {
        return (h("div", { id: "mobile-login", class: "mobile-login" },
            h("span", null,
                h("a", { class: "menu-item", id: "user-data", onClick: () => this.handleToggleMobileMenuItem("user-data"), role: "button" },
                    h("span", null,
                        h("z-icon", { name: "user", height: 16, width: 16 }),
                        userData.name),
                    h("i", null)),
                this.renderUserData(userData))));
    }
    renderUserData(userData) {
        if (this.isMobile && !userData)
            return null;
        const listItems = userData.userlinks.map((item) => {
            return {
                text: item.label,
                link: item.link,
                icon: item.icon,
                listitemid: item.id
            };
        });
        return this.renderMobileSubMenu(listItems, "user-data");
    }
    renderDesktopHeader() {
        return (h("header", { class: `${!this.ismyz && "myz-out"}` },
            this.renderTopHeader(),
            this.renderMainHeader(),
            this.renderSubMenu(this.activeMenuItem)));
    }
    renderMainHeader() {
        return (h("div", { id: "main-header", class: `main-header ${!this.ismyz && "myz-out"}` },
            this.renderLogoDiv(),
            this.renderIntMenu(this.intMenuData),
            this.renderExtMenu(this.extMenuData),
            this.renderLoginDiv(this.userData)));
    }
    renderMobileHeader() {
        return (h("header", null,
            this.renderMobileMenu(),
            this.renderMobileMenuContent()));
    }
    renderMobileMenu() {
        return (h("div", { id: "mobile-header", class: `mobile-header ${!this.ismyz && "myz-out"}` },
            this.renderLogoDiv(),
            this.renderMobileMenuToggle()));
    }
    renderMobileMenuToggle() {
        if (!this.isLogged)
            return this.renderLoginButton();
        return (h("div", { class: "menu-mobile", id: "mobile-menu-wrapper", onClick: () => (this.isMenuMobileOpen = !this.isMenuMobileOpen) },
            h("div", { class: `menu-toggle ${this.isMenuMobileOpen && "is-active"}`, id: "mobile-menu" },
                h("span", { class: "bar" }),
                h("span", { class: "bar" }),
                h("span", { class: "bar" })),
            h("span", null, "Menu")));
    }
    renderMobileMenuContent() {
        if (!this.isLogged)
            return null;
        return (h("div", { id: "mobile-content", class: `mobile-content ${this.isMenuMobileOpen && "open"} ${!this
                .ismyz && "myz-out"}` },
            this.renderMobileLoginDiv(this.userData),
            this.ismyz && h("hr", null),
            this.renderIntMenu(this.intMenuData),
            h("hr", null),
            this.renderExtMenu(this.extMenuData)));
    }
    render() {
        return this.isMobile
            ? this.renderMobileHeader()
            : this.renderDesktopHeader();
    }
    static get is() { return "z-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "intlinkdata": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | MenuItem[]",
                "resolved": "MenuItem[] | string",
                "references": {
                    "MenuItem": {
                        "location": "import",
                        "path": "../../../beans"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "data to fill internal navigation links"
            },
            "attribute": "intlinkdata",
            "reflect": false
        },
        "extlinkdata": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | MenuItem[]",
                "resolved": "MenuItem[] | string",
                "references": {
                    "MenuItem": {
                        "location": "import",
                        "path": "../../../beans"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "data to fill external navigation links"
            },
            "attribute": "extlinkdata",
            "reflect": false
        },
        "userdata": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | HeaderUserData",
                "resolved": "string | { islogged: boolean; id?: number; name?: string; usergroup: number; userlinks: MenuItem[]; }",
                "references": {
                    "HeaderUserData": {
                        "location": "import",
                        "path": "../../../beans"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "data to fill user dropdown menu (optional)"
            },
            "attribute": "userdata",
            "reflect": false
        },
        "ismyz": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "graphic flag to set myzanichelli style"
            },
            "attribute": "ismyz",
            "reflect": false
        },
        "logolink": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "url to attach to logo (optional)"
            },
            "attribute": "logolink",
            "reflect": false
        },
        "imagealt": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "alternative logo title text (optional)"
            },
            "attribute": "imagealt",
            "reflect": false
        },
        "activeintlinkid": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "set current active menu link (optional)"
            },
            "attribute": "activeintlinkid",
            "reflect": false
        },
        "activesublinkid": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "set current active sub menu link (optional)"
            },
            "attribute": "activesublinkid",
            "reflect": false
        }
    }; }
    static get states() { return {
        "activeMenuItem": {},
        "currentMenuItem": {},
        "isMobile": {},
        "isMenuMobileOpen": {}
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "activeintlinkid",
            "methodName": "activeIntLinkChange"
        }]; }
    static get listeners() { return [{
            "name": "resize",
            "method": "handleResize",
            "target": "window",
            "capture": false,
            "passive": true
        }, {
            "name": "zListItemLinkClick",
            "method": "handleZListItemLinkClick",
            "target": undefined,
            "capture": true,
            "passive": false
        }, {
            "name": "zListItemClick",
            "method": "handleZListItemClick",
            "target": undefined,
            "capture": true,
            "passive": false
        }]; }
}
