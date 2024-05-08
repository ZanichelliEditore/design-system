'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');

const stylesCss = "ul{padding:0;margin:0}";
const ZMyzListStyle0 = stylesCss;

const ZMyzList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("ul", { key: '7ae896a090c0215b27d6e4b9cd44a269c03c009c' }, this.list &&
            this.list.map((bean, i) => (index.h("z-myz-list-item", { listitemid: bean.listitemid, text: bean.text, link: bean.link, linktarget: bean.linktarget, icon: bean.icon, underlined: lastElem != i })))));
    }
    static get watchers() { return {
        "inputrawdata": ["oninputrawdataChange"]
    }; }
};
ZMyzList.style = ZMyzListStyle0;

exports.z_myz_list = ZMyzList;

//# sourceMappingURL=z-myz-list.cjs.entry.js.map