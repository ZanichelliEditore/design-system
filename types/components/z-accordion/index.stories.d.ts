import { Args } from "@storybook/web-components";
import { type TemplateResult } from "lit";
import { type ZAccordion } from ".";
import { AccordionVariant, ControlSize } from "../../beans";
import { CSSVarsArguments } from "../../utils/storybook-utils";
import "../z-tag/index";
import "./index";
declare const cssPropsArgs: {
    readonly "--z-accordion-bg": Args;
    readonly "--z-accordion-label-color": Args;
    readonly "--z-accordion-disabled-label-color": {
        readonly if: {
            readonly arg: "isDisabled";
            readonly truthy: true;
        };
    };
    readonly "--z-accordion-content-bg": Args;
    readonly "--z-accordion-content-fg": Args;
    readonly "--z-accordion-hover-color": Args;
    readonly "--z-accordion-highlight-color": {
        readonly if: {
            readonly arg: "highlight";
            readonly truthy: true;
        };
    };
};
type ZAccordionStoriesArgs = ZAccordion & CSSVarsArguments<keyof typeof cssPropsArgs | `z-accordion-${"left" | "right"}-padding` | "z-accordion-label-font-weight" | `z-accordion-highlight-color${number | undefined}`>;
/**
 * To add the highlight band on the left, set the `highlight` property to `true` then set the `--z-accordion-highlight-color` CSS variable to the desired color.
 */
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        icon: {
            options: string[];
            control: {
                type: "select";
                labels: {
                    null: string;
                };
            };
        };
        shadow: {
            if: {
                arg: string;
                eq: AccordionVariant;
            };
        };
        size: {
            options: ControlSize[];
            control: {
                type: "inline-radio";
            };
        };
        variant: {
            options: AccordionVariant[];
            control: {
                type: "inline-radio";
            };
        };
        "--z-accordion-bg": Args;
        "--z-accordion-label-color": Args;
        "--z-accordion-disabled-label-color": {
            readonly if: {
                readonly arg: "isDisabled";
                readonly truthy: true;
            };
        };
        "--z-accordion-content-bg": Args;
        "--z-accordion-content-fg": Args;
        "--z-accordion-hover-color": Args;
        "--z-accordion-highlight-color": {
            readonly if: {
                readonly arg: "highlight";
                readonly truthy: true;
            };
        };
    };
    args: {
        "--z-accordion-bg": any;
        "--z-accordion-label-color": any;
        "--z-accordion-disabled-label-color": any;
        "--z-accordion-content-bg": any;
        "--z-accordion-content-fg": any;
        "--z-accordion-hover-color": any;
        "--z-accordion-highlight-color": any;
        "--z-accordion-right-padding": string;
        "--z-accordion-left-padding": string;
        "--z-accordion-label-font-weight": string;
        highlight: false;
        icon: any;
        isDisabled: false;
        label: string;
        open: false;
        shadow: true;
        size: ControlSize.BIG;
        variant: AccordionVariant.DEFAULT;
    };
    render: (args: Args) => TemplateResult;
};
export default StoryMeta;
export declare const Default: {};
/**
 * When multiple `ZAccordion`s are placed in stack, the style is automatically optimized through global styles.
 */
export declare const Stack: {
    argTypes: {
        "--z-accordion-highlight-color2": {
            readonly if: {
                readonly arg: "highlight";
                readonly truthy: true;
            };
        };
        "--z-accordion-highlight-color3": {
            readonly if: {
                readonly arg: "highlight";
                readonly truthy: true;
            };
        };
        "--z-accordion-highlight-color4": {
            readonly if: {
                readonly arg: "highlight";
                readonly truthy: true;
            };
        };
    };
    args: {
        "--z-accordion-highlight-color2": any;
        "--z-accordion-highlight-color3": any;
        "--z-accordion-highlight-color4": any;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZAccordionStoriesArgs) => TemplateResult<1>;
};
export declare const WithTags: {
    render: (args: ZAccordionStoriesArgs) => TemplateResult<1>;
};
