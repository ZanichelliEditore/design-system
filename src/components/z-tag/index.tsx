import {Component, ComponentInterface, Element, Host, Prop, h} from "@stencil/core";

/**
 * Ztag component.
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
export class ZTag implements ComponentInterface {
  @Element() host: HTMLZTagElement;

  /** [optional] Tag icon */
  @Prop()
  icon?: string;

  /** [optional] Hide the text and show it on hover*/
  @Prop()
  expandable?: boolean;

  render(): HTMLZTagElement {
    return (
      <Host
        class={{
          "expandable": this.expandable && !!this.icon,
          "has-text": !!this.host.textContent.trim(),
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
