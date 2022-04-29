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
  @Prop() variant?: ButtonVariantEnum;

  /** Prop indicating the accepted file type: ex ".pdf, .doc, .jpg" */
  @Prop() acceptedFormat: string = ".pdf, .doc, .tiff, .png, .jpg";

  /** Max file dimension in Megabyte */
  @Prop() fileMaxSize: number = 50;

  /** Prop indicating if the user can pick more than one file at once*/
  @Prop() multiple: boolean = true;

  /** Title */
  @Prop() mainTitle?: string;

  /** Description */
  @Prop() description?: string;
  
  /** Number of files added by the user */
  @State() files: number = 0;

  /** State indicating if the user picked a file not allowed (by format or size) */
  @State() error: boolean = false;

  /** List of files not allowed to be uploaded */
  @State() invalidFiles: any;

  @Element() el: HTMLElement;

  private input: HTMLInputElement;

  private button: HTMLZButtonElement;

  private uploadLink: HTMLZBodyElement;

  private inputAttributes = {
    type: "file",
    id: "fileElem",
    multiple: this.type === ZFileUploadTypeEnum.default ? this.multiple : true,
  };

  /** Listen removeFile event sent from z-file component */
  @Listen("removeFile")
  removeFileListener(){
    this.files--; 
  }

  /** Listen fileDropped event sent from z-dragdrop-area component */
  @Listen("fileDropped")
  fileDroppedListener(e: CustomEvent) {
    this.input.files = e.detail;
    this.fileInputHandler();
  }

  componentDidUpdate(){
    this.handleAccessibility()
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
      this.invalidFiles = this.checkFiles(Array.from(this.input.files));
      if (!checkEmptyObject(this.invalidFiles)) {
        this.error = true;
      }
    }
  }

  handleAccessibility(){
    if(this.files > 0) {
      (this.el.querySelector('z-file:last-child').shadowRoot.querySelector('z-chip z-icon:last-child') as HTMLElement).focus();
    }else {
      this.type === ZFileUploadTypeEnum.default ? this.button.focus() : this.uploadLink.focus();
    }
  }

  checkFiles(files: Array<File>): any {
    let errors = {};
    const sizeErrorString = `supera i ${this.fileMaxSize}Mb`;
    const formatErrorString = " ha un'estensione non prevista";
    files.forEach((file: File) => {
      const fileSize = file.size / 1024 / 1024;
      const fileFormatOk = !!this.acceptedFormat
        .split(",")
        .find((ext: string) => file.name.toLowerCase().endsWith(ext.trim()));
      const fileSizeOk = fileSize <= this.fileMaxSize;
      if (fileSizeOk && fileFormatOk) {
        this.fileInput.emit(file);
        this.files++;
        this.input.value = "";
        return;
      }
      errors[file.name] = [];
      if (!fileSizeOk) {
        errors[file.name].push(sizeErrorString);
      }
      if (!fileFormatOk) {
        errors[file.name].push(formatErrorString);
      }
    });

    return errors;
  }

  renderTitle() {
    return (
      <z-heading id="title" variant="semibold" level={2}>
        {this.mainTitle}
      </z-heading>
    );
  }

  renderDescription(variant, level) {
    return (
      <z-body variant={variant} level={level}>
        {this.description}
      </z-body>
    );
  }

  renderAllowedFileExtensions() {
    
    const fileFormat = this.acceptedFormat.split(', ')
                                          .map((string) => string.substring(1).toUpperCase())
                                          .join(', ');

    const fileFormatString = `Puoi allegare file nei formati ${fileFormat} per un massimo di ${this.fileMaxSize}Mb di peso.`

    return (
      <z-body level={3}>
        {fileFormatString}
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
        tabIndex={0}
        onClick={() => this.input.click()}
        onKeyPress={(e) => {
          if (e.keyCode == 32 || e.keyCode == 13) {
            e.preventDefault();
            this.input.click();
          }
        }}
        id="fileSelect"
        variant={this.variant}
        icon="plus"
        ref={(val) => this.button = val}
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
          tabIndex={0}
          class="upload-link"
          onClick={() => this.input.click()}
          onKeyPress={(e) => {
            if (e.keyCode == 32 || e.keyCode == 13) {
              e.preventDefault();
              this.input.click();
            }
          }}
          variant="semibold"
          level={1}
          ref={(val) => this.uploadLink = val}
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
    const bothErrors = value[0] && value[1] ? ", " : "";
    return `Il file ${key} ${value[0] ?? ""}${bothErrors} ${
      value[1] ?? ""
    } e non può quindi essere caricato.`;
  }

  handleErrorModalContent() {
    return (
      <div slot="modalContent">
        <div class="modalWrapper">
          <div class="files">
            {Object.entries(this.invalidFiles).map(([key, value]) => {
              return (
                <z-body variant="regular" level={3}>
                  {this.formatErrorString(key, value)}
                </z-body>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return [
      <div tabIndex={0} class={`container ${this.type}`}>
        {this.renderTitle()}
        {this.type == ZFileUploadTypeEnum.default
          ? this.renderDefaultMode()
          : this.renderDragDropMode()}
      </div>,
      this.error && (
        <z-modal
          modaltitle="Attenzione"
          onModalClose={() => (this.error = !this.error)}
          onModalBackgroundClick={() => (this.error = !this.error)}
        >
          {this.handleErrorModalContent()}
        </z-modal>
      ),
    ];
  }
}
