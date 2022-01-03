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
} from "../../beans";
import { getDevice } from "../../utils/utils";

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
  @Prop() acceptedFormat: string;

  /** Number of files added by the user */
  @State() files: number = 0;

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
      this.fileInput.emit(this.input.files);
      this.files += this.input.files.length;
      this.input.value = "";
    }
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
    return [
      <input
        onChange={() => this.fileInputHandler()}
        type="file"
        id="fileElem"
        multiple
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
      <div class={`container ${this.type}`}>
        {this.renderTitle()}
        {this.renderDescription("semibold", 3)}
        {this.renderAllowedFileExtensions()}
        {this.renderFileSection()}
        {this.renderUploadButton()}
      </div>
    );
  }

  renderDragDropMode() {
    return (
      <div class={`container ${this.type}`}>
        {this.renderTitle()}
        {this.renderFileSection()}
        <z-dragdrop-area>
          <div class="text-container">
            {this.renderDescription("regular", 1)}
            {this.renderUploadLink()}
            {this.renderAllowedFileExtensions()}
          </div>
        </z-dragdrop-area>
      </div>
    );
  }

  render() {
    {
      return this.type == ZFileUploadTypeEnum.default
        ? this.renderDefaultMode()
        : this.renderDragDropMode();
    }
  }
}
