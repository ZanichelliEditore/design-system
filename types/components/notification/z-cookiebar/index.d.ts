import { EventEmitter } from "../../../stencil-public-runtime";
export declare class ZCookiebar {
  /** cookie policy link url  */
  cookiepolicyurl: string;
  /** hide cookie bar (optional)  */
  hide?: boolean;
  /** callback to handle ok button action (optional) */
  callback?: () => unknown;
  /** emitted on ACCETTA button click, returns event */
  accept: EventEmitter;
  private emitAccept;
  private handleOkButtonClick;
  private handleOkButtonKeyUp;
  private renderContentSlot;
  render(): HTMLZCandybarElement;
}
