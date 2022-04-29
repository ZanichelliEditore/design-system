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

  @Element() el: HTMLElement;

  /** Emitted when a z-file component is removed from the DOM */
  @Event() removeFile: EventEmitter;
  removeFileHandler() {
    this.removeFile.emit();
    this.el.remove();
  }

  componentDidLoad() {
    this.icon?.focus?.();
  }

  render() {
    return (
      <Host tabIndex={0}>
        <z-chip type={ZChipType.default}>
          <div class="chip-content">
            <z-body
              level={getDevice() !== DeviceEnum.desktop ? 4 : 5}
              variant={
                getDevice() !== DeviceEnum.desktop ? "semibold" : "regular"
              }
            >
              <slot />
            </z-body>
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
