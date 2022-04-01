import { addDecorator } from '@storybook/web-components';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from "@storybook/addon-knobs";
import "../src/global.css";
import dedent from 'ts-dedent';

export const parameters = {
  viewport: {
    viewports: [
      {
        type: 'mobile',
        name: 'mobile',
        styles: {
          width: '320px',
          height: '480px',
        },
      },
      {
        type: 'tablet',
        name: 'tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      {
        type: 'desktop',
        name: 'desktop',
        styles: {
          width: '1152px',
          height: '100%',
        },
      },
      {
        type: 'desktop',
        name: 'wide',
        styles: {
          width: '1366px',
          height: '100%',
        },
      },
    ],
    defaultViewport: 'responsive',
  },
  docs: {
    // fix wrong indentation due to the story template string (html`...`)
    transformSource: (input) => dedent(input),
  },
};

addDecorator(withA11y);
addDecorator(withKnobs);
