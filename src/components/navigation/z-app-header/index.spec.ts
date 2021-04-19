import { newSpecPage } from "@stencil/core/testing";

import { ZAppHeader } from "./index";

describe("Suite test ZAppHeader", () => {
  it("Test render empty ZAppHeader", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header></z-app-header>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-header>
        <mock:shadow-root>
          <slot name="title"></slot>
          <slot name="subtitle"></slot>
        </mock:shadow-root>
      </z-app-header>
    `)
  });

  it("Test render ZAppHeader with title", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-header>
        <mock:shadow-root>
          <slot name="title"></slot>
          <slot name="subtitle"></slot>
        </mock:shadow-root>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>
    `);
  });

  it("Test render ZAppHeader with title and subtitle", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header>
        <h1 slot="title">Titolo di test</h1>
        <h2 slot="subtitle">Sottotitolo di test</h2>
      </z-app-header>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-header>
        <mock:shadow-root>
          <slot name="title"></slot>
          <slot name="subtitle"></slot>
        </mock:shadow-root>
        <h1 slot="title">Titolo di test</h1>
        <h2 slot="subtitle">Sottotitolo di test</h2>
      </z-app-header>
    `);
  });
});

