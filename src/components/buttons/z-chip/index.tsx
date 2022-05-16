import {
  Component,
  Prop,
  h,
  Element,
  Event,
  EventEmitter,
} from "@stencil/core";
import { DeviceEnum, ZChipType } from "../../../beans";
import { getDevice } from "../../../utils/utils";
@Component({
  tag: "z-chip",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZChip {
  @Element() el: HTMLElement;

  @Prop() label?: string;
  @Prop() icon?: string;
  @Prop({ reflect: true }) iconPosition?: "left" | "right" = "left";
  @Prop({ reflect: true }) bold?: boolean = false;
  @Prop({ reflect: true }) type?: ZChipType = ZChipType.default;

  /** z-chip interaction props */
  @Prop({ reflect: true }) interaction?: boolean = false;
  @Prop({ reflect: true }) disabled?: boolean = false;

  @Event() removeChip: EventEmitter;
  removeChips() {
    this.removeChip.emit();
    this.el.remove();
  }

  render() {
    if (this.interaction) {
      return (
        <button class={this.type} disabled={this.disabled} tabindex="0">
          {this.icon && (
            <z-icon
              name={this.icon}
              width={getDevice() !== DeviceEnum.desktop ? 18 : 14}
              height={getDevice() !== DeviceEnum.desktop ? 18 : 14}
            />
          )}
          <slot />
          <z-icon
            tabIndex={0}
            onClick={() => this.removeChips()}
            onKeyPress={(e) => {
              if (e.code == "Space" || e.code == "Enter") {
                e.preventDefault();
                this.removeChips();
              }
            }}
            name="multiply-circled"
            height={getDevice() !== DeviceEnum.desktop ? 22 : 14}
            width={getDevice() !== DeviceEnum.desktop ? 22 : 14}
          />
        </button>
      );
    }

    return (
      <div class={`${this.type} ${this.iconPosition}`}>
        {this.icon && (
          <z-icon
            name={this.icon}
            width={getDevice() !== DeviceEnum.desktop ? 18 : 14}
            height={getDevice() !== DeviceEnum.desktop ? 18 : 14}
          />
        )}
        <span class="bold label">{this.label}</span>
        <span class={{ bold: this.bold }}>
          <slot />
        </span>
      </div>
    );
  }
}
