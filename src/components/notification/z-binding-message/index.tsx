import { Component, Prop, h } from "@stencil/core";

/**
 * @slot description - set the description message
 */

/**
 * @slot cta - use this slot for call to action elements
 */
@Component({
  tag: "z-binding-message",
  styleUrl: "styles.css",
  shadow: true
})
export class ZBindingMessage {
  /** message title  */
  @Prop() messagetitle: string;

  render() {
    return (
      <div>
        <div>
          <h2>{this.messagetitle}</h2>
          <div>
            <slot name="description"></slot>
          </div>
        </div>
        <slot name="cta"></slot>
      </div>
    );
  }
}
