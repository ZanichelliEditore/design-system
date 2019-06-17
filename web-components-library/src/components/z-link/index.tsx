import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-link",
  styleUrls: ["../../global-styles.css", "z-link.css"],
  shadow: true
})
export class ZLink {
  @Prop() url: string;
  @Prop() label?: string;
  @Prop() hasIcon?: boolean;
  @Prop() iconType?: string;

  render() {
    return (
      <div>
        <a href={this.url}>
          <icon />
          {this.label}
        </a>
      </div>
    );
  }
}
