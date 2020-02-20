import { Component, Prop, h, Method } from "@stencil/core";
import { InputTypeBean, InputTypeEnum } from "../../beans";

@Component({
  tag: "z-input",
  styleUrls: ["styles-checkbox.css"],
  shadow: true
})
export class ZInput {
  /** the id of the input element */
  @Prop() htmlid: string;
  /** input types */
  @Prop() type: InputTypeBean;
  /** the input name */
  @Prop() name?: string;
  /** the input label */
  @Prop() label?: string;
  /** the input value */
  @Prop() value?: string;
  /** the input is disabled */
  @Prop() disabled?: boolean = false;
  /** the input is readonly */
  @Prop() readonly?: boolean = false;
  /** checked: available for checkbox, radio */
  @Prop({ mutable: true }) checked?: boolean = false;
  /** the input label position: available for checkbox, radio */
  @Prop() labelafter?: boolean = true;

  @Method()
  async isChecked() {
    switch (this.type) {
      case InputTypeEnum.checkbox:
        return this.checked;
      default:
        return false;
    }
  }

  renderCheckbox() {
    return (
      <div class="checkboxWrapper">
        <input
          id={this.htmlid}
          type="checkbox"
          name={this.name}
          checked={this.checked}
          value={this.value}
          disabled={this.disabled}
          readonly={this.readonly}
          onChange={() => {
            if (!this.disabled && !this.readonly) this.checked = !this.checked;
          }}
        />

        <label
          htmlFor={this.htmlid}
          class={`checkboxLabel ${this.labelafter ? "after" : "before"}`}
        >
          <z-icon
            name={this.checked ? "checkbox-selected" : "checkbox-unchecked"}
          />
          {this.label && <span>{this.label}</span>}
        </label>
      </div>
    );
  }

  render() {
    switch (this.type) {
      case InputTypeEnum.checkbox:
        return this.renderCheckbox();
      default:
        return;
    }
  }
}
