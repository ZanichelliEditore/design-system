import { ZRangePicker } from ".";
import { ZRangePickerMode } from "../../../beans";
import "../index.stories.css";
import "./index";
/**
 * In order to avoid conflits between datepickers, pass a unique id as `rangePickerId` prop.
 * This component has a callback function `dateSelect` that returns the selected date.
 */
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        mode: {
            options: ZRangePickerMode[];
            control: {
                type: "inline-radio";
            };
        };
    };
};
export default StoryMeta;
export declare const Date: {
    args: {
        mode: ZRangePickerMode.DATE;
        rangePickerId: string;
        firstLabel: string;
        firstAriaLabel: string;
        secondLabel: string;
        secondAriaLabel: string;
        firstPickerPlaceholder: string;
        lastPickerPlaceholder: string;
        firstPickerReadOnly: false;
        lastPickerReadOnly: false;
    };
    render: (args: ZRangePicker) => import("lit-html").TemplateResult<1>;
};
export declare const DateAndTime: {
    args: {
        mode: ZRangePickerMode.DATE_TIME;
        rangePickerId: string;
        firstLabel: string;
        firstAriaLabel: string;
        secondLabel: string;
        secondAriaLabel: string;
        firstPickerPlaceholder: string;
        lastPickerPlaceholder: string;
        firstPickerReadOnly: false;
        lastPickerReadOnly: false;
    };
    render: (args: ZRangePicker) => import("lit-html").TemplateResult<1>;
};
