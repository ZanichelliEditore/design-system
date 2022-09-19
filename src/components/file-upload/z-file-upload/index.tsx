import {Component, Prop, h, EventEmitter, Event, State, Listen, Element, Host} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";
import {ButtonVariantEnum, DeviceEnum, DividerSize, ZFileUploadTypeEnum} from "../../../beans";
import {getDevice} from "../../../utils/utils";

@Component({
  tag: "z-file-upload",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZFileUpload {
  /** Prop indicating the file upload type - can be default or dragdrop */
  @Prop({mutable: true, reflect: true}) type: ZFileUploadTypeEnum = ZFileUploadTypeEnum.default;

  /** Prop indicating the button variant*/
  @Prop() buttonVariant?: ButtonVariantEnum;

  /** Prop indicating the accepted file type: ex ".pdf, .doc, .jpg" */
  @Prop() acceptedFormat?: string;

  /** Max file dimension in Megabyte */
  @Prop() fileMaxSize?: number;

  /** Title */
  @Prop() mainTitle?: string;

  /** Description */
  @Prop() description?: string;

  /** Number of files added by the user */
  @State() filesNumber = 0;

  /** List of files not allowed to be uploaded */
  @State() invalidFiles: Map<string, string[]>;

  @Element() el: HTMLZFileUploadElement;

  private input: HTMLInputElement;

  private button: HTMLZButtonElement;

  private errorModal: HTMLZModalElement;

  private uploadLink: HTMLZBodyElement;

  private inputAttributes = {
    type: "file",
    id: "fileElem",
    multiple: true,
  };

  /** Listen removeFile event sent from z-file component */
  @Listen("removeFile")
  removeFileListener(): void {
    this.filesNumber--;
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
    if (this.type === ZFileUploadTypeEnum.dragdrop && getDevice() !== DeviceEnum.desktop)
      this.type = ZFileUploadTypeEnum.default;
  }

  /** Emitted when user select one or more files */
  @Event() fileInput: EventEmitter;
  fileInputHandler(): void {
    if (this.input.files.length) {
      this.invalidFiles = this.checkFiles(Array.from(this.input.files));
    }
  }

  handleAccessibility(): void {
    if (this.filesNumber > 0) {
      (this.el.querySelector("z-file:last-child z-chip button") as HTMLElement).focus();
    } else {
      this.type === ZFileUploadTypeEnum.default
        ? this.button.shadowRoot.querySelector("button").focus()
        : this.uploadLink.focus();
    }
  }

  checkFiles(files: File[]): Map<string, string[]> {
    const errors = new Map<string, string[]>();
    const sizeErrorString = `supera i ${this.fileMaxSize}MB`;
    const formatErrorString = " ha un'estensione non prevista";
    files.forEach((file: File) => {
      const fileSize = file.size / 1024 / 1024;
      const fileFormatOk = this.acceptedFormat
        .split(",")
        .some((ext: string) => file.name.toLowerCase().endsWith(ext.trim()));
      const fileSizeOk = fileSize <= this.fileMaxSize;
      if (fileSizeOk && fileFormatOk) {
        this.fileInput.emit(file);
        this.filesNumber++;
        this.input.value = "";
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

  renderTitle(): HTMLZHeadingElement {
    return (
      <z-heading
        id="title"
        variant="semibold"
        level={2}
      >
        {this.mainTitle}
      </z-heading>
    );
  }

  renderDescription(variant, level): HTMLZBodyElement {
    return (
      <z-body
        variant={variant}
        level={level}
      >
        {this.description}
      </z-body>
    );
  }

  renderAllowedFileExtensions(): HTMLZBodyElement {
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

    return <z-body level={3}>{fileFormatString || fileWeightString ? finalString : null}</z-body>;
  }

  renderFileSection(): boolean | HTMLElement {
    return (
      this.filesNumber > 0 && (
        <section class="files-container">
          <z-heading
            variant="semibold"
            level={4}
          >
            File appena caricati
          </z-heading>
          <div class="files">
            <slot name="files" />
          </div>
          <z-divider size={DividerSize.medium} />
        </section>
      )
    );
  }

  renderInput(): HTMLInputElement {
    return (
      <input
        {...this.inputAttributes}
        onChange={() => this.fileInputHandler()}
        accept={this.acceptedFormat}
        ref={(val) => (this.input = val)}
      />
    );
  }

  renderUploadButton(): HTMLElement[] {
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
        Allega
      </z-button>,
    ];
  }

  renderUploadLink(): HTMLElement[] {
    return [
      this.renderInput(),
      <z-body
        class="upload-link-text"
        variant="regular"
        level={1}
      >
        Trascinalo qui o{" "}
        <z-body
          tabIndex={0}
          class="upload-link"
          onClick={() => this.input.click()}
          onKeyPress={(e) => {
            if (e.code == "Space" || e.code == "Enter") {
              e.preventDefault();
              this.input.click();
            }
          }}
          variant="semibold"
          level={1}
          ref={(val) => (this.uploadLink = val)}
        >
          caricalo
        </z-body>{" "}
        dal tuo computer
      </z-body>,
    ];
  }

  renderDefaultMode(): HTMLElement[] {
    return [
      this.renderDescription("semibold", 3),
      this.renderAllowedFileExtensions(),
      this.renderFileSection(),
      this.renderUploadButton(),
    ];
  }

  renderDragDropMode(): HTMLElement[] {
    return [
      this.renderFileSection(),
      <z-dragdrop-area>
        <div class="text-container">
          {this.renderDescription("regular", 1)}
          {this.renderUploadLink()}
          {this.renderAllowedFileExtensions()}
        </div>
      </z-dragdrop-area>,
    ];
  }

  formatErrorString(key, value): string {
    const bothErrors = value[0] && value[1] ? ", " : "";
    return `Il file ${key} ${value[0] ?? ""}${bothErrors} ${value[1] ?? ""} e non può quindi essere caricato.`;
  }

  handleErrorModalContent(): HTMLDivElement {
    return (
      <div slot="modalContent">
        <div class="modalWrapper">
          <div class="files">
            {Array.from(this.invalidFiles).map(([key, value]) => {
              return (
                <z-body
                  variant="regular"
                  level={3}
                >
                  {this.formatErrorString(key, value)}
                </z-body>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  render(): HostElement {
    return (
      <Host>
        <div
          tabIndex={0}
          class={`container ${this.type}`}
        >
          {this.renderTitle()}
          {this.type == ZFileUploadTypeEnum.default ? this.renderDefaultMode() : this.renderDragDropMode()}
        </div>
        {!!this.invalidFiles.size && (
          <z-modal
            tabIndex={0}
            ref={(val) => (this.errorModal = val)}
            modaltitle="Attenzione"
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
