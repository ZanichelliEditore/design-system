import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const stylesCss = ".sc-z-table-empty-box-h{display:block;padding:calc(var(--space-unit)) calc(var(--space-unit) * 3) calc(var(--space-unit) * 3) calc(var(--space-unit) * 3);background-color:var(--color-surface01)}.sc-z-table-empty-box-s>*{margin-top:var(--space-unit)}.cta.sc-z-table-empty-box{display:flex;flex-direction:row;margin-top:calc(var(--space-unit) / 2)}.cta.has-2-cta.sc-z-table-empty-box{flex-direction:column}@media only screen and (min-width: 768px){.sc-z-table-empty-box-h{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 7) calc(var(--space-unit) * 3)\n      calc(var(--space-unit) * 7)}.sc-z-table-empty-box-s>*{margin-right:calc(var(--space-unit) * 2)}.cta.sc-z-table-empty-box{margin-top:var(--space-unit)}.cta.has-2-cta.sc-z-table-empty-box{flex-direction:row}}";
const ZTableEmptyBoxStyle0 = stylesCss;

const ZTableEmptyBox = /*@__PURE__*/ proxyCustomElement(class ZTableEmptyBox extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.message = "Siamo spiacenti, al momento non sono presenti dati da visualizzare.";
        this.subtitle = "";
    }
    componentWillLoad() {
        this.hasCta1Slot = !!this.hostElement.querySelector('[slot="cta1"]');
        this.hasCta2Slot = !!this.hostElement.querySelector('[slot="cta2"]');
    }
    render() {
        return (h(Host, { key: '15246acb9b5e2df169b353883dd30b4dc9f9b298' }, h("span", { key: '78ecd045b2fd73998a446baadfabc9e5ec3d03d1', class: "body-3-sb" }, this.message), h("br", { key: 'b41c15173e3985b96884767fc52d5d4a2816bec8' }), !!this.subtitle && h("span", { class: "body-4" }, this.subtitle), (!!this.hasCta1Slot || !!this.hasCta2Slot) && (h("div", { class: {
                "cta": true,
                "has-2-cta": !!this.hasCta1Slot && !!this.hasCta2Slot,
            } }, h("slot", { name: "cta1" }), h("slot", { name: "cta2" })))));
    }
    get hostElement() { return this; }
    static get style() { return ZTableEmptyBoxStyle0; }
}, [6, "z-table-empty-box", {
        "message": [1],
        "subtitle": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-table-empty-box"];
    components.forEach(tagName => { switch (tagName) {
        case "z-table-empty-box":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTableEmptyBox);
            }
            break;
    } });
}

export { ZTableEmptyBox as Z, defineCustomElement as d };

//# sourceMappingURL=index28.js.map