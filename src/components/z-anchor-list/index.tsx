import {Component, h} from "@stencil/core";

/**
 * Component short description.
 */
@Component({
  tag: "z-anchor-list",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZAnchorList {
  /** Reference to the nav element. */
  private nav: HTMLElement;

  /**
   * Set aria-current attribute to nav links.
   */
  private setAriaCurrent(): void {
    Array.from(this.nav.children).forEach((item) => {
      if (item instanceof HTMLAnchorElement) {
        item.setAttribute("aria-current", window.location.href === item.href ? "true" : "false");
      }
    });
  }

  private onLinkClick(ev: MouseEvent): void {
    if (!(ev.target instanceof HTMLAnchorElement)) {
      return;
    }

    this.setAriaCurrent();
  }

  /**
   * Set click listener to nav links.
   */
  private setClickListener(): void {
    Array.from(this.nav.children).forEach((item) => {
      item.addEventListener("click", this.onLinkClick.bind(this));
    });
  }

  componentDidLoad(): void {
    window.addEventListener("hashchange", this.setAriaCurrent.bind(this));
    this.setAriaCurrent();
    this.setClickListener();
  }

  disconnectedCallback(): void {
    window.removeEventListener("hashchange", this.setAriaCurrent);
  }

  render(): HTMLZAnchorListElement {
    return (
      <nav ref={(el) => (this.nav = el)}>
        <slot name="link"></slot>
      </nav>
    );
  }
}
