import { h } from "@stencil/core";
export class ZMyzCardList {
    constructor() {
        this.listdata = undefined;
        this.renderList = this.renderList.bind(this);
    }
    handleSpaceKeyPress(e, url) {
        if (e.keyCode == 32 || e.keyCode == 13) {
            e.preventDefault();
            window.open(url, "_blank");
        }
    }
    formatListContent(data) {
        const { value, isLink, url } = data;
        if (!isLink) {
            return h("span", null, value);
        }
        return (h("a", { role: "button", onKeyPress: (e) => this.handleSpaceKeyPress(e, url), href: url, target: "_blank" }, value));
    }
    renderList(dataArray) {
        return dataArray.map((data) => {
            return h("li", null, this.formatListContent(data));
        });
    }
    render() {
        return h("ul", { key: '874d84f31edec60ba919f37feb4ae42d399b90d6' }, this.renderList(JSON.parse(this.listdata)));
    }
    static get is() { return "z-myz-card-list"; }
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
            "listdata": {
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
                    "text": "list data stringified array"
                },
                "attribute": "listdata",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=index.js.map
