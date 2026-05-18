import {Component, ComponentInterface, Element, Event, EventEmitter, Prop, h} from "@stencil/core";
import {ZChipType, ZChipVariant} from "../../beans";

@Component({
  tag: "z-chip",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZChip implements ComponentInterface {
  @Element() el: HTMLZChipElement;

  /** Non interactive icon */
  @Prop()
  icon?: string;

  /** z-chip size type, can be default, medium or small */
  @Prop({reflect: true})
  type?: ZChipType = ZChipType.DEFAULT;

  /** z-chip variant type, can be outline, filled or soft */
  @Prop({reflect: true})
  variant?: ZChipVariant = ZChipVariant.OUTLINE;

  /** z-chip interactive icon */
  @Prop({reflect: true})
  interactiveIcon?: string;

  /** set z-chip as disabled */
  @Prop({reflect: true})
  disabled?: boolean = false;

  /** `aria-label` for the icon button */
  @Prop()
  htmlAriaLabel?: string;

  /** click on interactive icon */
  @Event()
  interactiveIconClick: EventEmitter;

  render(): HTMLDivElement {
    return (
      <div
        class={{
          "z-chip-container": true,
          "z-chip-interactive": !!this.interactiveIcon,
          [this.type]: true,
          [this.variant]: true,
        }}
        aria-disabled={this.disabled ? "true" : undefined}
      >
        {this.icon && <z-icon name={this.icon} />}
        <slot />
        {this.interactiveIcon && (
          <button
            type="button"
            onClick={() => this.interactiveIconClick.emit()}
            aria-label={this.htmlAriaLabel || undefined}
            disabled={this.disabled}
          >
            <z-icon
              class="interactive-icon"
              name={this.interactiveIcon}
            />
          </button>
        )}
      </div>
    );
  }
}
