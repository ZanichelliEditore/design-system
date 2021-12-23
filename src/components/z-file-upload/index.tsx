import {
  Component,
  Prop,
  h,
  EventEmitter,
  Event,
  State,
  Listen,
} from "@stencil/core";
import {
  ButtonVariantEnum,
  DividerSize,
  ZFileUploadTypeEnum,
} from "../../beans";

@Component({
  tag: "z-file-upload",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZFileUpload {
  private input: HTMLInputElement;

  /** Prop indicating the file upload type - can be default or dragdrop */
  @Prop() type: ZFileUploadTypeEnum = ZFileUploadTypeEnum.default;

  /** Prop indicating the button variant*/
  @Prop() variant: ButtonVariantEnum;

  /** Prop indicating the accepted file type: ex ".pdf, .doc, .jpg" */
  @Prop() acceptedFormat: string;

  /** Number of files added by the user */
  @State() files: number = 0;

  /** Listen removeFile event sento from z-file component */
  @Listen("removeFile")
  removeFileListener() {
    this.files--;
  }

  /** Emitted when user select one or more files */
  @Event() fileInput: EventEmitter;
  fileInputHandler() {
    if (this.input.files.length) {
      this.fileInput.emit(this.input.files);
      this.files += this.input.files.length;
      this.input.value = "";
    }
  }

  renderTitle() {
    return (
      <z-heading id="title" variant="semibold" level={1}>
        <slot name="title"></slot>
      </z-heading>
    );
  }

  renderDescription() {
    return (
      <z-body variant="semibold" level={3}>
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

  renderUploadButtonOrUploadLink() {
    return [
      <input
        onChange={() => this.fileInputHandler()}
        type="file"
        id="fileElem"
        multiple
        accept={this.acceptedFormat}
        ref={(val) => (this.input = val)}
      />,
      this.type == ZFileUploadTypeEnum.default ? (
        <z-button
          onClick={() => this.input.click()}
          id="fileSelect"
          variant={this.variant}
          icon="plus"
        >
          Allega
        </z-button>
      ) : (
        <z-body onClick={() => this.input.click()} variant="semibold" level={3}>
          Trascinalo qui o <strong>caricalo</strong> dal tuo computer
        </z-body>
      ),
    ];
  }

  render() {
    {
      return this.type == ZFileUploadTypeEnum.default ? (
        <div class="container">
          {this.renderTitle()}
          {this.renderDescription()}
          {this.renderAllowedFileExtensions()}
          {this.renderFileSection()}
          {this.renderUploadButtonOrUploadLink()}
        </div>
      ) : (
        <div class="container">
          {this.renderTitle()}
          <div
            class="dragdrop"
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDragLeave={() => {}}
            onDragEnd={() => {}}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files.length) {
                this.input.files = e.dataTransfer.files;
                this.fileInputHandler();
              }
            }}
          >
            {this.renderFileSection()}
            {this.renderDescription()}
            {this.renderUploadButtonOrUploadLink()}
            {this.renderAllowedFileExtensions()}
          </div>
        </div>
      );
    }
  }
}
