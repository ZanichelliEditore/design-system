import { r as registerInstance, h, g as getElement } from './index-a2ca4b97.js';
import { B as ButtonVariant, c as ButtonSize } from './index-9d028352.js';
import { m as mobileBreakpoint, t as tabletBreakpoint } from './breakpoints-c386984e.js';

const stylesCss = ":host a{cursor:pointer}header{position:sticky;z-index:99;top:0;display:grid;margin-bottom:calc(var(--space-unit) * 6.5);font-family:var(--dashboard-font);font-weight:var(--font-rg);grid-template:1fr / 1fr;grid-template-areas:\"main-header\"}.main-header{z-index:10;display:grid;height:auto;align-items:center;background-color:var(--bg-grey-900);grid-area:main-header;grid-column-gap:calc(var(--space-unit) * 0.5);grid-template:1fr / 2fr 2fr 4fr 100px;grid-template-areas:\"logo link-int link-ext login\"}.main-header.myz-out{background-color:var(--bg-white)}.logo{padding:6px;grid-area:logo}z-logo{transform:scale(0.9)}.dropdown-menu{display:none}.dropdown-menu.hidden{visibility:hidden}.dropdown-links{display:block;max-height:32px;padding:0;margin:0;grid-area:dropdown-links;list-style:none}.arrow{fill:var(--text-grey-200)}.dropdown-links>li{display:inline-block;padding:0;margin:0;list-style:none}.dropdown-links>li>a{width:auto;height:auto;padding-bottom:calc(var(--space-unit) * 0.5);margin:var(--space-unit);color:var(--myz-blue);font-size:14px;letter-spacing:0.18px;line-height:32px;text-decoration:none}.dropdown-links>li>a:hover,.dropdown-links>li>a.active{border-bottom:2px solid var(--myz-blue);color:var(--text-grey-800)}.mobile-header{position:fixed;z-index:inherit;z-index:999;top:0;left:0;display:flex;width:100%;height:52px;flex-flow:row nowrap;align-content:center;align-items:stretch;align-items:center;justify-content:space-between;background-color:var(--bg-grey-900)}.mobile-header.myz-out{background-color:var(--bg-white)}.mobile-header>z-button{margin:0 calc(var(--space-unit) * 2)}.mobile-content{position:fixed;z-index:999;top:52px;left:0;display:flex;overflow:hidden;width:100%;max-height:0;flex-flow:column nowrap;align-content:center;align-items:center;justify-content:center;background-color:var(--bg-grey-900);transition:max-height 1s cubic-bezier(0.46, 0, 1, 0.79)}.mobile-content.open{max-height:100vh;transition:max-height 2s cubic-bezier(0, 0.79, 0.46, 1)}.mobile-content.myz-out{background-color:var(--bg-white)}hr{position:relative;display:block;width:calc(100% - 64px);height:0;max-height:0;padding:0;border:none;border-top:1px solid var(--text-grey-700);margin:0 calc(var(--space-unit) * 4);clear:both;font-size:1px;line-height:0}.menu-mobile{display:flex;flex-flow:row nowrap;align-content:center;align-items:center;justify-content:flex-start;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 3);color:var(--bg-white);cursor:pointer}.myz-out .menu-mobile{color:var(--text-grey-800)}.menu-toggle{display:flex;flex-direction:column;margin:0 var(--space-unit);grid-area:menu-toggle}.menu-toggle .bar{width:20px;height:2px;margin:2px auto;background-color:var(--bg-white);transition:all 0.3s ease-in-out}.myz-out .menu-toggle .bar{background-color:var(--text-grey-800)}.menu-toggle:hover{cursor:pointer}#mobile-menu.is-active .bar:nth-child(2){opacity:0}#mobile-menu.is-active .bar:nth-child(1){transform:translateY(6px) rotate(45deg)}#mobile-menu.is-active .bar:nth-child(3){transform:translateY(-6px) rotate(-45deg)}.booktab-button,.mobile-login{display:flex;overflow:hidden;width:100%;height:0%;height:100%;max-height:100%;flex-flow:column nowrap;align-content:stretch;align-items:stretch;justify-content:space-between;padding:0}.hidden{visibility:hidden}.login{display:flex;justify-content:flex-end;padding:0 calc(var(--space-unit) * 2);grid-area:login}.login>z-button{color:var(--bg-white);fill:var(--bg-white)}.booktab-button>z-button{display:flex;flex-flow:row nowrap;align-content:center;align-items:center;justify-content:center;padding:calc(var(--space-unit) * 2) 0 calc(var(--space-unit) * 4) 0}.link-ext{display:flex;overflow:hidden;width:100%;height:0%;height:100%;max-height:100%;flex-flow:column nowrap;align-content:stretch;align-items:stretch;justify-content:space-between;padding:0;grid-area:link-ext}.link-ext-span{display:inline-block;width:100%;box-sizing:border-box;padding:0 calc(var(--space-unit) * 4) 0 calc(var(--space-unit) * 4);margin:calc(var(--space-unit) * 0.5) auto;margin:0 auto;line-height:44px}.link-ext-span.myz:hover,.link-ext-span.myz:focus{background:var(--text-grey-800);border-radius:var(--border-radius);cursor:pointer}.link-ext z-link{font-size:12px;font-weight:var(--font-sb)}.link-int{display:flex;overflow:hidden;width:100%;height:100%;max-height:100%;flex-flow:column nowrap;align-content:stretch;align-items:stretch;justify-content:space-between;padding:0}.link-int>span{display:flex;width:100%;flex-flow:column nowrap;align-content:flex-start;align-items:stretch;justify-content:flex-start}.link-int>span>.menu-item{display:flex;width:100%;height:auto;box-sizing:border-box;flex-flow:row nowrap;align-content:stretch;align-items:stretch;justify-content:space-between;padding:0 calc(var(--space-unit) * 4) 0 calc(var(--space-unit) * 4);margin:0 auto;color:var(--bg-white);font-size:16px;font-weight:var(--font-sb);letter-spacing:0.2px;line-height:44px;outline:none;text-decoration:none}.link-int>span>.menu-item:hover,.link-int>span>.menu-item:focus{border-radius:0}.link-int>span>.menu-item>span{white-space:nowrap}.link-int>span>.menu-item>i{width:24px;height:28px;padding-top:calc(var(--space-unit) * 2);text-align:right}.link-int>span:first-child>.menu-item{margin-top:0}.link-int>span>svg{display:none}.link-int>.mobile-dropdown{padding:0 48px}.mobile-login>span{display:flex;flex-flow:column nowrap;align-content:flex-start;align-items:stretch;justify-content:flex-start;fill:white}.mobile-login>span:focus,.mobile-login>span:hover{background:var(--text-grey-800)}.myz-out .mobile-login>span:focus,.myz-out .mobile-login>span:hover{background:none}.mobile-login>span>.menu-item{display:flex;width:100%;height:auto;box-sizing:border-box;flex-flow:row nowrap;align-content:stretch;align-items:stretch;justify-content:space-between;padding:0 calc(var(--space-unit) * 4) 0 calc(var(--space-unit) * 4);margin:0 auto;color:var(--bg-white);font-size:16px;font-weight:var(--font-sb);letter-spacing:0.2px;line-height:44px;outline:none;text-decoration:none}.myz-out .mobile-login>span>.menu-item{color:var(--text-grey-800)}.mobile-login>span>.menu-item>i{width:24px;height:28px;padding-top:calc(var(--space-unit) * 2);text-align:right}.mobile-login>span>.menu-item>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mobile-login>span>.menu-item>span>z-icon{padding-right:var(--space-unit);fill:var(--bg-white)}.menu-item>i::before{position:relative;top:-0.12em;left:0.16em;display:inline-block;width:0.45em;height:0.45em;border-width:0.12em 0.12em 0 0;border-style:solid;margin-top:2px;margin-right:6px;margin-left:2px;content:\" \";transform:rotate(135deg) scale(1.2);transition:all 0.5s ease;vertical-align:top}.menu-item.isopen>i::before{top:0.24em;transform:rotate(-45deg) scale(1.2);transition:all 0.5s ease}.mobile-dropdown{display:block;overflow:hidden;width:100%;max-height:0;box-sizing:border-box;padding:0 calc(var(--space-unit) * 4) 0 calc(var(--space-unit) * 4);margin:0 auto;background:white;line-height:44px;transition:max-height 0.3s ease}.mobile-dropdown.visible{max-height:100vh;transition:max-height 0.5s ease}@media only screen and (min-width: 768px){header{margin-bottom:0;grid-template:0.2fr auto / 1fr 0.8fr 1.5fr 1.1fr 0.7fr;grid-template-areas:\"main-header main-header main-header main-header main-header\" \"dropdown-menu dropdown-menu dropdown-menu dropdown-menu dropdown-menu\"}header.myz-out{top:0;grid-template-rows:1fr}.main-header{display:grid;grid-area:main-header;grid-template:1fr / 170px auto auto 120px;grid-template-areas:\"logo link-int link-ext login\"}.dropdown-menu{z-index:9;display:grid;height:32px;padding-left:160px;background:var(--bg-grey-200);grid-area:dropdown-menu;grid-column-gap:var(--space-unit);grid-template:1fr / 1fr;grid-template-areas:\"dropdown-links\";visibility:visible}.booktab-button,.mobile-header,.mobile-login,.mobile-dropdown,.menu-mobile{display:none}.link-int{display:flex;max-height:46px;flex-flow:row nowrap;align-content:center;align-items:center;justify-content:flex-start;margin-top:calc(var(--space-unit) * 0.5);grid-area:link-int}.link-int>span{display:flex;width:auto;flex-flow:column nowrap;align-content:center;align-items:center;justify-content:flex-start}.link-int>span>.menu-item{width:auto;height:auto;padding:calc(var(--space-unit) * 1.5);color:var(--bg-white);font-weight:var(--font-sb);letter-spacing:0.2px;line-height:14px;outline:none;text-decoration:none}.link-int>span>svg{display:block}.menu-item>i{display:none}.link-int>span>.menu-item:focus,.link-int>span>.menu-item:hover{background:var(--text-grey-800);border-radius:var(--border-radius);cursor:pointer}.link-int>span>.menu-item::-moz-focus-inner{border:0}.link-int>span>.menu-item:focus+svg{visibility:visible}.link-ext{display:flex;max-height:46px;flex-flow:row nowrap;align-content:center;align-items:center;justify-content:flex-end}.link-ext-span{width:auto;padding:calc(var(--space-unit) * 0.5) var(--space-unit);margin:var(--space-unit);line-height:14px}}@media only screen and (min-width: 1152px){.main-header{grid-template-columns:170px auto auto 180px}}";

const ZMyzTopbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      this.intMenuData = typeof this.intlinkdata === "string" ? JSON.parse(this.intlinkdata) : this.intlinkdata;
    }
    this.activeMenuItem = this.currentMenuItem = this.intMenuData.find((item) => item.id === this.activeintlinkid);
    if (this.extlinkdata) {
      this.extMenuData = typeof this.extlinkdata === "string" ? JSON.parse(this.extlinkdata) : this.extlinkdata;
    }
    if (this.userdata) {
      this.userData = typeof this.userdata === "string" ? JSON.parse(this.userdata) : this.userdata;
      this.isLogged = this.userData.islogged;
    }
    this.handleResize();
  }
  renderLogoDiv() {
    return (h("div", { class: "logo" }, h("z-logo", { link: this.logolink ? this.logolink : null, "target-blank": true, width: 144, height: 36, "image-alt": this.imagealt })));
  }
  renderIntMenu(menuItems) {
    if (!this.isLogged || !this.ismyz) {
      return;
    }
    return (h("div", { id: "link-int", class: "link-int" }, menuItems.map((item) => this.renderIntMenuItem(item))));
  }
  renderIntMenuItem(menuItem) {
    const { id, label, link } = menuItem;
    return (h("span", null, h("a", { href: link ? link : null, id: id, class: "menu-item", onClick: () => {
        this.activeMenuItem = this.currentMenuItem = menuItem;
        this.activeintlinkid = menuItem.id;
        if (menuItem.subMenu) {
          this.handleToggleMobileMenuItem(menuItem.id);
        }
      }, onMouseEnter: () => {
        this.activeMenuItem = menuItem;
      }, onMouseLeave: () => {
        this.activeMenuItem = this.currentMenuItem;
      }, role: link ? "link" : "button", tabindex: this.getIntMenuItemTabindex(menuItem) }, h("span", null, label), menuItem.subMenu ? h("i", null) : null), h("svg", { height: "8", width: "16", class: {
        hidden: !this.activeMenuItem || this.activeMenuItem.id !== id,
      } }, h("polygon", { points: "8,0 16,8 0,8", class: "arrow" })), this.isMobile && this.renderMenuItemsData(menuItem)));
  }
  getIntMenuItemTabindex(item) {
    return this.intMenuData.indexOf(item) + 1;
  }
  handleToggleMobileMenuItem(elementId) {
    if (!this.isMobile) {
      return;
    }
    this.element.shadowRoot.querySelector(`#${elementId}`).classList.toggle("isopen");
    this.element.shadowRoot.querySelector("#mobile-dropdown-" + elementId).classList.toggle("visible");
  }
  renderMenuItemsData(menuItem) {
    if (!menuItem.subMenu) {
      return null;
    }
    const listItems = menuItem.subMenu.map((item) => {
      return {
        id: item.id,
        text: item.label,
        link: item.link,
        listitemid: item.id,
      };
    });
    return this.renderMobileSubMenu(listItems, menuItem.id);
  }
  renderMobileSubMenu(menuItems, id) {
    return (h("span", { class: "mobile-dropdown", id: id ? `mobile-dropdown-${id}` : "" }, h("z-myz-list", { list: menuItems })));
  }
  renderSubMenu(menuItem) {
    if (!this.ismyz || !this.isLogged) {
      return;
    }
    if (!menuItem || !menuItem.subMenu) {
      return (h("div", { id: "dropdown-menu", class: `dropdown-menu hidden` }));
    }
    return (h("div", { id: "dropdown-menu", class: `dropdown-menu` }, h("ul", { class: "dropdown-links" }, menuItem.subMenu.map((item) => (h("li", null, h("a", { id: item.id, class: item.id === this.activesublinkid ? "active" : "", href: item.link ? item.link : null, role: item.link ? "link" : "button", tabindex: this.getIntMenuItemTabindex(menuItem) }, item.label)))))));
  }
  renderExtLinksIcons(icon) {
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    const hideIcons = width > mobileBreakpoint && width < tabletBreakpoint;
    if (!hideIcons) {
      return { icon };
    }
  }
  renderExtMenu(menuItems) {
    if (!this.isLogged) {
      return h("div", null);
    }
    return (h("div", { id: "link-ext", class: "link-ext" }, menuItems.map((menuItem) => {
      const { id, label, link, icon } = menuItem;
      return (h("span", { class: `link-ext-span${this.ismyz ? " myz" : ""}` }, h("z-link", Object.assign({ id: id, htmlid: id, href: link, iswhite: !!this.ismyz, target: "_blank", htmltabindex: 10 }, this.renderExtLinksIcons(icon)), label)));
    })));
  }
  renderLoginDiv(userData) {
    return (h("div", { class: "login" }, this.isLogged ? (h("z-menu-dropdown", { nomeutente: userData.name, menucontent: JSON.stringify(userData.userlinks) })) : (this.renderLoginButton())));
  }
  renderLoginButton() {
    if (this.hideloginbutton) {
      return;
    }
    return (h("z-button", { htmlid: "login-button", variant: this.ismyz ? ButtonVariant.SECONDARY : ButtonVariant.TERTIARY, icon: "login", size: ButtonSize.SMALL }, "entra"));
  }
  renderMobileLoginDiv(userData) {
    return (h("div", { id: "mobile-login", class: "mobile-login" }, h("span", null, h("a", { class: "menu-item", id: "user-data", onClick: () => this.handleToggleMobileMenuItem("user-data"), role: "button" }, h("span", null, h("z-icon", { name: "user-avatar", height: 16, width: 16 }), userData.name), h("i", null)), this.renderUserData(userData))));
  }
  renderUserData(userData) {
    if (this.isMobile && !userData) {
      return null;
    }
    const listItems = userData.userlinks.map((item) => {
      return {
        text: item.label,
        link: item.link,
        icon: item.icon,
        listitemid: item.id,
      };
    });
    return this.renderMobileSubMenu(listItems, "user-data");
  }
  renderDesktopHeader() {
    return (h("header", { class: !this.ismyz ? "myz-out" : "" }, this.renderMainHeader(), this.renderSubMenu(this.activeMenuItem)));
  }
  renderMainHeader() {
    return (h("div", { id: "main-header", class: {
        "main-header": true,
        "myz-out": !this.ismyz,
      } }, this.renderLogoDiv(), this.renderIntMenu(this.intMenuData), this.renderExtMenu(this.extMenuData), this.renderLoginDiv(this.userData)));
  }
  renderMobileHeader() {
    return (h("header", null, this.renderMobileMenu(), this.renderMobileMenuContent()));
  }
  renderMobileMenu() {
    return (h("div", { id: "mobile-header", class: `mobile-header${this.ismyz ? "" : " myz-out"}` }, this.renderLogoDiv(), this.renderMobileMenuToggle()));
  }
  renderMobileMenuToggle() {
    if (!this.isLogged) {
      return this.renderLoginButton();
    }
    return (h("div", { class: "menu-mobile", id: "mobile-menu-wrapper", onClick: () => (this.isMenuMobileOpen = !this.isMenuMobileOpen) }, h("div", { class: `menu-toggle${this.isMenuMobileOpen ? " is-active" : ""}`, id: "mobile-menu" }, h("span", { class: "bar" }), h("span", { class: "bar" }), h("span", { class: "bar" })), h("span", null, "Menu")));
  }
  renderMobileMenuContent() {
    if (!this.isLogged) {
      return;
    }
    return (h("div", { id: "mobile-content", class: {
        "mobile-content": true,
        "open": this.isMenuMobileOpen,
        "myz-out": !this.ismyz,
      } }, this.renderMobileLoginDiv(this.userData), this.ismyz && h("hr", null), this.renderIntMenu(this.intMenuData), h("hr", null), this.renderExtMenu(this.extMenuData)));
  }
  render() {
    return this.isMobile ? this.renderMobileHeader() : this.renderDesktopHeader();
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "activeintlinkid": ["activeIntLinkChange"]
  }; }
};
ZMyzTopbar.style = stylesCss;

export { ZMyzTopbar as z_myz_topbar };
