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
        return (h(Host, { key: 'aae886e9941d8767af39a351671a7aaaf844176a' }, h("slot", { key: '08a1466c1d96e8f2dc754d3566bc2567bfd26dfd', name: "secondary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.BEFORE && (h("z-divider", { key: 'ab9e30f7c179c37482d84db65729a3fa78fd9e06', size: DividerSize.LARGE, color: "z-section-title--divider-color" })), h("slot", { key: '4cad003315cf3df2e0dd6a7391035fd8e056e8b0', name: "primary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.AFTER && (h("z-divider", { key: '6e99ca4877aba8c76e4484be6fced23aa5b8e165', size: DividerSize.LARGE, color: "z-section-title--divider-color" }))));
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
