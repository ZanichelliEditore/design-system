import { Component, Prop, h, State, Element, Listen } from "@stencil/core";

@Component({
  tag: "z-header",
  styleUrl: "styles.css",
  shadow: true
})
export class ZHeader {
  @Prop() editors: string; // lista di immagini del top-nav --> slot
  @Prop() intlink: string; // json per link interni del main-nav, con possibili sottomenu
  @State() isSticky: boolean = false;

  @Element() private element: HTMLElement;

  @Listen("scroll", { target: "document" })
  handleScroll(): void {
    const navbar = this.element.shadowRoot.getElementById("main-header");
    const sticky = navbar.offsetTop;
    this.handleStickyNav(sticky);
  }

  handleStickyNav(sticky): void {
    if (window.pageYOffset > sticky) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

  handleHomeButtonClick(): void {
    const dropdown = this.element.shadowRoot.getElementById("dropdown-menu");
    dropdown.classList.toggle("visible");
    const mobileDropdown = this.element.shadowRoot.getElementById("mobile-dropdown");
    mobileDropdown.classList.toggle("visible");
    const homeButton = this.element.shadowRoot.getElementById("home");
    homeButton.classList.toggle("isopen");
  }

  handleDizionariButtonClick(): void {
    const dropdown = this.element.shadowRoot.getElementById("dropdown-menu");
    dropdown.classList.remove("visible");
    const mobileDropdown = this.element.shadowRoot.getElementById("mobile-dropdown-d");
    mobileDropdown.classList.toggle("visible");
    const dizionariButton = this.element.shadowRoot.getElementById("dizionari");
    dizionariButton.classList.toggle("isopen");
  }

  render() {
    return (
      <header>
        <div class="top-header">
          <div class="editors">
            <slot name="editors"></slot>
          </div>
        </div>
        <div
          id="main-header"
          class={`main-header ${this.isSticky && "sticky"}`}
        >
          <div class="logo">
            <slot name="logo" />
          </div>
          <div class="menu" id="mobile-menu">
            <span>Menu</span>
            <div class="menu-toggle" id="mobile-menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>

          </div>
          <div class="link-int">
            <span>
              <a
                href="#home"
                id="home"
                class="menu-item"
                onClick={() => this.handleHomeButtonClick()}
              >
                <span>Home</span><i />
              </a>
              <svg height="8" width="16" class="hidden">
                <polygon points="8,0 16,8 0,8" class="arrow" />
              </svg>
            </span>
            <div
              id="mobile-dropdown"
              class="mobile-dropdown"
            >
              <div class="dropdown-links">
                <a href="#libreria" class="active">
                  La mia Libreria
              </a>
                <a href="#ambienti">Ambienti Zanichelli</a>
                <a href="#idee">Idee per insegnare</a>
              </div>
            </div>
            <span>
              <a
                href="#dizionari"
                id="dizionari"
                class="menu-item"
                onClick={() => this.handleDizionariButtonClick()}
              >
                <span>Dizionari</span><i />
              </a>
              <svg height="8" width="16" class="hidden">
                <polygon points="8,0 16,8 0,8" class="arrow" />
              </svg>
            </span>
            <div
              id="mobile-dropdown-d"
              class="mobile-dropdown"
            >
              <z-button label="Scarica la app BookTab"></z-button>
            </div>
          </div>
          <div class="link-ext">
            <slot name="extlink" />
          </div>
          <div class={`login ${this.isSticky && "sticky"}`}>
            <slot name="login" />
          </div>
        </div>
        <div
          id="dropdown-menu"
          class={`dropdown-menu ${this.isSticky && "sticky"}`}
        >
          <div class="dropdown-links">
            <a href="#libreria" class="active">
              La mia Libreria
            </a>
            <a href="#ambienti">Ambienti Zanichelli</a>
            <a href="#idee">Idee per insegnare</a>
          </div>
        </div>
      </header>
    );
  }
}
