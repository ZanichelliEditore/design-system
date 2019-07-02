import { Component, Prop, h, State, Element, Listen } from "@stencil/core";

@Component({
  tag: "z-header",
  styleUrl: "styles.css",
  shadow: true
})
export class ZHeader {
  @Prop() prop: string;
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

  render() {
    return (
      <header>
        <div class="top-header">
          <div class="editors">
            <span>Testo a caso</span>
            <span>Testo a caso</span>
            <span>Testo a caso</span>
            <span>Testo a caso</span>
          </div>
        </div>
        <div id="main-header" class={`main-header ${this.isSticky && 'sticky'}`}>
          <div class="logo">
            <slot name="logo" />
          </div>
          <div class="link-int">
            <span class="menu-item">Home</span>
            <span class="menu-item">Dizionari</span>
          </div>
          <div class="void"></div>
          <div class="link-ext">
            <a href="#supporto">Supporto</a>
            <a href="#shop">E-shop</a>
            <a href="#chiedi">Chiedi al tuo responsabile</a>
          </div>
          <div class={`login ${this.isSticky && 'sticky'}`}>
            <slot name="login" />
          </div>
        </div>
        <div class={`dropdown-menu ${this.isSticky && 'sticky'}`}>
          <div class="dropdown-links">
            <div class="arrow" />
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
