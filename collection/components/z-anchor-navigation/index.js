import { h, Host } from "@stencil/core";
import { ButtonVariant } from "../../beans";
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
export class ZAnchorNavigation {
  constructor() {
    /**
     * If enabled, the text of each anchor will be hidden unless
     * for the current one or the one the user is hovering.
     */
    this.hideUnselected = false;
    /**
     * Whether the mobile list is collapsed.
     */
    this.collapsed = false;
  }
  /**
   * Set aria-current attribute to the anchors and `current` to nav children.
   */
  setAriaCurrent() {
    Array.from(this.nav.children).forEach((item) => {
      const anchor = item instanceof HTMLAnchorElement ? item : item.querySelector("a");
      const isCurrent = window.location.href === anchor.href;
      anchor.setAttribute("aria-current", isCurrent.toString());
      item.toggleAttribute("current", isCurrent);
    });
  }
  /**
   * Toggle collapsed state.
   */
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
  componentDidLoad() {
    window.addEventListener("hashchange", this.setAriaCurrent.bind(this));
    this.setAriaCurrent();
  }
  disconnectedCallback() {
    window.removeEventListener("hashchange", this.setAriaCurrent);
  }
  render() {
    return (h(Host, { collapsed: this.collapsed }, h("z-button", { class: "toggle", variant: ButtonVariant.SECONDARY, icon: this.collapsed ? "chevron-up" : "chevron-down", onClick: this.toggleCollapsed.bind(this) }, "salta a"), h("nav", { ref: (el) => (this.nav = el) }, h("slot", null))));
  }
  static get is() { return "z-anchor-navigation"; }
  static get originalStyleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get properties() {
    return {
      "hideUnselected": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If enabled, the text of each anchor will be hidden unless\nfor the current one or the one the user is hovering."
        },
        "attribute": "hide-unselected",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "collapsed": {}
    };
  }
}
