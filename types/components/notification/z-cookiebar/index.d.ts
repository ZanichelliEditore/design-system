import { EventEmitter } from "../../../stencil-public-runtime";
export declare class ZCookiebar {
  /** cookie policy link url  */
  cookiepolicyurl: string;
  /** hide cookie bar (optional)  */
  hide?: boolean;
  /** callback to handle ok button action (optional) */
  callback?: () => any;
  /** emitted on ACCETTA button click, returns event */
  accept: EventEmitter;
  emitAccept(ev: MouseEvent | KeyboardEvent): void;
  handleOkButtonClick(ev: MouseEvent): void;
  handleOkButtonKeyUp(ev: KeyboardEvent): void;
  renderContentSlot(): any;
  render(): any;
}
