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
  /** checked: available for checkbox */
  @Prop({ mutable: true }) checked?: boolean = false;
  /** the input label */
  @Prop() label?: string;
  /** the input label position: available for checkbox */
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
          checked={this.checked}
          onChange={() => (this.checked = !this.checked)}
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
