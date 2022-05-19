import { EventEmitter } from '../../../stencil-public-runtime';
import { NotificationType } from '../../../beans';
/**
 * @slot - the content of the notification
 */
export declare class ZNotification {
  /** icon on the left of the content  */
  contenticonname?: string;
  /** action button text */
  actiontext?: string;
  /** alert variant type */
  type: NotificationType;
  /** enable close icon */
  showclose?: boolean;
  /** enable shadow */
  showshadow?: boolean;
  /** notification action event */
  notificationAction: EventEmitter;
  handleActionButtonClick(e: MouseEvent): void;
  /** notification close event */
  notificationClose: EventEmitter;
  handleCloseButtonClick(e: MouseEvent): void;
  render(): any;
}
