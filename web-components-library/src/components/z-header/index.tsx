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
          <span>
            Testo a caso, Testo a caso,Testo a casoTesto a caso,Testo a
            caso,Testo a caso
          </span>
        </div>
        <div id="main-header" class={this.isSticky && "sticky"}>
          <div id="left">
            <slot name="logo" />
            <nav>
              <div class="subnav">
                <span class="menu-item">Home</span>
                <div class={`subnav-content ${this.isSticky && "sticky"}`}>
                  <a href="#company" class="active">La mia Libreria</a>
                  <a href="#team">Ambienti Zanichelli</a>
                  <a href="#careers">Idee per insegnare</a>
                </div>
              </div>
              <span class="menu-item">Dizionari</span>
            </nav>
          </div>
          <span class="login">
            <slot name="login" />
          </span>
        </div>
      </header>
    );
  }
}
