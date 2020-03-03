import { create } from '@storybook/theming/create';

export default create({
    base: 'light',

    colorPrimary: '#0056c1',
    colorSecondary: '#0056c1',

    // UI
    appBg: '#f6f6f6',
    appContentBg: '#fff',
    appBorderColor: 'transparent',
    appBorderRadius: 4,

    // Typography
    fontBase: '"IBM Plex Sans", sans-serif',
    fontCode: '"IBM Plex Mono", monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: '#fff',

    // Toolbar default and active colors
    barTextColor: '#000',
    barSelectedColor: '#000',
    barBg: '#e6e6e6',

    // Form colors
    inputBg: '#fff',
    inputBorder: '#676b6f',
    inputTextColor: '#000',
    inputBorderRadius: 4,

    brandTitle: 'Design System — Zanichelli Editore',
    brandImage: '/src/assets/images/png/zanichelli-logo.png',
});
