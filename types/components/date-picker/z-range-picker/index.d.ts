import { EventEmitter } from "../../../stencil-public-runtime";
import { ZRangePickerMode, ZDatePickerPosition } from "../../../beans";
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
  /** [Optional] datepicker mode: date or datetime */
  mode: ZRangePickerMode;
  flatpickrPosition: ZDatePickerPosition;
  activeInput: string;
  firstInputError: boolean;
  lastInputError: boolean;
  private firstPicker;
  private lastPicker;
  /** emitted when date changes, returns an array with the two selected dates */
  dateSelect: EventEmitter;
  watchMode(): void;
  handleClick(): void;
  handleKeyDown(ev: KeyboardEvent): void;
  componentDidLoad(): void;
  setupPickers(): void;
  onDateSelect(): void;
  disableDates(date: any, index: any): void;
  formatDate(date: any): string;
  printDate(firstDate: any, lastDate: any): void;
  getTime(): string;
  getDateWithoutTime(date: any): Date;
  /** Replace month word to month number */
  replaceMonths(date: any, time: any): Date;
  /** Get the current focused input, first or last */
  getFocusedInput(): void;
  /** Set style of the days between the two selected dates */
  setRangeStyle(index: any): void;
  onStopTyping(value: any): void;
  render(): any;
}
