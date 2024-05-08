import {Component, h, Host, Prop, State} from "@stencil/core";
import {ButtonVariant} from "../../beans";

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
   * If enabled, the text of each anchor will be hidden unless
   * for the current one or the one the user is hovering.
   */
  @Prop({reflect: true})
  hideUnselected = false;

  /**
   * Whether the mobile list is collapsed.
   */
  @State()
  collapsed = false;

  /** Reference to the nav element. */
  private nav: HTMLElement;

  /**
   * Set aria-current attribute to the anchors.
   */
  private setAriaCurrent(): void {
    Array.from(this.nav.children).forEach((item) => {
      const anchor = item instanceof HTMLAnchorElement ? item : item.querySelector("a");
      const isCurrent = window.location.href === anchor.href;
      anchor.setAttribute("aria-current", isCurrent.toString());
      item.toggleAttribute("data-current", isCurrent);
    });
  }

  /**
   * Toggle collapsed state.
   */
  private toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
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
      <Host collapsed={this.collapsed}>
        <z-button
          class="toggle"
          variant={ButtonVariant.SECONDARY}
          icon={this.collapsed ? "chevron-up" : "chevron-down"}
          onClick={this.toggleCollapsed.bind(this)}
        >
          salta a
        </z-button>
        <nav ref={(el) => (this.nav = el)}>
          <slot></slot>
        </nav>
      </Host>
    );
  }
}
