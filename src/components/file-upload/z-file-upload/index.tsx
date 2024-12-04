import {Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, h} from "@stencil/core";
import {ButtonVariant, Device, DividerSize, ZFileUploadType} from "../../../beans";
import {getDevice} from "../../../utils/utils";

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

  /** Files added by the user */
  @State()
  files: File[] = [];

  /** List of files not allowed to be uploaded */
  @State()
  invalidFiles: Map<string, string[]> = new Map<string, string[]>();

  @Element() host: HTMLZFileUploadElement;

  private input: HTMLInputElement;

  private errorModal: HTMLZModalElement;

  /** Listen removeFile event sent from z-file component */
  @Listen("removeFile")
  onFileRemoved(e: CustomEvent): void {
    this.removeFile(e.detail);
  }

  /** Listen fileDropped event sent from z-dragdrop-area component */
  @Listen("fileDropped")
  fileDroppedListener(e: CustomEvent): void {
    this.input.files = e.detail;
    this.fileInputHandler();
  }

  componentDidUpdate(): void {
    this.invalidFiles.size && this.errorModal.focus();
  }

  /** Emitted when user select one or more files */
  @Event()
  fileInput: EventEmitter;

  private fileInputHandler(): void {
    if (this.input.files.length) {
      this.invalidFiles = this.checkFiles(Array.from(this.input.files));
    }
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
    const file = files.find((file) => file.name === fileName);
    if (file) {
      const index = files.indexOf(file);
      if (index >= 0) {
        files.splice(index, 1);
        this.files = [...files];
      }
    }
  }

  private getType(): ZFileUploadType {
    if (getDevice() !== Device.DESKTOP && getDevice() !== Device.DESKTOP_WIDE) {
      return ZFileUploadType.DEFAULT;
    }

    return this.type;
  }

  private checkFiles(files: File[]): Map<string, string[]> {
    const errors = new Map<string, string[]>();
    const sizeErrorString = `supera il limite di ${this.fileMaxSize}MB`;
    const formatErrorString = " ha un formato non supportato";
    files.forEach((file: File) => {
      const fileSize = file.size / 1024 / 1024;
      const fileFormatOk = this.acceptedFormat
        .split(",")
        .some((ext: string) => file.name.toLowerCase().endsWith(ext.trim()));
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

  private renderTitle(): HTMLElement | undefined {
    return this.mainTitle ? (
      <div
        id="title"
        class="heading-2-sb"
      >
        {this.mainTitle}
      </div>
    ) : undefined;
  }

  private renderDescription(cssClass): HTMLElement | undefined {
    return this.description ? (
      <span
        id="description"
        class={cssClass}
      >
        {this.description}
      </span>
    ) : undefined;
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
        <span class="uploaded-files-label heading-4-sb">{this.uploadedFilesLabel}</span>
        <div class="files-wrapper">
          <slot name="files" />
        </div>
        <z-divider size={DividerSize.MEDIUM} />
      </section>
    );
  }

  private renderInput(): HTMLInputElement {
    return (
      <input
        type="file"
        name={this.inputName}
        multiple
        onChange={() => this.fileInputHandler()}
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

  private formatErrorString(key, value): string {
    const bothErrors = value[0] && value[1] ? " e " : "";

    return (
      <span class="error-message body-4">
        Il file <span class="body-4-sb">{key}</span> {value[1] ?? ""}
        {bothErrors}
        {value[0] ?? ""}.
      </span>
    );
  }

  private handleErrorModalContent(): HTMLDivElement {
    return (
      <div slot="modalContent">
        <div class="modal-wrapper">
          <div class="files">
            {this.errorModalMessage ? (
              <span class="body-3">{this.errorModalMessage}</span>
            ) : (
              Array.from(this.invalidFiles).map(([key, value]) => {
                return <span class="body-3">{this.formatErrorString(key, value)}</span>;
              })
            )}
          </div>
        </div>
      </div>
    );
  }

  render(): HTMLZFileUploadElement {
    return (
      <Host class={this.getType()}>
        {this.renderTitle()}
        {this.getType() == ZFileUploadType.DEFAULT ? this.renderDefaultMode() : this.renderDragDropMode()}
        {!!this.invalidFiles.size && (
          <z-modal
            modalid={`file-upload-${this.type}-error-modal`}
            tabIndex={0}
            ref={(val) => (this.errorModal = val)}
            modaltitle={this.errorModalTitle}
            onModalClose={() => (this.invalidFiles = new Map<string, string[]>())}
            onModalBackgroundClick={() => (this.invalidFiles = new Map<string, string[]>())}
          >
            {this.handleErrorModalContent()}
          </z-modal>
        )}
      </Host>
    );
  }
}
