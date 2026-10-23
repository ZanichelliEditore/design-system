import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-DafJ7_Il.js';
import { w as ZFileUploadType } from './index-DdetsoIY.js';

const stylesCss = () => `.sc-z-file-upload-h{display:flex;flex-direction:column;align-items:flex-start;color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload{display:flex;flex-direction:column;justify-content:center;padding:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload>.files-wrapper.sc-z-file-upload{display:flex;flex-direction:column;margin:calc(var(--space-unit) * 4);gap:var(--space-unit)}.sc-z-file-upload-h .text-container.sc-z-file-upload{display:flex;flex-direction:column;margin:auto;text-align:center}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link.sc-z-file-upload{color:var(--color-text-link-blue);cursor:pointer;text-decoration:underline}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link.sc-z-file-upload:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none !important}.sc-z-file-upload-h .text-container.sc-z-file-upload .upload-link-text.sc-z-file-upload{margin-bottom:var(--space-unit)}.sc-z-file-upload-h input[type="file"].sc-z-file-upload{display:none}.sc-z-file-upload-h #title.sc-z-file-upload+#description.sc-z-file-upload{margin-top:var(--space-unit)}.sc-z-file-upload-h>*.sc-z-file-upload+z-button.sc-z-file-upload,.sc-z-file-upload-h>.files-container.sc-z-file-upload+*.sc-z-file-upload,.sc-z-file-upload-h>.files-container.sc-z-file-upload:not(:first-child){margin-top:calc(var(--space-unit) * 3)}.sc-z-file-upload-h>.files-container.hidden.sc-z-file-upload{display:none}.sc-z-file-upload-h>.files-container.sc-z-file-upload>.uploaded-files-label.sc-z-file-upload{margin-bottom:calc(var(--space-unit) * 2)}.sc-z-file-upload-h>.files-container.sc-z-file-upload>.files-wrapper.sc-z-file-upload{display:flex;flex-wrap:wrap;column-gap:calc(var(--space-unit) * 2);row-gap:calc(var(--space-unit) * 2)}@media (min-width: 768px){.sc-z-file-upload-h>.container.sc-z-file-upload>z-button.sc-z-file-upload{align-self:flex-start}.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload{padding:calc(var(--space-unit) * 3)}}@media (min-width: 1152px){.sc-z-file-upload-h .modal-wrapper.sc-z-file-upload{padding:calc(var(--space-unit) * 4)}}`;

const ZFileUpload = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fileInput = createEvent(this, "fileInput", 7);
        this.fileError = createEvent(this, "fileError", 7);
        /** Prop indicating the file upload type - can be default or dragdrop */
        this.type = ZFileUploadType.DEFAULT;
        /** upoload button label */
        this.uploadBtnLabel = "allega";
        /** drag & drop button label */
        this.dragAndDropLabel = "Rilascia i file in questa area per allegarli.";
        /** upload clickable message */
        this.uploadClickableMessage = "Carica";
        /** upload message */
        this.uploadMessage = "o trascina dal tuo computer";
        /** error modal title */
        this.errorModalTitle = "Errore di caricamento";
        /** loaded files label */
        this.uploadedFilesLabel = "File appena caricati";
        /** uploaded files history rendering */
        this.hasFileSection = true;
        /** Value to set on the file input's `name` attribute (for use with forms) */
        this.inputName = "z-file-upload";
        /**
         * Whether to show errors in the internal modal or leave the handling to the app.
         * Errors will still be emitted.
         */
        this.showErrors = true;
        /** Internal store of the component type. It will change when viewport goes from desktop to tablet/mobile and vice versa */
        this._type = this.type;
        /** Files added by the user */
        this.files = [];
        /** Map of files whose upload caused an error and the relative errors, with the cause and a message */
        this.invalidFiles = new Map();
    }
    /** Listen `removeFile` event sent from z-file component */
    onFileRemoved(e) {
        this.removeFile(e.detail.fileName);
    }
    /** Listen fileDropped event sent from z-dragdrop-area component */
    fileDroppedListener(e) {
        this.input.files = e.detail;
        this.checkFilesValidity(this.input.files);
    }
    /** Get the list of uploaded files */
    async getFiles() {
        return this.files;
    }
    /** Remove a previously uploaded file */
    async removeFile(fileName) {
        const files = this.files;
        const index = files.findIndex((file) => file.name === fileName);
        if (index >= 0) {
            files.splice(index, 1);
            this.files = [...files];
        }
    }
    checkFilesValidity(files) {
        if (!files.length) {
            return;
        }
        Array.from(files).forEach((file) => {
            const fileSize = file.size / 1024 / 1024;
            const fileFormatOk = this.acceptedFormat
                .split(",")
                .some((ext) => file.name.toLowerCase().endsWith(ext.trim()));
            const fileSizeOk = fileSize <= this.fileMaxSize;
            if (fileSizeOk && fileFormatOk && !this.files.find((f) => f.name === file.name)) {
                this.files = [...this.files, file];
                this.fileInput.emit(file);
                this.input.value = "";
                return;
            }
            const sizeError = `Il file ${file.name} supera il limite di ${this.fileMaxSize}MB`;
            const formatError = `Il file ${file.name} ha un formato non supportato`;
            const errors = [
                !fileSizeOk && { cause: "size", message: sizeError },
                !fileFormatOk && { cause: "format", message: formatError },
            ].filter(Boolean);
            this.invalidFiles.set(file.name, errors);
            this.invalidFiles = new Map(this.invalidFiles); // trigger state update
            this.fileError.emit({ file: file.name, errors });
        });
    }
    resetErrors() {
        this.invalidFiles = new Map();
    }
    onFilesChange(e) {
        this.checkFilesValidity(e.target.files);
    }
    componentWillLoad() {
        // force default type on mobile and tablet viewport
        const mql = window.matchMedia("(max-width: 1151px)");
        this._type = mql.matches ? ZFileUploadType.DEFAULT : this.type;
        mql.addEventListener("change", (e) => {
            this._type = e.matches ? ZFileUploadType.DEFAULT : this.type;
        });
    }
    componentDidUpdate() {
        if (!this.showErrors || !this.invalidFiles.size) {
            return;
        }
        this.errorModal.open();
    }
    renderDescription(cssClass) {
        if (!this.description) {
            return;
        }
        return (h("span", { id: "description", class: cssClass }, this.description));
    }
    renderAllowedFilesMessage() {
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
        const defaultMessage = fileFormatString || fileWeightString ? `Puoi allegare file${fileFormatString}${fileWeightString}.` : undefined;
        if (!this.allowedFilesMessage && !defaultMessage) {
            return;
        }
        return h("span", { class: "allowed-files-message body-3" }, this.allowedFilesMessage || defaultMessage);
    }
    renderFileSection() {
        if (!this.hasFileSection) {
            return;
        }
        return (h("section", { class: { "files-container": true, "hidden": !this.files.length } }, h("div", { class: "uploaded-files-label heading-3-sb" }, this.uploadedFilesLabel), h("div", { class: "files-wrapper" }, h("slot", { name: "files" }))));
    }
    renderInput() {
        return (h("input", { type: "file", name: this.inputName, multiple: true, onChange: (e) => this.onFilesChange(e), accept: this.acceptedFormat, "aria-labelledby": this.description ? "description" : undefined, ref: (val) => (this.input = val) }));
    }
    renderUploadButton() {
        return [
            h("z-button", { onClick: () => this.input.click(), onKeyPress: (e) => {
                    if (e.code == "Space" || e.code == "Enter") {
                        e.preventDefault();
                        this.input.click();
                    }
                }, id: "fileSelect", variant: this.buttonVariant, icon: "upload" }, this.uploadBtnLabel),
            this.renderInput(),
        ];
    }
    renderUploadLink() {
        return [
            this.renderInput(),
            h("span", { class: "body-1 upload-link-text" }, h("span", { tabIndex: 0, class: "body-1-sb upload-link", onClick: () => this.input.click(), onKeyPress: (e) => {
                    if (e.code == "Space" || e.code == "Enter") {
                        e.preventDefault();
                        this.input.click();
                    }
                } }, this.uploadClickableMessage), " ", this.uploadMessage),
        ];
    }
    renderDefaultMode() {
        return [
            this.renderDescription("body-3-sb"),
            this.renderAllowedFilesMessage(),
            this.renderFileSection(),
            this.renderUploadButton(),
        ];
    }
    renderDragDropMode() {
        return [
            this.renderFileSection(),
            h("z-dragdrop-area", { "drag-and-drop-label": this.dragAndDropLabel }, h("div", { class: "text-container" }, this.renderDescription("body-1"), this.renderUploadLink(), this.renderAllowedFilesMessage())),
        ];
    }
    renderFileErrors() {
        return Array.from(this.invalidFiles).map(([fileName, errors]) => {
            const prefix = `Il file ${fileName}`;
            return (h("span", { class: "error-message" }, "Il file ", h("span", { class: "body-3-sb" }, fileName), errors.map(({ message }) => message.replace(prefix, "")).join(" e "), "."));
        });
    }
    render() {
        return (h(Host, { key: '26a1a04ff6d1a9c9cf0e16311bb747b349c7ca67' }, this.mainTitle && (h("div", { key: 'cbce95e36bb7a1fe81c8c41e0723169e6b47442d', id: "title", class: "heading-3-sb" }, this.mainTitle)), this._type == ZFileUploadType.DEFAULT ? this.renderDefaultMode() : this.renderDragDropMode(), !!this.invalidFiles.size && this.showErrors && (h("z-modal", { key: '6a000d85f1f9b46a2872b4fa40b978a97427018c', modalid: `file-upload-${this.type}-error-modal`, ref: (val) => (this.errorModal = val), modaltitle: this.errorModalTitle, onModalClose: () => this.resetErrors(), onModalBackgroundClick: () => this.resetErrors() }, h("div", { key: 'caa8f6424a54d279ed2eca6c7514390324b40c59', slot: "modalContent" }, h("div", { key: 'b069c1fff610bcf4adbff57b0c5a9fa3e70e32ea', class: "modal-wrapper body-3" }, this.errorModalMessage ? this.errorModalMessage : this.renderFileErrors()))))));
    }
    get host() { return getElement(this); }
};
ZFileUpload.style = stylesCss();

export { ZFileUpload as z_file_upload };
