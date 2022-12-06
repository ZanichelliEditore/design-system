import { h, Host } from "@stencil/core";
import { Device, DividerSize, ZFileUploadType } from "../../../beans";
import { getDevice } from "../../../utils/utils";
export class ZFileUpload {
  constructor() {
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
    if (getDevice() !== Device.DESKTOP) {
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
    return (h("section", { class: `files-container ${!this.files.length ? "hidden" : ""}` }, h("z-heading", { variant: "semibold", level: 4 }, "File appena caricati"), h("div", { class: "files-wrapper" }, h("slot", { name: "files" })), h("z-divider", { size: DividerSize.MEDIUM })));
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
    return (h(Host, null, h("div", { tabIndex: 0, class: `container ${this.getType()}` }, this.renderTitle(), this.getType() == ZFileUploadType.DEFAULT ? this.renderDefaultMode() : this.renderDragDropMode()), !!this.invalidFiles.size && (h("z-modal", { tabIndex: 0, ref: (val) => (this.errorModal = val), modaltitle: "Attenzione", onModalClose: () => (this.invalidFiles = new Map()), onModalBackgroundClick: () => (this.invalidFiles = new Map()) }, this.handleErrorModalContent()))));
  }
  static get is() { return "z-file-upload"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ZFileUploadType",
          "resolved": "ZFileUploadType.DEFAULT | ZFileUploadType.DRAGDROP",
          "references": {
            "ZFileUploadType": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop indicating the file upload type - can be default or dragdrop"
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "ZFileUploadType.DEFAULT"
      },
      "buttonVariant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonVariant",
          "resolved": "ButtonVariant.DARK_BG | ButtonVariant.PRIMARY | ButtonVariant.SECONDARY | ButtonVariant.TERTIARY",
          "references": {
            "ButtonVariant": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Prop indicating the button variant"
        },
        "attribute": "button-variant",
        "reflect": false
      },
      "acceptedFormat": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Prop indicating the accepted file type: ex \".pdf, .doc, .jpg\""
        },
        "attribute": "accepted-format",
        "reflect": false
      },
      "fileMaxSize": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Max file dimension in Megabyte"
        },
        "attribute": "file-max-size",
        "reflect": false
      },
      "mainTitle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Title"
        },
        "attribute": "main-title",
        "reflect": false
      },
      "description": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Description"
        },
        "attribute": "description",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "files": {},
      "invalidFiles": {}
    };
  }
  static get events() {
    return [{
        "method": "fileInput",
        "name": "fileInput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when user select one or more files"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "getFiles": {
        "complexType": {
          "signature": "() => Promise<File[]>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "File": {
              "location": "global"
            }
          },
          "return": "Promise<File[]>"
        },
        "docs": {
          "text": "get array of uploaded files",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "removeFile",
        "method": "removeFileListener",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "fileDropped",
        "method": "fileDroppedListener",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
