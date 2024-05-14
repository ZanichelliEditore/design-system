import { h, Host } from "@stencil/core";
import { DividerSize, ZSectionTitleDividerPosition } from "../../beans";
/**
 * Section title component.
 * An optional secondary title can be put over the primary one.
 *
 * @slot secondary-title - Slot for the secondary title. When present, the divider is always displayed under it,
 * following its width and removing the one for the primary title.
 * @slot primary-title - Slot for the primary title.
 * @cssprop --z-section-title--divider-color - Color of the divider. Use a CSS prop string like `"--red500"`. Default is `"--red500"`.
 */
export class ZSectionTitle {
    constructor() {
        this.dividerPosition = ZSectionTitleDividerPosition.BEFORE;
        this.uppercase = true;
    }
    componentWillRender() {
        this.hasSecondaryTitle = !!this.host.querySelector("[slot=secondary-title]");
    }
    render() {
        return (h(Host, { key: 'd691017e2953d129c291a8d1e8fa5411f0faf457' }, h("slot", { key: '99c8dce52dde7a85c2dd7423d08875b9a5ab4dfe', name: "secondary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.BEFORE && (h("z-divider", { size: DividerSize.LARGE, color: "z-section-title--divider-color" })), h("slot", { key: 'de5810f9b9a3db9c2fb81a59ac3dda261079b81f', name: "primary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.AFTER && (h("z-divider", { size: DividerSize.LARGE, color: "z-section-title--divider-color" }))));
    }
    static get is() { return "z-section-title"; }
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
            "dividerPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ZSectionTitleDividerPosition",
                    "resolved": "ZSectionTitleDividerPosition.AFTER | ZSectionTitleDividerPosition.BEFORE",
                    "references": {
                        "ZSectionTitleDividerPosition": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::ZSectionTitleDividerPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Divider position for the primary title.\nThis prop only works if the secondary title is not set."
                },
                "attribute": "divider-position",
                "reflect": false,
                "defaultValue": "ZSectionTitleDividerPosition.BEFORE"
            },
            "uppercase": {
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
                    "text": "Whether the primary title text is uppercase."
                },
                "attribute": "uppercase",
                "reflect": true,
                "defaultValue": "true"
            }
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=index.js.map
