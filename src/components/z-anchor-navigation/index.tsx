import {Component, Element, h, Host, Prop, State} from "@stencil/core";
import {ButtonVariant, ControlSize} from "../../beans";

/**
 * Anchor navigation component.
 * @slot - Anchor navigation items. Use `<a>` elements inside. If you need an extra action element, use a wrapper around it and the anchor.
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
   * Enables automatic inference of the current item, listening for hash change
   * and checking the `href` of the slotted anchors.
   * When disabled, the highlight of current item must be handled manually by setting the `data-current`
   * attribute to the correct slotted items and the `aria-current` attribute to the anchors.
   */
  @Prop()
  autoCurrent = true;

  /**
   * Sets the label of the button displayed on mobile viewport when the anchor navigation is collapsed
   */
  @Prop()
  collapsedLabel = "salta a";

  /**
   * Explicitly collapse anchor navigation.
   * If false will collapse automatically only on mobile.
   */
  @Prop({reflect: true})
  isCollapsed = false;

  /**
   * Whether the mobile list is collapsed.
   */
  @State()
  collapsed = false;

  @Element() host: HTMLZAnchorNavigationElement;

  /** Reference to the nav element. */
  private nav: HTMLElement;

  /**
   * Set `aria-current` attribute to the anchors.
   */
  private setCurrent(): void {
    const currentElement = Array.from(this.nav.querySelectorAll("a")).find(
      (anchor) => anchor.href === this.host.ownerDocument.location.href
    );
    Array.from(this.nav.children).forEach((item) => {
      const anchor = item instanceof HTMLAnchorElement ? item : item.querySelector("a");
      const isCurrent = anchor === currentElement;
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
    if (this.autoCurrent) {
      window.addEventListener("hashchange", this.setCurrent.bind(this));
      this.setCurrent();
    }
  }

  disconnectedCallback(): void {
    window.removeEventListener("hashchange", this.setCurrent);
  }

  render(): HTMLZAnchorNavigationElement {
    return (
      <Host
        collapsed={this.collapsed}
        class="z-scrollbar"
      >
        <z-button
          class="toggle"
          size={ControlSize.SMALL}
          variant={ButtonVariant.SECONDARY}
          icon={this.collapsed ? "chevron-up" : "chevron-down"}
          onClick={this.toggleCollapsed.bind(this)}
        >
          {this.collapsedLabel}
        </z-button>
        <nav ref={(el) => (this.nav = el)}>
          <slot></slot>
        </nav>
      </Host>
    );
  }
}
