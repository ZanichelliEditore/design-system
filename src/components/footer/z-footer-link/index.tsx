import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-footer-link",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZFooterLink {
  /** label */
  @Prop() label: string;
  /** link */
  @Prop() href: string;

  render() {
    return (
      <a href={this.href} target="_blank">
        {this.label}
      </a>
    );
  }
}
