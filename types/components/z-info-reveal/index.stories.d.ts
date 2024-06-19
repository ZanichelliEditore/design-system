import { type ZInfoReveal } from ".";
import { ControlSize, InfoRevealPosition } from "../../beans";
import "../z-button/index";
import "./index";
import "./index.stories.css";
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
        size: {
            control: {
                type: "inline-radio";
            };
            options: ControlSize[];
        };
        position: {
            options: InfoRevealPosition[];
            control: {
                type: "inline-radio";
            };
        };
    };
    parameters: {
        layout: string;
    };
};
export default StoryMeta;
export declare const Default: {
    args: {
        label: string;
        icon: string;
        size: ControlSize.BIG;
        position: InfoRevealPosition.TOP_RIGHT;
    };
    render: (args: ZInfoReveal) => import("lit-html").TemplateResult<1>;
};
