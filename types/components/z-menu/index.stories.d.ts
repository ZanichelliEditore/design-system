import { type ZMenu } from ".";
import "../z-menu-section/index";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    args: {
        active: false;
        floating: true;
        verticalContext: false;
    };
};
export default StoryMeta;
export declare const FloatingContentLayout: {
    render: (args: ZMenu) => import("lit-html").TemplateResult<1>;
};
export declare const WithHeader: {
    render: (args: ZMenu) => import("lit-html").TemplateResult<1>;
};
export declare const ActiveWithoutItems: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZMenu) => import("lit-html").TemplateResult<1>;
};
