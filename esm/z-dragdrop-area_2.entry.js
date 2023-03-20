import { r as registerInstance, c as createEvent, h, g as getElement } from './index-a2ca4b97.js';
import { f as KeyboardCode } from './index-e36ec4a4.js';

const stylesCss$1 = ":host{margin-top:calc(var(--space-unit) * 3);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.dragdrop{position:relative;display:flex;height:228px;flex-direction:column;border-color:var(--color-surface04);background-color:var(--color-surface02);background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='2' ry='2' stroke='%23CACCCEFF' stroke-width='2' stroke-dasharray='15%2c 10%2c 14%2c 11' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e\");border-radius:2px;color:var(--color-text01)}:host>.dragdrop.dragover *{pointer-events:none}:host>.dragdrop .dragover-container{position:absolute;z-index:10;top:0;left:0;display:none;width:100%;height:100%;background-color:var(--color-primary03);box-shadow:var(--shadow-focus-primary)}:host>.dragdrop .dragover-container .dragover-message{padding:10px 28px;background-color:var(--color-link-primary);color:var(--color-text04)}:host>.dragdrop.dragover .dragover-container{display:flex;align-items:center;justify-content:center}";

const ZDragdropArea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fileDropped = createEvent(this, "fileDropped", 7);
  }
  fileDroppedHandler(files) {
    this.fileDropped.emit(files);
  }
  renderOnDragOverMessage() {
    return (h("div", { class: "dragover-container" }, h("div", { class: "dragover-message" }, h("span", { class: "body-2-sb" }, "Rilascia i file in questa area per allegarli."))));
  }
  render() {
    return (h("div", { tabIndex: 0, ref: (val) => (this.dragDropContainer = val), class: "dragdrop", onDragOver: (e) => {
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
      } }, this.renderOnDragOverMessage(), h("slot", null)));
  }
};
ZDragdropArea.style = stylesCss$1;

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>dialog{padding:0;border:none;margin:0}:host>dialog:modal{width:100%;max-width:100%;max-height:100%}:host>dialog::backdrop{display:none}.modal-container{z-index:1010;display:flex;overflow:-moz-scrollbars-none;overflow:hidden;width:100%;height:100vh;flex-direction:column}.modal-container>header{display:flex;flex-flow:row nowrap;align-items:flex-start;justify-content:flex-start;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);background:var(--color-surface02)}.modal-container>header button{padding:0;border:none;margin:0;margin-left:auto;background:transparent;cursor:pointer}.modal-container>header z-icon{--z-icon-width:calc(var(--space-unit) * 2.5);--z-icon-height:calc(var(--space-unit) * 2.5);display:flex;fill:var(--color-icon01)}.modal-container>header>div{display:flex;width:100%;flex-direction:column;margin-right:calc(var(--space-unit) * 2)}.modal-container>header h1,.modal-container>header h2{padding:0;margin:0;color:var(--color-text01);font-weight:var(--font-rg)}.modal-container>header h1{font-size:var(--font-size-5);letter-spacing:0;line-height:1.4}.modal-container>header h2{font-size:var(--font-size-3);letter-spacing:0;line-height:1.5}.modal-container>header>div *:empty{display:none}.modal-container>header h1+h2{margin-top:calc(var(--space-unit) * 0.5)}.modal-container>.modal-content{overflow:auto;flex:1 auto;background:var(--color-surface01);overflow-x:hidden}.modal-container .modal-content::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.modal-container .modal-content::-webkit-scrollbar-track{background-color:transparent}.modal-container .modal-content::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.modal-container .modal-content::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.modal-container .modal-content{scrollbar-color:var(--color-primary01) transparent}@media only screen and (min-width: 768px){.modal-background{position:fixed;top:0;left:0;width:100%;height:100%;background-color:var(--gray900);opacity:0.7}.modal-container{position:fixed;top:calc(var(--space-unit) * 6);left:50%;width:auto;min-width:calc(var(--space-unit) * 40);height:auto;min-height:calc(var(--space-unit) * 40);max-height:calc(100vh - calc(var(--space-unit) * 6 * 2));border-radius:var(--border-radius);transform:translateX(-50%)}.modal-container>header z-icon{--z-icon-width:calc(var(--space-unit) * 3);--z-icon-height:calc(var(--space-unit) * 3)}}@media only screen and (min-width: 768px) and (max-width: 1151px){.modal-container>header{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 3)}}@media only screen and (min-width: 1152px){.modal-container>header{padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 4)}.modal-container>header h1{font-size:var(--font-size-6);letter-spacing:0;line-height:1.33}.modal-container>header h2{font-size:var(--font-size-4);letter-spacing:0;line-height:1.5}.modal-container>header h1+h2{margin-top:0}}";

const FOCUSABLE_ELEMENTS_SELECTOR = ':is(button, input, select, textarea, [contenteditable=""], [contenteditable="true"], a[href], [tabindex], summary):not([disabled], [disabled=""], [tabindex="-1"], [aria-hidden="true"], [hidden])';
const ZModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalClose = createEvent(this, "modalClose", 7);
    this.modalHeaderActive = createEvent(this, "modalHeaderActive", 7);
    this.modalBackgroundClick = createEvent(this, "modalBackgroundClick", 7);
    /** aria-label for close button (optional) */
    this.closeButtonLabel = "chiudi modale";
    /** add role "alertdialog" to dialog (optional, default is false) */
    this.alertdialog = false;
    /** if true, the modal is closable (optional, default is true) */
    this.closable = true;
  }
  emitModalClose() {
    if (this.closable) {
      this.modalClose.emit({ modalid: this.modalid });
    }
  }
  emitModalHeaderActive() {
    this.modalHeaderActive.emit({ modalid: this.modalid });
  }
  emitBackgroundClick() {
    if (this.closable) {
      this.modalBackgroundClick.emit({ modalid: this.modalid });
    }
  }
  componentDidLoad() {
    this.open();
  }
  /** open modal */
  async open() {
    var _a;
    (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.showModal();
  }
  /** close modal */
  async close() {
    var _a;
    if (this.closable) {
      (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.close();
    }
  }
  /**
   * Get a list of focusable elements in the dialog.
   * Remove elements with `display: none` from the list, because they're not focusable.
   *
   * N.B. The list is built on the assumption that elements inside shadow root are placed ALL before the `modalContent` slot.
   * Adding focusable elements after the `modalContent` slot would break the order of elements in the list.
   */
  get focusableElements() {
    return [
      ...Array.from(this.host.shadowRoot.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)),
      ...Array.from(this.host.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)),
    ].filter((element) => getComputedStyle(element).display !== "none");
  }
  handleKeyDown(e) {
    if (e.code !== KeyboardCode.TAB) {
      return;
    }
    const focusableElements = this.focusableElements;
    const shadowActiveElement = this.host.shadowRoot.activeElement;
    const activeElement = this.host.ownerDocument.activeElement;
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    if (e.shiftKey && (shadowActiveElement == firstFocusableElement || activeElement == firstFocusableElement)) {
      // shift + tab was pressed and current active element is the first focusable element
      e.preventDefault();
      lastFocusableElement.focus();
    }
    else if (!e.shiftKey && (shadowActiveElement == lastFocusableElement || activeElement == lastFocusableElement)) {
      // shift + tab was pressed and current active element is the first focusable element
      e.preventDefault();
      firstFocusableElement.focus();
    }
  }
  closeButtonSlot() {
    if (this.closable) {
      return (h("slot", { name: "modalCloseButton" }, h("button", { "aria-label": this.closeButtonLabel, onClick: () => this.close() }, h("z-icon", { name: "multiply-circle-filled" }))));
    }
  }
  handleEscape(e) {
    if (this.closable)
      return;
    e.preventDefault();
  }
  render() {
    return (h("dialog", { "aria-labelledby": "modal-title", "aria-describedby": "modal-content", role: this.alertdialog ? "alertdialog" : undefined, ref: (el) => (this.dialog = el), onClose: () => this.emitModalClose(),
      // @ts-ignore
      onCancel: (e) => this.handleEscape(e) }, h("div", { class: "modal-container", id: this.modalid }, h("header", { onClick: this.emitModalHeaderActive.bind(this) }, h("div", null, this.modaltitle && h("h1", { id: "modal-title" }, this.modaltitle), this.modalsubtitle && h("h2", { id: "modal-subtitle" }, this.modalsubtitle)), this.closeButtonSlot()), h("div", { class: "modal-content", id: "modal-content" }, h("slot", { name: "modalContent" }))), h("div", { class: "modal-background", "data-action": "modalBackground", "data-modal": this.modalid, onClick: () => {
        this.emitBackgroundClick();
        this.close();
      } })));
  }
  get host() { return getElement(this); }
};
ZModal.style = stylesCss;

export { ZDragdropArea as z_dragdrop_area, ZModal as z_modal };
