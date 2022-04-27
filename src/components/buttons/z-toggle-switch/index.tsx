import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";
import { randomId } from "../../../utils/utils";

@Component({
  tag: "z-toggle-switch",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZToggleSwitch {
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ reflect: true }) reverselabel?: boolean = false;
  @Prop({ mutable: true }) checked?: boolean = false;
  @Prop() htmlid: string = `id-${randomId()}`;

  @Event() toggleClick: EventEmitter;
  emitToggleClick(checked: boolean) {
    this.toggleClick.emit({
      id: this.htmlid,
      checked: checked,
    });
  }

  handleClick(ev) {
    if (this.disabled) return;

    this.checked = ev.target.checked;
    this.emitToggleClick(this.checked);
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
          left: !this.reverselabel,
          right: this.reverselabel,
        }}
      >
        <span
          class={{
            left: !this.reverselabel,
            right: this.reverselabel,
          }}
        >
          <slot />
        </span>
        <div
          class={`container ${this.disabled && "disabled"} ${
            this.checked && "active"
          }`}
        >
          <div
            class={`circle ${this.disabled && "disabled"} ${
              this.checked && "checked"
            }`}
          >
            {this.checked && (
              <z-icon width={12} height={12} name="checkmark"></z-icon>
            )}
          </div>
        </div>
      </label>,
    ];
  }
}
