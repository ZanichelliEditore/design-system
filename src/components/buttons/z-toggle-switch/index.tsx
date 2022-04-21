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
      <label
        htmlFor={this.htmlid}
        class={{
          left: !this.labelposition,
          right: this.labelposition,
        }}
      >
        <slot />
      </label>,
      <div
        class={`container ${this.disabled && "disabled"} ${
          this.checked && "active"
        }`}
      >
        <input
          id={this.htmlid}
          type="checkbox"
          disabled={this.disabled}
          onChange={this.handleClick.bind(this)}
        />
      </div>,
    ];
  }
}
