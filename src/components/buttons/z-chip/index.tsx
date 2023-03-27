import {Component, Prop, h, Element, Event, EventEmitter} from "@stencil/core";
import {Device, ZChipType} from "../../../beans";
import {getDevice} from "../../../utils/utils";
@Component({
  tag: "z-chip",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZChip {
  @Element() el: HTMLZChipElement;

  /** Non interactive icon */
  @Prop()
  icon?: string;

  /** z-chip size type, can be default, medium or small */
  @Prop({reflect: true})
  type?: ZChipType = ZChipType.DEFAULT;

  /** z-chip interactive icon */
  @Prop({reflect: true})
  interactiveIcon?: string;

  /** set z-chip as disabled  */
  @Prop({reflect: true})
  disabled?: boolean = false;

  /** z-chip aria-label string */
  @Prop()
  ariaLabel = "";

  /** click on interactive icon */
  @Event()
  interactiveIconClick: EventEmitter;

  private emitinteractiveIconClick(): void {
    this.interactiveIconClick.emit();
  }

  private getIconSize(): number {
    return getDevice() !== Device.DESKTOP ? 22 : 14;
  }

  render(): HTMLButtonElement | HTMLDivElement {
    if (this.interactiveIcon) {
      return (
        <div
          class={`z-chip-container ${this.type}`}
          aria-disabled={this.disabled}
        >
          {this.icon && (
            <z-icon
              class="icon-sx"
              name={this.icon}
              width={this.getIconSize()}
              height={this.getIconSize()}
            />
          )}
          <slot />
          <button
            type="button"
            tabIndex={this.disabled ? -1 : 0}
            onClick={() => this.emitinteractiveIconClick()}
            onKeyUp={() => {
              () => this.emitinteractiveIconClick();
            }}
            aria-label={this.ariaLabel}
            disabled={this.disabled}
          >
            <z-icon
              name={this.interactiveIcon}
              width={this.getIconSize()}
              height={this.getIconSize()}
            />
          </button>
        </div>
      );
    }

    return (
      <div class={`${this.type}`}>
        {this.icon && (
          <z-icon
            name={this.icon}
            width={this.getIconSize()}
            height={this.getIconSize()}
          />
        )}
        <slot />
      </div>
    );
  }
}
