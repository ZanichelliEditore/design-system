import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-link",
  styleUrl: "styles.css",
  shadow: true
})
export class ZLink {
  @Prop() url: string;
  @Prop() label?: string;
  @Prop() icon?: string;
  @Prop() target?: string = '_self';
  @Prop() isdisabled?: boolean = false;
  @Prop() iswhite?: boolean = false;

  render() {
    const icon = this.icon ? '../../../assets/images/png/' + this.icon : '';

    return (
      <a href={this.url}
        class={`${this.isdisabled && "disabled"} ${this.iswhite && "white"}`}
        target={this.target}
      >
        {this.icon && <img src={icon} />}
        {this.label}
      </a>
    );
  }
}
