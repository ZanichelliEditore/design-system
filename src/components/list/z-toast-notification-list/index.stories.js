import {html} from "lit";

import "./index.stories.css";
import {ToastNotificationPosition} from "../../../beans";

export default {
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
};

export const TopLeftSlideInDown = {
  render: (args) =>
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
          transition="slide-in-down"
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
          transition="slide-in-down"
          draggablepercentage="50"
          closebutton
        >
        </z-toast-notification>
        <z-toast-notification
          slot="toasts"
          type="dark"
          heading="Notification"
          message="Con pulsante"
          transition="slide-in-down"
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
    </div>`,

  name: "Top left / slide-in down",

  args: {
    position: ToastNotificationPosition.TOP_LEFT,
  },
};

export const TopLeftSlideInRight = {
  render: (args) =>
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
          transition="slide-in-right"
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
          transition="slide-in-right"
          draggablepercentage="50"
          closebutton
        >
        </z-toast-notification>
        <z-toast-notification
          slot="toasts"
          type="dark"
          heading="Notification"
          message="Con pulsante"
          transition="slide-in-right"
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
    </div>`,

  name: "Top left / slide-in right",

  args: {
    position: ToastNotificationPosition.TOP_LEFT,
  },
};

export const TopCentre = {
  render: (args) =>
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
          transition="slide-in-down"
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
          transition="slide-in-down"
          draggablepercentage="50"
          closebutton
        >
        </z-toast-notification>
        <z-toast-notification
          slot="toasts"
          type="dark"
          heading="Notification"
          message="Con pulsante"
          transition="slide-in-down"
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
    </div>`,

  name: "Top centre",

  args: {
    position: ToastNotificationPosition.TOP_CENTRE,
  },
};

export const TopRightSlideInDown = {
  render: (args) =>
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
          transition="slide-in-down"
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
          transition="slide-in-down"
          draggablepercentage="50"
          closebutton
        >
        </z-toast-notification>
        <z-toast-notification
          slot="toasts"
          type="dark"
          heading="Notification"
          message="Con pulsante"
          transition="slide-in-down"
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
    </div>`,

  name: "Top right / slide-in down",

  args: {
    position: ToastNotificationPosition.TOP_RIGHT,
  },
};

export const TopRightSlideInLeft = {
  render: (args) =>
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
          transition="slide-in-left"
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
          transition="slide-in-left"
          draggablepercentage="50"
          closebutton
        >
        </z-toast-notification>
        <z-toast-notification
          slot="toasts"
          type="dark"
          heading="Notification"
          message="Con pulsante"
          transition="slide-in-left"
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
    </div>`,

  name: "Top right / slide-in left",

  args: {
    position: ToastNotificationPosition.TOP_RIGHT,
  },
};

export const BottomRightSlideInUp = {
  render: (args) =>
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
          transition="slide-in-up"
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
          transition="slide-in-up"
          draggablepercentage="50"
          closebutton
        >
        </z-toast-notification>
        <z-toast-notification
          slot="toasts"
          type="dark"
          heading="Notification"
          message="Con pulsante"
          transition="slide-in-up"
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
    </div>`,

  name: "Bottom right / slide-in up",

  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT,
  },
};

export const BottomRightSlideInLeft = {
  render: (args) =>
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
          transition="slide-in-left"
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
          transition="slide-in-left"
          draggablepercentage="50"
          closebutton
        >
        </z-toast-notification>
        <z-toast-notification
          slot="toasts"
          type="dark"
          heading="Notification"
          message="Con pulsante"
          transition="slide-in-left"
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
    </div>`,

  name: "Bottom right / slide-in left",

  args: {
    position: ToastNotificationPosition.BOTTOM_RIGHT,
  },
};

export const BottomCentre = {
  render: (args) =>
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
          transition="slide-in-up"
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
          transition="slide-in-up"
          draggablepercentage="50"
          closebutton
        >
        </z-toast-notification>
        <z-toast-notification
          slot="toasts"
          type="dark"
          heading="Notification"
          message="Con pulsante"
          transition="slide-in-up"
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
    </div>`,

  name: "Bottom centre",

  args: {
    position: ToastNotificationPosition.BOTTOM_CENTRE,
  },
};

export const BottomCentreSlideInUp = {
  render: (args) =>
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
          transition="slide-in-up"
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
          transition="slide-in-up"
          draggablepercentage="50"
          closebutton
        >
        </z-toast-notification>
        <z-toast-notification
          slot="toasts"
          type="dark"
          heading="Notification"
          message="Con pulsante"
          transition="slide-in-up"
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
    </div>`,

  name: "Bottom centre / slide-in up",

  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT,
  },
};

export const BottomLeftSlideInRight = {
  render: (args) =>
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
          transition="slide-in-right"
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
          transition="slide-in-right"
          draggablepercentage="50"
          closebutton
        >
        </z-toast-notification>
        <z-toast-notification
          slot="toasts"
          type="dark"
          heading="Notification"
          message="Con pulsante"
          transition="slide-in-right"
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
    </div>`,

  name: "Bottom left / slide-in right",

  args: {
    position: ToastNotificationPosition.BOTTOM_LEFT,
  },
};
