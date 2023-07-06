import {Component, h} from "@stencil/core";

/**
 * @deprecated
 * @slot - table sticky footer content
 */
@Component({
  tag: "z-table-sticky-footer",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZTableStickyFooter {
  render(): HTMLSlotElement {
    return <slot />;
  }
}
