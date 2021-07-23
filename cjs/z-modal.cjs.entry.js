'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2e494cc2.js');

const stylesCss = ":host{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;display:flex;flex-direction:row;justify-content:center;width:100%;height:100%;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.modal-background{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--gray900);opacity:0.7}.modal-container{display:flex;flex-direction:column;z-index:1010;width:100%;height:100vh;overflow:-moz-scrollbars-none;overflow:hidden}.modal-container>header{display:flex;flex-wrap:nowrap;flex-direction:row;align-items:flex-start;justify-content:flex-start;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);background:var(--color-surface02)}.modal-container>header button{margin:0;padding:0;border:none;background:transparent;cursor:pointer;margin-left:auto}.modal-container>header z-icon{--z-icon-width:calc(var(--space-unit) * 2.5);--z-icon-height:calc(var(--space-unit) * 2.5);display:flex;fill:var(--color-icon01)}.modal-container>header>div{display:flex;flex-direction:column;width:100%;margin-right:calc(var(--space-unit) * 2)}.modal-container>header h1,.modal-container>header h2{margin:0;padding:0;font-weight:var(--font-rg);color:var(--color-text01)}.modal-container>header h1{font-size:var(--font-size-5);line-height:1.4;letter-spacing:0}.modal-container>header h2{font-size:var(--font-size-3);line-height:1.5;letter-spacing:0}.modal-container>header>div *:empty{display:none}.modal-container>header h1+h2{margin-top:calc(var(--space-unit) * 0.5)}.modal-container>main{flex:1 auto;background:var(--color-surface01);overflow:auto;overflow-x:hidden}.modal-container main::-webkit-scrollbar{background:linear-gradient(\n    to right,\n    transparent 0 3px,\n    var(--gray200) 3px 7px,\n    transparent 7px 10px\n  );width:10px;border-radius:var(--border-radius)}.modal-container main::-webkit-scrollbar-track{background-color:transparent}.modal-container main::-webkit-scrollbar-thumb{background-color:var(--color-primary01);border-radius:var(--border-radius);width:10px}.modal-container main::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.modal-container main{scrollbar-color:var(--color-primary01) transparent}@media only screen and (min-width: 768px){.modal-container{position:absolute;top:calc(var(--space-unit) * 6);left:50%;transform:translateX(-50%);width:auto;height:auto;min-width:calc(var(--space-unit) * 40);min-height:calc(var(--space-unit) * 40);max-height:calc(100vh - calc(var(--space-unit) * 6 * 2));border-radius:var(--border-radius)}.modal-container>header z-icon{--z-icon-width:calc(var(--space-unit) * 3);--z-icon-height:calc(var(--space-unit) * 3)}}@media only screen and (min-width: 768px) and (max-width: 1151px){.modal-container>header{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 3)}}@media only screen and (min-width: 1152px){.modal-container>header{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 4)}.modal-container>header h1{font-size:var(--font-size-6);line-height:1.33;letter-spacing:0}.modal-container>header h2{font-size:var(--font-size-4);line-height:1.5;letter-spacing:0}.modal-container>header h1+h2{margin-top:0}}";

const ZModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.modalClose = index.createEvent(this, "modalClose", 7);
    this.modalHeaderActive = index.createEvent(this, "modalHeaderActive", 7);
    this.modalBackgroundClick = index.createEvent(this, "modalBackgroundClick", 7);
  }
  emitModalClose() {
    this.modalClose.emit({ modalid: this.modalid });
  }
  emitModalHeaderActive() {
    this.modalHeaderActive.emit({ modalid: this.modalid });
  }
  emitBackgroundClick() {
    this.modalBackgroundClick.emit({ modalid: this.modalid });
  }
  render() {
    return [
      index.h("div", { class: "modal-container", id: this.modalid }, index.h("header", { onClick: this.emitModalHeaderActive.bind(this) }, index.h("div", null, this.modaltitle && index.h("h1", null, this.modaltitle), this.modalsubtitle && index.h("h2", null, this.modalsubtitle)), index.h("button", { onClick: this.emitModalClose.bind(this) }, index.h("z-icon", { name: "multiply-circle-filled" }))), index.h("main", null, index.h("slot", { name: "modalContent" }))),
      index.h("div", { class: "modal-background", "data-action": "modalBackground", "data-modal": this.modalid, onClick: this.emitBackgroundClick.bind(this) })
    ];
  }
};
ZModal.style = stylesCss;

exports.z_modal = ZModal;
