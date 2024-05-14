import {create} from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#0056c1",
  colorSecondary: "#0056c1",

  // UI
  appBg: "#f6f6f6",
  appContentBg: "#fff",
  appBorderColor: "#D6D6D6",
  appBorderRadius: 2,

  // Typography
  fontBase: "'IBM Plex Sans', sans-serif",
  fontCode: "'IBM Plex Mono', monospace",

  // Text colors
  textColor: "#3D3D3D",
  textInverseColor: "#fff",

  // Toolbar default and active colors
  barTextColor: "#3D3D3D",
  barSelectedColor: "#0056c1",
  barBg: "#fff",

  // Form colors
  inputBg: "#fff",
  inputBorder: "#3D3D3D",
  inputTextColor: "#3D3D3D",
  inputBorderRadius: 2,

  // Branding
  brandTitle: "Design System — Zanichelli Editore",
  brandImage: "./images/png/zanichelli-logo.png",
  brandUrl: "https://www.zanichelli.it",
  brandTarget: "_blank",
});
