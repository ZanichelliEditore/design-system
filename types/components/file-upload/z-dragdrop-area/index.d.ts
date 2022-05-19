import { EventEmitter } from "../../../stencil-public-runtime";
export declare class ZDragdropArea {
  /** Emitted when user drop one or more files */
  fileDropped: EventEmitter;
  fileDroppedHandler(files: FileList): void;
  private dragDropContainer;
  renderOnDragOverMessage(): any;
  render(): any;
}
