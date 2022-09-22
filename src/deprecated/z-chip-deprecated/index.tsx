import {Component, Prop, h} from "@stencil/core";

@Component({
  tag: "z-chip-deprecated",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZChipDeprecated {
  /** Text with regular font weight */
  @Prop()
  regulartext?: string;
  /** Text with bold font weight */
  @Prop()
  boldtext?: number;

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
