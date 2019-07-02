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
  @Prop() type?: string
  @Prop() isdisabled?: boolean = false;

  render() {
    let linkClass = '';
    if(this.type) {
      linkClass += this.type;
    }
    if(this.isdisabled) {
      linkClass += ' disabled';
    }

    const icon = this.icon ? '../../../assets/images/png/' + this.icon : '';

    return (
      <a href={this.url} class={linkClass}>
        {this.icon && <img src={icon} />}
        {this.label}
      </a>
    );
  }
}
