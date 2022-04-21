import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-datepicker",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZDatepicker {
  @Prop() myProp: string;

  render() {
    return (
      <div>
        This is your z-datepicker component This is your default prop:{" "}
        {this.myProp}
      </div>
    );
  }
}
