import {html} from "lit";

export default {
  title: "Deprecated/ZLink",
  component: "z-link",

  argTypes: {
    textcolor: {
      control: {
        type: "select",
      },

      options: ["primary", "inverse", "black", "white"],
    },

    iconposition: {
      control: {
        type: "select",
      },

      options: ["left", "right"],
    },
  },

  args: {
    href: "http://www.zanichelli.it",
    target: "_blank",
    textcolor: "primary",
    icon: "download",
    iconposition: "left",
    htmlid: 1,
    htmltabindex: 1,
    isdisabled: false,
    isactive: false,
    underline: false,
  },
};

export const Primary = {
  render: (args) =>
    html`<z-link
      href="${args.href}"
      target="${args.target}"
      textcolor="${args.textcolor}"
      icon="${args.icon}"
      iconposition="${args.iconposition}"
      htmlid="${args.htmlid}"
      htmltabindex="${args.htmltabindex}"
      isdisabled="${args.isdisabled}"
      isactive="${args.isactive}"
      underline="${args.underline}"
      >z-link</z-link
    >`,

  name: "Primary",
};

export const Inverse = {
  render: (args) =>
    html`<span style="display: inline-flex; padding: var(--space-unit); background: var(--gray900);">
      <z-link
        href="${args.href}"
        target="${args.target}"
        textcolor="inverse"
        icon="${args.icon}"
        iconposition="${args.iconposition}"
        htmlid="${args.htmlid}"
        htmltabindex="${args.htmltabindex}"
        isdisabled="${args.isdisabled}"
        isactive="${args.isactive}"
        underline="${args.underline}"
        >z-link</z-link
      >
    </span>`,

  name: "Inverse",
};

export const InlineWithoutIcon = {
  render: (args) =>
    html`<span class="body-1"
      >Clicca sullo
      <z-link
        href="${args.href}"
        target="${args.target}"
        textcolor="${args.textcolor}"
        htmlid="${args.htmlid}"
        htmltabindex="${args.htmltabindex}"
        isdisabled="${args.isdisabled}"
        isactive="${args.isactive}"
        underline="true"
        >z-link</z-link
      >.</span
    >`,

  name: "Inline without icon",
};
