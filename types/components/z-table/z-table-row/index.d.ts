import { EventEmitter } from "../../../stencil-public-runtime";
import { ZTableRowExpandedType } from "../../../beans";
export declare class ZTableRow {
  /** Table row expanded type */
  expandedType: ZTableRowExpandedType;
  expanded: boolean;
  /** Row has been expanded */
  expand: EventEmitter;
  private emitOnExpand;
  private handleExpand;
  private renderExpandButton;
  render(): HTMLZTableRowElement;
}
