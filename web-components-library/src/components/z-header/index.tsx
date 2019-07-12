import { Component, Prop, h, State, Element, Listen } from "@stencil/core";
import { HeaderIntLink, HeaderExtLink, HeaderUserData } from "../../beans";

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
  @State() activeMenuItem: HeaderIntLink;
  @State() currentMenuItem: HeaderIntLink;
  @State() intMenuData: HeaderIntLink[];
  private extMenuData: HeaderExtLink[];
  private userData: HeaderUserData;

  @Element() private element: HTMLElement;

  @Listen("scroll", { target: "document" })
  handleScroll(): void {
    const navbar = this.element.shadowRoot.getElementById("main-header");
    const sticky = navbar.offsetTop;
    this.handleStickyNav(sticky);
    const links = this.element.shadowRoot.querySelectorAll(
      ".dropdown-links > a[href^='#']"
    );

    this.handleActiveOnScroll(links);
  }

  componentWillLoad() {
    this.intMenuData = JSON.parse(this.intlinkdata);
    this.extMenuData = JSON.parse(this.extlinkdata);
    this.activeMenuItem = this.setIntMenuItem();
    this.currentMenuItem = this.setIntMenuItem();
    if (this.userdata) {
      this.userData = JSON.parse(this.userdata);
      this.isLogged = this.userData.islogged;
    }
  }

  handleActiveOnScroll(links) {
    links.forEach((link) => {
      link.classList.remove("active");

      const currentSection = document.querySelector(link.hash);
      console.table([currentSection.offsetHeight + currentSection.offsetTop, currentSection.offsetTop, window.scrollY])
      if (currentSection.offsetTop <= window.scrollY && currentSection.offsetHeight + currentSection.offsetTop > window.scrollY) {
        link.classList.add("active");
      }
    });

  }

  setIntMenuItem(): HeaderIntLink {
    return (
      this.intMenuData.filter(
        (menu: HeaderIntLink) => window.location.hash === menu.url
      )[0] || this.intMenuData[0]
    );
  }

  getSectionsArray() {
    return;
  }

  handleStickyNav(sticky): void {
    if (window.pageYOffset > sticky) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

  // handleMobileButtonClick(): void {
  //   const mobileButton = this.element.shadowRoot.getElementById("mobile-menu");
  //   mobileButton.classList.toggle("is-active");
  //   const linkEst = this.element.shadowRoot.getElementById("link-ext");
  //   linkEst.classList.toggle("open");
  //   const linkInt = this.element.shadowRoot.getElementById("link-int");
  //   linkInt.classList.toggle("open");
  // }

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
          link="https:\\www.zanichelli.it"
          targetblank={true}
          imageurl="../../assets/images/png/zanichelli-logo-2.png"
          imagealt="logo zanichelli"
        />
      </div>
    );
  }

  renderIntMenu(menuItems: HeaderIntLink[]): HTMLDivElement {
    if (!this.isLogged || !this.ismyz) {
      return <div />;
    }

    return (
      <div id="link-int" class="link-int">
        {menuItems.map(item => this.renderIntMenuItem(item))}
      </div>
    );
  }

  renderIntMenuItem(menuItem: HeaderIntLink): HTMLSpanElement {
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
          <i />
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
      </span>
    );
  }

  renderSubMenu(menuItem: HeaderIntLink): HTMLDivElement {

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
            <a href={item.url}>{item.name}</a>
          ))}
        </div>
      </div>
    );
  }

  renderExtMenu(menuItems: HeaderExtLink[]): HTMLDivElement {
    if (!this.isLogged) {
      return <div />;
    }

    return (
      <div id="link-ext" class="link-ext">
        {menuItems.map(
          (menuItem: HeaderExtLink): HTMLSpanElement => {
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
        {this.isLogged
          ? <z-menu-dropdown
              nomeutente={userData.name}
              menucontent='[{"text":"Profilo", "link":"http://www.zanichelli.it"},{"text":"Esci", "link":"http://www.google.it"}]'
            />
          : <z-button label="entra" type="secondary" onClick={() => alert('login')}></z-button>
        }
      </div>
    );
  }

  renderMainHeader(): HTMLDivElement {
    return (
      <div id="main-header" class={`main-header ${this.isSticky && "sticky"} ${!this.ismyz && "myz-out"}`}>
        {this.renderLogoDiv()}
        {this.renderMobileMenu()}
        {this.renderIntMenu(this.intMenuData)}
        <div id="mobile-dropdown-d" class="mobile-dropdown">
          <z-button label="Scarica la app BookTab" />
        </div>

        {this.renderExtMenu(this.extMenuData)}
        {this.renderLoginDiv(this.userData)}
      </div>
    );
  }

  renderMobileMenu(): HTMLDivElement {
    return (
      <div
        class="menu"
        id="mobile-menu-wrapper"
        // onClick={() => this.handleMobileButtonClick()}
      >
        <span>Menu</span>
        <div class="menu-toggle" id="mobile-menu">
          <span class="bar" />
          <span class="bar" />
          <span class="bar" />
        </div>
      </div>
    );
  }

  render() {
    return (
      <header>
        {this.renderTopHeader()}
        {this.renderMainHeader()}
        {this.renderSubMenu(this.activeMenuItem)}
      </header>
    );
  }
}
