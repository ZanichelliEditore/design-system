import "../../z-icon/index";
import "./index.stories.css";
declare const _default: {
    title: string;
    argTypes: {
        colorVariant: {
            options: string[];
            control: {
                type: string;
            };
        };
        icon: {
            options: string[];
            control: {
                type: string;
                labels: {
                    null: string;
                };
            };
        };
        "z-link-icon": {
            if: {
                arg: string;
                truthy: boolean;
            };
        };
    };
    args: {
        colorVariant: string;
        text: string;
        icon: any;
        "z-link-active": boolean;
        "z-link-inverse": boolean;
        "z-link-disabled": boolean;
        "z-link-underline": boolean;
        "z-link-icon": boolean;
        "z-link-sb": boolean;
    };
};
export default _default;
export declare const ZLink: {
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const ZLinkButton: {
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
