import {Component, h} from "@stencil/core";

/**
 * @slot top - footer top content
 * @slot bottom - footer bottom content
 */
@Component({
  tag: "z-myz-card-footer-sections",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzCardFooterSections {
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
