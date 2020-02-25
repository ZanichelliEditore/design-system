import { setCustomElements } from '@storybook/web-components';
import customElements from '../web-components-library/custom-elements.json';

// bound generated Stencil documentation with Props table (https://github.com/storybookjs/storybook/blob/next/addons/docs/web-components/README.md)
setCustomElements(customElements);