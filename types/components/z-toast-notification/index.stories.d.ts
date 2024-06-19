import { type TemplateResult } from "lit";
import { type ZToastNotification } from ".";
import { ToastNotification, ToastNotificationTransition } from "../../beans";
import "../z-button/index";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        type: {
            control: {
                type: "select";
            };
            options: ToastNotification[];
        };
        transition: {
            control: {
                type: "select";
            };
            options: ToastNotificationTransition[];
        };
    };
    args: {
        heading: string;
        message: string;
        closebutton: true;
        autoclose: any;
        pauseonfocusloss: false;
        type: ToastNotification.DARK;
        isdraggable: true;
        draggablepercentage: number;
        transition: ToastNotificationTransition.SLIDE_IN_RIGHT;
    };
    render: (args: ZToastNotification) => TemplateResult;
};
export default StoryMeta;
export declare const SlideInRight: {};
export declare const SlideInLeft: {
    args: {
        transition: ToastNotificationTransition.SLIDE_IN_LEFT;
    };
};
export declare const SlideInDown: {
    args: {
        transition: ToastNotificationTransition.SLIDE_IN_DOWN;
    };
};
export declare const SlideInUp: {
    args: {
        transition: ToastNotificationTransition.SLIDE_IN_UP;
    };
};
export declare const SlottedButton: {
    args: {
        transition: ToastNotificationTransition.SLIDE_IN_DOWN;
    };
    render: (args: ZToastNotification) => TemplateResult<1>;
};
