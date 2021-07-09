import { EventEmitter } from "../../../stencil-public-runtime";
/**
 * @slot modalContent - set the content of the modal
 */
export declare class ZModal {
  /** unique id */
  modalid: string;
  /** title text (optional) */
  modaltitle?: string;
  /** subtitle (optional) */
  modalsubtitle?: string;
  /** emitted on close button click, returns modalid */
  modalClose: EventEmitter;
  emitModalClose(): void;
  /** emitted on modal header click, returns modalid */
  modalHeaderActive: EventEmitter;
  emitModalHeaderActive(): void;
  /** emitted on background click, returns modalid */
  modalBackgroundClick: EventEmitter;
  emitBackgroundClick(): void;
  render(): any[];
}
