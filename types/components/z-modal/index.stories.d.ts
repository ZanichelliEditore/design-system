import { type ZModal } from ".";
import { CSSVarsArguments } from "../../utils/storybook-utils";
import "../date-picker/z-date-picker/index";
import "../z-button/index";
import "../z-select/index";
import "./index";
import "./index.stories.css";
type ZSearchbarStoriesArgs = ZModal & CSSVarsArguments<"--z-modal-content-padding">;
declare const StoryMeta: {
    title: string;
    component: string;
    args: {
        modalid: string;
        modaltitle: string;
        modalsubtitle: string;
        closeButtonLabel: string;
        alertdialog: false;
        closable: true;
        scrollInside: true;
        "--z-modal-content-padding": string;
    };
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/web-components").WebComponentsRenderer, ZSearchbarStoriesArgs>) => import("lit-html").TemplateResult<1>)[];
};
export default StoryMeta;
export declare const ShortText: {
    args: {
        modalid: string;
    };
    render: (args: ZModal) => import("lit-html").TemplateResult<1>;
};
export declare const LongText: {
    args: {
        modalid: string;
    };
    render: (args: ZModal) => import("lit-html").TemplateResult<1>;
};
