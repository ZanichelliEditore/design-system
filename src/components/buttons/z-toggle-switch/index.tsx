import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";
import { randomId } from "../../../utils/utils";

@Component({
  tag: "z-toggle-switch",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToggleSwitch {
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ reflect: true }) labelposition?: boolean = false;
  @Prop({ mutable: true }) checked?: boolean = false;
  @Prop() htmlid: string = `id-${randomId()}`;

  @Event() toggleClick: EventEmitter;
  emitToggleClick(checked: boolean) {
    this.toggleClick.emit({
      checked: checked,
    });
  }

  handleClick(ev) {
    this.checked = ev.target.checked;
    this.emitToggleClick(this.checked);
  }

  render() {
    return [
      <label htmlFor={this.htmlid}>
        <z-body
          level={3}
          class={{
            left: !this.labelposition,
            right: this.labelposition,
          }}
        >
          <slot />
        </z-body>
        <div
          tabIndex={0}
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

      <input
        id={this.htmlid}
        type="checkbox"
        checked={this.checked}
        disabled={this.disabled}
        onChange={this.handleClick.bind(this)}
      />,
    ];
  }
}
