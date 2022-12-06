'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-fa110f37.js');
const utils = require('./utils-600bad93.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ":host{color:var(--color-text01);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.container{display:flex;flex-direction:column}:host .modal-wrapper{display:flex;align-items:center;justify-content:center}:host .modal-wrapper>.files-wrapper{display:flex;flex-direction:column;margin:calc(var(--space-unit) * 4);gap:var(--space-unit)}:host .text-container{display:flex;flex-direction:column;margin:auto}:host .text-container z-body{text-align:center}:host .text-container .upload-link{color:var(--color-link-primary);cursor:pointer}:host .text-container .upload-link-text{margin-bottom:var(--space-unit)}input#file-elem{display:none}#title{display:inline-block;margin-bottom:var(--space-unit)}:host>.container>z-button{display:inline-block;margin-top:calc(var(--space-unit) * 3)}:host>.container>.files-container.hidden{display:none}:host>.container>.files-container>z-heading{display:inline-block;margin:calc(var(--space-unit) * 3) 0}:host>.container>.files-container>.files-wrapper{display:flex;flex-wrap:wrap;column-gap:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}:host>.container>.files-container>z-divider{margin-top:calc(var(--space-unit) * 3);margin-bottom:0}@media only screen and (min-width: 768px){:host>.container>z-button{align-self:flex-start}}";

const ZFileUpload = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fileInput = index.createEvent(this, "fileInput", 7);
    /** Prop indicating the file upload type - can be default or dragdrop */
    this.type = index$1.ZFileUploadType.DEFAULT;
    /** Files added by the user */
    this.files = [];
    this.inputAttributes = {
      type: "file",
      id: "file-elem",
      multiple: true,
    };
  }
  /** Listen removeFile event sent from z-file component */
  removeFileListener(e) {
    const files = this.files;
    const file = files.find((file) => file.name === e.detail.fileName);
    if (file) {
      const index = files.indexOf(file);
      if (index >= 0) {
        files.splice(index, 1);
        this.files = [...files];
      }
    }
  }
  /** Listen fileDropped event sent from z-dragdrop-area component */
  fileDroppedListener(e) {
    this.input.files = e.detail;
    this.fileInputHandler();
  }
  componentDidUpdate() {
    this.handleAccessibility();
    this.invalidFiles.size && this.errorModal.focus();
  }
  componentWillLoad() {
    this.invalidFiles = new Map();
  }
  fileInputHandler() {
    if (this.input.files.length) {
      this.invalidFiles = this.checkFiles(Array.from(this.input.files));
    }
  }
  /** get array of uploaded files */
  async getFiles() {
    return this.files;
  }
  getType() {
    if (utils.getDevice() !== index$1.Device.DESKTOP) {
      return index$1.ZFileUploadType.DEFAULT;
    }
    return this.type;
  }
  handleAccessibility() {
    const lastFile = this.el.querySelector("z-file:last-child z-chip button");
    if (this.files.length > 0 && lastFile) {
      lastFile.focus();
    }
    else {
      this.getType() === index$1.ZFileUploadType.DEFAULT
        ? this.button.querySelector("button").focus()
        : this.uploadLink.focus();
    }
  }
  checkFiles(files) {
    const errors = new Map();
    const sizeErrorString = `supera i ${this.fileMaxSize}MB`;
    const formatErrorString = " ha un'estensione non prevista";
    files.forEach((file) => {
      const fileSize = file.size / 1024 / 1024;
      const fileFormatOk = this.acceptedFormat
        .split(",")
        .some((ext) => file.name.toLowerCase().endsWith(ext.trim()));
      const fileSizeOk = fileSize <= this.fileMaxSize;
      if (fileSizeOk && fileFormatOk) {
        if (!this.files.find((f) => f.name === file.name)) {
          this.files.push(file);
          this.fileInput.emit(file);
          this.input.value = "";
        }
        return;
      }
      errors.set(file.name, []);
      if (!fileSizeOk) {
        errors.get(file.name).push(sizeErrorString);
      }
      if (!fileFormatOk) {
        errors.get(file.name).push(formatErrorString);
      }
    });
    return errors;
  }
  renderTitle() {
    return (index.h("z-heading", { id: "title", variant: "semibold", level: 2 }, this.mainTitle));
  }
  renderDescription(variant, level) {
    return (index.h("z-body", { variant: variant, level: level }, this.description));
  }
  renderAllowedFileExtensions() {
    let fileFormatString = "";
    let fileWeightString = "";
    if (this.acceptedFormat) {
      const fileFormat = this.acceptedFormat
        .split(", ")
        .map((string) => string.substring(1).toUpperCase())
        .join(", ");
      fileFormatString = ` nei formati ${fileFormat}`;
    }
    if (this.fileMaxSize) {
      fileWeightString = ` per un massimo di ${this.fileMaxSize}MB di peso`;
    }
    const finalString = `Puoi allegare file${fileFormatString}${fileWeightString}.`;
    return index.h("z-body", { level: 3 }, fileFormatString || fileWeightString ? finalString : null);
  }
  renderFileSection() {
    return (index.h("section", { class: `files-container ${!this.files.length ? "hidden" : ""}` }, index.h("z-heading", { variant: "semibold", level: 4 }, "File appena caricati"), index.h("div", { class: "files-wrapper" }, index.h("slot", { name: "files" })), index.h("z-divider", { size: index$1.DividerSize.MEDIUM })));
  }
  renderInput() {
    return (index.h("input", Object.assign({}, this.inputAttributes, { onChange: () => this.fileInputHandler(), accept: this.acceptedFormat, ref: (val) => (this.input = val) })));
  }
  renderUploadButton() {
    return [
      this.renderInput(),
      index.h("z-button", { onClick: () => this.input.click(), onKeyPress: (e) => {
          if (e.code == "Space" || e.code == "Enter") {
            e.preventDefault();
            this.input.click();
          }
        }, id: "fileSelect", variant: this.buttonVariant, icon: "upload", ref: (val) => (this.button = val) }, "Allega"),
    ];
  }
  renderUploadLink() {
    return [
      this.renderInput(),
      index.h("z-body", { class: "upload-link-text", variant: "regular", level: 1 }, "Trascinalo qui o", " ", index.h("z-body", { tabIndex: 0, class: "upload-link", onClick: () => this.input.click(), onKeyPress: (e) => {
          if (e.code == "Space" || e.code == "Enter") {
            e.preventDefault();
            this.input.click();
          }
        }, variant: "semibold", level: 1, ref: (val) => (this.uploadLink = val) }, "caricalo"), " ", "dal tuo computer"),
    ];
  }
  renderDefaultMode() {
    return [
      this.renderDescription("semibold", 3),
      this.renderAllowedFileExtensions(),
      this.renderFileSection(),
      this.renderUploadButton(),
    ];
  }
  renderDragDropMode() {
    return [
      this.renderFileSection(),
      index.h("z-dragdrop-area", null, index.h("div", { class: "text-container" }, this.renderDescription("regular", 1), this.renderUploadLink(), this.renderAllowedFileExtensions())),
    ];
  }
  formatErrorString(key, value) {
    var _a, _b;
    const bothErrors = value[0] && value[1] ? ", " : "";
    return `Il file ${key} ${(_a = value[0]) !== null && _a !== void 0 ? _a : ""}${bothErrors} ${(_b = value[1]) !== null && _b !== void 0 ? _b : ""} e non può quindi essere caricato.`;
  }
  handleErrorModalContent() {
    return (index.h("div", { slot: "modalContent" }, index.h("div", { class: "modal-wrapper" }, index.h("div", { class: "files" }, Array.from(this.invalidFiles).map(([key, value]) => {
      return (index.h("z-body", { variant: "regular", level: 3 }, this.formatErrorString(key, value)));
    })))));
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { tabIndex: 0, class: `container ${this.getType()}` }, this.renderTitle(), this.getType() == index$1.ZFileUploadType.DEFAULT ? this.renderDefaultMode() : this.renderDragDropMode()), !!this.invalidFiles.size && (index.h("z-modal", { tabIndex: 0, ref: (val) => (this.errorModal = val), modaltitle: "Attenzione", onModalClose: () => (this.invalidFiles = new Map()), onModalBackgroundClick: () => (this.invalidFiles = new Map()) }, this.handleErrorModalContent()))));
  }
  get el() { return index.getElement(this); }
};
ZFileUpload.style = stylesCss;

exports.z_file_upload = ZFileUpload;
