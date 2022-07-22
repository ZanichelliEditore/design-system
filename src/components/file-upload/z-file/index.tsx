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
import { TooltipPosition, ZChipType } from "../../../beans";
import { tabletBreakpoint } from "../../../constants/breakpoints";

@Component({
  tag: "z-file",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZFile {
  private icon: HTMLElement;

  private ellipsis?: HTMLSpanElement;

  @Prop() fileNumber: number;

  /** File name */
  @Prop() fileName: any;

  @State() allowTooltip: boolean = false;

  @State() tooltipVisible: boolean = false;

  @Element() el: HTMLElement;

  /** Emitted when a z-file component is removed from the DOM */
  @Event() removeFile: EventEmitter;
  removeFileHandler() {
    this.removeFile.emit({ fileName: this.fileName });
    this.el.remove();
  }

  @Listen("mouseover")
  onMouseOver() {
    this.tooltipVisible = true;
  }

  @Listen("mouseleave")
  onMouseLeave() {
    this.tooltipVisible = false;
  }

  @Listen("interactiveIconClick")
  onInteractiveIconClick() {
    this.removeFileHandler();
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
        <z-chip
          id={`chip-${this.fileNumber}`}
          interactiveIcon="multiply-circled"
          type={ZChipType.default}
        >
            <span
              ref={(el) => (this.ellipsis = el as HTMLSpanElement)}
              tabIndex={-1}
            >
              {this.fileName}
            </span>
        </z-chip>
      </Host>
    );
  }
}
