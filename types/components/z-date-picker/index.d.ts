import { EventEmitter } from "../../stencil-public-runtime";
import { ZDatePickerMode, ZDatePickerPosition } from "../../beans";
export declare class ZDatePicker {
  element: HTMLElement;
  /** unique id */
  datepickerid: string;
  /** z-input aria label */
  ariaLabel?: string;
  /** z-input label */
  label?: string;
  /** [Optional] datepicker mode: date, datetime, only months */
  mode: ZDatePickerMode;
  flatpickrPosition: ZDatePickerPosition;
  private flatpickrInstance;
  private hasChildren;
  /** emitted when date changes, returns selected date */
  dateSelect: EventEmitter;
  emitDateSelect(date: any): void;
  handleKeyDown(ev: KeyboardEvent): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  setAriaOptions(): void;
  setMonthsAriaOptions(calendar: any, prevMonthArrow: any, nextMonthArrow: any): void;
  setDateAriaOptions(calendar: any, prevMonthArrow: any, nextMonthArrow: any): void;
  setDateTimeAriaOptions(calendar: any, prevMonthArrow: any, nextMonthArrow: any): void;
  setFlatpickrPosition(): void;
  renderSlottedContent(): any;
  renderZInput(): any;
  render(): any;
}
