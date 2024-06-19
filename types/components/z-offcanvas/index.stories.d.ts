import { ZOffcanvas } from ".";
import { OffCanvasVariant, TransitionDirection } from "../../beans";
import "./index";
import "./index.stories.css";
declare const StoryMeta: {
    title: string;
    component: string;
    parameters: {
        layout: string;
    };
    argTypes: {
        variant: {
            control: {
                type: "inline-radio";
            };
            options: OffCanvasVariant[];
        };
        transitiondirection: {
            control: {
                type: "inline-radio";
            };
            options: TransitionDirection[];
        };
    };
    args: {
        variant: OffCanvasVariant.PUSHCONTENT;
        open: true;
    };
};
export default StoryMeta;
export declare const EnterRight: {
    args: {
        transitiondirection: TransitionDirection.RIGHT;
    };
    render: (args: ZOffcanvas) => import("lit-html").TemplateResult<1>;
};
export declare const EnterLeft: {
    args: {
        transitiondirection: TransitionDirection.LEFT;
    };
    render: (args: ZOffcanvas) => import("lit-html").TemplateResult<1>;
};
export declare const SkipLoadAnimation: {
    args: {
        transitiondirection: TransitionDirection.LEFT;
        skipLoadAnimation: true;
    };
    render: (args: ZOffcanvas) => import("lit-html").TemplateResult<1>;
};
