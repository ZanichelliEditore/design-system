import { EventEmitter } from "../../../stencil-public-runtime";
import { ZDatePickerPosition, ZRangePickerMode } from "../../../beans";
export declare class ZRangePicker {
    element: HTMLZRangePickerElement;
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
    /** readonly mode */
    firstPickerReadOnly: boolean;
    /** readonly mode */
    lastPickerReadOnly: boolean;
    /** readonly mode */
    firstPickerPlaceholder: string;
    /** readonly mode */
    lastPickerPlaceholder: string;
    flatpickrPosition: ZDatePickerPosition;
    activeInput: string;
    firstInputError: boolean;
    lastInputError: boolean;
    private firstPicker;
    private lastPicker;
    /** emitted when date changes, returns an array with the two selected dates */
    dateSelect: EventEmitter;
    handleClick(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    componentDidLoad(): void;
    setupFirstPickersReadOnly(): void;
    setupLastPickersReadOnly(): void;
    setupPickers(): void;
    private onDateSelect;
    private disableDates;
    private formatDate;
    private printDate;
    private getDateWithoutTime;
    /** Replace month word to month number */
    private replaceMonths;
    /** Get the current focused input, first or last */
    private getFocusedInput;
    /** Set style of the days between the two selected dates */
    private setRangeStyle;
    private onStopTyping;
    render(): HTMLDivElement;
}
