import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-button",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButton {
  @Prop() label: string;
  @Prop() type: string;
  @Prop() disabled?: boolean = false;
  @Prop() small?: boolean = false;
  @Prop() icon?: string;

  render() {
    let btnClass = this.type;
    if(this.small) {
      btnClass += ' small';
    }

    const btnIcon = this.icon ? '../../../assets/images/png/' + this.icon : '';

    return (
      <button class={btnClass} disabled={this.disabled}>
        {this.icon && <img src={btnIcon} />}
        {this.label}
      </button>
    );
  }
}
