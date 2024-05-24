import {Meta, StoryObj} from "@storybook/web-components";
import {TemplateResult, html} from "lit";
import {ToastNotification, ToastNotificationTransition} from "../../../beans";
import "./index";
import {ZToastNotification} from "./index";

const template = (args): TemplateResult =>
  html` <div class="toast-container">
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
} satisfies Meta<ZToastNotification>;
export default StoryMeta;

type Story = StoryObj<ZToastNotification>;
export const SlideInRight = {} satisfies Story;

export const SlideInLeft = {
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_LEFT,
  },
} satisfies Story;

export const SlideInDown = {
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
  },
} satisfies Story;

export const SlideInUp = {
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_UP,
  },
} satisfies Story;

export const SlottedButton = {
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
  },
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
} satisfies Story;
