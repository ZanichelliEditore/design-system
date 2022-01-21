import {
  Component,
  Prop,
  h,
  EventEmitter,
  Event,
  State,
  Listen,
  Element,
} from "@stencil/core";
import {
  ButtonVariantEnum,
  DeviceEnum,
  DividerSize,
  ZFileUploadTypeEnum,
} from "../../../beans";
import { checkEmptyObject, getDevice } from "../../../utils/utils";

@Component({
  tag: "z-file-upload",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZFileUpload {
  /** Prop indicating the file upload type - can be default or dragdrop */
  @Prop({ mutable: true, reflect: true }) type: ZFileUploadTypeEnum =
    ZFileUploadTypeEnum.default;

  /** Prop indicating the button variant*/
  @Prop() variant: ButtonVariantEnum;

  /** Prop indicating the accepted file type: ex ".pdf, .doc, .jpg" */
  @Prop() acceptedFormat: string = ".pdf, .doc, .tiff, .png, .jpg";

  /** Prop indicating if the user can pick more than one file at once*/
  @Prop() multiple: boolean = true;

  /** Number of files added by the user */
  @State() files: number = 0;

  /** State indicating if the user picked a file not allowed (by format or size) */
  @State() error: boolean = false;

  /** List of files not allowed to be uploaded */
  @State() wrongFiles: any;

  @Element() el: HTMLElement;

  private input: HTMLInputElement;

  private inputAttributes = {
    type: "file",
    id: "fileElem",
    multiple: this.type === ZFileUploadTypeEnum.default ? this.multiple : true,
  };

  /** Listen removeFile event sent from z-file component */
  @Listen("removeFile")
  removeFileListener() {
    this.files--;
  }

  /** Listen fileDropped event sent from z-dragdrop-area component */
  @Listen("fileDropped")
  fileDroppedListener(e: CustomEvent) {
    this.input.files = e.detail;
    this.fileInputHandler();
  }

  componentWillLoad() {
    if (
      this.type === ZFileUploadTypeEnum.dragdrop &&
      getDevice() !== DeviceEnum.desktop
    )
      this.type = ZFileUploadTypeEnum.default;
  }

  /** Emitted when user select one or more files */
  @Event() fileInput: EventEmitter;
  fileInputHandler() {
    if (this.input.files.length) {
      this.wrongFiles = this.checkFiles(Array.from(this.input.files));
      if (!checkEmptyObject(this.wrongFiles)) {
        this.error = true;
      }
    }
  }

  checkFiles(files: Array<File>): any {
    let errors = {};
    files.forEach((file: File) => {
      const fileSize = file.size / 1024 / 1024;
      const fileExtension = file.name.split(".").pop();
      if (fileSize <= 50 && this.acceptedFormat.includes(fileExtension)) {
        this.fileInput.emit(file);
        this.files++;
        this.input.value = "";
        return;
      }
      errors[file.name] = [];
      if (fileSize > 50) {
        errors[file.name].push("size");
      }
      if (!this.acceptedFormat.includes(fileExtension)) {
        errors[file.name].push("format");
      }
    });

    return errors;
  }

  renderTitle() {
    return (
      <z-heading id="title" variant="semibold" level={2}>
        <slot name="title"></slot>
      </z-heading>
    );
  }

  renderDescription(variant, level) {
    return (
      <z-body variant={variant} level={level}>
        <slot name="description"></slot>
      </z-body>
    );
  }

  renderAllowedFileExtensions() {
    return (
      <z-body level={3}>
        <slot name="file-format"></slot>
      </z-body>
    );
  }

  renderFileSection() {
    return (
      this.files > 0 && (
        <section class="files-container">
          <z-heading variant="semibold" level={4}>
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

  renderInput() {
    return (
      <input
        {...this.inputAttributes}
        onChange={() => this.fileInputHandler()}
        accept={this.acceptedFormat}
        ref={(val) => (this.input = val)}
      />
    );
  }

  renderUploadButton() {
    return [
      this.renderInput(),
      <z-button
        onClick={() => this.input.click()}
        id="fileSelect"
        variant={this.variant}
        icon="plus"
      >
        Allega
      </z-button>,
    ];
  }

  renderUploadLink() {
    return [
      this.renderInput(),
      <z-body variant="regular" level={1}>
        Trascinalo qui o{" "}
        <z-body
          class="upload-link"
          onClick={() => this.input.click()}
          variant="semibold"
          level={1}
        >
          caricalo
        </z-body>{" "}
        dal tuo computer
      </z-body>,
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
      <z-dragdrop-area>
        <div class="text-container">
          {this.renderDescription("regular", 1)}
          {this.renderUploadLink()}
          {this.renderAllowedFileExtensions()}
        </div>
      </z-dragdrop-area>,
    ];
  }

  formatErrorString(key, value) {
    const sizeErrorString = "supera i 50Mb";
    const formatErrorString = " ha un'estensione non prevista";
    const sizeError = (value as Array<string>).includes("size")
      ? sizeErrorString
      : "";
    const formatError = (value as Array<string>).includes("format")
      ? formatErrorString
      : "";
    const bothErrors = sizeError && formatError ? ", " : "";
    return `Il file ${key} ${sizeError}${bothErrors} ${formatError} e non può quindi essere caricato.`;
  }

  handleErrorModalContent() {
    return (
      <div class="modalWrapper" slot="modalContent">
        <div class="files">
          {Object.entries(this.wrongFiles).map(([key, value]) => {
            return (
              <z-body variant="regular" level={3}>
                {this.formatErrorString(key, value)}
              </z-body>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    return [
      <div class={`container ${this.type}`}>
        {this.renderTitle()}
        {this.type == ZFileUploadTypeEnum.default
          ? this.renderDefaultMode()
          : this.renderDragDropMode()}
      </div>,
      this.error && (
        <z-modal
          modaltitle="Attenzione"
          onModalClose={() => (this.error = !this.error)}
        >
          {this.handleErrorModalContent()}
        </z-modal>
      ),
    ];
  }
}
