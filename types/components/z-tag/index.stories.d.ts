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
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const ColorTokens: {
    args: {
        "--z-tag-text-color": any;
        "--z-tag-bg": any;
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const LongText: {
    args: {
        text: string;
        "--z-tag-text-color": any;
        "--z-tag-bg": any;
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
