import { Component, Prop, h } from "@stencil/core";

/**
 * @slot top - footer top content
 * @slot bottom - footer bottom content
 */
@Component({
  tag: "z-card-dictionary-footer",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardDictionaryFooter {
  /** faded status */
  @Prop() faded: boolean = false;

  render() {
    return (
      <div class={this.faded && "faded"}>
        <footer>
          <div class="top">
            <slot name="top" />
          </div>
          <div class="bottom">
            <slot name="bottom" />
          </div>
        </footer>
      </div>
    );
  }
}
