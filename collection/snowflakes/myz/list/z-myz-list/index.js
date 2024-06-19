import { h } from "@stencil/core";
export class ZMyzList {
    constructor() {
        this.inputrawdata = undefined;
        this.list = undefined;
    }
    componentWillLoad() {
        if (this.inputrawdata) {
            this.parseinputrawdata(this.inputrawdata);
        }
    }
    parseinputrawdata(inputrawdata) {
        this.list = [...JSON.parse(inputrawdata)];
    }
    oninputrawdataChange(newValue) {
        this.parseinputrawdata(newValue);
    }
    render() {
        const lastElem = this.list ? this.list.length - 1 : -1;
        return (h("ul", { key: '9cf1e909a4da9d319f437c1d5fcbc799a49e668b' }, this.list &&
            this.list.map((bean, i) => (h("z-myz-list-item", { listitemid: bean.listitemid, text: bean.text, link: bean.link, linktarget: bean.linktarget, icon: bean.icon, underlined: lastElem != i })))));
    }
    static get is() { return "z-myz-list"; }
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
            "inputrawdata": {
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
                    "text": "json stringified list data (mutable, optional)"
                },
                "attribute": "inputrawdata",
                "reflect": false
            },
            "list": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "ListItem[]",
                    "resolved": "ListItem[]",
                    "references": {
                        "ListItem": {
                            "location": "import",
                            "path": "../../../../beans/index.js",
                            "id": "src/beans/index.tsx::ListItem"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "list item data (mutable, optional)"
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "inputrawdata",
                "methodName": "oninputrawdataChange"
            }];
    }
}
//# sourceMappingURL=index.js.map
