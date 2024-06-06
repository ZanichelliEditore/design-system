import { h, Host } from "@stencil/core";
import { DividerSize, ListSize, ListDividerType, ListType } from "../../../beans";
export class ZListGroup {
    constructor() {
        this.size = ListSize.MEDIUM;
        this.dividerType = ListDividerType.NONE;
        this.dividerSize = DividerSize.SMALL;
        this.dividerColor = "gray200";
        this.listType = ListType.NONE;
    }
    componentDidLoad() {
        const children = this.host.children;
        for (let i = 0; i < children.length; i++) {
            if (children.length - 1 > i) {
                children[i].setAttribute("divider-type", this.dividerType);
                children[i].setAttribute("divider-size", this.dividerSize);
                children[i].setAttribute("divider-color", this.dividerColor);
            }
            children[i].setAttribute("size", this.size);
            children[i].setAttribute("list-type", this.listType);
            children[i].setAttribute("list-element-position", i.toString());
        }
    }
    componentWillLoad() {
        this.hasHeader = !!this.host.querySelector('[slot="header-title"]');
    }
    render() {
        return (h(Host, { key: '5dbf1efc3893dc5f97d0f8ec1b9b7a97f3798b23', role: "group" }, h("div", { key: '2ded7f0b5b2c6554239659c8eaa9ef413e37fead', class: {
                "z-list-group-header-container": true,
                "has-header": this.hasHeader,
            } }, h("slot", { key: '56fe1bfadf2b3aa5dd8f8955789204a49e6bc667', name: "header-title" }), this.dividerType === ListDividerType.HEADER && (h("z-divider", { color: this.dividerColor, size: this.dividerSize }))), h("slot", { key: '641523b4a9f4e0795571127cb509b76e51515b22' })));
    }
    static get is() { return "z-list-group"; }
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
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ListSize",
                    "resolved": "ListSize.LARGE | ListSize.MEDIUM | ListSize.SMALL | ListSize.X_LARGE",
                    "references": {
                        "ListSize": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ListSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Sets size of inside elements."
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "ListSize.MEDIUM"
            },
            "dividerType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ListDividerType",
                    "resolved": "ListDividerType.ELEMENT | ListDividerType.HEADER | ListDividerType.NONE",
                    "references": {
                        "ListDividerType": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ListDividerType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Sets the position where to insert the divider."
                },
                "attribute": "divider-type",
                "reflect": true,
                "defaultValue": "ListDividerType.NONE"
            },
            "dividerSize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DividerSize",
                    "resolved": "DividerSize.LARGE | DividerSize.MEDIUM | DividerSize.SMALL",
                    "references": {
                        "DividerSize": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::DividerSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Sets the divider size."
                },
                "attribute": "divider-size",
                "reflect": true,
                "defaultValue": "DividerSize.SMALL"
            },
            "dividerColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Sets the divider color."
                },
                "attribute": "divider-color",
                "reflect": true,
                "defaultValue": "\"gray200\""
            },
            "listType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ListType",
                    "resolved": "ListType.NONE | ListType.ORDERED | ListType.UNORDERED",
                    "references": {
                        "ListType": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ListType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] type of the list marker for each element"
                },
                "attribute": "list-type",
                "reflect": true,
                "defaultValue": "ListType.NONE"
            }
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=index.js.map
