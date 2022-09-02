import { EventEmitter } from "../../../stencil-public-runtime";
import { ZDatePickerMode, ZDatePickerPosition } from "../../../beans";
export declare class ZDatePicker {
  element: HTMLElement;
  /** unique id */
  datePickerId: string;
  /** z-input aria label */
  ariaLabel?: string;
  /** z-input label */
  label?: string;
  /** [Optional] datepicker mode: date, datetime, only months */
  mode: ZDatePickerMode;
  flatpickrPosition: ZDatePickerPosition;
  inputError: boolean;
  private picker;
  private hasChildren;
  watchMode(): void;
  /** emitted when date changes, returns selected date */
  dateSelect: EventEmitter;
  emitDateSelect(date: any): void;
  handleKeyDown(ev: KeyboardEvent): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  setupPickers(): void;
  formatDate(date: any): string;
  onStopTyping(value: any): void;
  renderSlottedContent(): any;
  renderZInput(): any;
  render(): any;
}
