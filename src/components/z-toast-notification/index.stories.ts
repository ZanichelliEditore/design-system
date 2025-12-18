import {Meta, StoryObj} from "@storybook/web-components";
import {html, type TemplateResult} from "lit";
import {type ZToastNotification} from ".";
import {ToastNotification, ToastNotificationTransition} from "../../beans";
import "../z-button/index";
import "./index";

const longText =
  "Testo decisamente lungo, che non sta su 1 sola riga. Questo testo occupa varie righe ed è un esempio di come vengono posizionati gli elementi in caso di testo lungo.";

const template = (args): TemplateResult =>
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
  },
  render: (args) => template(args),
} satisfies Meta<ZToastNotification>;

export default StoryMeta;

type Story = StoryObj<ZToastNotification>;
export const NoSlideIn = {
  args: {
    message: "Messaggio con <b>grassetto</b> e altro <i>html</i> renderizzato",
  },
} satisfies Story;

export const SlideInRight = {
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_RIGHT,
  },
} satisfies Story;

export const SlideInLeft = {
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_LEFT,
  },
} satisfies Story;

export const SlideInDownNoCloseButton = {
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    closebutton: false,
  },
} satisfies Story;

export const SlideInUpLongText = {
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_UP,
    message: longText,
  },
} satisfies Story;

export const SlottedButton = {
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
  },
  render: (args) =>
    html`<div class="toast-container slotted-button">
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
          variant="tertiary"
          >button</z-button
        >
      </z-toast-notification>
    </div>`,
} satisfies Story;

export const SlottedButtonLongText = {
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
  },
  render: (args) =>
    html`<div class="toast-container slotted-button">
      <z-toast-notification
        heading="Titolo abbastanza lungo"
        message=${longText}
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
          variant="tertiary"
          >button</z-button
        >
      </z-toast-notification>
    </div>`,
} satisfies Story;

export const SlottedMessage = {
  args: {transition: ToastNotificationTransition.SLIDE_IN_DOWN},
  render: (args) =>
    html`<div class="toast-container">
      <z-toast-notification
        heading="${args.heading}"
        closebutton="${args.closebutton}"
        autoclose="${args.autoclose}"
        pauseonfocusloss="${args.pauseonfocusloss}"
        type="${args.type}"
        isdraggable="${args.isdraggable}"
        draggablepercentage="${args.draggablepercentage}"
        transition="${args.transition}"
      >
        <span slot="message"
          >Messaggio con
          <a
            href="#"
            class="z-link z-link-blue"
            >link</a
          >
          e <b>grassetto</b></span
        >
      </z-toast-notification>
    </div>`,
} satisfies Story;

export const SlottedMessageLongText = {
  args: {transition: ToastNotificationTransition.SLIDE_IN_DOWN},
  render: (args) =>
    html`<div class="toast-container">
      <z-toast-notification
        heading="Titolo abbastanza lungo"
        closebutton="${args.closebutton}"
        autoclose="${args.autoclose}"
        pauseonfocusloss="${args.pauseonfocusloss}"
        type="${args.type}"
        isdraggable="${args.isdraggable}"
        draggablepercentage="${args.draggablepercentage}"
        transition="${args.transition}"
      >
        <span slot="message"
          >${longText}
          <a
            href="#"
            class="z-link z-link-blue"
            >link</a
          ></span
        >
      </z-toast-notification>
    </div>`,
} satisfies Story;
