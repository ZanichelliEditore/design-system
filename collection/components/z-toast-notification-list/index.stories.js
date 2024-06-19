import { html } from "lit";
import { ToastNotificationPosition, ToastNotificationTransition } from "../../beans";
import "../z-button/index";
import "../z-toast-notification/index";
import "./index";
import "./index.stories.css";
const template = (args, notificationTransition = ToastNotificationTransition.SLIDE_IN_DOWN) => html `<div class="z-toast-notification-container">
    <z-toast-notification-list
      position="${args.position}"
      newestontop="${args.newestontop}"
    >
      <z-toast-notification
        slot="toasts"
        type="dark"
        heading="Notification"
        message="Autoclose 18s."
        .transition=${notificationTransition}
        draggablepercentage="50"
        autoclose="18000"
        closebutton
      >
      </z-toast-notification>
      <z-toast-notification
        slot="toasts"
        type="dark"
        heading="Notification"
        message="Senza pulsante."
        .transition=${notificationTransition}
        draggablepercentage="50"
        closebutton
      >
      </z-toast-notification>
      <z-toast-notification
        slot="toasts"
        type="dark"
        heading="Notification"
        message="Con pulsante"
        .transition=${notificationTransition}
        draggablepercentage="50"
        closebutton
      >
        <z-button
          slot="button"
          size="small"
          >button</z-button
        >
      </z-toast-notification>
    </z-toast-notification-list>
  </div>`;
const StoryMeta = {
    title: "ZToastNotificationList",
    component: "z-toast-notification-list",
    argTypes: {
        position: {
            control: {
                type: "select",
            },
            options: Object.values(ToastNotificationPosition),
        },
    },
    args: {
        newestontop: true,
    },
    render: (args) => template(args),
};
export default StoryMeta;
export const TopLeftSlideInDown = {
    args: {
        position: ToastNotificationPosition.TOP_LEFT,
    },
};
export const TopLeftSlideInRight = {
    args: {
        position: ToastNotificationPosition.TOP_LEFT,
    },
    render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT),
};
export const TopCentre = {
    args: {
        position: ToastNotificationPosition.TOP_CENTRE,
    },
};
export const TopRightSlideInDown = {
    args: {
        position: ToastNotificationPosition.TOP_RIGHT,
    },
};
export const TopRightSlideInLeft = {
    args: {
        position: ToastNotificationPosition.TOP_RIGHT,
    },
    render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_LEFT),
};
export const BottomRightSlideInUp = {
    args: {
        position: ToastNotificationPosition.BOTTOM_RIGHT,
    },
    render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_UP),
};
export const BottomRightSlideInLeft = {
    args: {
        position: ToastNotificationPosition.BOTTOM_RIGHT,
    },
    render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_LEFT),
};
export const BottomCentre = {
    args: {
        position: ToastNotificationPosition.BOTTOM_CENTRE,
    },
    render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_UP),
};
export const BottomCentreSlideInUp = {
    args: {
        position: ToastNotificationPosition.BOTTOM_LEFT,
    },
    render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_UP),
};
export const BottomLeftSlideInRight = {
    args: {
        position: ToastNotificationPosition.BOTTOM_LEFT,
    },
    render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT),
};
//# sourceMappingURL=index.stories.js.map
