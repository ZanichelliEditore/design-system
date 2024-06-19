import { type TemplateResult } from "lit";
import { type ZToastNotificationList } from ".";
import { ToastNotificationPosition } from "../../beans";
import "../z-button/index";
import "../z-toast-notification/index";
import "./index";
import "./index.stories.css";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        position: {
            control: {
                type: "select";
            };
            options: ToastNotificationPosition[];
        };
    };
    args: {
        newestontop: true;
    };
    render: (args: ZToastNotificationList) => TemplateResult;
};
export default StoryMeta;
export declare const TopLeftSlideInDown: {
    args: {
        position: ToastNotificationPosition.TOP_LEFT;
    };
};
export declare const TopLeftSlideInRight: {
    args: {
        position: ToastNotificationPosition.TOP_LEFT;
    };
    render: (args: ZToastNotificationList) => TemplateResult;
};
export declare const TopCentre: {
    args: {
        position: ToastNotificationPosition.TOP_CENTRE;
    };
};
export declare const TopRightSlideInDown: {
    args: {
        position: ToastNotificationPosition.TOP_RIGHT;
    };
};
export declare const TopRightSlideInLeft: {
    args: {
        position: ToastNotificationPosition.TOP_RIGHT;
    };
    render: (args: ZToastNotificationList) => TemplateResult;
};
export declare const BottomRightSlideInUp: {
    args: {
        position: ToastNotificationPosition.BOTTOM_RIGHT;
    };
    render: (args: ZToastNotificationList) => TemplateResult;
};
export declare const BottomRightSlideInLeft: {
    args: {
        position: ToastNotificationPosition.BOTTOM_RIGHT;
    };
    render: (args: ZToastNotificationList) => TemplateResult;
};
export declare const BottomCentre: {
    args: {
        position: ToastNotificationPosition.BOTTOM_CENTRE;
    };
    render: (args: ZToastNotificationList) => TemplateResult;
};
export declare const BottomCentreSlideInUp: {
    args: {
        position: ToastNotificationPosition.BOTTOM_LEFT;
    };
    render: (args: ZToastNotificationList) => TemplateResult;
};
export declare const BottomLeftSlideInRight: {
    args: {
        position: ToastNotificationPosition.BOTTOM_LEFT;
    };
    render: (args: ZToastNotificationList) => TemplateResult;
};
