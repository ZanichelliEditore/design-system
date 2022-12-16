'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss$1 = ":host{margin-top:calc(var(--space-unit) * 3);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.dragdrop{position:relative;display:flex;height:228px;flex-direction:column;border-color:var(--color-surface04);background-color:var(--color-surface02);background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='2' ry='2' stroke='%23CACCCEFF' stroke-width='2' stroke-dasharray='15%2c 10%2c 14%2c 11' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e\");border-radius:2px;color:var(--color-text01)}:host>.dragdrop.dragover *{pointer-events:none}:host>.dragdrop .dragover-container{position:absolute;z-index:10;top:0;left:0;display:none;width:100%;height:100%;background-color:var(--color-primary03);box-shadow:var(--shadow-focus-primary)}:host>.dragdrop .dragover-container .dragover-message{padding:10px 28px;background-color:var(--color-link-primary);color:var(--color-text04)}:host>.dragdrop.dragover .dragover-container{display:flex;align-items:center;justify-content:center}";

const ZDragdropArea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fileDropped = index.createEvent(this, "fileDropped", 7);
  }
  fileDroppedHandler(files) {
    this.fileDropped.emit(files);
  }
  renderOnDragOverMessage() {
    return (index.h("div", { class: "dragover-container" }, index.h("div", { class: "dragover-message" }, index.h("z-body", { variant: "semibold", level: 2 }, "Rilascia i file in questa area per allegarli."))));
  }
  render() {
    return (index.h("div", { tabIndex: 0, ref: (val) => (this.dragDropContainer = val), class: "dragdrop", onDragOver: (e) => {
        e.preventDefault();
        this.dragDropContainer.classList.add("dragover");
      }, onDragLeave: () => {
        this.dragDropContainer.classList.remove("dragover");
      }, onDrop: (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
          this.dragDropContainer.classList.remove("dragover");
          this.fileDroppedHandler(e.dataTransfer.files);
        }
      } }, this.renderOnDragOverMessage(), index.h("slot", null)));
  }
};
ZDragdropArea.style = stylesCss$1;

const ZHeading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Font weight variant */
    this.variant = "regular";
  }
  render() {
    return (index.h("z-typography", { tabIndex: 0, component: this.component || `h${this.level}`, level: `h${this.level}`, variant: this.variant }, index.h("slot", null)));
  }
};

const stylesCss = ":host{position:fixed;z-index:1000;top:0;right:0;bottom:0;left:0;display:flex;width:100%;height:100%;flex-direction:row;justify-content:center;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.modal-background{position:fixed;top:0;left:0;width:100%;height:100%;background-color:var(--gray900);opacity:0.7}.modal-container{z-index:1010;display:flex;overflow:-moz-scrollbars-none;overflow:hidden;width:100%;height:100vh;flex-direction:column}.modal-container>header{display:flex;flex-flow:row nowrap;align-items:flex-start;justify-content:flex-start;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);background:var(--color-surface02)}.modal-container>header button{padding:0;border:none;margin:0;margin-left:auto;background:transparent;cursor:pointer}.modal-container>header z-icon{--z-icon-width:calc(var(--space-unit) * 2.5);--z-icon-height:calc(var(--space-unit) * 2.5);display:flex;fill:var(--color-icon01)}.modal-container>header>div{display:flex;width:100%;flex-direction:column;margin-right:calc(var(--space-unit) * 2)}.modal-container>header h1,.modal-container>header h2{padding:0;margin:0;color:var(--color-text01);font-weight:var(--font-rg)}.modal-container>header h1{font-size:var(--font-size-5);letter-spacing:0;line-height:1.4}.modal-container>header h2{font-size:var(--font-size-3);letter-spacing:0;line-height:1.5}.modal-container>header>div *:empty{display:none}.modal-container>header h1+h2{margin-top:calc(var(--space-unit) * 0.5)}.modal-container>.modal-content{overflow:auto;flex:1 auto;background:var(--color-surface01);overflow-x:hidden}.modal-container .modal-content::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.modal-container .modal-content::-webkit-scrollbar-track{background-color:transparent}.modal-container .modal-content::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.modal-container .modal-content::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.modal-container .modal-content{scrollbar-color:var(--color-primary01) transparent}@media only screen and (min-width: 768px){.modal-container{position:fixed;top:calc(var(--space-unit) * 6);left:50%;width:auto;min-width:calc(var(--space-unit) * 40);height:auto;min-height:calc(var(--space-unit) * 40);max-height:calc(100vh - calc(var(--space-unit) * 6 * 2));border-radius:var(--border-radius);transform:translateX(-50%)}.modal-container>header z-icon{--z-icon-width:calc(var(--space-unit) * 3);--z-icon-height:calc(var(--space-unit) * 3)}}@media only screen and (min-width: 768px) and (max-width: 1151px){.modal-container>header{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 3)}}@media only screen and (min-width: 1152px){.modal-container>header{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 4)}.modal-container>header h1{font-size:var(--font-size-6);letter-spacing:0;line-height:1.33}.modal-container>header h2{font-size:var(--font-size-4);letter-spacing:0;line-height:1.5}.modal-container>header h1+h2{margin-top:0}}";

const ZModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.modalClose = index.createEvent(this, "modalClose", 7);
    this.modalHeaderActive = index.createEvent(this, "modalHeaderActive", 7);
    this.modalBackgroundClick = index.createEvent(this, "modalBackgroundClick", 7);
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
    return (index.h(index.Host, null, index.h("div", { class: "modal-container", id: this.modalid, role: "dialog" }, index.h("header", { onClick: this.emitModalHeaderActive.bind(this) }, index.h("div", null, this.modaltitle && index.h("h1", null, this.modaltitle), this.modalsubtitle && index.h("h2", null, this.modalsubtitle)), index.h("slot", { name: "modalCloseButton" }, index.h("button", { "aria-label": this.closeButtonLabel, onClick: this.emitModalClose.bind(this) }, index.h("z-icon", { name: "multiply-circle-filled" })))), index.h("div", { class: "modal-content" }, index.h("slot", { name: "modalContent" }))), index.h("div", { class: "modal-background", "data-action": "modalBackground", "data-modal": this.modalid, onClick: this.emitBackgroundClick.bind(this) })));
  }
};
ZModal.style = stylesCss;

exports.z_dragdrop_area = ZDragdropArea;
exports.z_heading = ZHeading;
exports.z_modal = ZModal;
