import { Host, h } from "@stencil/core";
import { ThemeVariant } from "../../beans";
import { getElementTree, handleKeyboardSubmit } from "../../utils/utils";
/**
 * Component short description.
 */
export class ZSkipToContent {
    constructor() {
        this.variant = undefined;
        this.links = [];
        this.visible = false;
        this.visibleLink = "";
    }
    handleFocusOutSkipToContent(e) {
        if (this.isInSkipToContent(e.target)) {
            this.visible = false;
        }
    }
    handleFocusSkipToContent(e) {
        if (this.isInSkipToContent(e.target)) {
            this.visible = true;
        }
    }
    componentDidLoad() {
        this.showFirstChild();
    }
    componentWillRender() {
        if (this.links) {
            this.links = typeof this.links === "string" ? JSON.parse(this.links) : this.links;
        }
    }
    isInSkipToContent(elem) {
        const tree = getElementTree(elem);
        const menuParent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-skip-to-content");
        return !!menuParent;
    }
    showFirstChild() {
        var _a;
        const firstChild = (_a = this.hostElement.children) === null || _a === void 0 ? void 0 : _a[0];
        if (firstChild) {
            this.visibleLink = firstChild.id;
        }
    }
    handleLinkClick() {
        this.visible = false;
    }
    render() {
        return (h(Host, { key: 'ae03554e1bb63eebca8f51d3cae23b885ee79428', class: {
                [this.variant]: true,
                "skip-to-content-visible": this.visible,
            } }, this.links.map((link, i) => {
            const id = `skip-to-content-${i}`;
            return (h("div", { class: "link-container" }, h("a", { id: id, class: {
                    "body-1-sb": true,
                    "z-link": true,
                    "z-link-underline": true,
                    "z-link-white": this.variant === ThemeVariant.DARK,
                    "z-link-black": this.variant !== ThemeVariant.DARK,
                    "link-visible": id == this.visibleLink,
                    "link-invisible": id != this.visibleLink,
                }, "aria-label": link.ariaLabel || link.label, href: link.href, onFocus: () => (this.visibleLink = id), onClick: () => this.handleLinkClick(), onKeyUp: (e) => handleKeyboardSubmit(e, this.handleLinkClick.bind(this)) }, link.label)));
        })));
    }
    static get is() { return "z-skip-to-content"; }
    static get encapsulation() { return "scoped"; }
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
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ThemeVariant",
                    "resolved": "ThemeVariant.DARK | ThemeVariant.LIGHT",
                    "references": {
                        "ThemeVariant": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::ThemeVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Graphical variant: `dark`, `light`."
                },
                "attribute": "variant",
                "reflect": true
            },
            "links": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | SkipToContentLink[]",
                    "resolved": "SkipToContentLink[] | string",
                    "references": {
                        "SkipToContentLink": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::SkipToContentLink"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array to fill link into skip-content"
                },
                "attribute": "links",
                "reflect": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "visible": {},
            "visibleLink": {}
        };
    }
    static get elementRef() { return "hostElement"; }
    static get listeners() {
        return [{
                "name": "focusout",
                "method": "handleFocusOutSkipToContent",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "focusin",
                "method": "handleFocusSkipToContent",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
