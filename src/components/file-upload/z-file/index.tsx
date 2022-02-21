import {
  Component,
  h,
  EventEmitter,
  Event,
  Element,
  Prop,
  Host,
} from "@stencil/core";
import { FiletypeEnum } from "../../../beans";

@Component({
  tag: "z-file",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZFile {
  private icon: HTMLElement

  @Element() el: HTMLElement;

  /** Prop which indicates the type of the file */
  @Prop() filetype: string = "";

  /** Emitted when a z-file component is removed from the DOM */
  @Event() removeFile: EventEmitter;
  removeFileHandler() {
    this.removeFile.emit();
    this.el.remove();
  }

  componentDidLoad(){
    this.icon.focus();
  } 

  /**  */
  handleChipIcon() {
    switch (this.filetype) {
      case FiletypeEnum.pdf:
        return "pdf";
      case FiletypeEnum.tiff:
        return "image-tiff";
      case FiletypeEnum.png:
        return "image-png";
      case FiletypeEnum.jpeg:
      case FiletypeEnum.jpg:
        return "image-jpg";
      default:
        return "document-with-text";
    }
  }

  render() {
    return (
      <Host tabIndex={0}>
        <z-chip>
          <div class="chip-content">
            <z-icon name={this.handleChipIcon()} />
            <slot />
            <z-icon
              tabIndex={0}
              onClick={() => this.removeFileHandler()}
              onKeyPress={(e) => {
                if (e.keyCode == 32 || e.keyCode == 13) {
                  e.preventDefault();
                  this.removeFileHandler();
                }
              }}
              name="multiply-circled"
              height={15}
              width={15}
              ref={(val) => this.icon = val}
            />
          </div>
        </z-chip>
      </Host>
    );
  }
}
