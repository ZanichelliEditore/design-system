import { Component, Prop, Host, h } from "@stencil/core";

@Component({
  tag: "z-link",
  styleUrl: "styles.css",
  shadow: true
})
export class ZLink {
  @Prop() url: string;
  @Prop() label?: string;
  @Prop() type?: string = "internal";
  @Prop() hasicon?: boolean;
  @Prop() icontype?: string;

  render() {
    return (
      <Host>
        <a
          href={this.url}
          class={{
            internal: this.type === "internal"
          }}
        >
          {this.hasicon && <icon class={this.icontype} />}
          {this.label}
        </a>
      </Host>
    );
  }
}
