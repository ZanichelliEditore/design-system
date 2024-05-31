import {Component, Event, EventEmitter, Host, Prop, h} from "@stencil/core";
import {LabelPosition} from "../../beans";
import {randomId} from "../../utils/utils";

@Component({
  tag: "z-toggle-switch",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZToggleSwitch {
  /** Disabled flag */
  @Prop({reflect: true})
  disabled?: boolean = false;

  /** Label position */
  @Prop({reflect: true})
  labelPosition? = LabelPosition.LEFT;

  /** Checked state */
  @Prop({mutable: true})
  checked?: boolean = false;

  /** HTML id attribute to set to the internal checkbox */
  @Prop()
  htmlid = `toggle-switch-id-${randomId()}`;

  /** Toggle click event */
  @Event()
  toggleClick: EventEmitter;

  private emitToggleClick(): void {
    this.toggleClick.emit({
      id: this.htmlid,
      checked: this.checked,
    });
  }

  private handleClick(ev): void {
    if (this.disabled) {
      return;
    }

    this.checked = ev.target.checked;
    this.emitToggleClick();
  }

  render(): HTMLZToggleSwitchElement {
    return (
      <Host>
        <input
          id={this.htmlid}
          type="checkbox"
          checked={this.checked}
          disabled={this.disabled}
          onChange={this.handleClick.bind(this)}
        />
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
                <z-icon
                  width={12}
                  height={12}
                  name="checkmark"
                ></z-icon>
              )}
            </span>
          </span>
        </label>
      </Host>
    );
  }
}
