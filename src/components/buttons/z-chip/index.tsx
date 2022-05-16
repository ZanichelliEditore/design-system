import {
  Component,
  Prop,
  h,
  Element,
  Event,
  EventEmitter,
} from "@stencil/core";
import { DeviceEnum, ZChipType } from "../../../beans";
import { getDevice, handleKeyboardSubmit } from "../../../utils/utils";
@Component({
  tag: "z-chip",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZChip {
  @Element() el: HTMLElement;

  @Prop() icon?: string;
  @Prop({ reflect: true }) type?: ZChipType = ZChipType.default;
  @Prop({ reflect: true }) interactiveIcon?: string;
  @Prop({ reflect: true }) disabled?: boolean = false;

  @Event() interactiveIconClick: EventEmitter;
  emitinteractiveIconClick() {
    this.interactiveIconClick.emit();
  }

  render() {
    if (this.interactiveIcon) {
      return (
        <button class={this.type} disabled={this.disabled} tabindex="0">
          {this.icon && (
            <z-icon
              name={this.icon}
              width={getDevice() !== DeviceEnum.desktop ? 22 : 14}
              height={getDevice() !== DeviceEnum.desktop ? 22 : 14}
            />
          )}
          <slot />
          <z-icon
            tabIndex={0}
            onClick={() => this.emitinteractiveIconClick()}
            onKeyPress={(e) =>
              handleKeyboardSubmit(e, this.emitinteractiveIconClick)
            }
            name={this.interactiveIcon}
            height={getDevice() !== DeviceEnum.desktop ? 22 : 14}
            width={getDevice() !== DeviceEnum.desktop ? 22 : 14}
          />
        </button>
      );
    }

    return (
      <div class={`${this.type}`} tabindex="0">
        {this.icon && (
          <z-icon
            name={this.icon}
            width={getDevice() !== DeviceEnum.desktop ? 22 : 14}
            height={getDevice() !== DeviceEnum.desktop ? 22 : 14}
          />
        )}
        <slot />
      </div>
    );
  }
}
