import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";
import { randomId } from "../../../utils/utils";
import { LabelPositionEnum, LabelPositionType } from "../../../beans";

@Component({
  tag: "z-toggle-switch",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZToggleSwitch {
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ reflect: true }) labelPosition?: LabelPositionType =
    LabelPositionEnum.left;
  @Prop({ mutable: true }) checked?: boolean = false;
  @Prop() htmlid: string = `toggle-switch-id-${randomId()}`;

  @Event() toggleClick: EventEmitter;
  emitToggleClick() {
    this.toggleClick.emit({
      id: this.htmlid,
      checked: this.checked,
    });
  }

  handleClick(ev) {
    if (this.disabled) return;

    this.checked = ev.target.checked;
    this.emitToggleClick();
  }

  render() {
    return [
      <input
        id={this.htmlid}
        type="checkbox"
        checked={this.checked}
        disabled={this.disabled}
        onChange={this.handleClick.bind(this)}
      />,
      <label
        htmlFor={this.htmlid}
        class={{
          [this.labelPosition]: true,
          disabled: this.disabled,
        }}
      >
        <span>
          <slot />
        </span>
        <span
          class={{
            container: true,
            disabled: this.disabled,
            checked: this.checked,
          }}
        >
          <span class="circle">
            {this.checked && (
              <z-icon width={12} height={12} name="checkmark"></z-icon>
            )}
          </span>
        </span>
      </label>,
    ];
  }
}
