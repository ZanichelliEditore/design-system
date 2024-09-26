import {Component, Element, Event, EventEmitter, Host, Listen, Prop, State, h} from "@stencil/core";
import {PopoverPosition, ZChipType} from "../../../beans";
import {Breakpoints} from "../../../constants/breakpoints";

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

  /** File chip id */
  @Prop()
  fileNumber: number;

  /** File name */
  @Prop()
  fileName: string;

  @State()
  allowPopover = false;

  @State()
  popoverVisible = false;

  @Element() el: HTMLZFileElement;

  /** Emitted when a z-file component is removed from the DOM */
  @Event()
  removeFile: EventEmitter;

  private removeFileHandler(): void {
    this.removeFile.emit({fileName: this.fileName});
    this.el.remove();
  }

  @Listen("mouseover")
  onMouseOver(): void {
    this.popoverVisible = true;
  }

  @Listen("mouseleave")
  onMouseLeave(): void {
    this.popoverVisible = false;
  }

  @Listen("interactiveIconClick")
  onInteractiveIconClick(): void {
    this.removeFileHandler();
  }

  componentDidLoad(): void {
    if (this.elementHasEllipsis() && window.innerWidth > Breakpoints.TABLET) {
      this.allowPopover = true;
    }

    this.icon?.focus?.();
  }

  private elementHasEllipsis(): boolean {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }

  render(): HTMLZFileElement {
    return (
      <Host>
        {this.allowPopover && (
          <z-popover
            open={this.popoverVisible}
            position={PopoverPosition.AUTO}
            bindTo={this.chip}
          >
            <span class="body-5 tooltip-content">{this.ellipsis.innerText}</span>
          </z-popover>
        )}
        <z-chip
          ref={(el) => (this.chip = el as HTMLZChipElement)}
          id={`chip-${this.fileNumber}`}
          interactiveIcon="multiply-circled"
          type={ZChipType.DEFAULT}
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
