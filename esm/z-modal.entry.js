import { r as registerInstance, c as createEvent, h, H as Host } from './index-a2ca4b97.js';

const stylesCss = ":host{position:fixed;z-index:1000;top:0;right:0;bottom:0;left:0;display:flex;width:100%;height:100%;flex-direction:row;justify-content:center;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.modal-background{position:fixed;top:0;left:0;width:100%;height:100%;background-color:var(--gray900);opacity:0.7}.modal-container{z-index:1010;display:flex;overflow:-moz-scrollbars-none;overflow:hidden;width:100%;height:100vh;flex-direction:column}.modal-container>header{display:flex;flex-flow:row nowrap;align-items:flex-start;justify-content:flex-start;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);background:var(--color-surface02)}.modal-container>header button{padding:0;border:none;margin:0;margin-left:auto;background:transparent;cursor:pointer}.modal-container>header z-icon{--z-icon-width:calc(var(--space-unit) * 2.5);--z-icon-height:calc(var(--space-unit) * 2.5);display:flex;fill:var(--color-icon01)}.modal-container>header>div{display:flex;width:100%;flex-direction:column;margin-right:calc(var(--space-unit) * 2)}.modal-container>header h1,.modal-container>header h2{padding:0;margin:0;color:var(--color-text01);font-weight:var(--font-rg)}.modal-container>header h1{font-size:var(--font-size-5);letter-spacing:0;line-height:1.4}.modal-container>header h2{font-size:var(--font-size-3);letter-spacing:0;line-height:1.5}.modal-container>header>div *:empty{display:none}.modal-container>header h1+h2{margin-top:calc(var(--space-unit) * 0.5)}.modal-container>.modal-content{overflow:auto;flex:1 auto;background:var(--color-surface01);overflow-x:hidden}.modal-container .modal-content::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.modal-container .modal-content::-webkit-scrollbar-track{background-color:transparent}.modal-container .modal-content::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.modal-container .modal-content::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.modal-container .modal-content{scrollbar-color:var(--color-primary01) transparent}@media only screen and (min-width: 768px){.modal-container{position:fixed;top:calc(var(--space-unit) * 6);left:50%;width:auto;min-width:calc(var(--space-unit) * 40);height:auto;min-height:calc(var(--space-unit) * 40);max-height:calc(100vh - calc(var(--space-unit) * 6 * 2));border-radius:var(--border-radius);transform:translateX(-50%)}.modal-container>header z-icon{--z-icon-width:calc(var(--space-unit) * 3);--z-icon-height:calc(var(--space-unit) * 3)}}@media only screen and (min-width: 768px) and (max-width: 1151px){.modal-container>header{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 3)}}@media only screen and (min-width: 1152px){.modal-container>header{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 4)}.modal-container>header h1{font-size:var(--font-size-6);letter-spacing:0;line-height:1.33}.modal-container>header h2{font-size:var(--font-size-4);letter-spacing:0;line-height:1.5}.modal-container>header h1+h2{margin-top:0}}";

const ZModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalClose = createEvent(this, "modalClose", 7);
    this.modalHeaderActive = createEvent(this, "modalHeaderActive", 7);
    this.modalBackgroundClick = createEvent(this, "modalBackgroundClick", 7);
    /** aria-label for close button (optional) */
    this.closeButtonLabel = "close modal";
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
    return (h(Host, null, h("div", { class: "modal-container", id: this.modalid, role: "dialog" }, h("header", { onClick: this.emitModalHeaderActive.bind(this) }, h("div", null, this.modaltitle && h("h1", null, this.modaltitle), this.modalsubtitle && h("h2", null, this.modalsubtitle)), h("slot", { name: "modalCloseButton" }, h("button", { "aria-label": this.closeButtonLabel, onClick: this.emitModalClose.bind(this) }, h("z-icon", { name: "multiply-circle-filled" })))), h("div", { class: "modal-content" }, h("slot", { name: "modalContent" }))), h("div", { class: "modal-background", "data-action": "modalBackground", "data-modal": this.modalid, onClick: this.emitBackgroundClick.bind(this) })));
  }
};
ZModal.style = stylesCss;

export { ZModal as z_modal };
