import {Component, Prop, h} from "@stencil/core";

/**
 * @deprecated
 */
@Component({
  tag: "z-table-expanded-row",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTableExpandedRow {
  /** Number table column plus 1 for the expand button */
  @Prop()
  colSpan: number;

  render(): HTMLTableCellElement {
    return (
      <td colSpan={this.colSpan}>
        <div class="content-container">
          <slot />
        </div>
      </td>
    );
  }
}
