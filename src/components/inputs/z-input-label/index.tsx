import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-input-label",
  styleUrl: "styles.css",
  shadow: true
})
export class ZInputLabel {
  /** the label value */
  @Prop() value: string;
  /** the label is disabled */
  @Prop() disabled?: boolean = false;

  render() {
    return <label class={{ disabled: this.disabled }}>{this.value}</label>;
  }
}
