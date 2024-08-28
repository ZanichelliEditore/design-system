import {newSpecPage} from "@stencil/core/testing";

import {ZTag} from "./index";

describe("Suite test ZTag", () => {
  it("Test render z-tag empty", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag></z-tag>`,
    });

    expect(page.root).toEqualHtml(`<z-tag><div></div></z-tag>`);
  });

  it("Test render z-tag with icon", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag icon="gear"></z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag icon="gear">
        <z-icon name="gear"></z-icon>
        <div></div>
      </z-tag>`);
  });

  it("Test render z-tag with text", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag>my custom element</z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag>
      <div>my custom element</div>
      </z-tag>
    `);
  });

  it("Test render z-tag with icon and text", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag icon="gear">my custom element</z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag icon="gear" >
        <z-icon name="gear"></z-icon>
        <div>my custom element</div>
      </z-tag>
    `);
  });

  it("Test render z-tag with icon and text with Token", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag icon="gear" style="--z-tag-text-color: var(--color-white); --z-tag-bg: var(--avatar-C19);">my custom element</z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag icon="gear" style="--z-tag-text-color: var(--color-white); --z-tag-bg: var(--avatar-C19);">
        <z-icon name="gear"></z-icon>
        <div>my custom element</div>
      </z-tag>
    `);
  });
});
