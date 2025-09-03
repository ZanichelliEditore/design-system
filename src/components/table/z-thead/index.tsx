import {Component, Element, Host, Prop, h} from "@stencil/core";

/**
 * ZThead component.
 * @slot - ZThead content (`z-tr`).
 */
@Component({
  tag: "z-thead",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZThead {
  @Element() host: HTMLZTheadElement;

  /**
   * If true, the header will be stuck to the top of the table.
   */
  @Prop({reflect: true})
  sticky = false;

  /**
   * The element is focusable
   */
  @Prop()
  isFocusable = true;

  render(): HTMLZTheadElement {
    return (
      <Host
        role="rowgroup"
        tabIndex={this.host.getAttribute("focusable") === "true" ? 0 : -1}
      >
        <slot></slot>
      </Host>
    );
  }
}
