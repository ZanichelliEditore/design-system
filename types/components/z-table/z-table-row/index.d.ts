import { EventEmitter } from "../../../stencil-public-runtime";
import { ZTableRowExpandedType } from "../../../beans";
export declare class ZTableRow {
  expandedType: ZTableRowExpandedType;
  expanded: boolean;
  expand: EventEmitter;
  emitOnExpand(): void;
  handleExpand(): void;
  renderExpandButton(): any;
  render(): any;
}
