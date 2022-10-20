import { ZDatePickerMode, ZDatePickerPosition, ZRangePickerMode } from "../../beans";
export declare function validateDate(dateStr: string, hasTime?: boolean): boolean;
export declare function setFlatpickrPosition(element: HTMLElement, mode: ZDatePickerMode | ZRangePickerMode): ZDatePickerPosition;
export declare function setAriaOptions(element: HTMLElement, mode: ZDatePickerMode | ZRangePickerMode): void;
