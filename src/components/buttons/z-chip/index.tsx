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
  @Prop({ reflect: true }) type?: ZChipType;
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ reflect: true }) filter?: boolean = false;

  private renderLegacyChip() {
    return (
      <div>
        <span class="boldtext">{this.boldtext}</span> {this.regulartext}
      </div>
    );
  }

  private renderFilterChip() {
    if (this.filter) {
      return (
        <button
          class={this.type ? this.type : ZChipType.default}
          disabled={this.disabled}
          tabindex="0"
        >
          <slot />
        </button>
      );
    }

    return (
      <div class={this.type ? this.type : ""}>
        <slot />
      </div>
    );
  }

  render() {
    return this.boldtext != null || this.regulartext != null
      ? this.renderLegacyChip()
      : this.renderFilterChip();
  }
}
