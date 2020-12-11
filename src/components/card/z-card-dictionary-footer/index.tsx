import { Component, h } from "@stencil/core";

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
  render() {
    return (
      <div>
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
