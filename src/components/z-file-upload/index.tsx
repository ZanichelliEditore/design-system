import {
  Component,
  Prop,
  h,
  EventEmitter,
  Event,
  State,
  Listen,
} from "@stencil/core";
import { ButtonVariantEnum, DividerSize } from "../../beans";

@Component({
  tag: "z-file-upload",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZFileUpload {
  private input: HTMLInputElement;

  @Prop() variant: ButtonVariantEnum;

  @State() files: number = 0;

  @Listen("removeFile")
  removeFileListener() {
    this.files--;
  }

  @Event() fileInput: EventEmitter;
  fileInputHandler() {
    if (this.input.files.length) {
      this.fileInput.emit(this.input.files);
      this.files++;
    }
  }

  renderTitle() {
    return (
      <z-heading id="title" variant="semibold" level={1}>
        <slot name="title"></slot>
      </z-heading>
    );
  }

  renderDescriptionAndFileInfo() {
    return [
      <z-body variant="semibold" level={3}>
        <slot name="description">
        </slot>
      </z-body>,
      <z-body level={3}>
        <slot name="file-format">
        </slot>
      </z-body>,
    ];
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
    return [
      <input
        onChange={() => this.fileInputHandler()}
        type="file"
        id="fileElem"
        multiple
        accept="image/*"
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

  render() {
    return (
      <div class="container">
        {this.renderTitle()}
        {this.renderDescriptionAndFileInfo()}
        {this.renderFileSection()}
        {this.renderInput()}
      </div>
    );
  }
}
