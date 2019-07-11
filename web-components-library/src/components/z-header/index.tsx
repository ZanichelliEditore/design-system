import { Component, Prop, h, State, Element, Listen } from "@stencil/core";
import { HeaderMenuItem } from "../../beans";

@Component({
  tag: "z-header",
  styleUrl: "styles.css",
  shadow: true
})
export class ZHeader {
  @Prop() editors: string; // lista di immagini del top-nav --> slot
  @Prop() intlink: string; // json per link interni del main-nav, con possibili sottomenu
  @Prop() headermenudata: string;
  @State() isSticky: boolean = false;
  @State() activeMenuItem: HeaderMenuItem;
  @State() menuData: HeaderMenuItem[];

  @Element() private element: HTMLElement;

  @Listen("scroll", { target: "document" })
  handleScroll(): void {
    const navbar = this.element.shadowRoot.getElementById("main-header");
    const sticky = navbar.offsetTop;
    this.handleStickyNav(sticky);
  }

  componentWillLoad() {
    this.menuData = JSON.parse(this.headermenudata);
    return this.menuData.forEach((menu) => {
      if (!window.location.hash) {
        this.activeMenuItem = this.menuData[0];
      }
      if (window.location.hash === menu.url) {
        this.activeMenuItem = menu;
      }
    });
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

  renderMenu(menuItems: HeaderMenuItem[]): HTMLDivElement {
    return (
      <div id="link-int" class="link-int">
        {menuItems.map(item => this.renderMenuItem(item))}
      </div>
    );
  }

  renderMenuItem(menuItem: HeaderMenuItem): HTMLSpanElement {
    return (
      <span>
        <a
          href={menuItem.url}
          id={menuItem.id}
          class="menu-item"
          onClick={() => { this.activeMenuItem = menuItem; }}
        >
          <span>{menuItem.name}</span>
          <i />
        </a>
        <svg height="8" width="16" class={ this.activeMenuItem ? menuItem.id !== this.activeMenuItem.id && "hidden" : "hidden"}>
          <polygon points="8,0 16,8 0,8" class="arrow" />
        </svg>
      </span>
    );
  }

  renderSubMenu(menuItem: HeaderMenuItem): HTMLDivElement {
    if (!menuItem.subMenu) {
      return;
    }
    return (
        <div
          id="dropdown-menu"
          class={`dropdown-menu ${this.isSticky && "sticky"}`}
        >
        <div class="dropdown-links">
          {menuItem.subMenu.map(item =>
            <a href={item.url}>{item.name}</a>
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <header>
        <div class="top-header">
          <div class="editors">
            <slot name="editors" />
          </div>
        </div>
        <div
          id="main-header"
          class={`main-header ${this.isSticky && "sticky"}`}
        >
          <div class="logo">
            <z-logo
              link="https:\\www.zanichelli.it"
              targetblank={true}
              imageurl="../../assets/images/png/zanichelli-logo-2.png"
              imagealt="logo zanichelli"
            />
          </div>
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

          {this.renderMenu(JSON.parse(this.headermenudata))}
          <div id="mobile-dropdown-d" class="mobile-dropdown">
            <z-button label="Scarica la app BookTab" />
          </div>

          <div id="link-ext" class="link-ext">
            <span class="link-ext-span"><z-link url="#supporto" label="Supporto" icon="question-mark.png" iswhite={true} /></span>
            <span class="link-ext-span"><z-link url="#shop" label="E-Shop" icon="cart-icon.png" iswhite={true} /></span>
            <span class="link-ext-span"><z-link url="#shop" label="Chiedi al tuo responsabile di zona" icon="suitcase-icon.png" iswhite={true} /></span>
          </div>

          <div class="login">
            <z-menu-dropdown
              nomeutente="Dario Docente"
              menucontent='[{"text":"Profilo", "link":"http://www.zanichelli.it"},{"text":"Esci", "link":"http://www.google.it"}]'
            />
          </div>

        </div>

        {this.renderSubMenu(this.activeMenuItem)}

      </header>
    );
  }
}
