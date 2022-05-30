import { newSpecPage } from "@stencil/core/testing";

import { ZTag } from "./index";

describe("Suite test ZTag", () => {
  it("Test render z-tag empty", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb"></z-tag>`,
    });

    expect(page.root).toEqualHtml(
      `<z-tag class="body-5-sb"><div></div></z-tag>`
    );
  });

  it("Test render z-tag with icon", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb" icon="gear"></z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag class="body-5-sb" icon="gear">
        <z-icon name="gear" height="15" width="15"></z-icon>
        <div></div>
      </z-tag>`);
  });

  it("Test render z-tag with text", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb">my custom element</z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag class="body-5-sb">
      <div>my custom element</div>
      </z-tag>
    `);
  });

  it("Test render z-tag with icon and text", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb" icon="gear">my custom element</z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag class="body-5-sb" icon="gear" >
        <z-icon name="gear" height="15" width="15"></z-icon>
        <div>my custom element</div>
      </z-tag>
    `);
  });

  it("Test render z-tag with icon and text with Token", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb" icon="gear" style="--iconTextToken: var(--color-white); --bgToken: var(--avatar-C19);">my custom element</z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag class="body-5-sb" icon="gear" style="--iconTextToken: var(--color-white); --bgToken: var(--avatar-C19);">
        <z-icon name="gear" height="15" width="15"></z-icon>
        <div>my custom element</div>
      </z-tag>
    `);
  });
});
