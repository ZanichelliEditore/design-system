import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-card-icon",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardIcon {
  @Prop() icon: string;
  @Prop() isdisabled: boolean = false;

  render() {
    return (
      <button disabled={this.isdisabled}>
        <span>
          <z-icon name={this.icon} width={16} height={16} />
        </span>
      </button>
    );
  }
}
