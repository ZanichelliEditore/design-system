import { EventEmitter } from "../../../stencil-public-runtime";
import { ZRegistroTableRowExpandedType } from "../../../beans";
export declare class ZRegistroTableRow {
  expandedType: ZRegistroTableRowExpandedType;
  expanded: boolean;
  expand: EventEmitter;
  emitOnExpand(): void;
  handleExpand(): void;
  renderExpandButton(): any;
  render(): any;
}
