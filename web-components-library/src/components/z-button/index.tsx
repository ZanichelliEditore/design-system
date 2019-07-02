import { Component, Prop, h } from "@stencil/core";

const primaryIconUrl =
  "../../../assets/images/png/zanichelli-external-link-2@8x.png";
const secondaryIconUrl =
  "../../../assets/images/png/zanichelli-external-link@8x.png";

@Component({
  tag: "z-button",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButton {
  @Prop() label: string;
  @Prop() hasIcon: boolean;
  @Prop() isPrimary: boolean = true;
  @Prop() isDisabled: boolean = false;
  @Prop() action?: Function;

  render() {
    const isPrimary = this.isPrimary;
    const isDisabled = this.isDisabled;

    var className = isPrimary ? "primary" : "secondary";
    className += isDisabled ? " disabled" : "";

    return (
      <button class={className}>
        {this.hasIcon && (
          <span>
            <img src={isPrimary ? primaryIconUrl : secondaryIconUrl} />
          </span>
        )}
        {this.label}
      </button>
    );
  }
}
