import { EventEmitter } from "../../../stencil-public-runtime";
/**
 * @slot modalContent - set the content of the modal
 * @slot modalCloseButton - accept custom close button
 */
export declare class ZModal {
  /** unique id */
  modalid: string;
  /** title text (optional) */
  modaltitle?: string;
  /** subtitle (optional) */
  modalsubtitle?: string;
  /** aria-label for close button (optional) */
  closeButtonLabel?: string;
  /** emitted on close button click, returns modalid */
  modalClose: EventEmitter;
  private emitModalClose;
  /** emitted on modal header click, returns modalid */
  modalHeaderActive: EventEmitter;
  private emitModalHeaderActive;
  /** emitted on background click, returns modalid */
  modalBackgroundClick: EventEmitter;
  private emitBackgroundClick;
  render(): HTMLZModalElement;
}
