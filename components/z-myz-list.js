import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './index9.js';
import { d as defineCustomElement$2 } from './index20.js';

const stylesCss = "ul{padding:0;margin:0}";
const ZMyzListStyle0 = stylesCss;

const ZMyzList$1 = /*@__PURE__*/ proxyCustomElement(class ZMyzList extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h("ul", { key: 'b49ccd7184049e42611185d36fcf9cc1f74fd13b' }, this.list &&
            this.list.map((bean, i) => (h("z-myz-list-item", { listitemid: bean.listitemid, text: bean.text, link: bean.link, linktarget: bean.linktarget, icon: bean.icon, underlined: lastElem != i })))));
    }
    static get watchers() { return {
        "inputrawdata": ["oninputrawdataChange"]
    }; }
    static get style() { return ZMyzListStyle0; }
}, [1, "z-myz-list", {
        "inputrawdata": [1],
        "list": [1040]
    }, undefined, {
        "inputrawdata": ["oninputrawdataChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-myz-list", "z-icon", "z-myz-list-item"];
    components.forEach(tagName => { switch (tagName) {
        case "z-myz-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMyzList$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "z-myz-list-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZMyzList = ZMyzList$1;
const defineCustomElement = defineCustomElement$1;

export { ZMyzList, defineCustomElement };

//# sourceMappingURL=z-myz-list.js.map