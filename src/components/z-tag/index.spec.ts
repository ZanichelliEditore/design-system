import { newSpecPage } from "@stencil/core/testing";

import { ZTag } from "./index";

describe("Suite test ZTag", () => {
  it("Test render z-tag empty", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb"></z-tag>`,
    });

    expect(page.root).toEqualHtml(`<z-tag class="body-5-sb"></z-tag>`);
  });

  it("Test render z-tag with icon", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb" icon="gear"></z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag class="body-5-sb" icon="gear">
        <z-icon name="gear"></z-icon>
      </z-tag>`);
  });

  it("Test render z-tag with text", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb" text="no progress"></z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag class="body-5-sb" text="no progress">
        <span>
          no progress
        </span>
      </z-tag>
    `);
  });

  it("Test render z-tag with icon and text", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb" icon="gear" text="no progress"></z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag class="body-5-sb" icon="gear" text="no progress">
        <z-icon name="gear"></z-icon>
        <span>
          no progress
        </span>
      </z-tag>
    `);
  });

  it("Test render z-tag with icon and text with iconTextToken", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb" icon="gear" text="no progress" style="--iconTextToken: var(--color-white); --bgToken: var(--avatar-C19);"></z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag class="body-5-sb" icon="gear" text="no progress" style="--iconTextToken: var(--color-white); --bgToken: var(--avatar-C19);">
        <z-icon name="gear"></z-icon>
        <span>
          no progress
        </span>
      </z-tag>
    `);
  });
});
