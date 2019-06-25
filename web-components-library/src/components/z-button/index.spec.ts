import { newSpecPage } from '@stencil/core/testing';

import { ZButton } from '../z-button';

it('senza attributi', async () => {
  const page = await newSpecPage({
    components: [ZButton],
    html: `<z-button></z-button>`,
  });
  expect(page.root).toEqualHtml(`
    <z-button>
      <mock:shadow-root>
        <button class="primary"></button>
      </mock:shadow-root>
    </z-button>
  `);
});

it('label', async () => {
  const page = await newSpecPage({
    components: [ZButton],
    html: `<z-button label="test"></z-button>`,
  });
  expect(page.root).toEqualHtml(`
    <z-button label="test">
      <mock:shadow-root>
        <button class="primary">test</button>
      </mock:shadow-root>
    </z-button>
  `);
});

it('solo label has-icon', async () => {
  const page = await newSpecPage({
    components: [ZButton],
    html: `<z-button label="test" has-icon="true"></z-button>`,
  });
  expect(page.root).toEqualHtml(`
    <z-button label="test" has-icon="true">
      <mock:shadow-root>
        <button class="primary"><icon></icon>test</button>
      </mock:shadow-root>
    </z-button>
  `);
});

it('label has-icon is-primary', async () => {
  const page = await newSpecPage({
    components: [ZButton],
    html: `<z-button label="test" has-icon="true" is-primary="true"></z-button>`,
  });
  expect(page.root).toEqualHtml(`
    <z-button label="test" has-icon="true" is-primary="true">
      <mock:shadow-root>
        <button class="primary"><icon></icon>test</button>
      </mock:shadow-root>
    </z-button>
  `);
});


it('label has-icon is-primary', async () => {
  const page = await newSpecPage({
    components: [ZButton],
    html: `<z-button label="test" has-icon="true" is-primary="false"></z-button>`,
  });
  expect(page.root).toEqualHtml(`
    <z-button label="test" has-icon="true" is-primary="false">
      <mock:shadow-root>
        <button class="secondary"><icon></icon>test</button>
      </mock:shadow-root>
    </z-button>
  `);
});
