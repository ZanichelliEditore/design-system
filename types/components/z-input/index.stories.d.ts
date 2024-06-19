import { ZInput } from ".";
import { ControlSize, InputStatus, InputType, LabelPosition } from "../../beans";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        type: {
            control: {
                type: "inline-radio";
            };
            options: InputType[];
        };
        labelPosition: {
            control: {
                type: "inline-radio";
            };
            options: LabelPosition[];
        };
        size: {
            control: {
                type: "inline-radio";
            };
            options: ControlSize[];
        };
        status: {
            control: {
                type: "inline-radio";
                labels: {
                    null: string;
                };
            };
            options: InputStatus[];
        };
    };
    args: {
        type: InputType.TEXT;
        label: string;
        ariaLabel: string;
        labelPosition: LabelPosition.RIGHT;
        placeholder: string;
        value: string;
        size: ControlSize.BIG;
        name: string;
        status: any;
        message: string;
        icon: string;
        disabled: false;
        readonly: false;
        required: false;
        checked: false;
        hasclearicon: true;
        htmlid: string;
        htmltitle: string;
        autocomplete: string;
        min: number;
        minlength: number;
        max: number;
        maxlength: number;
        step: number;
        pattern: string;
    };
};
export default StoryMeta;
export declare const AllProps: {
    render: (args: ZInput) => import("lit-html").TemplateResult<1>;
};
export declare const ZInputText: {
    render: (args: ZInput) => import("lit-html").TemplateResult<1>;
    parameters: {
        controls: {
            include: string[];
        };
    };
    argTypes: {
        type: {
            options: InputType[];
        };
    };
};
export declare const ZInputTextarea: {
    render: (args: ZInput) => import("lit-html").TemplateResult<1>;
    parameters: {
        controls: {
            include: string[];
        };
    };
    args: {
        type: InputType.TEXTAREA;
    };
};
export declare const ZInputCheckbox: {
    parameters: {
        controls: {
            include: string[];
        };
    };
    args: {
        type: InputType.CHECKBOX;
    };
    render: (args: ZInput) => import("lit-html").TemplateResult<1>;
};
export declare const ZInputRadio: {
    parameters: {
        controls: {
            include: string[];
        };
    };
    args: {
        type: InputType.RADIO;
    };
    render: (args: ZInput) => import("lit-html").TemplateResult<1>;
};
export declare const ZInputNumber: {
    parameters: {
        controls: {
            include: string[];
        };
    };
    args: {
        type: InputType.NUMBER;
        value: string;
        hasclearicon: false;
    };
    render: (args: ZInput) => import("lit-html").TemplateResult<1>;
};
