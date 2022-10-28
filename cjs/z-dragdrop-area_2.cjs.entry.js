'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ":host{margin-top:calc(var(--space-unit) * 3);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.dragdrop{position:relative;display:flex;height:228px;flex-direction:column;border-color:var(--color-surface04);background-color:var(--color-surface02);background-image:url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='2' ry='2' stroke='%23CACCCEFF' stroke-width='2' stroke-dasharray='15%2c 10%2c 14%2c 11' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e\");border-radius:2px;color:var(--color-text01)}:host>.dragdrop.dragover *{pointer-events:none}:host>.dragdrop .dragover-container{position:absolute;z-index:10;top:0;left:0;display:none;width:100%;height:100%;background-color:var(--color-primary03);box-shadow:var(--shadow-focus-primary)}:host>.dragdrop .dragover-container .dragover-message{padding:10px 28px;background-color:var(--color-link-primary);color:var(--color-text04)}:host>.dragdrop.dragover .dragover-container{display:flex;align-items:center;justify-content:center}";

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
ZDragdropArea.style = stylesCss;

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

exports.z_dragdrop_area = ZDragdropArea;
exports.z_heading = ZHeading;
