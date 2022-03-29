import { addDecorator, setCustomElementsManifest } from '@storybook/web-components';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from "@storybook/addon-knobs";

import customElements from '../custom-elements.json';

// bound generated Stencil documentation with Props table (https://github.com/storybookjs/storybook/blob/next/addons/docs/web-components/README.md)
setCustomElementsManifest(customElements);

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
};

addDecorator(withA11y);
addDecorator(withKnobs);
