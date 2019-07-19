import { Component, Prop, h, State, Element, Listen } from "@stencil/core";
import { HeaderLink, HeaderUserData, ListItemBean } from "../../beans";
import { mobileBreakpoint } from "../../constants/breakpoints";

@Component({
  tag: "z-header",
  styleUrl: "styles.css",
  shadow: true
})
export class ZHeader {
  @Prop() editors: string; // lista di immagini del top-nav --> slot
  @Prop() intlink: string; // json per link interni del main-nav, con possibili sottomenu
  @Prop() intlinkdata: string;
  @Prop() extlinkdata: string;
  @Prop() userdata?: string;
  @Prop() ismyz: boolean;
  @State() isLogged: boolean = false;
  @State() isSticky: boolean = false;
  @State() activeMenuItem: HeaderLink;
  @State() currentMenuItem: HeaderLink;
  @State() intMenuData: HeaderLink[];
  @State() isMobile: boolean = true;
  @State() isMenuMobileOpen: boolean = false;
  private extMenuData: HeaderLink[];
  private userData: HeaderUserData;
  private sections: object;
  private readonly topOffset: number = 90;

  @Element() private element: HTMLElement;

  @Listen("scroll", { target: "window", capture: true })
  handleScroll(e): void {
    if (this.isMobile) return;
    const links = this.element.shadowRoot.querySelectorAll(
      ".dropdown-links > a[href^='#']"
    );
    this.handleActiveOnScroll(e, links);
  }

  @Listen("resize", { target: "window" })
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  @Listen("zListItemLinkClick", { capture: true })
  handleZListItemLinkClick(event: CustomEvent): void {
    this.isMenuMobileOpen = false;
    this.handleSubMenuClick(
      event.detail.e,
      event.detail.linkId.replace("link_", "")
    );
  }

  componentWillLoad() {
    this.intMenuData = JSON.parse(this.intlinkdata);
    this.extMenuData = JSON.parse(this.extlinkdata);
    this.activeMenuItem = this.setIntMenuItem();
    this.currentMenuItem = this.setIntMenuItem();
    this.sections = this.getSections(this.intMenuData);
    if (this.userdata) {
      this.userData = JSON.parse(this.userdata);
      console.log(this.userdata, this.userData)
      this.isLogged = this.userData.islogged;
    }
    this.handleResize();
  }

  getSections(intMenuData): object {
    let obj = {};
    if (!intMenuData) return obj;

    intMenuData.forEach(menuItem => {
      if (menuItem.url && !menuItem.url.startsWith("http")) {
        const tmp = document.querySelector(menuItem.url);
        if (tmp) obj[menuItem.id] = tmp;
        obj = { ...obj, ...this.getSections(menuItem.subMenu) };
      }
    });
    return obj;
  }

  handleActiveOnScroll(e, links) {
    links.forEach(link => {
      link.classList.remove("active");

      const currentSection = document.querySelector(link.hash);

      if (
        currentSection
        && currentSection.offsetTop <= e.srcElement.scrollTop + this.topOffset
        && currentSection.offsetHeight + currentSection.offsetTop > e.srcElement.scrollTop + this.topOffset
      ) {
        link.classList.add("active");
      }
    });
  }

  setIntMenuItem(): HeaderLink {
    return (
      this.intMenuData.filter(
        (menu: HeaderLink) => window.location.hash === menu.url
      )[0] || this.intMenuData[0]
    );
  }

  renderTopHeader(): HTMLDivElement {
    if (!this.ismyz) {
      return <div />;
    }

    return (
      <div class="top-header">
        <div class="editors">
          <slot name="editors" />
        </div>
      </div>
    );
  }

  renderLogoDiv(): HTMLDivElement {
    return (
      <div class="logo">
        <z-logo
          link="https://www.zanichelli.it"
          targetblank={true}
          imageurl="../../assets/images/png/zanichelli-logo-2.png"
          imagealt="logo zanichelli"
        />
      </div>
    );
  }

  renderIntMenu(menuItems: HeaderLink[]): HTMLDivElement {
    if (!this.isLogged || !this.ismyz) {
      return <div />;
    }

    return (
      <div id="link-int" class="link-int">
        {menuItems.map(item => this.renderIntMenuItem(item))}
      </div>
    );
  }

  renderIntMenuItem(menuItem: HeaderLink): HTMLSpanElement {
    const { id, name, url } = menuItem;
    return (
      <span>
        <a
          href={url}
          id={id}
          class="menu-item"
          onClick={(e) => {
            this.activeMenuItem = menuItem;
            this.currentMenuItem = menuItem;
            this.handleToggleMobileMenuItem(e, menuItem.id);
          }}
          onMouseEnter={() => {
            this.activeMenuItem = menuItem;
          }}
          onMouseLeave={() => {
            this.activeMenuItem = this.currentMenuItem;
          }}
        >
          <span>{name}</span>
          {menuItem.subMenu ? <i /> : null}
        </a>
        <svg
          height="8"
          width="16"
          class={
            this.activeMenuItem
              ? id !== this.activeMenuItem.id && "hidden"
              : "hidden"
          }
        >
          <polygon points="8,0 16,8 0,8" class="arrow" />
        </svg>
        {this.renderMenuItemsData(menuItem)}
      </span>
    );
  }

  handleToggleMobileMenuItem(e, elementId: string): void {
    if (!this.isMobile) return;
    e.preventDefault()
    this.element.shadowRoot
      .getElementById(elementId)
      .classList.toggle("isopen");
    this.element.shadowRoot
      .getElementById("mobile-dropdown-" + elementId)
      .classList.toggle("visible");
  }

  renderMenuItemsData(menuItem): HTMLSpanElement | null {
    if (!menuItem.subMenu) return null;
    const listItems: ListItemBean[] = menuItem.subMenu.map(
      (item: HeaderLink) => {
        return {
          text: item.name,
          link: item.url,
          listitemid: item.id
        };
      }
    );
    return this.renderMobileSubMenu(listItems, menuItem.id);
  }

  renderMobileSubMenu(menuItems: ListItemBean[], id?: string): HTMLSpanElement {
    return (
      <span class="mobile-dropdown" id={id ? `mobile-dropdown-${id}` : ""}>
        <z-list list={menuItems} />
      </span>
    );
  }

  renderSubMenu(menuItem: HeaderLink): HTMLDivElement {
    if (!menuItem || !menuItem["subMenu"] || !this.isLogged || !this.ismyz) {
      return (
        <div
        id="dropdown-menu"
        class={`dropdown-menu hidden ${this.isSticky && "sticky"}`}
        />
        );
      }
    const active = menuItem.subMenu ? menuItem.subMenu[0] : null;
    return (
      <div
        id="dropdown-menu"
        class={`dropdown-menu ${this.isSticky && "sticky"}`}
      >
        <div class="dropdown-links">
          {menuItem.subMenu.map(
            (item: HeaderLink): HTMLAnchorElement => (
              <a
                class={item.id === active.id ? "active" : ""}
                href={item.url}
                onClick={e => this.handleSubMenuClick(e, item.id)}
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </div>
    );
  }

  handleSubMenuClick(e: MouseEvent, itemId: string): void {
    if (this.sections[itemId]) {
      e.preventDefault();
      window.scrollTo(0, this.sections[itemId].offsetTop - this.topOffset);
    }
  }

  renderExtMenu(menuItems: HeaderLink[]): HTMLDivElement {
    if (!this.isLogged) {
      return <div />;
    }

    return (
      <div id="link-ext" class="link-ext">
        {menuItems.map(
          (menuItem: HeaderLink): HTMLSpanElement => {
            const { id, name, url, icon } = menuItem;
            return (
              <span class={`link-ext-span ${this.ismyz && "myz"}`}>
                <z-link
                  id={id}
                  url={url}
                  label={name}
                  icon={icon}
                  iswhite={this.ismyz ? true : false}
                  target="_blank"
                />
              </span>
            );
          }
        )}
      </div>
    );
  }

  renderLoginDiv(userData: HeaderUserData): HTMLDivElement {
    return (
      <div class="login">
        {this.isLogged ? (
          <z-menu-dropdown
            nomeutente={userData.name}
            menucontent='[{"text":"Profilo", "link":"http://www.zanichelli.it"},{"text":"Esci", "link":"http://www.google.it"}]'
          />
        ) : (
          this.renderLoginButton()
        )}
      </div>
    );
  }

  renderLoginButton() {
    return (
      <z-button label="entra" type="secondary" buttonid="login-button"/>
    );
  }

  renderMobileLoginDiv(userData: HeaderUserData): HTMLDivElement {
    return (
      <div id="mobile-login" class="mobile-login">
        <span>
          <a
            class="menu-item"
            id="user-data"
            href="#home"
            onClick={(e) => this.handleToggleMobileMenuItem(e,"user-data")}
          >
            <span>
              <img src="../assets/images/png/user_transparent.png" />
              {userData.name}
            </span>
            <i />
          </a>
          {this.renderUserData(userData)}
        </span>
      </div>
    );
  }

  renderUserData(userData) {
    if (this.isMobile && !userData) return null;
    const listItems = [
      {
        text: "Profilo",
        link: "http://www.zanichelli.it"
      },
      {
        text: "Esci",
        link: "http://www.google.it"
      }
    ];
    return this.renderMobileSubMenu(listItems, "user-data");
  }

  renderDesktopHeader(): HTMLHeadingElement {
    return (
      <header>
        {this.renderTopHeader()}
        {this.renderMainHeader()}
        {this.renderSubMenu(this.activeMenuItem)}
      </header>
    );
  }

  renderMainHeader(): HTMLDivElement {
    return (
      <div
        id="main-header"
        class={`main-header ${this.isSticky && "sticky"} ${!this.ismyz &&
          "myz-out"}`}
      >
        {this.renderLogoDiv()}
        {this.renderIntMenu(this.intMenuData)}
        {this.renderExtMenu(this.extMenuData)}
        {this.renderLoginDiv(this.userData)}
      </div>
    );
  }

  renderMobileHeader(): HTMLHeadingElement {
    return (
      <header>
        {this.renderMobileMenu()}
        {this.renderMobileMenuContent()}
      </header>
    );
  }

  renderMobileMenu(): HTMLDivElement {
    return (
      <div
        id="mobile-header"
        class={`mobile-header ${!this.ismyz && "myz-out"}`}
      >
        {this.renderLogoDiv()}
        {this.renderMobileMenuToggle()}
      </div>
    );
  }

  renderMobileMenuToggle() {
    if (!this.isLogged) {
      return this.renderLoginButton();
    }

    return (
      <div
        class="menu-mobile"
        id="mobile-menu-wrapper"
        onClick={() => (this.isMenuMobileOpen = !this.isMenuMobileOpen)}
      >
        <div
          class={`menu-toggle ${this.isMenuMobileOpen && "is-active"}`}
          id="mobile-menu"
        >
          <span class="bar" />
          <span class="bar" />
          <span class="bar" />
        </div>
        <span>Menu</span>
      </div>
    );
  }

  renderMobileMenuContent(): HTMLDivElement | null {
    if (!this.isLogged) return null;

    return (
      <div
        id="mobile-content"
        class={`mobile-content ${this.isMenuMobileOpen && "open"} ${!this
          .ismyz && "myz-out"}`}
      >
        {this.renderMobileLoginDiv(this.userData)}
        {this.ismyz && <hr />}
        {this.renderIntMenu(this.intMenuData)}
        <hr />
        {this.renderExtMenu(this.extMenuData)}
        {this.renderBooktabButton()}
      </div>
    );
  }

  renderBooktabButton(): HTMLDivElement {
    return (
      <div id="booktab-button" class="booktab-button">
        <z-button
          label="Scarica la app BookTab"
          type="primary"
          icon="download.png"
          onClick={(e): void => {
            e.preventDefault();
            window.location.href = "https://booktab.it";
          }}
        />
      </div>
    );
  }

  render() {
    return this.isMobile
      ? this.renderMobileHeader()
      : this.renderDesktopHeader();
  }
}
