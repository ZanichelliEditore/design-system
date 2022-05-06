import {
  Component,
  h,
  EventEmitter,
  Event,
  Element,
  Host,
  State,
  Listen,
  Prop,
} from "@stencil/core";
import { DeviceEnum, TooltipPosition, ZChipType } from "../../../beans";
import { tabletBreakpoint } from "../../../constants/breakpoints";
import { getDevice } from "../../../utils/utils";

@Component({
  tag: "z-file",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZFile {
  private icon: HTMLElement;

  private ellipsis?: HTMLSpanElement;
  
  @Prop() fileNumber;

  @State() allowTooltip: boolean = false;

  @State() tooltipVisible: boolean = false

  @Element() el: HTMLElement;

  /** Emitted when a z-file component is removed from the DOM */
  @Event() removeFile: EventEmitter;
  removeFileHandler() {
    this.removeFile.emit();
    this.el.remove();
  }

  @Listen('mouseover')
  onMouseOver() {
    this.tooltipVisible = true;
  }

  @Listen('mouseleave')
  onMouseLeave() {
    this.tooltipVisible = false;
  }

  componentDidLoad() {
    if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint)
      this.allowTooltip = true;

    this.icon?.focus?.();
  }

  elementHasEllipsis(): boolean {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }

  render() {
    return (
      <Host>
        {this.allowTooltip && (
          <z-tooltip
            open={this.tooltipVisible}
            type={TooltipPosition.AUTO}
            bind-to={`#chip-${this.fileNumber}`}
          >
            <span class="body-5 tootip-content">{this.ellipsis.innerText}</span>
          </z-tooltip>
        )}
        <z-chip id={`chip-${this.fileNumber}`} filter type={ZChipType.default}>
          <div class="chip-content">
            <span
              ref={(el) => (this.ellipsis = el as HTMLSpanElement)}
              tabIndex={-1}
              class={{
                "body-3-sb": getDevice() == DeviceEnum.desktop,
                "body-2-sb": getDevice() !== DeviceEnum.desktop,
              }}
            >
              <slot />
            </span>
            <z-icon
              aria-label="Elimina file"
              tabIndex={0}
              onClick={() => this.removeFileHandler()}
              onKeyPress={(e) => {
                if (e.code == "Space" || e.code == "Enter") {
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
