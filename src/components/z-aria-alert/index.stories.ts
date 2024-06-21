import {Meta} from "@storybook/web-components";
import {html} from "lit";
import {ZAriaAlert} from ".";
import {ZAriaAlertMode} from "../../beans";
import "../z-button/index";
import "../z-visually-hidden/index";
import "./index";

const StoryMeta = {
  title: "ZAriaAlert",
  component: "z-aria-alert",
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

export const Default = {
  render: (args) =>
    html`<script>
        function myFunction() {
          const myTimeout = setTimeout(myDelayedFunction, 3000);
        }
        function myDelayedFunction() {
          var myalert = document.getElementById("idAlert");
          myalert.innerHTML = "Ecco un numero a caso: " + Math.random();
        }
      </script>
      <div>
        <h2 class="heading-2">ZAriaAlert deafult</h2>
        <span>
          Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message
        </span>
        <z-button onclick="myFunction()">Click to say something</z-button>
        <z-aria-alert
          id="idAlert"
          mode="${args.mode}"
        >
          Testo NON nascosto
        </z-aria-alert>
      </div>`,
};

export const VisuallyHidden = {
  render: (args) =>
    html`<script>
        function myFunction2() {
          const myTimeout = setTimeout(myDelayedFunction2, 3000);
        }
        function myDelayedFunction2() {
          var myalert = document.getElementById("idAlert2");
          myalert.innerHTML = "Ecco un numero a caso: " + Math.random();
        }
      </script>
      <div>
        <h2 class="heading-2">ZAriaAlert with VisuallyHidden</h2>
        <span>
          You can also wrap your <code>z-aria-alert</code> with a <code>z-visually-hidden</code> tag in order to
          visually hide the text.
        </span>
        <span>
          Open your ScreenReader, Click on the button and wait 3 seconds, the screenreader will read a message
        </span>
        <z-button onclick="myFunction2()">Click to say something but visually hidden</z-button>
        <z-visually-hidden>
          <z-aria-alert
            id="idAlert2"
            mode="${args.mode}"
          >
            Testo qua
          </z-aria-alert>
        </z-visually-hidden>
      </div>`,
};
