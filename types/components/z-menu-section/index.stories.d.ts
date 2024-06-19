import { type ZMenuSection } from ".";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    args: {
        active: false;
    };
};
export default StoryMeta;
export declare const WithItems: {
    render: (args: ZMenuSection) => import("lit-html").TemplateResult<1>;
};
export declare const WithoutItems: {
    render: (args: ZMenuSection) => import("lit-html").TemplateResult<1>;
};
