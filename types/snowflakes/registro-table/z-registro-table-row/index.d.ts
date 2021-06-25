import { EventEmitter } from "../../../stencil-public-runtime";
export declare class ZRegistroTableRow {
  expandable?: boolean;
  expanded: boolean;
  expand: EventEmitter;
  emitOnExpand(): void;
  handleExpand(): void;
  _renderExpandButton(): any;
  render(): any;
}
