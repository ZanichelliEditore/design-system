import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ButtonVariant, ControlSize, ToastNotification, ToastNotificationTransition} from "../../beans";
import {ZToastNotification} from "./index";

const longText =
  "Testo decisamente lungo, che non sta su 1 sola riga. Questo testo occupa varie righe ed è un esempio di come vengono posizionati gli elementi in caso di testo lungo.";

const StoryMeta = {
  title: "ZToastNotification",
  component: ZToastNotification,
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
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
    autoclose: undefined,
    pauseonfocusloss: false,
    type: ToastNotification.DARK,
    isdraggable: true,
    draggablepercentage: 80,
  },
  render: (args) => (
    <div class="toast-container">
      <z-toast-notification
        heading={args.heading}
        message={args.message}
        closebutton={args.closebutton}
        autoclose={args.autoclose}
        pauseonfocusloss={args.pauseonfocusloss}
        type={args.type}
        isdraggable={args.isdraggable}
        draggablepercentage={args.draggablepercentage}
        transition={args.transition}
      ></z-toast-notification>
    </div>
  ),
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
  parameters: {
    slots: {
      button: (
        <z-button
          class="slotted-button"
          slot="button"
          size={ControlSize.SMALL}
          variant={ButtonVariant.TERTIARY}
        >
          button
        </z-button>
      ),
    },
  },
} satisfies Story;

export const SlottedButtonLongText = {
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    heading: "Titolo abbastanza lungo",
    message: longText,
  },
  parameters: {
    slots: {
      button: (
        <z-button
          class="slotted-button"
          slot="button"
          size={ControlSize.SMALL}
          variant={ButtonVariant.TERTIARY}
        >
          button
        </z-button>
      ),
    },
  },
} satisfies Story;

export const SlottedMessage = {
  args: {transition: ToastNotificationTransition.SLIDE_IN_DOWN},
  parameters: {
    controls: {exclude: ["message"]},
    slots: {
      message: (
        <span slot="message">
          Messaggio con
          <a
            href="#"
            class="z-link z-link-blue"
          >
            link
          </a>
          e <b>grassetto</b>
        </span>
      ),
    },
  },
} satisfies Story;

export const SlottedMessageLongText = {
  args: {
    transition: ToastNotificationTransition.SLIDE_IN_DOWN,
    heading: "Titolo abbastanza lungo",
  },
  parameters: {
    controls: {exclude: ["message"]},
    slots: {
      message: (
        <span slot="message">
          {longText}
          <a
            href="#"
            class="z-link z-link-blue"
          >
            link
          </a>
        </span>
      ),
    },
  },
} satisfies Story;
