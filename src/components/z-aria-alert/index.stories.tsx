import {h} from "@stencil/core";
import type {Meta} from "@stencil/storybook-plugin";
import {ZAriaAlertMode} from "../../beans";
import {ZAriaAlert} from "./index";

const StoryMeta = {
  title: "ZAriaAlert",
  component: ZAriaAlert,
  argTypes: {
    mode: {
      control: {
        type: "select",
      },
      options: Object.values(ZAriaAlertMode),
    },
  },
  args: {
    mode: ZAriaAlertMode.POLITE,
  },
} satisfies Meta<ZAriaAlert>;
export default StoryMeta;

const requestDelayedMsg = () => {
  const myTimeout = setTimeout(() => {
    const myalert = document.querySelector("z-aria-alert");
    myalert.innerHTML = "Ecco un numero a caso: " + Math.random();
    clearTimeout(myTimeout);
  }, 3000);
};

export const Default = {
  render: (args) => (
    <div>
      <h2 class="heading-2">ZAriaAlert deafult</h2>
      <span>Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message</span>
      <z-button onClick={requestDelayedMsg}>Click to say something</z-button>
      <z-aria-alert mode={args.mode}>Testo NON nascosto</z-aria-alert>
    </div>
  ),
};

export const VisuallyHidden = {
  render: (args) => (
    <div>
      <h2 class="heading-2">ZAriaAlert with VisuallyHidden</h2>
      <span>
        You can also wrap your <code>z-aria-alert</code> with a <code>z-visually-hidden</code> tag in order to visually
        hide the text.
      </span>
      <span>Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message</span>
      <z-button onClick={requestDelayedMsg}>Click to say something but visually hidden</z-button>
      <z-visually-hidden>
        <z-aria-alert mode={args.mode}>Testo qua</z-aria-alert>
      </z-visually-hidden>
    </div>
  ),
};
