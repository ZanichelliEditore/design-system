import { Component, Prop, h, Element } from "@stencil/core";
import { ZChipType } from "../../../beans";
@Component({
  tag: "z-chip",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZChip {
  @Element() hostElement: HTMLElement;

  @Prop() regulartext?: string;
  @Prop() boldtext?: number;
  @Prop({ reflect: true }) type?: ZChipType = ZChipType.default;
  @Prop({ reflect: true }) disabled?: boolean = false;

  private renderLegacyChip() {
    return (
      <button class={this.type} disabled={this.disabled} tabindex="0">
        <span class="boldtext">{this.boldtext}</span> {this.regulartext}
      </button>
    );
  }

  render() {
    return this.boldtext != null || this.regulartext != null ? (
      this.renderLegacyChip()
    ) : (
      <button class={this.type} disabled={this.disabled} tabindex="0">
        <slot />
      </button>
    );
  }
}
