import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-button",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButton {
  /** id, should be unique */
  @Prop() buttonid?: string;
  /** label content */
  @Prop() label: string;
  /** graphic variant */
  @Prop() type: string;
  /** disable button */
  @Prop() isdisabled?: boolean = false;
  /** reduce button size (optional) */
  @Prop() issmall?: boolean = false;
  /** add an icon to button (optional) */
  @Prop() icon?: string;

  render() {
    let btnClass = this.type;
    if (this.issmall) {
      btnClass += ' small';
    }

    return (
      <button id={this.buttonid} class={btnClass} disabled={this.isdisabled}>
        {this.icon && <z-icon name={this.icon} width={16} height={16} />}
        {this.label}
      </button>
    );
  }
}
