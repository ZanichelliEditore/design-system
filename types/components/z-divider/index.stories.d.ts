import { ZDivider } from ".";
import { DividerOrientation, DividerSize } from "../../beans";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        size: {
            control: {
                type: "select";
            };
            options: DividerSize[];
        };
        orientation: {
            control: {
                type: "select";
            };
            options: DividerOrientation[];
        };
        color: {
            control: {
                type: "select";
            };
            options: string[];
        };
    };
    args: {
        size: DividerSize.SMALL;
        color: string;
        orientation: DividerOrientation.HORIZONTAL;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: ZDivider) => import("lit-html").TemplateResult<1>;
    name: string;
};
