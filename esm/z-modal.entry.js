import { r as registerInstance, c as createEvent, h } from './index-604accea.js';
import { h as handleKeyboardSubmit } from './utils-0ea36787.js';

const stylesCss = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>div{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.7);width:100%;height:100%;z-index:1000;overflow:auto;overflow:-moz-scrollbars-none;-ms-overflow-style:none;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}:host>div::-webkit-scrollbar{width:0 !important}:host>div>div{z-index:1010;width:100%;margin:0;background:var(--bg-white)}:host>div>div>header{display:flex;flex-wrap:nowrap;flex-direction:row;justify-content:space-between;align-items:stretch;align-content:space-between;background:var(--bg-grey-050)}:host>div>div>header>z-icon{cursor:pointer;fill:var(--myz-blue);margin:calc(var(--space-unit) * 2) calc(var(--space-unit) * 2);transform:scale(0.9)}:host>div>div>header>div{margin:calc(var(--space-unit) * 2) calc(var(--space-unit) * 2)}:host>div>div>header>div>h1,:host>div>div>header>div>h2{font-family:var(--dashboard-font);font-weight:var(--font-rg);color:var(--text-grey-800);margin:0;padding:0}:host>div>div>header>div>h1{font-size:20px;line-height:28px}:host>div>div>header>div>h2{font-size:16px;line-height:24px;margin-top:var(--space-unit)}:host>div>div>main{background:white;overflow:hidden}@media only screen and (min-width: 768px){:host>div>div{width:auto;min-width:300px;min-height:300px;margin-top:calc(var(--space-unit) * 6);background:none}:host>div>div>header{border-radius:var(--border-radius) var(--border-radius) 0 0}:host>div>div>header>z-icon{margin:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 3) calc(var(--space-unit) * 1.5) 0px;transform:scale(1)}:host>div>div>header>div{margin:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 3)}:host>div>div>main{border-radius:0 0 var(--border-radius) var(--border-radius)}:host>div>div>div.bottomBackground{background:transparent;height:calc(var(--space-unit) * 4)}}";

const ZModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalClose = createEvent(this, "modalClose", 7);
    this.modalHeaderActive = createEvent(this, "modalHeaderActive", 7);
    this.emitModalClose = this.emitModalClose.bind(this);
    this.emitModalHeaderActive = this.emitModalHeaderActive.bind(this);
  }
  emitModalClose() {
    this.modalClose.emit({ modalid: this.modalid });
  }
  emitModalHeaderActive() {
    this.modalHeaderActive.emit({ modalid: this.modalid });
  }
  render() {
    return (h("div", { "data-action": "modalBackground", "data-modal": this.modalid }, h("div", { id: this.modalid }, h("header", { onClick: this.emitModalHeaderActive }, h("div", null, this.modaltitle && h("h1", null, this.modaltitle), this.modalsubtitle && h("h2", null, this.modalsubtitle)), h("z-icon", { name: "multiply-circle-filled", width: 24, height: 24, onClick: () => this.emitModalClose(), "data-action": "modalClose", "data-modal": this.modalid, onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitModalClose), tabindex: "0" })), h("main", null, h("slot", { name: "modalContent" })), h("div", { class: "bottomBackground", "data-action": "modalBackground", "data-modal": this.modalid }))));
  }
};
ZModal.style = stylesCss;

export { ZModal as z_modal };
