import { r as registerInstance, h } from './index-f16bc2ca.js';

const stylesCss = ":host{display:none;background-color:var(--gray50)}:host>td>div.content-container{margin-bottom:calc(var(--space-unit) / 2);box-shadow:var(--shadow-2)}";
const ZTableExpandedRowStyle0 = stylesCss;

const ZTableExpandedRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colSpan = undefined;
    }
    render() {
        return (h("td", { key: '3f662b4a7d38b2eca3db3a67176991bc4c538edb', colSpan: this.colSpan }, h("div", { key: 'cff535acab16a19f7475b115649c1ca936990c76', class: "content-container" }, h("slot", { key: '742b4fbffd8a5330424432a1145796b71e86bfa8' }))));
    }
};
ZTableExpandedRow.style = ZTableExpandedRowStyle0;

export { ZTableExpandedRow as Z };

//# sourceMappingURL=index-1ad3694a.js.map