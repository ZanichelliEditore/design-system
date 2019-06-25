import { Component, h } from "@stencil/core";

@Component({
  tag: "z-card-body",
  styleUrls: ["../../global-styles.css", "z-card-body.css"],
  shadow: true
})
export class ZCardBody {
  render() {
    return (
      <div>
        <slot name="cover" />
      </div>
    );
  }
}
