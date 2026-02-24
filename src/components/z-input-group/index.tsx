import {Component, Prop, h} from "@stencil/core";
import {Host} from "@stencil/core/internal";

/**
 * @slot - Content containing form inputs (typically radio buttons or checkboxes)
 */
@Component({
  tag: "z-input-group",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZInputGroup {
  /**
   * The legend text that describes the group of inputs.
   * Required for accessibility to provide context to screen reader users.
   */
  @Prop()
  legend!: string;

  /**
   * Whether to visually hide the legend while keeping it accessible to screen readers.
   * Useful when the legend text is redundant with a visible heading.
   */
  @Prop()
  hideLegend?: boolean = false;

  render() {
    return (
      <Host>
        <fieldset>
          <legend class={{hidden: this.hideLegend}}>
            {this.legend}
          </legend>
          <slot />
        </fieldset>
      </Host>
    );
  }
}
