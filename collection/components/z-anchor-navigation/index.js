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
        this.hideUnselected = false;
        this.collapsed = false;
    }
    /**
     * Set aria-current attribute to the anchors.
     */
    setAriaCurrent() {
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
        return (h(Host, { key: '334a479e907631a2f25b757b6a37d136a78eaa4b', collapsed: this.collapsed }, h("z-button", { key: 'cdfdae6b09a0f1b0f23004d9c56eaaf39d49e94e', class: "toggle", variant: ButtonVariant.SECONDARY, icon: this.collapsed ? "chevron-up" : "chevron-down", onClick: this.toggleCollapsed.bind(this) }, "salta a"), h("nav", { key: '11406c615df8d8c6779428d7275a8f77ff7484d0', ref: (el) => (this.nav = el) }, h("slot", { key: 'b33c4318e70c79d606d27a3a6e0aad5550f45442' }))));
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
//# sourceMappingURL=index.js.map
