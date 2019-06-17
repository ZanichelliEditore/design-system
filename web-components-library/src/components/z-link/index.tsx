import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-link",
  styleUrls: ["../../global-styles.css", "z-link.css"],
  shadow: true
})
export class ZLink {
  @Prop() url: string;
  @Prop() label?: string;
  @Prop() hasicon?: boolean;
  @Prop() icontype?: string;

  render() {
    return (
      <div>
        <a href={this.url}>
          {this.hasicon && <icon class={this.icontype} />}
          {this.label}
        </a>
      </div>
    );
  }
}
