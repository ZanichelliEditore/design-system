import { html } from "lit";
import { ToastNotification, ToastNotificationTransition } from "../../beans";
import "../z-button/index";
import "./index";
const template = (args) => html `<div class="toast-container">
    <z-toast-notification
      heading="${args.heading}"
      message="${args.message}"
      closebutton="${args.closebutton}"
      autoclose="${args.autoclose}"
      pauseonfocusloss="${args.pauseonfocusloss}"
      type="${args.type}"
      isdraggable="${args.isdraggable}"
      draggablepercentage="${args.draggablepercentage}"
      transition="${args.transition}"
    ></z-toast-notification>
  </div>`;
const StoryMeta = {
    title: "ZToastNotification",
    component: "z-toast-notification",
    argTypes: {
        type: {
            control: {
                type: "select",
            },
            options: Object.values(ToastNotification),
        },
        transition: {
            control: {
                type: "select",
            },
            options: Object.values(ToastNotificationTransition),
        },
    },
    args: {
        heading: "Titolo",
        message: "Questo è un messaggio di prova.",
        closebutton: true,
        autoclose: null,
        pauseonfocusloss: false,
        type: ToastNotification.DARK,
        isdraggable: true,
        draggablepercentage: 80,
        transition: ToastNotificationTransition.SLIDE_IN_RIGHT,
    },
    render: (args) => template(args),
};
export default StoryMeta;
export const SlideInRight = {};
export const SlideInLeft = {
    args: {
        transition: ToastNotificationTransition.SLIDE_IN_LEFT,
    },
};
export const SlideInDown = {
    args: {
        transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    },
};
export const SlideInUp = {
    args: {
        transition: ToastNotificationTransition.SLIDE_IN_UP,
    },
};
export const SlottedButton = {
    args: {
        transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    },
    render: (args) => html `<div class="toast-container slotted-button">
      <z-toast-notification
        heading="${args.heading}"
        message="${args.message}"
        closebutton="${args.closebutton}"
        autoclose="${args.autoclose}"
        pauseonfocusloss="${args.pauseonfocusloss}"
        type="${args.type}"
        isdraggable="${args.isdraggable}"
        draggablepercentage="${args.draggablepercentage}"
        transition="${args.transition}"
      >
        <z-button
          slot="button"
          size="small"
          >button</z-button
        >
      </z-toast-notification>
    </div>`,
};
//# sourceMappingURL=index.stories.js.map
