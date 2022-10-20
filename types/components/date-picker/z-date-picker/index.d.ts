import { EventEmitter } from "../../../stencil-public-runtime";
import { ZDatePickerMode, ZDatePickerPosition } from "../../../beans";
export declare class ZDatePicker {
  element: HTMLZDatePickerElement;
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
  /** emitted when date changes, returns selected date */
  dateSelect: EventEmitter;
  private emitDateSelect;
  handleKeyDown(ev: KeyboardEvent): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  setupPickers(): void;
  private formatDate;
  private onStopTyping;
  private renderSlottedContent;
  private renderZInput;
  render(): HTMLDivElement;
}
