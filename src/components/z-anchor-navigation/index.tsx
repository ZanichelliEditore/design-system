import {Component, h, Host, Prop} from "@stencil/core";

/**
 * * Anchor navigation component.
 * @slot Main slot. Put some `<a>` tags inside. If you need an action button/icon, wrap it and the <a> inside another tag.
 * @example
 * ```
 * <z-anchor-navigation>
 *  <div>
 *    <a href="#section-id">Section name</a>
 *    <button type="button">
 *      <z-icon name="share" />
 *    </button>
 *  </div>
 * </z-anchor-navigation>
 * ```
 */
@Component({
  tag: "z-anchor-navigation",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZAnchorNavigation {
  /**
   * Whether to hide the text of internal unselected anchors unless hovering it.
   */
  @Prop({reflect: true})
  hideUnselected = false;

  /** Reference to the nav element. */
  private nav: HTMLElement;

  /**
   * Set aria-current attribute to the anchors and `current` to nav children.
   */
  private setAriaCurrent(): void {
    Array.from(this.nav.children).forEach((item) => {
      const anchor = item instanceof HTMLAnchorElement ? item : item.querySelector("a");
      const isCurrent = window.location.href === anchor.href;
      anchor.setAttribute("aria-current", isCurrent.toString());
      item.toggleAttribute("current", isCurrent);
    });
  }

  componentDidLoad(): void {
    window.addEventListener("hashchange", this.setAriaCurrent.bind(this));
    this.setAriaCurrent();
  }

  disconnectedCallback(): void {
    window.removeEventListener("hashchange", this.setAriaCurrent);
  }

  render(): HTMLZAnchorNavigationElement {
    return (
      <Host>
        <z-toggle-button label="salta a"></z-toggle-button>
        <nav ref={(el) => (this.nav = el)}>
          <slot></slot>
        </nav>
      </Host>
    );
  }
}
