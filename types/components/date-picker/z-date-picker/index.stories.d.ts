import { StoryObj } from "@storybook/web-components";
import { type ZDatePicker } from ".";
import { ZDatePickerMode } from "../../../beans";
import "../../z-button/index";
import "../index.stories.css";
import "./index";
/**
 * In order to avoid conflits between datepickers, pass a unique id as `datePickerId` prop.
 * This component emits an event called `dateSelect` with the value of the selected date.
 */
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        mode: {
            options: ZDatePickerMode[];
            control: {
                type: "inline-radio";
            };
        };
    };
    args: {
        ariaLabel: string;
        mode: ZDatePickerMode.DATE;
    };
    render: (args: ZDatePicker) => import("lit-html").TemplateResult<1>;
};
export default StoryMeta;
type Story = StoryObj<ZDatePicker>;
export declare const Date: Story;
export declare const DateAndTime: Story;
export declare const MonthsOnly: Story;
export declare const CustomToggle: Story;
