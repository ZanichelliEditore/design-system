import { h, Host } from "@stencil/core";
import { CoverHeroVariant, CoverHeroContentPosition } from "../../beans";
/**
 * Cover hero component.
 * Component to display a hero image with content.
 *
 * @slot cover - slot for the cover image.
 * @slot content - slot for the content.
 * @slot info-reveal - slot for the info reveal.
 * @cssprop --cover-hero-overlay - overlay color of the cover hero (CSS `background` property). **Default**: `linear-gradient(270deg, #0000 0%, #000000e6 100%)`.
 * @cssprop --cover-hero-text-color - color of the text.
 * @cssprop --cover-hero-aspect-ratio - aspect ratio to use for the image. You can pass a fraction or a number representing the ratio. **Default**: the intrinsic aspect ratio of the slotted image or `16/9`.
 */
export class ZCoverHero {
    constructor() {
        this.variant = CoverHeroVariant.OVERLAY;
        this.contentPosition = CoverHeroContentPosition.TOP;
        this.preserveAspectRatio = true;
    }
    /**
     * Store the intrinsic aspect ratio of the slotted image when loaded,
     * to have a default when `--cover-hero-aspect-ratio` is not set.
     * @param target The event target
     */
    onImgLoad({ target }) {
        if (target instanceof Image && target.closest("[slot=cover]")) {
            const ratio = target.naturalWidth / target.naturalHeight;
            this.host.style.setProperty("--image-aspect-ratio", ratio.toString());
        }
    }
    /**
     * Template for the content.
     */
    renderContent() {
        return (h("div", { class: "content-container" }, h("slot", { name: "content" })));
    }
    render() {
        return (h(Host, { key: 'fc8b3e5e75eb8fbc7d553710b5146f73087b4eaf' }, this.variant === CoverHeroVariant.STACKED &&
            this.contentPosition === CoverHeroContentPosition.TOP &&
            this.renderContent(), h("div", { key: 'efc3d392c4787468d390874443a693ddf3a05a5b', class: "main-container" }, h("div", { key: '7e316099ba2078d3f56554f0216e048dddd6d6b3', class: "cover-container" }, h("slot", { key: 'd2aa516b5342f02c51445872a183623d251a5947', name: "cover" })), h("slot", { key: '06c215f93567e670bd358ece2ccc68e7daa09c8d', name: "info-reveal" }), this.variant === CoverHeroVariant.OVERLAY && this.renderContent()), this.variant === CoverHeroVariant.STACKED &&
            this.contentPosition === CoverHeroContentPosition.BOTTOM &&
            this.renderContent()));
    }
    static get is() { return "z-cover-hero"; }
    static get encapsulation() { return "shadow"; }
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
                    "original": "CoverHeroVariant",
                    "resolved": "CoverHeroVariant.OVERLAY | CoverHeroVariant.STACKED",
                    "references": {
                        "CoverHeroVariant": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::CoverHeroVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Cover hero variant. Can be `OVERLAY` or `STACKED`."
                },
                "attribute": "variant",
                "reflect": true,
                "defaultValue": "CoverHeroVariant.OVERLAY"
            },
            "contentPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CoverHeroContentPosition",
                    "resolved": "CoverHeroContentPosition.BOTTOM | CoverHeroContentPosition.TOP",
                    "references": {
                        "CoverHeroContentPosition": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::CoverHeroContentPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Vertical content position (for `STACKED` variant)."
                },
                "attribute": "content-position",
                "reflect": true,
                "defaultValue": "CoverHeroContentPosition.TOP"
            },
            "preserveAspectRatio": {
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
                    "text": "Whether to keep the image aspect ratio.\nIf set to `false`, the cssprop `--cover-hero-aspect-ratio` will not affect the component's size;\ninstead, the height of the component follows the content's one.\nNote: it may be necessary to set a min and/or max height to the component."
                },
                "attribute": "preserve-aspect-ratio",
                "reflect": true,
                "defaultValue": "true"
            }
        };
    }
    static get elementRef() { return "host"; }
    static get listeners() {
        return [{
                "name": "load",
                "method": "onImgLoad",
                "target": undefined,
                "capture": true,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
