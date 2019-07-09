import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-button",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButton {
  @Prop() label: string;
  @Prop() type: string;
  @Prop() isdisabled?: boolean = false;
  @Prop() issmall?: boolean = false;
  @Prop() icon?: string;

  render() {
    let btnClass = this.type;
    if(this.issmall) {
      btnClass += ' small';
    }

    const btnIcon = this.icon ? '../../../assets/images/png/' + this.icon : '';

    return (
      <button class={btnClass} disabled={this.isdisabled}>
        {this.icon && <img src={btnIcon} />}
        {this.label}
      </button>
    );
  }
}
