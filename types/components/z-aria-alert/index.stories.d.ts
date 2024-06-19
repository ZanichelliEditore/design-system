import { ZAriaAlertMode } from "../../beans";
import "../z-button/index";
import "../z-visually-hidden/index";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        mode: {
            control: {
                type: "select";
            };
            options: ZAriaAlertMode[];
        };
    };
    args: {
        mode: ZAriaAlertMode.POLITE;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const VisuallyHidden: {
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
