import { type ZNotification } from ".";
import { NotificationType } from "../../beans";
import "./index";
import "./index.stories.css";
type ZNotificationStoriesArgs = ZNotification & {
    notificationText: string;
};
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        type: {
            control: {
                type: "inline-radio";
            };
            options: NotificationType[];
        };
    };
    args: {
        contenticonname: string;
        actiontext: string;
        showclose: false;
        sticky: false;
        type: NotificationType.SUCCESS;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: ZNotificationStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const LongText: {
    render: (args: ZNotificationStoriesArgs) => import("lit-html").TemplateResult<1>;
};
/**
 * To use the banner variant set the `sticky` property to `true`.
 */
export declare const BannerVariant: {
    args: {
        notificationText: string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZNotificationStoriesArgs) => import("lit-html").TemplateResult<1>;
};
/**
 * To use the inline variant set the `sticky` property to `false`.
 */
export declare const InlineVariant: {
    args: {
        notificationText: string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZNotificationStoriesArgs) => import("lit-html").TemplateResult<1>;
};
