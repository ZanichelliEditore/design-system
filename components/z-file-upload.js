import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { w as ZFileUploadType, p as Device, D as DividerSize } from './index2.js';
import { g as getDevice } from './utils.js';
import { d as defineCustomElement$6 } from './index4.js';
import { d as defineCustomElement$5 } from './index6.js';
import { d as defineCustomElement$4 } from './index7.js';
import { d as defineCustomElement$3 } from './index9.js';
import { d as defineCustomElement$2 } from './index15.js';

const stylesCss = ":host{color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host .modal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:calc(var(--space-unit) * 2)}:host .modal-wrapper>.files-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:calc(var(--space-unit) * 4);gap:var(--space-unit)}:host .text-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:auto}:host .text-container .body-1{text-align:center}:host .text-container .upload-link{color:var(--color-link-primary);cursor:pointer}:host .text-container .upload-link-text{margin-bottom:var(--space-unit)}input#file-elem{display:none}#title{display:inline-block;margin:calc(var(--space-unit) * 2.5) 0 calc(var(--space-unit) * 4);font-size:calc(var(--space-unit) * 3);font-weight:var(--font-sb)}:host>.container>z-button{display:inline-block;margin-top:calc(var(--space-unit) * 3)}:host>.container>.files-container.hidden{display:none}:host>.container>.files-container>.heading-4-sb{display:inline-block;margin:calc(var(--space-unit) * 3) 0;font-size:calc(var(--space-unit) * 2);font-weight:var(--font-sb)}:host([type=\"dragdrop\"])>.container>.files-container>.heading-4-sb{margin-top:0;margin-bottom:calc(var(--space-unit) * 3)}:host>.container>.files-container>.files-wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-column-gap:calc(var(--space-unit) * 2);-moz-column-gap:calc(var(--space-unit) * 2);column-gap:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}:host>.container>.files-container>z-divider{margin-top:calc(var(--space-unit) * 3);margin-bottom:0}:host([type=\"dragdrop\"])>.container>.files-container>z-divider{margin:calc(var(--space-unit) * 3) 0}:host .error-message{font-size:14px;font-weight:400;letter-spacing:0.16%;line-height:20px;text-align:left}:host .error-message>.file-name{font-weight:600}@media only screen and (min-width: 768px){:host>.container>z-button{-ms-flex-item-align:start;align-self:flex-start}:host .modal-wrapper{padding:calc(var(--space-unit) * 3)}}@media only screen and (min-width: 1152px){:host .modal-wrapper{padding:calc(var(--space-unit) * 4)}}";
const ZFileUploadStyle0 = stylesCss;

const ZFileUpload$1 = /*@__PURE__*/ proxyCustomElement(class ZFileUpload extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.fileInput = createEvent(this, "fileInput", 7);
        this.inputAttributes = {
            type: "file",
            id: "file-elem",
            multiple: true,
        };
        this.type = ZFileUploadType.DEFAULT;
        this.buttonVariant = undefined;
        this.acceptedFormat = undefined;
        this.fileMaxSize = undefined;
        this.mainTitle = undefined;
        this.description = undefined;
        this.files = [];
        this.uploadBtnLabel = "allega";
        this.dragAndDropLabel = "Rilascia i file in questa area per allegarli.";
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
        return h("span", { id: "title" }, this.mainTitle);
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
        if (!this.hasFileSection) {
            return;
        }
        return (h("section", { class: `files-container ${!this.files.length ? "hidden" : ""}` }, h("span", { class: "heading-4-sb" }, "File appena caricati"), h("div", { class: "files-wrapper" }, h("slot", { name: "files" })), h("z-divider", { size: DividerSize.MEDIUM })));
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
                }, id: "fileSelect", variant: this.buttonVariant, icon: "upload", ref: (val) => (this.button = val) }, this.uploadBtnLabel),
        ];
    }
    renderUploadLink() {
        return [
            this.renderInput(),
            h("span", { class: "body-1 upload-link-text" }, "Trascina o", " ", h("span", { tabIndex: 0, class: "body-1-sb upload-link", onClick: () => this.input.click(), onKeyPress: (e) => {
                    if (e.code == "Space" || e.code == "Enter") {
                        e.preventDefault();
                        this.input.click();
                    }
                }, ref: (val) => (this.uploadLink = val) }, "carica"), " ", "dal tuo computer"),
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
            h("z-dragdrop-area", { "drag-and-drop-label": this.dragAndDropLabel }, h("div", { class: "text-container" }, this.renderDescription("body-1"), this.renderUploadLink(), this.renderAllowedFileExtensions())),
        ];
    }
    formatErrorString(key, value) {
        var _a, _b;
        const bothErrors = value[0] && value[1] ? " e " : "";
        return (h("span", { class: "error-message" }, "Il file ", h("span", { class: "file-name" }, key), " ", (_a = value[1]) !== null && _a !== void 0 ? _a : "", bothErrors, (_b = value[0]) !== null && _b !== void 0 ? _b : "", "."));
    }
    handleErrorModalContent() {
        return (h("div", { slot: "modalContent" }, h("div", { class: "modal-wrapper" }, h("div", { class: "files" }, Array.from(this.invalidFiles).map(([key, value]) => {
            return h("span", { class: "body-3" }, this.formatErrorString(key, value));
        })))));
    }
    render() {
        return (h(Host, { key: '5164e39fa841c1e236b44ccc647bc4c0167e23ff' }, h("div", { key: '498f8b221758f4c9a0577471a3d2193185d559fa', tabIndex: 0, class: `container ${this.getType()}` }, this.mainTitle && this.renderTitle(), this.getType() == ZFileUploadType.DEFAULT ? this.renderDefaultMode() : this.renderDragDropMode()), !!this.invalidFiles.size && (h("z-modal", { key: '7acbcd5147d4f85fbba76b56eb3de8df5a6ba030', modalid: `file-upload-${this.type}-error-modal`, tabIndex: 0, ref: (val) => (this.errorModal = val), modaltitle: "Errore di caricamento", onModalClose: () => (this.invalidFiles = new Map()), onModalBackgroundClick: () => (this.invalidFiles = new Map()) }, this.handleErrorModalContent()))));
    }
    get el() { return this; }
    static get style() { return ZFileUploadStyle0; }
}, [1, "z-file-upload", {
        "type": [513],
        "buttonVariant": [1, "button-variant"],
        "acceptedFormat": [1, "accepted-format"],
        "fileMaxSize": [2, "file-max-size"],
        "mainTitle": [1, "main-title"],
        "description": [1],
        "uploadBtnLabel": [1, "upload-btn-label"],
        "dragAndDropLabel": [1, "drag-and-drop-label"],
        "hasFileSection": [4, "has-file-section"],
        "files": [32],
        "invalidFiles": [32],
        "getFiles": [64],
        "removeFile": [64]
    }, [[0, "removeFile", "removeFileListener"], [0, "fileDropped", "fileDroppedListener"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-file-upload", "z-button", "z-divider", "z-dragdrop-area", "z-icon", "z-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "z-file-upload":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZFileUpload$1);
            }
            break;
        case "z-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "z-divider":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "z-dragdrop-area":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "z-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZFileUpload = ZFileUpload$1;
const defineCustomElement = defineCustomElement$1;

export { ZFileUpload, defineCustomElement };

//# sourceMappingURL=z-file-upload.js.map