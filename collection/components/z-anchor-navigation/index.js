import { h, Host } from "@stencil/core";
import { ButtonVariant } from "../../beans";
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
export class ZAnchorNavigation {
    constructor() {
        this.hideUnselected = false;
        this.autoCurrent = true;
        this.collapsed = false;
    }
    /**
     * Set `aria-current` attribute to the anchors.
     */
    setCurrent() {
        const currentElement = Array.from(this.nav.querySelectorAll("a")).find((anchor) => anchor.href === this.host.ownerDocument.location.href);
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
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }
    componentDidLoad() {
        if (this.autoCurrent) {
            window.addEventListener("hashchange", this.setCurrent.bind(this));
            this.setCurrent();
        }
    }
    disconnectedCallback() {
        window.removeEventListener("hashchange", this.setCurrent);
    }
    render() {
        return (h(Host, { key: '6869675f35b8ca58e36058d10ed89301d2b49034', collapsed: this.collapsed }, h("z-button", { key: 'd6bacaf89ac6731dacb2250793c7ffba4a43a989', class: "toggle", variant: ButtonVariant.SECONDARY, icon: this.collapsed ? "chevron-up" : "chevron-down", onClick: this.toggleCollapsed.bind(this) }, "salta a"), h("nav", { key: '0c308debc3e444015e1c8733af628d0b7a5d8b6e', ref: (el) => (this.nav = el) }, h("slot", { key: '02b49c5a23db78d839ba6320f1cbbd770cfa6d3f' }))));
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
            },
            "autoCurrent": {
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
                    "text": "Enables automatic inference of the current item, listening for hash change\nand checking the `href` of the slotted anchors.\nWhen disabled, the highlight of current item must be handled manually by setting the `data-current`\nattribute to the correct slotted items and the `aria-current` attribute to the anchors."
                },
                "attribute": "auto-current",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "collapsed": {}
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=index.js.map
