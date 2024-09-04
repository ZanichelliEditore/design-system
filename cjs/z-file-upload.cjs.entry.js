'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-e3835c94.js');
const utils = require('./utils-1a8655c7.js');
require('./breakpoints-5c22092a.js');

const stylesCss = ":host{color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host .modal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:calc(var(--space-unit) * 2)}:host .modal-wrapper>.files-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:calc(var(--space-unit) * 4);gap:var(--space-unit)}:host .text-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:auto}:host .text-container .body-1{text-align:center}:host .text-container .upload-link{color:var(--color-link-primary);cursor:pointer}:host .text-container .upload-link:focus-visible{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none !important}:host .text-container .upload-link-text{margin-bottom:var(--space-unit)}input#file-elem{display:none}#title{display:inline-block;margin:calc(var(--space-unit) * 2.5) 0 calc(var(--space-unit) * 4);font-size:calc(var(--space-unit) * 3);font-weight:var(--font-sb)}:host>.container>z-button{display:inline-block;margin-top:calc(var(--space-unit) * 3)}:host>.container>.files-container.hidden{display:none}:host>.container>.files-container>.heading-4-sb{display:inline-block;margin:calc(var(--space-unit) * 3) 0;font-size:calc(var(--space-unit) * 2);font-weight:var(--font-sb)}:host([type=\"dragdrop\"])>.container>.files-container>.heading-4-sb{margin-top:0;margin-bottom:calc(var(--space-unit) * 3)}:host>.container>.files-container>.files-wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-column-gap:calc(var(--space-unit) * 2);-moz-column-gap:calc(var(--space-unit) * 2);column-gap:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}:host>.container>.files-container>z-divider{margin-top:calc(var(--space-unit) * 3);margin-bottom:0}:host([type=\"dragdrop\"])>.container>.files-container>z-divider{margin:calc(var(--space-unit) * 3) 0}:host .error-message{font-size:14px;font-weight:400;letter-spacing:0.16%;line-height:20px;text-align:left}:host .error-message>.file-name{font-weight:600}@media only screen and (min-width: 768px){:host>.container>z-button{-ms-flex-item-align:start;align-self:flex-start}:host .modal-wrapper{padding:calc(var(--space-unit) * 3)}}@media only screen and (min-width: 1152px){:host .modal-wrapper{padding:calc(var(--space-unit) * 4)}}";
const ZFileUploadStyle0 = stylesCss;

const ZFileUpload = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fileInput = index.createEvent(this, "fileInput", 7);
        this.inputAttributes = {
            type: "file",
            id: "file-elem",
            multiple: true,
        };
        this.type = index$1.ZFileUploadType.DEFAULT;
        this.buttonVariant = undefined;
        this.acceptedFormat = undefined;
        this.fileMaxSize = undefined;
        this.mainTitle = undefined;
        this.description = undefined;
        this.files = [];
        this.uploadBtnLabel = "allega";
        this.dragAndDropLabel = "Rilascia i file in questa area per allegarli.";
        this.allowedFilesMessage = undefined;
        this.uploadClickableMessage = "Carica";
        this.uploadMessage = "o trascina dal tuo computer";
        this.errorModalTitle = "Errore di caricamento";
        this.errorModalMessage = undefined;
        this.uploadedFilesLabel = "File appena caricati";
        this.hasFileSection = true;
        this.invalidFiles = undefined;
    }
    /** Listen removeFile event sent from z-file component */
    removeFileListener(e) {
        this.removeFileHandler(e.detail);
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
    /** remove file from the array */
    async removeFile(fileName) {
        this.removeFileHandler(fileName);
    }
    removeFileHandler(fileName) {
        const files = this.files;
        const file = files.find((file) => file.name === fileName);
        if (file) {
            const index = files.indexOf(file);
            if (index >= 0) {
                files.splice(index, 1);
                this.files = [...files];
            }
        }
    }
    getType() {
        if (utils.getDevice() !== index$1.Device.DESKTOP && utils.getDevice() !== index$1.Device.DESKTOP_WIDE) {
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
        const sizeErrorString = `supera il limite di ${this.fileMaxSize}MB`;
        const formatErrorString = " ha un formato non supportato";
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
        return index.h("span", { id: "title" }, this.mainTitle);
    }
    renderDescription(cssClass) {
        return index.h("span", { class: cssClass }, this.description);
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
        return (index.h("span", { class: "body-3" }, this.allowedFilesMessage
            ? this.allowedFilesMessage
            : fileFormatString || fileWeightString
                ? finalString
                : null));
    }
    renderFileSection() {
        if (!this.hasFileSection) {
            return;
        }
        return (index.h("section", { class: `files-container ${!this.files.length ? "hidden" : ""}` }, index.h("span", { class: "heading-4-sb" }, this.uploadedFilesLabel), index.h("div", { class: "files-wrapper" }, index.h("slot", { name: "files" })), index.h("z-divider", { size: index$1.DividerSize.MEDIUM })));
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
                }, id: "fileSelect", variant: this.buttonVariant, icon: "upload", ref: (val) => (this.button = val) }, this.uploadBtnLabel),
        ];
    }
    renderUploadLink() {
        return [
            this.renderInput(),
            index.h("span", { class: "body-1 upload-link-text" }, index.h("span", { tabIndex: 0, class: "body-1-sb upload-link", onClick: () => this.input.click(), onKeyPress: (e) => {
                    if (e.code == "Space" || e.code == "Enter") {
                        e.preventDefault();
                        this.input.click();
                    }
                }, ref: (val) => (this.uploadLink = val) }, this.uploadClickableMessage), " ", this.uploadMessage),
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
            index.h("z-dragdrop-area", { "drag-and-drop-label": this.dragAndDropLabel }, index.h("div", { class: "text-container" }, this.renderDescription("body-1"), this.renderUploadLink(), this.renderAllowedFileExtensions())),
        ];
    }
    formatErrorString(key, value) {
        var _a, _b;
        const bothErrors = value[0] && value[1] ? " e " : "";
        return (index.h("span", { class: "error-message" }, "Il file ", index.h("span", { class: "file-name" }, key), " ", (_a = value[1]) !== null && _a !== void 0 ? _a : "", bothErrors, (_b = value[0]) !== null && _b !== void 0 ? _b : "", "."));
    }
    handleErrorModalContent() {
        return (index.h("div", { slot: "modalContent" }, index.h("div", { class: "modal-wrapper" }, index.h("div", { class: "files" }, this.errorModalMessage ? (index.h("span", { class: "body-3" }, this.errorModalMessage)) : (Array.from(this.invalidFiles).map(([key, value]) => {
            return index.h("span", { class: "body-3" }, this.formatErrorString(key, value));
        }))))));
    }
    render() {
        return (index.h(index.Host, { key: '30d78f7ce88aa6e994de1355cf4bb8bbc79e6f85' }, index.h("div", { key: 'b95129c709a9161cb1c08bc39a308196fc26644d', class: `container ${this.getType()}` }, this.mainTitle && this.renderTitle(), this.getType() == index$1.ZFileUploadType.DEFAULT ? this.renderDefaultMode() : this.renderDragDropMode()), !!this.invalidFiles.size && (index.h("z-modal", { key: '2e0db26fa301fa0141ac14fe92f2a222f2a5f2c8', modalid: `file-upload-${this.type}-error-modal`, tabIndex: 0, ref: (val) => (this.errorModal = val), modaltitle: this.errorModalTitle, onModalClose: () => (this.invalidFiles = new Map()), onModalBackgroundClick: () => (this.invalidFiles = new Map()) }, this.handleErrorModalContent()))));
    }
    get el() { return index.getElement(this); }
};
ZFileUpload.style = ZFileUploadStyle0;

exports.z_file_upload = ZFileUpload;

//# sourceMappingURL=z-file-upload.cjs.entry.js.map