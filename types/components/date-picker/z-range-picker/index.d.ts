import { EventEmitter } from "../../../stencil-public-runtime";
import { ZDatePickerMode, ZDatePickerPosition } from "../../../beans";
export declare class ZRangePicker {
  element: HTMLElement;
  /** unique id */
  rangePickerId: string;
  /** first z-input aria label */
  firstAriaLabel?: string;
  /** first z-input label */
  firstLabel?: string;
  /** second z-input aria label */
  secondAriaLabel?: string;
  /** second z-input label */
  secondLabel?: string;
  /** [Optional] datepicker mode: date, datetime, only months */
  mode: ZDatePickerMode;
  flatpickrPosition: ZDatePickerPosition;
  activeInput: string;
  private flatpickrInstance;
  private flatpickrInstance2;
  /** emitted when date changes, returns an array with the two selected dates */
  dateSelect: EventEmitter;
  handleClick(): void;
  handleKeyDown(ev: KeyboardEvent): void;
  /** Set background color before or after first selected date, before selecting the second one */
  onMouseOver(e: CustomEvent): void;
  componentDidLoad(): void;
  onDateSelect(selectedDates: any, instance: any): void;
  getDate(date: any): string;
  printDate(firstDate: any, lastDate: any): void;
  /** Replace month word to month number */
  parseDate(date: any): Date;
  /** Get the current focused input, first or last */
  getFocusedInput(): void;
  /** Set current month after flatpickr opened */
  getCurrentMonth(): void;
  /** Set style of the days between the two selected dates */
  setRangeStyle(): void;
  /** Set style of the days between first selected date and hovered date */
  setRangeHoverStyle(e: any, flatpickr: any, calendar: any): void;
  onStopTyping(value: any): void;
  render(): any;
}
