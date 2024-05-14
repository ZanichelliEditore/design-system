import {html} from "lit";

import {ToastNotificationTransition, ToastNotification} from "../../../beans";

export default {
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

    autoclose: {
      control: {
        type: "number",
      },
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
};

export const SlideInRight = {
  render: (args) =>
    html`<div class="toast-container">
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
    </div>`,

  name: "Slide-in right",
};

export const SlideInLeft = {
  render: (args) =>
    html`<div class="toast-container">
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
    </div>`,

  name: "Slide-in left",

  args: {
    transition: ToastNotificationTransition.SLIDE_IN_LEFT,
  },
};

export const SlideInDown = {
  render: (args) =>
    html`<div class="toast-container">
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
    </div>`,

  name: "Slide-in down",

  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
  },
};

export const SlideInUp = {
  render: (args) =>
    html`<div class="toast-container">
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
    </div>`,

  name: "Slide-in up",
};

export const SlottedButton = {
  render: (args) =>
    html` <div class="toast-container slotted-button">
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

  name: "Slotted button",

  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
  },
};
