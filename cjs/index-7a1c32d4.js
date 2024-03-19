'use strict';

const index = require('./index-dc60bee7.js');

const stylesCss = ".sc-z-table-empty-box-h{display:block;padding:calc(var(--space-unit)) calc(var(--space-unit) * 3) calc(var(--space-unit) * 3) calc(var(--space-unit) * 3);background-color:var(--color-surface01)}.sc-z-table-empty-box-s>*{margin-top:var(--space-unit)}.cta.sc-z-table-empty-box{display:flex;flex-direction:row;margin-top:calc(var(--space-unit) / 2)}.cta.has-2-cta.sc-z-table-empty-box{flex-direction:column}@media only screen and (min-width: 768px){.sc-z-table-empty-box-h{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 7) calc(var(--space-unit) * 3)\n      calc(var(--space-unit) * 7)}.sc-z-table-empty-box-s>*{margin-right:calc(var(--space-unit) * 2)}.cta.sc-z-table-empty-box{margin-top:var(--space-unit)}.cta.has-2-cta.sc-z-table-empty-box{flex-direction:row}}";
const ZTableEmptyBoxStyle0 = stylesCss;

const ZTableEmptyBox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.message = "Siamo spiacenti, al momento non sono presenti dati da visualizzare.";
        this.subtitle = "";
    }
    componentWillLoad() {
        this.hasCta1Slot = !!this.hostElement.querySelector('[slot="cta1"]');
        this.hasCta2Slot = !!this.hostElement.querySelector('[slot="cta2"]');
    }
    render() {
        return (index.h(index.Host, { key: '15246acb9b5e2df169b353883dd30b4dc9f9b298' }, index.h("span", { key: '78ecd045b2fd73998a446baadfabc9e5ec3d03d1', class: "body-3-sb" }, this.message), index.h("br", { key: 'b41c15173e3985b96884767fc52d5d4a2816bec8' }), !!this.subtitle && index.h("span", { class: "body-4" }, this.subtitle), (!!this.hasCta1Slot || !!this.hasCta2Slot) && (index.h("div", { class: {
                "cta": true,
                "has-2-cta": !!this.hasCta1Slot && !!this.hasCta2Slot,
            } }, index.h("slot", { name: "cta1" }), index.h("slot", { name: "cta2" })))));
    }
    get hostElement() { return index.getElement(this); }
};
ZTableEmptyBox.style = ZTableEmptyBoxStyle0;

exports.ZTableEmptyBox = ZTableEmptyBox;

//# sourceMappingURL=index-7a1c32d4.js.map