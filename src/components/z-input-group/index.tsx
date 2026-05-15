import {Component, ComponentInterface, Host, Prop, h} from "@stencil/core";

/**
 * @slot - Content containing form inputs (typically radio buttons or checkboxes)
 */
@Component({
  tag: "z-input-group",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZInputGroup implements ComponentInterface {
  /** The legend text that describes the group of inputs. Required for accessibility. */
  @Prop()
  legend!: string;

  /** [optional] Whether to visually hide the legend while keeping it accessible to screen readers. */
  @Prop()
  hideLegend?: boolean = false;

  render(): HTMLZInputGroupElement {
    return (
      <Host>
        <fieldset>
          <legend class={{hidden: this.hideLegend}}>{this.legend}</legend>
          <slot />
        </fieldset>
      </Host>
    );
  }
}
