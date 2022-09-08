import {Component, Prop, h, Host} from "@stencil/core";

/**
 * Ztag  component.
 * @slot - The text of the z-tag.
 * @cssprop --z-tag-text-color - text and icon color using tokens.
 * @cssprop --z-tag-bg - background color of the z-tag.
 */
@Component({
  tag: "z-tag",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZTag {
  /** [optional] Tag icon */
  @Prop() icon?: string;
  /** [optional] Hide the text and show it on hover*/
  @Prop() expandable?: boolean;

  render() {
    return (
      <Host
        class={{
          "body-5-sb": true,
          "expandable": this.expandable && !!this.icon,
        }}
      >
        {this.icon && <z-icon name={this.icon} />}
        <div>
          <slot />
        </div>
      </Host>
    );
  }
}
