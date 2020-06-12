import { r as registerInstance, c as createEvent, h } from './index-b66fe98f.js';
import { h as handleKeyboardSubmit } from './utils-7f119728.js';

const stylesCss = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>div{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.7);width:100%;height:100%;z-index:1000;overflow:auto;overflow:-moz-scrollbars-none;-ms-overflow-style:none;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}:host>div::-webkit-scrollbar{width:0 !important}:host>div>div{z-index:1010;width:100%;margin:0;background:var(--bg-white)}:host>div>div>header{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:justify;align-content:space-between;background:var(--bg-grey-050)}:host>div>div>header>z-icon{cursor:pointer;fill:var(--myz-blue);margin:var(--basex2) var(--basex2);-webkit-transform:scale(0.9);transform:scale(0.9)}:host>div>div>header>div{margin:var(--basex2) var(--basex2)}:host>div>div>header>div>h1,:host>div>div>header>div>h2{font-family:var(--dashboard-font);font-weight:var(--font-rg);color:var(--text-grey-800);margin:0;padding:0}:host>div>div>header>div>h1{font-size:20px;line-height:28px}:host>div>div>header>div>h2{font-size:16px;line-height:24px;margin-top:var(--basex1)}:host>div>div>main{background:white;overflow:hidden}@media only screen and (min-width: 768px){:host>div{-ms-flex-align:center;align-items:center}:host>div>div{width:auto;min-width:300px;min-height:300px;margin-top:var(--basex4);background:none}:host>div>div>header{border-radius:var(--radius-base) var(--radius-base) 0 0}:host>div>div>header>z-icon{margin:var(--half-x3) var(--basex3) var(--half-x3) 0px;-webkit-transform:scale(1);transform:scale(1)}:host>div>div>header>div{margin:var(--half-x3) var(--basex3)}:host>div>div>main{border-radius:0 0 var(--radius-base) var(--radius-base)}:host>div>div>div.bottomBackground{background:transparent;height:var(--basex4)}}";

/**
 * @slot modalContent - set the content of the modal
 */
class ZModal {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.emitModalClose = this.emitModalClose.bind(this);
        this.emitModalHeaderActive = this.emitModalHeaderActive.bind(this);
        this.modalClose = createEvent(this, "modalClose", 7);
        this.modalHeaderActive = createEvent(this, "modalHeaderActive", 7);
    }
    emitModalClose() {
        this.modalClose.emit({ modalid: this.modalid });
    }
    emitModalHeaderActive() {
        this.modalHeaderActive.emit({ modalid: this.modalid });
    }
    render() {
        return (h("div", { "data-action": "modalBackground", "data-modal": this.modalid }, h("div", { id: this.modalid }, h("header", { onClick: this.emitModalHeaderActive }, h("div", null, this.modaltitle && h("h1", null, this.modaltitle), this.modalsubtitle && h("h2", null, this.modalsubtitle)), h("z-icon", { name: "circle-cross-fill", width: 24, height: 24, onClick: () => this.emitModalClose(), "data-action": "modalClose", "data-modal": this.modalid, onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitModalClose), tabindex: "0" })), h("main", null, h("slot", { name: "modalContent" })), h("div", { class: "bottomBackground", "data-action": "modalBackground", "data-modal": this.modalid }))));
    }
}
ZModal.style = stylesCss;

export { ZModal as z_modal };
