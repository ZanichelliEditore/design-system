import { Component, Prop, h, Method, Event, EventEmitter } from "@stencil/core";
import { InputTypeEnum } from "../../beans";

@Component({
  tag: "z-input",
  styleUrls: ["styles-checkbox.css"],
  shadow: true
})
export class ZInput {
  /** the id of the input element */
  @Prop() htmlid: string = this.randomId();
  /** input types */
  @Prop() type: HTMLInputElement["type"];
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

  randomId(): string {
    return Math.random()
      .toString(36)
      .replace("0.", "");
  }

  @Method()
  async isChecked() {
    switch (this.type) {
      case InputTypeEnum.checkbox:
        return this.checked;
      default:
        return false;
    }
  }

  @Event() inputCheck: EventEmitter;
  emitInputCheck(checked: boolean) {
    this.inputCheck.emit({ id: this.htmlid, checked: checked });
  }

  handleCheckboxChange() {
    this.checked = !this.checked;
    this.emitInputCheck(this.checked);
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
          onChange={() => this.handleCheckboxChange()}
        />

        <label
          htmlFor={this.htmlid}
          class={`checkboxLabel ${this.labelafter ? "after" : "before"}`}
        >
          <z-icon
            name={this.checked ? "checkbox-selected" : "checkbox-unchecked"}
            aria-hidden={true}
          />
          {this.label && <span innerHTML={this.label} />}
        </label>
      </div>
    );
  }

  render() {
    switch (this.type) {
      case InputTypeEnum.checkbox:
        return this.renderCheckbox();
      case InputTypeEnum.textarea:
        return (
          <z-input-text inputid={this.htmlid} type={InputTypeEnum.textarea} />
        );
      case InputTypeEnum.text:
      default:
        return <z-input-text inputid={this.htmlid} type={InputTypeEnum.text} />;
    }
  }
}
