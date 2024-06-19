import { h, Host } from "@stencil/core";
import { DividerSize, ListDividerType, ListSize, ListType } from "../../../beans";
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
        return (h(Host, { key: '5732fd0502a40361f81b8896d35b5ecb50f3d405', role: "group" }, h("div", { key: 'd70da2717bc7ba681b0e4a01c9c83404d51ceba9', class: {
                "z-list-group-header-container": true,
                "has-header": this.hasHeader,
            } }, h("slot", { key: '77ed9d0a8baffb09574d5e9a183dbf8fbf3f4a96', name: "header-title" }), this.dividerType === ListDividerType.HEADER && (h("z-divider", { key: '35051ec5919d79249f1bb35a29587b53a1b1da89', color: this.dividerColor, size: this.dividerSize }))), h("slot", { key: '6920f9d885ec1e4a250164a4dc1d5c266246af4c' })));
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
