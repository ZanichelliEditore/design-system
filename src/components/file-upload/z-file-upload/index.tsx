import {Component, Prop, h, EventEmitter, Event, State, Listen, Element, Host, Method} from "@stencil/core";
import {ButtonVariant, Device, DividerSize, ZFileUploadType} from "../../../beans";
import {getDevice} from "../../../utils/utils";

@Component({
  tag: "z-file-upload",
  styleUrl: "styles.css",
  shadow: true,
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

  /** Files added by the user */
  @State()
  files: File[] = [];

  /** upoload button label */
  @Prop()
  uploadBtnLabel?: string = "allega";

  /** drag & drop button label */
  @Prop()
  dragAndDropLabel?: string = "Rilascia i file in questa area per allegarli.";

  /** uploaded files history rendering */
  @Prop()
  hasFileSection?: boolean = true;

  /** List of files not allowed to be uploaded */
  @State()
  invalidFiles: Map<string, string[]>;

  @Element() el: HTMLZFileUploadElement;

  private input: HTMLInputElement;

  private button: HTMLZButtonElement;

  private errorModal: HTMLZModalElement;

  private uploadLink: HTMLSpanElement;

  private inputAttributes = {
    type: "file",
    id: "file-elem",
    multiple: true,
  };

  /** Listen removeFile event sent from z-file component */
  @Listen("removeFile")
  removeFileListener(e: CustomEvent): void {
    this.removeFileHandler(e.detail);
  }

  /** Listen fileDropped event sent from z-dragdrop-area component */
  @Listen("fileDropped")
  fileDroppedListener(e: CustomEvent): void {
    this.input.files = e.detail;
    this.fileInputHandler();
  }

  componentDidUpdate(): void {
    this.handleAccessibility();
    this.invalidFiles.size && this.errorModal.focus();
  }

  componentWillLoad(): void {
    this.invalidFiles = new Map<string, string[]>();
  }

  /** Emitted when user select one or more files */
  @Event()
  fileInput: EventEmitter;

  private fileInputHandler(): void {
    if (this.input.files.length) {
      this.invalidFiles = this.checkFiles(Array.from(this.input.files));
    }
  }

  /** get array of uploaded files */
  @Method()
  async getFiles(): Promise<File[]> {
    return this.files;
  }

  /** remove file from the array */
  @Method()
  async removeFile(fileName: string): Promise<void> {
    this.removeFileHandler(fileName);
  }

  private removeFileHandler(fileName: string): void {
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

  private handleAccessibility(): void {
    const lastFile = this.el.querySelector("z-file:last-child z-chip button");
    if (this.files.length > 0 && lastFile) {
      (lastFile as HTMLElement).focus();
    } else {
      this.getType() === ZFileUploadType.DEFAULT
        ? this.button.querySelector("button").focus()
        : this.uploadLink.focus();
    }
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

  private renderTitle(): HTMLElement {
    return <span id="title">{this.mainTitle}</span>;
  }

  private renderDescription(cssClass): HTMLElement {
    return <span class={cssClass}>{this.description}</span>;
  }

  private renderAllowedFileExtensions(): HTMLElement {
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

    return <span class="body-3">{fileFormatString || fileWeightString ? finalString : null}</span>;
  }

  private renderFileSection(): HTMLElement {
    if (!this.hasFileSection) {
      return;
    }

    return (
      <section class={`files-container ${!this.files.length ? "hidden" : ""}`}>
        <span class="heading-4-sb">File appena caricati</span>
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
        {...this.inputAttributes}
        onChange={() => this.fileInputHandler()}
        accept={this.acceptedFormat}
        ref={(val) => (this.input = val)}
      />
    );
  }

  private renderUploadButton(): unknown[] {
    return [
      this.renderInput(),
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
        ref={(val) => (this.button = val)}
      >
        {this.uploadBtnLabel}
      </z-button>,
    ];
  }

  private renderUploadLink(): unknown[] {
    return [
      this.renderInput(),
      <span class="body-1 upload-link-text">
        Trascina o{" "}
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
          ref={(val) => (this.uploadLink = val)}
        >
          carica
        </span>{" "}
        dal tuo computer
      </span>,
    ];
  }

  private renderDefaultMode(): unknown[] {
    return [
      this.renderDescription("body-3-sb"),
      this.renderAllowedFileExtensions(),
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
          {this.renderAllowedFileExtensions()}
        </div>
      </z-dragdrop-area>,
    ];
  }

  private formatErrorString(key, value): string {
    const bothErrors = value[0] && value[1] ? " e " : "";

    return (
      <span class="error-message">
        Il file <span class="file-name">{key}</span> {value[1] ?? ""}
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
            {Array.from(this.invalidFiles).map(([key, value]) => {
              return <span class="body-3">{this.formatErrorString(key, value)}</span>;
            })}
          </div>
        </div>
      </div>
    );
  }

  render(): HTMLZFileUploadElement {
    return (
      <Host>
        <div
          tabIndex={0}
          class={`container ${this.getType()}`}
        >
          {this.mainTitle && this.renderTitle()}
          {this.getType() == ZFileUploadType.DEFAULT ? this.renderDefaultMode() : this.renderDragDropMode()}
        </div>
        {!!this.invalidFiles.size && (
          <z-modal
            modalid={`file-upload-${this.type}-error-modal`}
            tabIndex={0}
            ref={(val) => (this.errorModal = val)}
            modaltitle="Errore di caricamento"
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
