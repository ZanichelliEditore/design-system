import "../../src/components/z-section-title/index";
import "./index.stories.css";
declare const _default: {
    title: string;
    argTypes: {
        theme: {
            control: {
                type: string;
            };
            options: string[];
        };
    };
    args: {
        theme: string;
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default _default;
export declare const Themes: {
    render: (args: import("@storybook/types").Args) => import("lit-html").TemplateResult<1>;
};
export declare const Palettes: {
    render: () => import("lit-html").TemplateResult<1>;
};
