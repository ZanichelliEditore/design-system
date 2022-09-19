import {Component, Prop, h} from "@stencil/core";

@Component({
  tag: "z-chip-deprecated",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZChipDeprecated {
  @Prop() regulartext?: string;
  @Prop() boldtext?: number;

  private renderLegacyChip(): HTMLDivElement {
    return (
      <div>
        <span class="boldtext">{this.boldtext}</span> {this.regulartext}
      </div>
    );
  }

  render(): HTMLDivElement {
    return this.boldtext != null || this.regulartext != null ? (
      this.renderLegacyChip()
    ) : (
      <div>
        <slot />
      </div>
    );
  }
}
