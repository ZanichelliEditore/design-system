import {html} from "lit";

export default {
  title: "Snowflakes/List/ZMyzListItem",
  component: "z-myz-list-item",

  args: {
    action: "10",
    icon: "cart",
    linktarget: "_blank",
    link: "www.zanichelli.it",
    underlined: true,
  },
};

export const ZMyzListItem = {
  render: (args) => html`
    <z-myz-list-item
      action=${args.action}
      icon=${args.icon}
      linktarget=${args.linktarget}
      link=${args.link}
      underlined=${args.underlined}
      >ITEM 1</z-myz-list-item
    >
  `,

  name: "ZMyzListItem",
};
