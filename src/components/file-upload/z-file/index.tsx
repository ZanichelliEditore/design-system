import {Component, h, EventEmitter, Event, Element, Host, State, Listen, Prop} from "@stencil/core";
import {PopoverPositions, ZChipType} from "../../../beans";
import {tabletBreakpoint} from "../../../constants/breakpoints";

@Component({
  tag: "z-file",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZFile {
  private icon: HTMLElement;

  private ellipsis?: HTMLSpanElement;

  private chip?: HTMLZChipElement;

  @Prop() fileNumber: number;

  @State() allowPopover: boolean = false;

  @State() popoverVisible: boolean = false;

  @Element() el: HTMLElement;

  /** Emitted when a z-file component is removed from the DOM */
  @Event() removeFile: EventEmitter;
  removeFileHandler() {
    this.removeFile.emit();
    this.el.remove();
  }

  @Listen("mouseover")
  onMouseOver() {
    this.popoverVisible = true;
  }

  @Listen("mouseleave")
  onMouseLeave() {
    this.popoverVisible = false;
  }

  @Listen("interactiveIconClick")
  onInteractiveIconClick() {
    this.removeFileHandler();
  }

  componentDidLoad() {
    if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint) {
      this.allowPopover = true;
    }

    this.icon?.focus?.();
  }

  elementHasEllipsis(): boolean {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }

  render() {
    return (
      <Host>
        {this.allowPopover && (
          <z-popover
            open={this.popoverVisible}
            position={PopoverPositions.auto}
            bindTo={this.chip}
          >
            <span class="body-5 tooltip-content">{this.ellipsis.innerText}</span>
          </z-popover>
        )}
        <z-chip
          ref={(el) => (this.chip = el as HTMLZChipElement)}
          id={`chip-${this.fileNumber}`}
          interactiveIcon="multiply-circled"
          type={ZChipType.default}
        >
          <span
            ref={(el) => (this.ellipsis = el as HTMLSpanElement)}
            tabIndex={-1}
          >
            <slot />
          </span>
        </z-chip>
      </Host>
    );
  }
}
