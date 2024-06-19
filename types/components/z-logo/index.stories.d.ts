import { ZLogo } from ".";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    args: {
        imageAlt: string;
        height: number;
        width: number;
        link: string;
        targetBlank: false;
        mobileLogo: false;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: ZLogo) => import("lit-html").TemplateResult<1>;
};
