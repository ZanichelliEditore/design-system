import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-button",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButton {
  @Prop() buttonid?: string;
  @Prop() label: string;
  @Prop() type: string;
  @Prop() isdisabled?: boolean = false;
  @Prop() issmall?: boolean = false;
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
