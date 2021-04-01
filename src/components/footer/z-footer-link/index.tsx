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
  @Prop() link: string;

  render() {
    return (
      <a href={this.link} target="_blank">
        {this.label}
      </a>
    );
  }
}
