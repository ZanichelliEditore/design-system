import type {ThemeVarsPartial} from "@storybook/theming";
import {create} from "@storybook/theming/create";

const branding = {
  brandTitle: "Design System — Zanichelli Editore",
  brandImage: "./images/png/zanichelli-logo.png",
  brandUrl: "https://albe.zanichelli.it",
  brandTarget: "_blank",
};

const light = {
  base: "light",

  colorPrimary: "#0056c1",
  colorSecondary: "#0056c1",

  // UI
  appBg: "#f6f6f6",
  appPreviewBg: "#f6f6f6",
  appContentBg: "#fff",
  appBorderColor: "#d6d6d6",
  appBorderRadius: 2,

  // Typography
  fontBase: "'IBM Plex Sans', sans-serif",
  fontCode: "'IBM Plex Mono', monospace",

  // Text colors
  textColor: "#3d3d3d",
  textInverseColor: "#fff",
  // textMutedColor: "",

  // Toolbar default and active colors
  barTextColor: "#3d3d3d",
  barSelectedColor: "#0056c1",
  barHoverColor: "#002c63",
  barBg: "#fff",

  // Form colors
  inputBg: "#fff",
  inputBorder: "#3d3d3d",
  inputTextColor: "#3d3d3d",
  inputBorderRadius: 2,
  // buttonBg: "",
  // buttonBorder: "#292929",
  // booleanBg: "",
  // booleanSelectedBg: "",

  ...branding,
} satisfies ThemeVarsPartial;

const dark = {
  ...light,

  base: "dark",

  // colorPrimary: "#fff",
  colorPrimary: "#5893db",
  colorSecondary: "#5893db",

  // UI
  appBg: "#292929",
  appPreviewBg: "#fff",
  appContentBg: "#292929",
  appBorderColor: "#fff",

  // Text colors
  textColor: "#ebebeb",
  textInverseColor: "#292929",
  textMutedColor: "#C2C2C2",

  // Toolbar default and active colors
  barTextColor: "#ebebeb",
  // barSelectedColor: "#ebebeb",
  barSelectedColor: "#5893db",
  barHoverColor: "#5893db",
  barBg: "#292929",

  // Form colors
  buttonBg: "#fff",
  buttonBorder: "#fff",
  booleanBg: "#525252",
  booleanSelectedBg: "#5893db",
} satisfies ThemeVarsPartial;

export const lightTheme = create(light, {color: {seafoam: "#000"}});
export const darkTheme = create(dark);
