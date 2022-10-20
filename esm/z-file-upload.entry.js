import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import { x as ZFileUploadType, q as Device, D as DividerSize } from './index-9d028352.js';
import { g as getDevice } from './utils-39ca028c.js';
import './breakpoints-c386984e.js';

const stylesCss = ".sc-z-file-upload-h{color:var(--color-text01);font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-file-upload-h>.container.sc-z-file-upload{display:flex;flex-direction:column}.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload{display:flex;align-items:center;justify-content:center}.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload>.files.sc-z-file-upload{display:flex;flex-direction:column;margin:calc(var(--space-unit) * 4);gap:var(--space-unit)}.sc-z-file-upload-h .text-container.sc-z-file-upload{display:flex;flex-direction:column;margin:auto}.sc-z-file-upload-h .text-container.sc-z-file-upload z-body.sc-z-file-upload{text-align:center}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link.sc-z-file-upload{color:var(--color-link-primary);cursor:pointer}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link-text.sc-z-file-upload{margin-bottom:var(--space-unit)}input#file-elem.sc-z-file-upload{display:none}#title.sc-z-file-upload{display:inline-block;margin-bottom:var(--space-unit)}.sc-z-file-upload-h>.container.sc-z-file-upload>z-button.sc-z-file-upload{display:inline-block;margin-top:calc(var(--space-unit) * 3)}.sc-z-file-upload-h>.container.sc-z-file-upload>.files-container.sc-z-file-upload>z-heading.sc-z-file-upload{display:inline-block;margin:calc(var(--space-unit) * 3) 0}.sc-z-file-upload-h>.container.sc-z-file-upload>.files-container.sc-z-file-upload>.files.sc-z-file-upload{display:flex;flex-wrap:wrap;column-gap:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}.sc-z-file-upload-h>.container.sc-z-file-upload>.files-container.sc-z-file-upload>z-divider.sc-z-file-upload{margin-top:calc(var(--space-unit) * 3);margin-bottom:0}@media only screen and (min-width: 768px){.sc-z-file-upload-h>.container.sc-z-file-upload>z-button.sc-z-file-upload{align-self:flex-start}}";

const ZFileUpload = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fileInput = createEvent(this, "fileInput", 7);
    /** Prop indicating the file upload type - can be default or dragdrop */
    this.type = ZFileUploadType.DEFAULT;
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
    if (this.type === ZFileUploadType.DRAGDROP && getDevice() !== Device.DESKTOP) {
      this.type = ZFileUploadType.DEFAULT;
    }
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
  handleAccessibility() {
    if (this.files.length > 0) {
      this.el.querySelector("z-file:last-child z-chip button").focus();
    }
    else {
      this.type === ZFileUploadType.DEFAULT
        ? this.button.shadowRoot.querySelector("button").focus()
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
    return (h("z-heading", { id: "title", variant: "semibold", level: 2 }, this.mainTitle));
  }
  renderDescription(variant, level) {
    return (h("z-body", { variant: variant, level: level }, this.description));
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
    return h("z-body", { level: 3 }, fileFormatString || fileWeightString ? finalString : null);
  }
  renderFileSection() {
    if (!this.files.length) {
      return;
    }
    return (this.files.length > 0 && (h("section", { class: "files-container" }, h("z-heading", { variant: "semibold", level: 4 }, "File appena caricati"), h("div", { class: "files" }, h("slot", { name: "files" })), h("z-divider", { size: DividerSize.MEDIUM }))));
  }
  renderInput() {
    return (h("input", Object.assign({}, this.inputAttributes, { onChange: () => this.fileInputHandler(), accept: this.acceptedFormat, ref: (val) => (this.input = val) })));
  }
  renderUploadButton() {
    return [
      this.renderInput(),
      h("z-button", { onClick: () => this.input.click(), onKeyPress: (e) => {
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
      h("z-body", { class: "upload-link-text", variant: "regular", level: 1 }, "Trascinalo qui o", " ", h("z-body", { tabIndex: 0, class: "upload-link", onClick: () => this.input.click(), onKeyPress: (e) => {
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
      h("z-dragdrop-area", null, h("div", { class: "text-container" }, this.renderDescription("regular", 1), this.renderUploadLink(), this.renderAllowedFileExtensions())),
    ];
  }
  formatErrorString(key, value) {
    var _a, _b;
    const bothErrors = value[0] && value[1] ? ", " : "";
    return `Il file ${key} ${(_a = value[0]) !== null && _a !== void 0 ? _a : ""}${bothErrors} ${(_b = value[1]) !== null && _b !== void 0 ? _b : ""} e non può quindi essere caricato.`;
  }
  handleErrorModalContent() {
    return (h("div", { slot: "modalContent" }, h("div", { class: "modal-wrapper" }, h("div", { class: "files" }, Array.from(this.invalidFiles).map(([key, value]) => {
      return (h("z-body", { variant: "regular", level: 3 }, this.formatErrorString(key, value)));
    })))));
  }
  render() {
    return (h(Host, null, h("div", { tabIndex: 0, class: `container ${this.type}` }, this.renderTitle(), this.type == ZFileUploadType.DEFAULT ? this.renderDefaultMode() : this.renderDragDropMode()), !!this.invalidFiles.size && (h("z-modal", { tabIndex: 0, ref: (val) => (this.errorModal = val), modaltitle: "Attenzione", onModalClose: () => (this.invalidFiles = new Map()), onModalBackgroundClick: () => (this.invalidFiles = new Map()) }, this.handleErrorModalContent()))));
  }
  get el() { return getElement(this); }
};
ZFileUpload.style = stylesCss;

export { ZFileUpload as z_file_upload };
