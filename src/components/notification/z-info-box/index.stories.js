import {html} from "lit";

export default {
  title: "ZInfoBox",
  component: "z-info-box",

  args: {
    isclosable: true,
  },
};

export const ZInfoBox = {
  render: (args) =>
    html`<z-info-box isclosable="${args.isclosable}">
      <span slot="content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span
      >
    </z-info-box>`,

  name: "ZInfoBox",
};
