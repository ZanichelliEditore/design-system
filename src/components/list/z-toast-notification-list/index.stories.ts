import {Meta, StoryObj} from "@storybook/web-components";
import {TemplateResult, html} from "lit";
import {ZToastNotificationList} from ".";
import {ToastNotificationPosition, ToastNotificationTransition} from "../../../beans";
import "../../notification/z-toast-notification/index";
import "./index";
import "./index.stories.css";

const template = (
  args,
  notificationTransition: ToastNotificationTransition = ToastNotificationTransition.SLIDE_IN_DOWN
): TemplateResult =>
  html`<div class="z-toast-notification-container">
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
} satisfies Meta<ZToastNotificationList>;

export default StoryMeta;

type Story = StoryObj<ZToastNotificationList>;

export const TopLeftSlideInDown = {
  args: {
    position: ToastNotificationPosition.TOP_LEFT,
  },
} satisfies Story;

export const TopLeftSlideInRight = {
  args: {
    position: ToastNotificationPosition.TOP_LEFT,
  },
  render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT),
} satisfies Story;

export const TopCentre = {
  args: {
    position: ToastNotificationPosition.TOP_CENTRE,
  },
} satisfies Story;

export const TopRightSlideInDown = {
  args: {
    position: ToastNotificationPosition.TOP_RIGHT,
  },
} satisfies Story;

export const TopRightSlideInLeft = {
  args: {
    position: ToastNotificationPosition.TOP_RIGHT,
  },
  render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_LEFT),
} satisfies Story;

export const BottomRightSlideInUp = {
  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT,
  },
  render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_UP),
} satisfies Story;

export const BottomRightSlideInLeft = {
  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT,
  },
  render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_LEFT),
} satisfies Story;

export const BottomCentre = {
  args: {
    position: ToastNotificationPosition.BOTTOM_CENTRE,
  },
  render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_UP),
} satisfies Story;

export const BottomCentreSlideInUp = {
  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT,
  },
  render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_UP),
} satisfies Story;

export const BottomLeftSlideInRight = {
  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT,
  },
  render: (args) => template(args, ToastNotificationTransition.SLIDE_IN_RIGHT),
} satisfies Story;
