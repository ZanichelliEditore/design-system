import {
  Component,
  Prop,
  h,
  EventEmitter,
  Event,
  State,
  Listen,
  Element,
  Fragment,
} from "@stencil/core";
import {
  ButtonVariantEnum,
  DeviceEnum,
  DividerSize,
  ZFileUploadTypeEnum,
} from "../../../beans";
import { getDevice } from "../../../utils/utils";

@Component({
  tag: "z-file-upload",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZFileUpload {
  private input: HTMLInputElement;

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
      if (this.wrongFiles["sizeErrors"] || this.wrongFiles["formatErrors"]) {
        this.error = true;
      }
    }
  }

  checkFiles(files: Array<File>): any {
    let sizeErrors: Array<File> = [];
    let formatErrors: Array<File> = [];
    files.forEach((file: File) => {
      const fileSize = file.size / 1024 / 1024;
      const fileExtension = file.type.split("/").pop();
      if (fileSize <= 50 && this.acceptedFormat.includes(fileExtension)) {
        console.log(file);
        this.fileInput.emit(file);
        this.files += this.input.files.length;
        this.input.value = "";
        return;
      }
      if (fileSize > 50) {
        sizeErrors.push(file);
      }
      if (!this.acceptedFormat.includes(fileExtension)) {
        formatErrors.push(file);
      }
    });

    return {
      sizeErrors,
      formatErrors,
    };
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

  renderUploadButton() {
    const attributes = {
      type: "file",
      id: "fileElem",
      multiple: this.multiple,
    };

    return [
      <input
        {...attributes}
        onChange={() => this.fileInputHandler()}
        accept={this.acceptedFormat}
        ref={(val) => (this.input = val)}
      />,
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
      <input
        onChange={() => this.fileInputHandler()}
        type="file"
        id="fileElem"
        multiple
        accept={this.acceptedFormat}
        ref={(val) => (this.input = val)}
      />,
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
    return (
      <Fragment>
        {this.renderDescription("semibold", 3)}
        {this.renderAllowedFileExtensions()}
        {this.renderFileSection()}
        {this.renderUploadButton()}
      </Fragment>
    );
  }

  renderDragDropMode() {
    return (
      <Fragment>
        {this.renderFileSection()}
        <z-dragdrop-area>
          <div class="text-container">
            {this.renderDescription("regular", 1)}
            {this.renderUploadLink()}
            {this.renderAllowedFileExtensions()}
          </div>
        </z-dragdrop-area>
      </Fragment>
    );
  }

  handleErrorModalContent() {
    return (
      <div slot="modalContent">
        {this.wrongFiles["sizeErrors"].map((file: File) => (
          <p>{file.name}</p>
        ))}
        {this.wrongFiles["formatErrors"].map((file: File) => (
          <p>{file.name}</p>
        ))}
      </div>
    );
  }

  render() {
    console.log(this.error, this.wrongFiles);
    {
      return (
        <div class={`container ${this.type}`}>
          {this.renderTitle()}
          {this.type == ZFileUploadTypeEnum.default
            ? this.renderDefaultMode()
            : this.renderDragDropMode()}
          {this.error && (
            <z-modal onModalClose={() => (this.error = !this.error)}>
              {this.handleErrorModalContent()}
            </z-modal>
          )}
        </div>
      );
    }
  }
}
