'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-6b6a3299.js');
const utils = require('./utils-8cc414c9.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss = ".sc-z-file-upload-h{font-family:var(--font-family-sans);font-weight:var(--font-rg);color:var(--color-text01)}.sc-z-file-upload-h>.container.sc-z-file-upload{display:flex;flex-direction:column}.sc-z-file-upload-h .modalWrapper.sc-z-file-upload{display:flex;justify-content:center;align-items:center}.sc-z-file-upload-h .modalWrapper.sc-z-file-upload>.files.sc-z-file-upload{margin:calc(var(--space-unit) * 4);display:flex;flex-direction:column;gap:var(--space-unit)}.sc-z-file-upload-h .text-container.sc-z-file-upload{display:flex;flex-direction:column;margin:auto}.sc-z-file-upload-h .text-container.sc-z-file-upload z-body.sc-z-file-upload{text-align:center}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link.sc-z-file-upload{color:var(--color-link-primary);cursor:pointer}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link-text.sc-z-file-upload{margin-bottom:var(--space-unit)}input#fileElem.sc-z-file-upload{display:none}#title.sc-z-file-upload{display:inline-block;margin-bottom:var(--space-unit)}.sc-z-file-upload-h>.container.sc-z-file-upload>z-button-deprecated.sc-z-file-upload{display:inline-block;margin-top:calc(var(--space-unit) * 3)}.sc-z-file-upload-h>.container.sc-z-file-upload>.files-container.sc-z-file-upload>z-heading.sc-z-file-upload{display:inline-block;margin:calc(var(--space-unit) * 3) 0}.sc-z-file-upload-h>.container.sc-z-file-upload>.files-container.sc-z-file-upload>.files.sc-z-file-upload{display:flex;flex-wrap:wrap;row-gap:calc(var(--space-unit) * 2);column-gap:calc(var(--space-unit) * 2)}.sc-z-file-upload-h>.container.sc-z-file-upload>.files-container.sc-z-file-upload>z-divider.sc-z-file-upload{margin-top:calc(var(--space-unit) * 3);margin-bottom:0}@media only screen and (min-width: 768px){.sc-z-file-upload-h>.container.sc-z-file-upload>z-button-deprecated.sc-z-file-upload{align-self:flex-start}}";

const ZFileUpload = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fileInput = index.createEvent(this, "fileInput", 7);
    /** Prop indicating the file upload type - can be default or dragdrop */
    this.type = index$1.ZFileUploadTypeEnum.default;
    /** Number of files added by the user */
    this.filesNumber = 0;
    this.inputAttributes = {
      type: "file",
      id: "fileElem",
      multiple: true,
    };
  }
  /** Listen removeFile event sent from z-file component */
  removeFileListener() {
    this.filesNumber--;
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
    if (this.type === index$1.ZFileUploadTypeEnum.dragdrop &&
      utils.getDevice() !== index$1.DeviceEnum.desktop)
      this.type = index$1.ZFileUploadTypeEnum.default;
  }
  fileInputHandler() {
    if (this.input.files.length) {
      this.invalidFiles = this.checkFiles(Array.from(this.input.files));
    }
  }
  handleAccessibility() {
    if (this.filesNumber > 0) {
      this.el.querySelector("z-file:last-child z-chip button").focus();
    }
    else {
      this.type === index$1.ZFileUploadTypeEnum.default
        ? this.button.shadowRoot.querySelector("button").focus()
        : this.uploadLink.focus();
    }
  }
  checkFiles(files) {
    let errors = new Map();
    const sizeErrorString = `supera i ${this.fileMaxSize}MB`;
    const formatErrorString = " ha un'estensione non prevista";
    files.forEach((file) => {
      const fileSize = file.size / 1024 / 1024;
      const fileFormatOk = this.acceptedFormat
        .split(",")
        .some((ext) => file.name.toLowerCase().endsWith(ext.trim()));
      const fileSizeOk = fileSize <= this.fileMaxSize;
      if (fileSizeOk && fileFormatOk) {
        this.fileInput.emit(file);
        this.filesNumber++;
        this.input.value = "";
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
    return (index.h("z-body", { level: 3 }, fileFormatString || fileWeightString ? finalString : null));
  }
  renderFileSection() {
    return (this.filesNumber > 0 && (index.h("section", { class: "files-container" }, index.h("z-heading", { variant: "semibold", level: 4 }, "File appena caricati"), index.h("div", { class: "files" }, index.h("slot", { name: "files" })), index.h("z-divider", { size: index$1.DividerSize.medium }))));
  }
  renderInput() {
    return (index.h("input", Object.assign({}, this.inputAttributes, { onChange: () => this.fileInputHandler(), accept: this.acceptedFormat, ref: (val) => (this.input = val) })));
  }
  renderUploadButton() {
    return [
      this.renderInput(),
      index.h("z-button-deprecated", { onClick: () => this.input.click(), onKeyPress: (e) => {
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
    return (index.h("div", { slot: "modalContent" }, index.h("div", { class: "modalWrapper" }, index.h("div", { class: "files" }, Array.from(this.invalidFiles).map(([key, value]) => {
      return (index.h("z-body", { variant: "regular", level: 3 }, this.formatErrorString(key, value)));
    })))));
  }
  render() {
    return [
      index.h("div", { tabIndex: 0, class: `container ${this.type}` }, this.renderTitle(), this.type == index$1.ZFileUploadTypeEnum.default
        ? this.renderDefaultMode()
        : this.renderDragDropMode()),
      !!this.invalidFiles.size && (index.h("z-modal", { tabIndex: 0, ref: (val) => (this.errorModal = val), modaltitle: "Attenzione", onModalClose: () => (this.invalidFiles = new Map()), onModalBackgroundClick: () => (this.invalidFiles = new Map()) }, this.handleErrorModalContent())),
    ];
  }
  get el() { return index.getElement(this); }
};
ZFileUpload.style = stylesCss;

exports.z_file_upload = ZFileUpload;
