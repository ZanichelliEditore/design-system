import {
  Component,
  h,
  EventEmitter,
  Event,
  Element,
  Prop,
} from "@stencil/core";

@Component({
  tag: "z-file",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZFile {
  @Element() el: HTMLElement;

  /** Prop which indicates the type of the file */
  @Prop() filetype: string = "";

  /** Emitted when a z-file component is removed from the DOM */
  @Event() removeFile: EventEmitter;
  removeFileHandler() {
    this.removeFile.emit();
    this.el.remove();
  }

  /**  */
  handleChipIcon() {
    switch (this.filetype) {
      case "application/pdf":
        return "pdf";
      case "image/tiff":
        return "image-tiff";
      case "image/png":
        return "image-png";
      case "image/jpeg":
      case "image/jpg":
        return "image-jpg";
      default:
        return "document-with-text";
    }
  }

  render() {
    return (
      <z-chip>
        <div class="chip-content">
          <z-icon name={this.handleChipIcon()} />
          <slot />
          <z-icon
            onClick={() => this.removeFileHandler()}
            name="multiply-circled"
            height={15}
            width={15}
          />
        </div>
      </z-chip>
    );
  }
}
