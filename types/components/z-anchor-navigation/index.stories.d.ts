import { ZAnchorNavigation } from ".";
import "../z-button/index";
import "../z-icon/index";
import "./index";
import "./index.stories.css";
declare const StoryMeta: {
    title: string;
    component: string;
    args: {
        hideUnselected: false;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: ZAnchorNavigation) => import("lit-html").TemplateResult<1>;
};
/**
 * Setting `autoCurrent` to `false` disables the automatic highlighting of the current section in the anchor navigation
 * and allows manual handling.
 * In this story, for example, the highlighting of the current section is done by clicking on the related button.
 */
export declare const AutoCurrentDisabling: {
    args: {
        autoCurrent: false;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZAnchorNavigation) => import("lit-html").TemplateResult<1>;
};
