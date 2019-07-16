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
  private extMenuData: HeaderLink[];
  private userData: HeaderUserData;
  private sections: object;
  private readonly topOffset: number = 90;

  @Element() private element: HTMLElement;

  @Listen("scroll", { target: "document" })
  handleScroll(): void {
    if (this.isMobile) return;
    const navbar = this.element.shadowRoot.getElementById("main-header");
    const sticky = navbar.offsetTop;
    this.handleStickyNav(sticky);
    const links = this.element.shadowRoot.querySelectorAll(
      ".dropdown-links > a[href^='#']"
    );

    this.handleActiveOnScroll(links);
  }

  @Listen("resize", { target: "window" })
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  componentWillLoad() {
    this.intMenuData = JSON.parse(this.intlinkdata);
    this.extMenuData = JSON.parse(this.extlinkdata);
    this.activeMenuItem = this.setIntMenuItem();
    this.currentMenuItem = this.setIntMenuItem();
    this.sections = this.getSections(this.intMenuData);
    if (this.userdata) {
      this.userData = JSON.parse(this.userdata);
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

  handleActiveOnScroll(links) {
    links.forEach(link => {
      link.classList.remove("active");

      const currentSection = document.querySelector(link.hash);
      if (
        currentSection &&
        currentSection.offsetTop <= window.scrollY + this.topOffset &&
        currentSection.offsetHeight + currentSection.offsetTop >
          window.scrollY + this.topOffset
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

  handleStickyNav(sticky): void {
    // TODO: emettere sticky event;
    const mainContent = document.getElementById("main-content");
    if (window.pageYOffset > sticky) {
      this.isSticky = true;
      mainContent.style.paddingTop = `${this.topOffset}px`;
    } else {
      this.isSticky = false;
      mainContent.style.paddingTop = "0px";
    }
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
          onClick={() => {
            this.activeMenuItem = menuItem;
            this.currentMenuItem = menuItem;
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

  renderMenuItemsData(menuItem): HTMLSpanElement | null {
    if (!menuItem.subMenu) return null;
    const listItems: ListItemBean[] = menuItem.subMenu.map(
      (item: HeaderLink) => {
        return {
          text: item.name,
          link: item.url
        };
      }
    );
    return this.renderMobileSubMenu(listItems);
  }

  renderMobileSubMenu(menuItems: ListItemBean[]): HTMLSpanElement {
    return (
      <span class="mobile-dropdown">
        <z-list list={menuItems} />
      </span>
    );
  }

  renderSubMenu(menuItem: HeaderLink): HTMLDivElement {
    const active = menuItem.subMenu ? menuItem.subMenu[0] : null;
    if (!menuItem["subMenu"] || !this.isLogged || !this.ismyz) {
      return (
        <div
          id="dropdown-menu"
          class={`dropdown-menu hidden ${this.isSticky && "sticky"}`}
        />
      );
    }
    return (
      <div
        id="dropdown-menu"
        class={`dropdown-menu ${this.isSticky && "sticky"}`}
      >
        <div class="dropdown-links">
          {menuItem.subMenu.map(item => (
            <a
              class={item.id === active.id ? "active" : ""}
              href={item.url}
              onClick={e => {
                if (this.sections[item.id]) {
                  e.preventDefault();
                  window.scrollTo(
                    0,
                    this.sections[item.id].offsetTop - this.topOffset
                  );
                }
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    );
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
          <z-button
            label="entra"
            type="secondary"
            onClick={() => alert("login")}
          />
        )}
      </div>
    );
  }

  renderMobileLoginDiv(userData: HeaderUserData): HTMLDivElement {
    return (
      <div id="mobile-login" class="mobile-login">
        <span>
          <a class="menu-item" href="#">

            <span><img src="../assets/images/png/user_transparent.png"/> {userData.name}</span>
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
      }
    ];
    return this.renderMobileSubMenu(listItems);
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
        <div id="mobile-content" class="mobile-content">
          {this.renderMobileLoginDiv(this.userData)}
          {this.renderIntMenu(this.intMenuData)}
          {this.renderExtMenu(this.extMenuData)}
          {this.renderBooktabButton()}
        </div>
      </header>
    );
  }

  renderMobileMenu(): HTMLDivElement {
    return (
      <div id="mobile-header" class="mobile-header">
        {this.renderLogoDiv()}
        <div
          class="menu-mobile"
          id="mobile-menu-wrapper"
          onClick={() => this.handleMobileButtonClick()}
        >
          <div class="menu-toggle" id="mobile-menu">
            <span class="bar" />
            <span class="bar" />
            <span class="bar" />
          </div>
          <span>Menu</span>
        </div>
      </div>
    );
  }

  handleMobileButtonClick(): void {
    const mainHeader = this.element.shadowRoot.getElementById("mobile-content");
    mainHeader.classList.toggle("open");
    const mobileButton = this.element.shadowRoot.getElementById("mobile-menu");
    mobileButton.classList.toggle("is-active");
  }

  renderBooktabButton(): HTMLDivElement {
    return (
      <div id="booktab-button" class="booktab-button">
        <z-button label="Scarica la app BookTab" type="primary" icon="download.png"/>
      </div>
    );
  }

  render() {
    return this.isMobile
      ? this.renderMobileHeader()
      : this.renderDesktopHeader();
  }
}
