import { newSpecPage } from '@stencil/core/testing';

import { ZButton } from '../z-button';

it('should render my component', async () => {
  const page = await newSpecPage({
    components: [ZButton],
    html: `<z-button></z-button>`,
  });
  expect(page.root).toEqualHtml(`
    <z-button>
      <mock:shadow-root>
        <button></button>
      </mock:shadow-root>
    </z-button>
  `);
});

it('should render my component', async () => {
  const page = await newSpecPage({
    components: [ZButton],
    html: `<z-button label="test"></z-button>`,
  });
  expect(page.root).toEqualHtml(`
    <z-button label="test">
      <mock:shadow-root>
        <button>test</button>
      </mock:shadow-root>
    </z-button>
  `);
});

it('should render my component', async () => {
  const page = await newSpecPage({
    components: [ZButton],
    html: `<z-button label="test" has-icon="true"></z-button>`,
  });
  expect(page.root).toEqualHtml(`
    <z-button label="test" has-icon="true">
      <mock:shadow-root>
        <button><icon></icon>test</button>
      </mock:shadow-root>
    </z-button>
  `);
});

it('should render my component', async () => {
  const page = await newSpecPage({
    components: [ZButton],
    html: `<z-button label="test" has-icon="true" is-primary=true"></z-button>`,
  });
  expect(page.root).toEqualHtml(`
    <z-button label="test" has-icon="true" is-primary=true">
      <mock:shadow-root>
        <button><icon></icon>test</button>
      </mock:shadow-root>
    </z-button>
  `);
});
