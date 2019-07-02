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
        <div id="top-header">
          <span>Testo a caso</span>
          <span>Testo a caso</span>
          <span>Testo a caso</span>
          <span>Testo a caso</span>
        </div>
        <div id="main-header" class={this.isSticky && "sticky"}>
          <div id="left">
            <slot name="logo" />
            <nav>
              <div class="subnav">
                <span class="menu-item">Home</span>
                <span class="menu-item">Dizionari</span>
                <div class={`subnav-content-wrapper ${this.isSticky && "sticky"}`}>
                  <div class="subnav-content">
                    <div class="arrow" />
                    <a href="#libreria" class="active">
                      La mia Libreria
                    </a>
                    <a href="#ambienti">Ambienti Zanichelli</a>
                    <a href="#idee">Idee per insegnare</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div id="right">
            <a href="#supporto" class="active">
              Supporto
            </a>
            <a href="#shop">E-shop</a>
            <a href="#chiedi">Chiedi al tuo responsabile</a>
          </div>

          <span class={`login ${this.isSticky && "sticky-login"}`}>
            <slot name="login" />
          </span>
        </div>
      </header>
    );
  }
}
