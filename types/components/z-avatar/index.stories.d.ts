import { ZAvatar } from ".";
import { AvatarSize } from "../../beans";
import "./index";
/**
 * Pass at least one prop between `text` and `image`.
 * If prop `image` contains a broken URL, the component will show `text` prop, if given.
 */
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        size: {
            options: AvatarSize[];
            control: {
                type: "inline-radio";
            };
        };
        textColor: {
            options: string[];
            control: {
                type: "select";
            };
        };
        backgroundColor: {
            options: string[];
            control: {
                type: "select";
            };
        };
    };
    args: {
        size: AvatarSize.MEDIUM;
        text: string;
        textColor: string;
        backgroundColor: string;
        image: string;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: ZAvatar) => import("lit-html").TemplateResult<1>;
};
