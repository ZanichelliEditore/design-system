import { EventEmitter } from "../../stencil-public-runtime";
import { ZDatePickerMode, ZDatePickerPosition } from "../../beans";
export declare class ZDatePicker {
  element: HTMLElement;
  /** unique id */
  datepickerid: string;
  /** [Optional] datepicker mode: date, datetime, only months */
  mode: ZDatePickerMode;
  flatpickrPosition: ZDatePickerPosition;
  private hasChildren;
  /** emitted when date changes, returns selected date */
  dateSelect: EventEmitter;
  emitDateSelect(date: any): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  setFlatpickrPosition(): void;
  renderSlottedContent(): any;
  renderZInput(): any;
  render(): any;
}
