import { r as registerInstance, h, H as Host, g as getElement } from './index-a2ca4b97.js';

const stylesCss = ".sc-z-table-empty-box-h{display:block;padding:calc(var(--space-unit)) calc(var(--space-unit) * 3) calc(var(--space-unit) * 3) calc(var(--space-unit) * 3);background-color:var(--bg-white)}.sc-z-table-empty-box-s>*{margin-top:var(--space-unit)}.cta.sc-z-table-empty-box{display:flex;flex-direction:row;margin-top:calc(var(--space-unit) / 2)}.cta.has-2-cta.sc-z-table-empty-box{flex-direction:column}@media only screen and (min-width: 768px){.sc-z-table-empty-box-h{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 7) calc(var(--space-unit) * 3)\n      calc(var(--space-unit) * 7)}.sc-z-table-empty-box-s>*{margin-right:calc(var(--space-unit) * 2)}.cta.sc-z-table-empty-box{margin-top:var(--space-unit)}.cta.has-2-cta.sc-z-table-empty-box{flex-direction:row}}";

const ZTableEmptyBox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Sets main title message*/
    this.message = "Siamo spiacenti, al momento non sono presenti dati da visualizzare.";
    /** Sets message */
    this.subtitle = "";
  }
  componentWillLoad() {
    this.hasCta1Slot = !!this.hostElement.querySelector('[slot="cta1"]');
    this.hasCta2Slot = !!this.hostElement.querySelector('[slot="cta2"]');
  }
  render() {
    return (h(Host, null, h("span", { class: "body-3-sb" }, this.message), h("br", null), !!this.subtitle && h("span", { class: "body-4" }, this.subtitle), (!!this.hasCta1Slot || !!this.hasCta2Slot) && (h("div", { class: {
        "cta": true,
        "has-2-cta": !!this.hasCta1Slot && !!this.hasCta2Slot,
      } }, h("slot", { name: "cta1" }), h("slot", { name: "cta2" })))));
  }
  get hostElement() { return getElement(this); }
};
ZTableEmptyBox.style = stylesCss;

export { ZTableEmptyBox as z_table_empty_box };
