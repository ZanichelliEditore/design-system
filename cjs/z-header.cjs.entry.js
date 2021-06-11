'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3793b368.js');
const index$1 = require('./index-80c730c5.js');
const breakpoints = require('./breakpoints-62fb2006.js');

const stylesCss = ":host a{cursor:pointer}header{position:sticky;top:0;z-index:99;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;grid-template-areas:\"main-header\";margin-bottom:calc(var(--space-unit) * 6.5);font-family:var(--dashboard-font);font-weight:var(--font-rg)}.main-header{display:grid;grid-template-columns:2fr 2fr 4fr 100px;grid-template-rows:1fr;grid-template-areas:\"logo link-int link-ext login\";grid-area:main-header;grid-column-gap:calc(var(--space-unit) * .5);align-items:center;background-color:var(--bg-grey-900);height:auto;align-items:center;z-index:10}.main-header.myz-out{background-color:var(--bg-white)}.logo{grid-area:logo;padding:6px}z-logo{transform:scale(0.9)}.dropdown-menu{display:none}.dropdown-menu.hidden{visibility:hidden}.dropdown-links{grid-area:dropdown-links;list-style:none;display:block;max-height:32px;margin:0;padding:0}.arrow{fill:var(--text-grey-200)}.dropdown-links>li{list-style:none;display:inline-block;margin:0;padding:0}.dropdown-links>li>a{width:auto;height:auto;color:var(--myz-blue);font-size:14px;letter-spacing:0.18px;line-height:32px;text-decoration:none;margin:var(--space-unit);padding-bottom:calc(var(--space-unit) * .5)}.dropdown-links>li>a:hover,.dropdown-links>li>a.active{color:var(--text-grey-800);border-bottom:2px solid var(--myz-blue)}.mobile-header{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:stretch;align-content:center;align-items:center;width:100%;background-color:var(--bg-grey-900);z-index:inherit;height:52px;position:fixed;top:0px;left:0;z-index:999}.mobile-header.myz-out{background-color:var(--bg-white)}.mobile-header>z-button{margin:0 calc(var(--space-unit) * 2)}.mobile-content{display:flex;flex-direction:column;flex-wrap:nowrap;align-content:center;justify-content:center;align-items:center;width:100%;background-color:var(--bg-grey-900);position:fixed;top:52px;left:0;z-index:999;max-height:0px;overflow:hidden;transition:max-height 1s cubic-bezier(0.46, 0, 1, 0.79)}.mobile-content.open{max-height:100vh;transition:max-height 2s cubic-bezier(0, 0.79, 0.46, 1)}.mobile-content.myz-out{background-color:var(--bg-white)}hr{display:block;position:relative;padding:0;margin:0px calc(var(--space-unit) * 4);height:0;width:calc(100% - 64px);max-height:0;font-size:1px;line-height:0;clear:both;border:none;border-top:1px solid var(--text-grey-700)}.menu-mobile{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;align-content:center;color:var(--bg-white);padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 3);cursor:pointer}.myz-out .menu-mobile{color:var(--text-grey-800)}.menu-toggle{grid-area:menu-toggle;display:flex;flex-direction:column;margin:0 var(--space-unit)}.menu-toggle .bar{width:20px;height:2px;background-color:var(--bg-white);margin:2px auto;transition:all 0.3s ease-in-out}.myz-out .menu-toggle .bar{background-color:var(--text-grey-800)}.menu-toggle:hover{cursor:pointer}#mobile-menu.is-active .bar:nth-child(2){opacity:0}#mobile-menu.is-active .bar:nth-child(1){transform:translateY(6px) rotate(45deg)}#mobile-menu.is-active .bar:nth-child(3){transform:translateY(-6px) rotate(-45deg)}.booktab-button,.mobile-login{overflow:hidden;height:0%;max-height:100%;width:100%;height:100%;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:space-between;align-items:stretch;align-content:stretch;padding:0}.hidden{visibility:hidden}.login{grid-area:login;display:flex;justify-content:flex-end;padding:0 calc(var(--space-unit) * 2)}.login>z-button{color:var(--bg-white);fill:var(--bg-white)}.booktab-button>z-button{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:center;padding:calc(var(--space-unit) * 2) 0px calc(var(--space-unit) * 4) 0px}.link-ext{grid-area:link-ext;overflow:hidden;height:0%;max-height:100%;width:100%;height:100%;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:space-between;align-items:stretch;align-content:stretch;padding:0}.link-ext-span{display:inline-block;width:100%;margin:calc(var(--space-unit) * .5) auto;box-sizing:border-box;margin:0px auto 0px auto;padding:0px calc(var(--space-unit) * 4) 0px calc(var(--space-unit) * 4);line-height:44px}.link-ext-span.myz:hover,.link-ext-span.myz:focus{background:var(--text-grey-800);border-radius:var(--border-radius);cursor:pointer}.link-ext z-link{font-size:12px;font-weight:var(--font-sb)}.link-int{overflow:hidden;max-height:100%;width:100%;height:100%;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:space-between;align-items:stretch;align-content:stretch;padding:0}.link-int>span{width:100%;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;align-content:flex-start}.link-int>span>.menu-item{height:auto;color:var(--bg-white);letter-spacing:0.2px;font-weight:var(--font-sb);font-size:16px;text-decoration:none;outline:none;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:stretch;align-content:stretch;width:100%;box-sizing:border-box;margin:0px auto 0px auto;padding:0px calc(var(--space-unit) * 4) 0px calc(var(--space-unit) * 4);line-height:44px}.link-int>span>.menu-item:hover,.link-int>span>.menu-item:focus{border-radius:0px}.link-int>span>.menu-item>span{white-space:nowrap}.link-int>span>.menu-item>i{padding-top:calc(var(--space-unit) * 2);height:28px;width:24px;text-align:right}.link-int>span:first-child>.menu-item{margin-top:0}.link-int>span>svg{display:none}.link-int>.mobile-dropdown{padding:0 48px}.mobile-login>span{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;align-content:flex-start;fill:white}.mobile-login>span:focus,.mobile-login>span:hover{background:var(--text-grey-800)}.myz-out .mobile-login>span:focus,.myz-out .mobile-login>span:hover{background:none}.mobile-login>span>.menu-item{height:auto;color:var(--bg-white);letter-spacing:0.2px;font-weight:var(--font-sb);font-size:16px;text-decoration:none;outline:none;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:stretch;align-content:stretch;width:100%;box-sizing:border-box;margin:0px auto 0px auto;padding:0px calc(var(--space-unit) * 4) 0px calc(var(--space-unit) * 4);line-height:44px}.myz-out .mobile-login>span>.menu-item{color:var(--text-grey-800)}.mobile-login>span>.menu-item>i{padding-top:calc(var(--space-unit) * 2);height:28px;width:24px;text-align:right}.mobile-login>span>.menu-item>span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mobile-login>span>.menu-item>span>z-icon{padding-right:var(--space-unit);fill:var(--bg-white)}.menu-item>i::before{border-style:solid;border-width:0.12em 0.12em 0 0;content:\" \";display:inline-block;height:0.45em;left:0.16em;position:relative;top:-0.12em;transform:rotate(135deg) scale(1.2);vertical-align:top;width:0.45em;margin-top:2px;margin-left:2px;margin-right:6px;transition:all 0.5s ease}.menu-item.isopen>i::before{top:0.24em;transform:rotate(-45deg) scale(1.2);transition:all 0.5s ease}.mobile-dropdown{background:white;display:block;overflow:hidden;width:100%;box-sizing:border-box;margin:0px auto 0px auto;padding:0px calc(var(--space-unit) * 4) 0px calc(var(--space-unit) * 4);line-height:44px;max-height:0px;transition:max-height 0.3s ease}.mobile-dropdown.visible{max-height:100vh;transition:max-height 0.5s ease}@media only screen and (min-width: 768px){header{grid-template-columns:1fr 0.8fr 1.5fr 1.1fr 0.7fr;grid-template-rows:0.2fr auto;grid-template-areas:\"main-header main-header main-header main-header main-header\" \"dropdown-menu dropdown-menu dropdown-menu dropdown-menu dropdown-menu\";margin-bottom:0}header.myz-out{top:0px;grid-template-rows:1fr}.main-header{display:grid;grid-template-columns:170px auto auto 120px;grid-template-rows:1fr;grid-template-areas:\"logo link-int link-ext login\";grid-area:main-header}.dropdown-menu{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;grid-template-areas:\"dropdown-links\";grid-area:dropdown-menu;grid-column-gap:var(--space-unit);background:var(--bg-grey-200);height:32px;visibility:visible;z-index:9;padding-left:160px}.booktab-button,.mobile-header,.mobile-login,.mobile-dropdown,.menu-mobile{display:none}.link-int{grid-area:link-int;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;align-content:center;max-height:46px;margin-top:calc(var(--space-unit) * .5)}.link-int>span{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:center;align-content:center;width:auto}.link-int>span>.menu-item{width:auto;height:auto;color:var(--bg-white);letter-spacing:0.2px;line-height:14px;font-weight:var(--font-sb);text-decoration:none;outline:none;padding:calc(var(--space-unit) * 1.5)}.link-int>span>svg{display:block}.menu-item>i{display:none}.link-int>span>.menu-item:focus,.link-int>span>.menu-item:hover{background:var(--text-grey-800);border-radius:var(--border-radius);cursor:pointer}.link-int>span>.menu-item::-moz-focus-inner{border:0}.link-int>span>.menu-item:focus+svg{visibility:visible}.link-ext{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end;align-items:center;align-content:center;max-height:46px}.link-ext-span{width:auto;line-height:14px;margin:var(--space-unit);padding:calc(var(--space-unit) * .5) var(--space-unit)}}@media only screen and (min-width: 1152px){.main-header{grid-template-columns:170px auto auto 180px}}";

const ZHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    this.isMobile = window.innerWidth <= breakpoints.mobileBreakpoint;
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
  renderLogoDiv() {
    return (index.h("div", { class: "logo" }, index.h("z-logo", { link: this.logolink ? this.logolink : null, targetblank: true, width: 144, height: 36, imagealt: this.imagealt })));
  }
  renderIntMenu(menuItems) {
    if (!this.isLogged || !this.ismyz)
      return;
    return (index.h("div", { id: "link-int", class: "link-int" }, menuItems.map(item => this.renderIntMenuItem(item))));
  }
  renderIntMenuItem(menuItem) {
    const { id, label, link } = menuItem;
    return (index.h("span", null, index.h("a", { href: link ? link : null, id: id, class: "menu-item", onClick: () => {
        this.activeMenuItem = this.currentMenuItem = menuItem;
        this.activeintlinkid = menuItem.id;
        if (menuItem.subMenu)
          this.handleToggleMobileMenuItem(menuItem.id);
      }, onMouseEnter: () => {
        this.activeMenuItem = menuItem;
      }, onMouseLeave: () => {
        this.activeMenuItem = this.currentMenuItem;
      }, role: link ? "link" : "button", tabindex: this.getIntMenuItemTabindex(menuItem) }, index.h("span", null, label), menuItem.subMenu ? index.h("i", null) : null), index.h("svg", { height: "8", width: "16", class: (!this.activeMenuItem || this.activeMenuItem.id !== id) ? "hidden" : "" }, index.h("polygon", { points: "8,0 16,8 0,8", class: "arrow" })), this.isMobile && this.renderMenuItemsData(menuItem)));
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
    return (index.h("span", { class: "mobile-dropdown", id: id ? `mobile-dropdown-${id}` : "" }, index.h("z-list", { list: menuItems })));
  }
  renderSubMenu(menuItem) {
    if (!this.ismyz || !this.isLogged)
      return;
    if (!menuItem || !menuItem["subMenu"]) {
      return index.h("div", { id: "dropdown-menu", class: `dropdown-menu hidden` });
    }
    return (index.h("div", { id: "dropdown-menu", class: `dropdown-menu` }, index.h("ul", { class: "dropdown-links" }, menuItem.subMenu.map((item) => (index.h("li", null, index.h("a", { id: item.id, class: item.id === this.activesublinkid ? "active" : "", href: item.link ? item.link : null, role: item.link ? "link" : "button", tabindex: this.getIntMenuItemTabindex(menuItem) }, item.label)))))));
  }
  renderExtMenu(menuItems) {
    if (!this.isLogged)
      return index.h("div", null);
    return (index.h("div", { id: "link-ext", class: "link-ext" }, menuItems.map((menuItem) => {
      const { id, label, link, icon } = menuItem;
      return (index.h("span", { class: `link-ext-span${this.ismyz ? " myz" : ""}` }, index.h("z-link", { id: id, htmlid: id, href: link, icon: icon, iswhite: !!this.ismyz, target: "_blank", htmltabindex: 10 }, label)));
    })));
  }
  renderLoginDiv(userData) {
    return (index.h("div", { class: "login" }, this.isLogged ? (index.h("z-menu-dropdown", { nomeutente: userData.name, menucontent: JSON.stringify(userData.userlinks) })) : (this.renderLoginButton())));
  }
  renderLoginButton() {
    if (this.hideloginbutton) {
      return;
    }
    return (index.h("z-button", { htmlid: "login-button", variant: this.ismyz ? index$1.ButtonVariantEnum.secondary : index$1.ButtonVariantEnum.tertiary, icon: "login", issmall: true }, "entra"));
  }
  renderMobileLoginDiv(userData) {
    return (index.h("div", { id: "mobile-login", class: "mobile-login" }, index.h("span", null, index.h("a", { class: "menu-item", id: "user-data", onClick: () => this.handleToggleMobileMenuItem("user-data"), role: "button" }, index.h("span", null, index.h("z-icon", { name: "user-avatar", height: 16, width: 16 }), userData.name), index.h("i", null)), this.renderUserData(userData))));
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
    return (index.h("header", { class: !this.ismyz ? "myz-out" : "" }, this.renderMainHeader(), this.renderSubMenu(this.activeMenuItem)));
  }
  renderMainHeader() {
    return (index.h("div", { id: "main-header", class: `main-header${this.ismyz ? "" : " myz-out"}` }, this.renderLogoDiv(), this.renderIntMenu(this.intMenuData), this.renderExtMenu(this.extMenuData), this.renderLoginDiv(this.userData)));
  }
  renderMobileHeader() {
    return (index.h("header", null, this.renderMobileMenu(), this.renderMobileMenuContent()));
  }
  renderMobileMenu() {
    return (index.h("div", { id: "mobile-header", class: `mobile-header${this.ismyz ? "" : " myz-out"}` }, this.renderLogoDiv(), this.renderMobileMenuToggle()));
  }
  renderMobileMenuToggle() {
    if (!this.isLogged)
      return this.renderLoginButton();
    return (index.h("div", { class: "menu-mobile", id: "mobile-menu-wrapper", onClick: () => (this.isMenuMobileOpen = !this.isMenuMobileOpen) }, index.h("div", { class: `menu-toggle${this.isMenuMobileOpen ? " is-active" : ""}`, id: "mobile-menu" }, index.h("span", { class: "bar" }), index.h("span", { class: "bar" }), index.h("span", { class: "bar" })), index.h("span", null, "Menu")));
  }
  renderMobileMenuContent() {
    if (!this.isLogged)
      return null;
    return (index.h("div", { id: "mobile-content", class: `mobile-content${this.isMenuMobileOpen ? " open" : ""}${this.ismyz ? "" : " myz-out"}` }, this.renderMobileLoginDiv(this.userData), this.ismyz && index.h("hr", null), this.renderIntMenu(this.intMenuData), index.h("hr", null), this.renderExtMenu(this.extMenuData)));
  }
  render() {
    return this.isMobile
      ? this.renderMobileHeader()
      : this.renderDesktopHeader();
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "activeintlinkid": ["activeIntLinkChange"]
  }; }
};
ZHeader.style = stylesCss;

exports.z_header = ZHeader;
