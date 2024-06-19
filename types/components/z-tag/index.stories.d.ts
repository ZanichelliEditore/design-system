import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        icon: {
            control: {
                type: "select";
            };
            options: string[];
        };
        "--z-tag-text-color": import("@storybook/types").Args;
        "--z-tag-bg": import("@storybook/types").Args;
    };
    args: {
        text: string;
        expandable: false;
        icon: string;
        "--z-tag-text-color": any;
        "--z-tag-bg": any;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const ColorTokens: {
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const LongText: {
    args: {
        text: string;
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
