import {Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, h} from "@stencil/core";
import {ButtonVariant, ZFileUploadType} from "../../../beans";

export type ZFileUploadError = {cause: "format" | "size"; message: string};

@Component({
  tag: "z-file-upload",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZFileUpload {
  /** Prop indicating the file upload type - can be default or dragdrop */
  @Prop({reflect: true})
  type: ZFileUploadType = ZFileUploadType.DEFAULT;

  /** Prop indicating the button variant*/
  @Prop()
  buttonVariant?: ButtonVariant;

  /** Prop indicating the accepted file type: ex ".pdf, .doc, .jpg" */
  @Prop()
  acceptedFormat?: string;

  /** Max file dimension in Megabyte */
  @Prop()
  fileMaxSize?: number;

  /** Title */
  @Prop()
  mainTitle?: string;

  /** Description */
  @Prop()
  description?: string;

  /** upoload button label */
  @Prop()
  uploadBtnLabel?: string = "allega";

  /** drag & drop button label */
  @Prop()
  dragAndDropLabel?: string = "Rilascia i file in questa area per allegarli.";

  /** allowed file message */
  @Prop()
  allowedFilesMessage?: string;

  /** upload clickable message */
  @Prop()
  uploadClickableMessage?: string = "Carica";

  /** upload message */
  @Prop()
  uploadMessage?: string = "o trascina dal tuo computer";

  /** error modal title */
  @Prop()
  errorModalTitle?: string = "Errore di caricamento";

  /** error modal message */
  @Prop()
  errorModalMessage?: string;

  /** loaded files label */
  @Prop()
  uploadedFilesLabel?: string = "File appena caricati";

  /** uploaded files history rendering */
  @Prop()
  hasFileSection?: boolean = true;

  /** Value to set on the file input's `name` attribute (for use with forms) */
  @Prop()
  inputName? = "z-file-upload";

  /**
   * Whether to show errors in the internal modal or leave the handling to the app.
   * Errors will still be emitted.
   */
  @Prop()
  showErrors = true;

  /** Internal store of the component type. It will change when viewport goes from desktop to tablet/mobile and vice versa */
  @State()
  private _type: ZFileUploadType = this.type;

  /** Files added by the user */
  @State()
  files: File[] = [];

  /** Map of files whose upload caused an error and the relative errors, with the cause and a message */
  @State()
  invalidFiles: Map<string, ZFileUploadError[]> = new Map<string, ZFileUploadError[]>();

  /** Input ref */
  @State()
  private input: HTMLInputElement;

  /** Emitted when user select one or more files */
  @Event()
  fileInput: EventEmitter<File>;

  /**
   * Emits an array of error messages related to one or more files not allowed.
   * Emitted when some file is dropped or selected.
   */
  @Event()
  fileError: EventEmitter<{file: string; errors: ZFileUploadError[]}>;

  @Element() host: HTMLZFileUploadElement;

  private errorModal: HTMLZModalElement;

  /** Listen `removeFile` event sent from z-file component */
  @Listen("removeFile")
  onFileRemoved(e: CustomEvent): void {
    this.removeFile(e.detail.fileName);
  }

  /** Listen fileDropped event sent from z-dragdrop-area component */
  @Listen("fileDropped")
  fileDroppedListener(e: CustomEvent): void {
    this.input.files = e.detail;
    this.checkFilesValidity(this.input.files);
  }

  /** Get the list of uploaded files */
  @Method()
  async getFiles(): Promise<File[]> {
    return this.files;
  }

  /** Remove a previously uploaded file */
  @Method()
  async removeFile(fileName: string): Promise<void> {
    const files = this.files;
    const index = files.findIndex((file) => file.name === fileName);
    if (index >= 0) {
      files.splice(index, 1);
      this.files = [...files];
    }
  }

  private checkFilesValidity(files: FileList): Map<string, string[]> {
    if (!files.length) {
      return;
    }

    Array.from(files).forEach((file: File) => {
      const fileSize = file.size / 1024 / 1024;
      const fileFormatOk = this.acceptedFormat
        .split(",")
        .some((ext: string) => file.name.toLowerCase().endsWith(ext.trim()));
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
        !fileSizeOk && {cause: "size" as const, message: sizeError},
        !fileFormatOk && {cause: "format" as const, message: formatError},
      ].filter(Boolean);
      this.invalidFiles.set(file.name, errors);
      this.invalidFiles = new Map(this.invalidFiles); // trigger state update
      this.fileError.emit({file: file.name, errors});
    });
  }

  private resetErrors(): void {
    this.invalidFiles = new Map<string, ZFileUploadError[]>();
  }

  private onFilesChange(e: Event): void {
    this.checkFilesValidity((e.target as HTMLInputElement).files);
  }

  componentWillLoad(): void {
    // force default type on mobile and tablet viewport
    const mql = window.matchMedia("(max-width: 1151px)");
    this._type = mql.matches ? ZFileUploadType.DEFAULT : this.type;
    mql.addEventListener("change", (e) => {
      this._type = e.matches ? ZFileUploadType.DEFAULT : this.type;
    });
  }

  componentDidUpdate(): void {
    if (!this.showErrors || !this.invalidFiles.size) {
      return;
    }

    this.errorModal.open();
  }

  private renderDescription(cssClass): HTMLElement | undefined {
    if (!this.description) {
      return;
    }

    return (
      <span
        id="description"
        class={cssClass}
      >
        {this.description}
      </span>
    );
  }

  private renderAllowedFilesMessage(): HTMLElement {
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

    const defaultMessage =
      fileFormatString || fileWeightString ? `Puoi allegare file${fileFormatString}${fileWeightString}.` : undefined;

    if (!this.allowedFilesMessage && !defaultMessage) {
      return;
    }

    return <span class="allowed-files-message body-3">{this.allowedFilesMessage || defaultMessage}</span>;
  }

  private renderFileSection(): HTMLElement {
    if (!this.hasFileSection) {
      return;
    }

    return (
      <section class={{"files-container": true, "hidden": !this.files.length}}>
        <div class="uploaded-files-label heading-3-sb">{this.uploadedFilesLabel}</div>
        <div class="files-wrapper">
          <slot name="files" />
        </div>
      </section>
    );
  }

  private renderInput(): HTMLInputElement {
    return (
      <input
        type="file"
        name={this.inputName}
        multiple
        onChange={(e) => this.onFilesChange(e)}
        accept={this.acceptedFormat}
        ref={(val) => (this.input = val)}
      />
    );
  }

  private renderUploadButton(): unknown[] {
    return [
      <z-button
        onClick={() => this.input.click()}
        onKeyPress={(e) => {
          if (e.code == "Space" || e.code == "Enter") {
            e.preventDefault();
            this.input.click();
          }
        }}
        id="fileSelect"
        variant={this.buttonVariant}
        icon="upload"
      >
        {this.uploadBtnLabel}
      </z-button>,
      this.renderInput(),
    ];
  }

  private renderUploadLink(): unknown[] {
    return [
      this.renderInput(),
      <span class="body-1 upload-link-text">
        <span
          tabIndex={0}
          class="body-1-sb upload-link"
          onClick={() => this.input.click()}
          onKeyPress={(e) => {
            if (e.code == "Space" || e.code == "Enter") {
              e.preventDefault();
              this.input.click();
            }
          }}
        >
          {this.uploadClickableMessage}
        </span>{" "}
        {this.uploadMessage}
      </span>,
    ];
  }

  private renderDefaultMode(): unknown[] {
    return [
      this.renderDescription("body-3-sb"),
      this.renderAllowedFilesMessage(),
      this.renderFileSection(),
      this.renderUploadButton(),
    ];
  }

  private renderDragDropMode(): unknown[] {
    return [
      this.renderFileSection(),
      <z-dragdrop-area drag-and-drop-label={this.dragAndDropLabel}>
        <div class="text-container">
          {this.renderDescription("body-1")}
          {this.renderUploadLink()}
          {this.renderAllowedFilesMessage()}
        </div>
      </z-dragdrop-area>,
    ];
  }

  private renderFileErrors(): HTMLElement[] {
    return Array.from(this.invalidFiles).map(([fileName, errors]) => {
      const prefix = `Il file ${fileName}`;

      return (
        <span class="error-message">
          Il file <span class="body-3-sb">{fileName}</span>
          {errors.map(({message}) => message.replace(prefix, "")).join(" e ")}.
        </span>
      );
    });
  }

  render(): HTMLZFileUploadElement {
    return (
      <Host>
        {this.mainTitle && (
          <div
            id="title"
            class="heading-3-sb"
          >
            {this.mainTitle}
          </div>
        )}
        {this._type == ZFileUploadType.DEFAULT ? this.renderDefaultMode() : this.renderDragDropMode()}
        {!!this.invalidFiles.size && this.showErrors && (
          <z-modal
            modalid={`file-upload-${this.type}-error-modal`}
            ref={(val) => (this.errorModal = val)}
            modaltitle={this.errorModalTitle}
            onModalClose={() => this.resetErrors()}
            onModalBackgroundClick={() => this.resetErrors()}
          >
            <div slot="modalContent">
              <div class="modal-wrapper body-3">
                {this.errorModalMessage ? this.errorModalMessage : this.renderFileErrors()}
              </div>
            </div>
          </z-modal>
        )}
      </Host>
    );
  }
}
