import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-topbar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTopbar {
  @Prop() hashtag: string;

  render() {
    return (
      <div>
        <div class="left">
          <slot name="logo"></slot>
          <span id="hashtag">{this.hashtag}</span>
        </div>
        <div class="right">
          <slot name="actions"></slot>
          <slot name="login"></slot>
          <slot name="app-menu"></slot>
        </div>
      </div>
    );
  }
}
