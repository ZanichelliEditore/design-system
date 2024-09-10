import { Host, h } from "@stencil/core";
import { ListSize, ListType } from "../../../beans";
export class ZList {
    constructor() {
        this.size = ListSize.MEDIUM;
        this.listType = ListType.NONE;
        this.role = "list";
    }
    setChildrenSizeType() {
        const children = this.host.children;
        for (let i = 0; i < children.length; i++) {
            children[i].setAttribute("size", this.size);
            children[i].setAttribute("list-type", this.listType);
            children[i].setAttribute("list-element-position", (i + 1).toString());
        }
    }
    componentDidLoad() {
        this.setChildrenSizeType();
    }
    render() {
        return (h(Host, { key: '633a5d569f1cf8bb85c40da691e254fb9f78f6bd' }, h("slot", { key: 'bd1315c66e0dca81cfe6607f4a82245b94c84e6b' })));
    }
    static get is() { return "z-list"; }
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
            },
            "role": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets role of the element."
                },
                "attribute": "role",
                "reflect": true,
                "defaultValue": "\"list\""
            }
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=index.js.map
