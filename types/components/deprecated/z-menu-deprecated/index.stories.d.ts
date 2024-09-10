import { type ZMenuDeprecated } from ".";
import "../z-menu-section-deprecated/index";
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
    render: (args: ZMenuDeprecated) => import("lit-html").TemplateResult<1>;
};
export declare const WithHeader: {
    render: (args: ZMenuDeprecated) => import("lit-html").TemplateResult<1>;
};
export declare const ActiveWithoutItems: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZMenuDeprecated) => import("lit-html").TemplateResult<1>;
};
