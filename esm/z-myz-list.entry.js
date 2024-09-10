import { r as registerInstance, h } from './index-a2130b6a.js';

const stylesCss = "ul{padding:0;margin:0}";
const ZMyzListStyle0 = stylesCss;

const ZMyzList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
ZMyzList.style = ZMyzListStyle0;

export { ZMyzList as z_myz_list };

//# sourceMappingURL=z-myz-list.entry.js.map