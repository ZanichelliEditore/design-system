import { EventEmitter } from "../../../../stencil-public-runtime";
import { AlertTypesEnum } from "../../../../beans";
export declare class ZMyzCardAlert {
  /** icon name */
  iconname: string;
  /** content text */
  contenttext: string;
  /** action button text */
  actiontext?: string;
  /** alert variant type */
  type: string;
  /** undo action click/keyboard event, returns actionType */
  undoAction: EventEmitter;
  emitUndoAction(): void;
  handleSpaceKeyPress(e: KeyboardEvent): void;
  handleActionButtonClick(e: MouseEvent): void;
  retrieveClass(): string;
  getAlertType(): AlertTypesEnum.success | AlertTypesEnum.warning;
  render(): any;
}