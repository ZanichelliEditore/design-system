import { Component, Prop, h, State, Element, Listen } from "@stencil/core";
import { HeaderIntLink, HeaderExtLink } from "../../beans";

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
  @State() isSticky: boolean = false;
  @State() activeMenuItem: HeaderIntLink;
  @State() intMenuData: HeaderIntLink[];
  private extMenuData: HeaderExtLink[];

  @Element() private element: HTMLElement;

  @Listen("scroll", { target: "document" })
  handleScroll(): void {
    const navbar = this.element.shadowRoot.getElementById("main-header");
    const sticky = navbar.offsetTop;
    this.handleStickyNav(sticky);

    const links = this.element.shadowRoot.querySelectorAll(
      ".dropdown-links > a[href^='#']"
    );
    // TODO: move to prop()
    const sections = document.querySelectorAll("section");
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    links.forEach(link => {
      link.classList.remove("active");
    });
    links[index].classList.add("active");
  }

  componentWillLoad() {
    this.intMenuData = JSON.parse(this.intlinkdata);
    this.extMenuData = JSON.parse(this.extlinkdata);
    console.log(this.extMenuData);
    this.activeMenuItem =
      this.intMenuData.filter(
        (menu: HeaderIntLink) => window.location.hash === menu.url
      )[0] || this.intMenuData[0];
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
    return (
      <div id="link-int" class="link-int">
        {menuItems.map(item => this.renderIntMenuItem(item))}
      </div>
    );
  }

  renderIntMenuItem(menuItem: HeaderIntLink): HTMLSpanElement {
    return (
      <span>
        <a
          href={menuItem.url}
          id={menuItem.id}
          class="menu-item"
          onClick={() => {
            this.activeMenuItem = menuItem;
          }}
        >
          <span>{menuItem.name}</span>
          <i />
        </a>
        <svg
          height="8"
          width="16"
          class={
            this.activeMenuItem
              ? menuItem.id !== this.activeMenuItem.id && "hidden"
              : "hidden"
          }
        >
          <polygon points="8,0 16,8 0,8" class="arrow" />
        </svg>
      </span>
    );
  }

  renderSubMenu(menuItem: HeaderIntLink): HTMLDivElement {
    if (!menuItem.subMenu) {
      return;
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
    return (
      <div id="link-ext" class="link-ext">
        {menuItems.map(
          (menuItem: HeaderExtLink): HTMLSpanElement => {
            const { id, name, url, icon } = menuItem;
            return (
              <span class="link-ext-span">
                <z-link
                  id={id}
                  url={url}
                  label={name}
                  icon={icon}
                  iswhite={true}
                />
              </span>
            );
          }
        )}
      </div>
    );
  }

  renderLoginDiv(): HTMLDivElement {
    return (
      <div class="login">
        <z-menu-dropdown
          nomeutente="Dario Docente"
          menucontent='[{"text":"Profilo", "link":"http://www.zanichelli.it"},{"text":"Esci", "link":"http://www.google.it"}]'
        />
      </div>
    );
  }

  renderMainHeader(): HTMLDivElement {
    return (
      <div
        id="main-header"
        class={`main-header ${this.isSticky && "sticky"}`}
      >
        {this.renderLogoDiv()}
        {this.renderMobileMenu()}
        {this.renderIntMenu(this.intMenuData)}
        <div id="mobile-dropdown-d" class="mobile-dropdown">
          <z-button label="Scarica la app BookTab" />
        </div>

        {this.renderExtMenu(this.extMenuData)}
        {this.renderLoginDiv()}
      </div>
    )
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
    )
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
