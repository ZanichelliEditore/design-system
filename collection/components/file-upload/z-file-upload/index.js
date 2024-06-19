import { Host, h } from "@stencil/core";
import { Device, DividerSize, ZFileUploadType } from "../../../beans";
import { getDevice } from "../../../utils/utils";
export class ZFileUpload {
    constructor() {
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
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ZFileUploadType"
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
                    "resolved": "ButtonVariant.PRIMARY | ButtonVariant.SECONDARY | ButtonVariant.TERTIARY",
                    "references": {
                        "ButtonVariant": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ButtonVariant"
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
            },
            "uploadBtnLabel": {
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
                    "text": "upoload button label"
                },
                "attribute": "upload-btn-label",
                "reflect": false,
                "defaultValue": "\"allega\""
            },
            "dragAndDropLabel": {
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
                    "text": "drag & drop button label"
                },
                "attribute": "drag-and-drop-label",
                "reflect": false,
                "defaultValue": "\"Rilascia i file in questa area per allegarli.\""
            },
            "hasFileSection": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "uploaded files history rendering"
                },
                "attribute": "has-file-section",
                "reflect": false,
                "defaultValue": "true"
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
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "File": {
                            "location": "global",
                            "id": "global::File"
                        }
                    },
                    "return": "Promise<File[]>"
                },
                "docs": {
                    "text": "get array of uploaded files",
                    "tags": []
                }
            },
            "removeFile": {
                "complexType": {
                    "signature": "(fileName: string) => Promise<void>",
                    "parameters": [{
                            "name": "fileName",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "remove file from the array",
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
//# sourceMappingURL=index.js.map
