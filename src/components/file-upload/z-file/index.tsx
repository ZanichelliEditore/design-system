import {
  Component,
  h,
  EventEmitter,
  Event,
  Element,
  Host,
} from "@stencil/core";
import { DeviceEnum, ZChipType } from "../../../beans";
import { getDevice } from "../../../utils/utils";

@Component({
  tag: "z-file",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZFile {
  private icon: HTMLElement;
  private chip: HTMLElement;

  @Element() el: HTMLElement;

  /** Emitted when a z-file component is removed from the DOM */
  @Event() removeFile: EventEmitter;
  removeFileHandler() {
    this.removeFile.emit();
    this.el.remove();
  }

  componentDidLoad() {
    this.icon?.focus?.();
    this.chip.shadowRoot.querySelector("button").style.border = "none";
  }

  render() {
    return (
      <Host>
        <z-chip
          ref={(val) => (this.chip = val)}
          filter
          type={ZChipType.default}
        >
          <div class="chip-content">
            <span
              tabIndex={-1}
              class={{
                "regular": getDevice() == DeviceEnum.desktop,
                "bold": getDevice() !== DeviceEnum.desktop,
              }}
            >
              <slot />
            </span>
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
              height={getDevice() !== DeviceEnum.desktop ? 20 : 15}
              width={getDevice() !== DeviceEnum.desktop ? 20 : 15}
              ref={(val) => (this.icon = val as HTMLElement)}
            />
          </div>
        </z-chip>
      </Host>
    );
  }
}
