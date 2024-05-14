import {html} from "lit";

export default {
  title: "Snowflakes/Pocket/ZMessagesPocket",
  component: "z-messages-pocket",

  argTypes: {
    status: {
      control: {
        type: "select",
      },

      options: ["preview", "open", "closed"],
    },
  },

  args: {
    pocketid: "my-pocket",
    messages: "3",
    status: "preview",
  },
};

export const ZMessagesPocket = {
  render: (args) => html`
    <z-messages-pocket
      pocketid="${args.pocketid}"
      messages="${args.messages}"
      status="${args.status}"
    >
      <z-pocket-message>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
      </z-pocket-message>
      <z-pocket-message>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
      </z-pocket-message>
      <z-pocket-message>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
      </z-pocket-message>
    </z-messages-pocket>
  `,

  name: "ZMessagesPocket",
};
