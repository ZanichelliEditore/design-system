'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ".sc-z-dragdrop-area-h{font-family:var(--font-family-sans);font-weight:var(--font-rg);margin-top:calc(var(--space-unit) * 3)}.sc-z-dragdrop-area-h>.dragdrop.sc-z-dragdrop-area{display:flex;color:var(--color-text01);flex-direction:column;position:relative;background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='2' ry='2' stroke='%23CACCCEFF' stroke-width='2' stroke-dasharray='15%2c 10%2c 14%2c 11' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e\");border-radius:2px;border-color:var(--color-surface04);height:228px;background-color:var(--color-surface02)}.sc-z-dragdrop-area-h>.dragdrop.dragover.sc-z-dragdrop-area *.sc-z-dragdrop-area{pointer-events:none}.sc-z-dragdrop-area-h>.dragdrop.sc-z-dragdrop-area .dragover-container.sc-z-dragdrop-area{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:none;background-color:var(--color-primary03);box-shadow:var(--shadow-focus-primary)}.sc-z-dragdrop-area-h>.dragdrop.sc-z-dragdrop-area .dragover-container.sc-z-dragdrop-area .dragover-message.sc-z-dragdrop-area{background-color:var(--color-link-primary);color:var(--color-text04);padding:10px 28px}.sc-z-dragdrop-area-h>.dragdrop.dragover.sc-z-dragdrop-area .dragover-container.sc-z-dragdrop-area{display:flex;justify-content:center;align-items:center}";

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
      }, onDragEnd: () => { }, onDrop: (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
          this.dragDropContainer.classList.remove("dragover");
          this.fileDroppedHandler(e.dataTransfer.files);
        }
      } }, this.renderOnDragOverMessage(), index.h("slot", null)));
  }
};
ZDragdropArea.style = stylesCss;

const ZHeading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variant = "regular";
  }
  render() {
    return (index.h("z-typography", { tabIndex: 0, component: this.component || `h${this.level}`, level: `h${this.level}`, variant: this.variant }, index.h("slot", null)));
  }
};

exports.z_dragdrop_area = ZDragdropArea;
exports.z_heading = ZHeading;
