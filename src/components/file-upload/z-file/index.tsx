import {
  Component,
  h,
  EventEmitter,
  Event,
  Element,
  Host,
} from "@stencil/core";

@Component({
  tag: "z-file",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZFile {
  private icon: HTMLElement;

  @Element() el: HTMLElement;

  /** Emitted when a z-file component is removed from the DOM */
  @Event() removeFile: EventEmitter;
  removeFileHandler() {
    this.removeFile.emit();
    this.el.remove();
  }

  componentDidLoad() {
    console.log(this)
    this.icon?.focus?.();
  }

  render() {
    return (
      <Host tabIndex={0}>
        <z-chip>
          <div class="chip-content">
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
              ref={(val) => (this.icon = val as HTMLElement)}
            />
          </div>
        </z-chip>
      </Host>
    );
  }
}
