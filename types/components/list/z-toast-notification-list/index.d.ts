import { ToastNotificationPositionsTypes } from "../../../beans";
export declare class ZToastNotificationList {
  hostElement: HTMLElement;
  /**Set the position of toast notification list - top-left, top-centre, top-right, bottom-left, bottom-centre, bottom-right */
  position: ToastNotificationPositionsTypes;
  /**Set the entry position of new notification in the list */
  newestontop?: boolean;
  private notificationArray;
  watchPropNewestontop(newValue: boolean): void;
  componentWillLoad(): void;
  handleNewestOnTop(): void;
  slotChangeHandler: () => void;
  render(): any;
}
