import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import { x as ZFileUploadType, q as Device, D as DividerSize } from './index-7e4df1be.js';
import { g as getDevice } from './utils-b7bdd1bf.js';
import './breakpoints-9b81eb1b.js';

const stylesCss = ":host{color:var(--color-text01);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.container{display:flex;flex-direction:column}:host .modal-wrapper{display:flex;align-items:center;justify-content:center}:host .modal-wrapper>.files-wrapper{display:flex;flex-direction:column;margin:calc(var(--space-unit) * 4);gap:var(--space-unit)}:host .text-container{display:flex;flex-direction:column;margin:auto}:host .text-container .body-1{text-align:center}:host .text-container .upload-link{color:var(--color-link-primary);cursor:pointer}:host .text-container .upload-link-text{margin-bottom:var(--space-unit)}input#file-elem{display:none}#title{display:inline-block;margin-bottom:var(--space-unit)}:host>.container>z-button{display:inline-block;margin-top:calc(var(--space-unit) * 3)}:host>.container>.files-container.hidden{display:none}:host>.container>.files-container>.heading-4-sb{display:inline-block;margin:calc(var(--space-unit) * 3) 0}:host>.container>.files-container>.files-wrapper{display:flex;flex-wrap:wrap;column-gap:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}:host>.container>.files-container>z-divider{margin-top:calc(var(--space-unit) * 3);margin-bottom:0}@media only screen and (min-width: 768px){:host>.container>z-button{align-self:flex-start}}";

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
    if (getDevice() !== Device.DESKTOP && getDevice() !== Device.DESKTOP_WIDE) {
      return ZFileUploadType.DEFAULT;
    }
    return this.type;
  }
  handleAccessibility() {
    const lastFile = this.el.querySelector("z-file:last-child z-chip button");
    if (this.files.length > 0 && lastFile) {
      lastFile.focus();
    }
    else {
      this.getType() === ZFileUploadType.DEFAULT
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
    return (h("h2", { class: "heading-2-sb", id: "title" }, this.mainTitle));
  }
  renderDescription(cssClass) {
    return h("span", { class: cssClass }, this.description);
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
    return h("span", { class: "body-3" }, fileFormatString || fileWeightString ? finalString : null);
  }
  renderFileSection() {
    return (h("section", { class: `files-container ${!this.files.length ? "hidden" : ""}` }, h("h4", { class: "heading-4-sb" }, "File appena caricati"), h("div", { class: "files-wrapper" }, h("slot", { name: "files" })), h("z-divider", { size: DividerSize.MEDIUM })));
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
      h("span", { class: "body-1 upload-link-text" }, "Trascinalo qui o", " ", h("span", { tabIndex: 0, class: "body-1-sb upload-link", onClick: () => this.input.click(), onKeyPress: (e) => {
          if (e.code == "Space" || e.code == "Enter") {
            e.preventDefault();
            this.input.click();
          }
        }, ref: (val) => (this.uploadLink = val) }, "caricalo"), " ", "dal tuo computer"),
    ];
  }
  renderDefaultMode() {
    return [
      this.renderDescription("body-3-sb"),
      this.renderAllowedFileExtensions(),
      this.renderFileSection(),
      this.renderUploadButton(),
    ];
  }
  renderDragDropMode() {
    return [
      this.renderFileSection(),
      h("z-dragdrop-area", null, h("div", { class: "text-container" }, this.renderDescription("body-1"), this.renderUploadLink(), this.renderAllowedFileExtensions())),
    ];
  }
  formatErrorString(key, value) {
    var _a, _b;
    const bothErrors = value[0] && value[1] ? ", " : "";
    return `Il file ${key} ${(_a = value[0]) !== null && _a !== void 0 ? _a : ""}${bothErrors} ${(_b = value[1]) !== null && _b !== void 0 ? _b : ""} e non può quindi essere caricato.`;
  }
  handleErrorModalContent() {
    return (h("div", { slot: "modalContent" }, h("div", { class: "modal-wrapper" }, h("div", { class: "files" }, Array.from(this.invalidFiles).map(([key, value]) => {
      return h("span", { class: "body-3" }, this.formatErrorString(key, value));
    })))));
  }
  render() {
    return (h(Host, null, h("div", { tabIndex: 0, class: `container ${this.getType()}` }, this.renderTitle(), this.getType() == ZFileUploadType.DEFAULT ? this.renderDefaultMode() : this.renderDragDropMode()), !!this.invalidFiles.size && (h("z-modal", { tabIndex: 0, ref: (val) => (this.errorModal = val), modaltitle: "Attenzione", onModalClose: () => (this.invalidFiles = new Map()), onModalBackgroundClick: () => (this.invalidFiles = new Map()) }, this.handleErrorModalContent()))));
  }
  get el() { return getElement(this); }
};
ZFileUpload.style = stylesCss;

export { ZFileUpload as z_file_upload };
