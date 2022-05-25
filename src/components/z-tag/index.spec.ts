import { newSpecPage } from "@stencil/core/testing";

import { ZTag } from "./index";

describe("Suite test ZTag", () => {
  it("Test render z-tag empty", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb"></z-tag>`,
    });

    expect(page.root).toEqualHtml(
      `<z-tag class=\"body-5-sb\" style=\"color: var(--color-primary03); fill: var(--color-primary03); background-color: var(--color-hover-primary);\"></z-tag>`
    );
  });

  it("Test render z-tag with icon", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb" icon="gear"></z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag class="body-5-sb" icon="gear" style="color: var(--color-primary03); fill: var(--color-primary03); background-color: var(--color-hover-primary);">
        <z-icon name="gear"></z-icon>
      </z-tag>`);
  });

  it("Test render z-tag with text", async () => {
    const page = await newSpecPage({
      components: [ZTag],
      html: `<z-tag class="body-5-sb" text="no progress"></z-tag>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tag class="body-5-sb" text="no progress" style="color: var(--color-primary03); fill: var(--color-primary03); background-color: var(--color-hover-primary);">
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
      <z-tag class="body-5-sb" icon="gear" text="no progress" style="color: var(--color-primary03); fill: var(--color-primary03); background-color: var(--color-hover-primary);">
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
      html: `<z-tag class="body-5-sb" icon="gear" text="no progress" bgToken="--avatar-C19"></z-tag>`,
    });

    expect(page.root).toEqualHtml(`<z-tag bgtoken=\"--avatar-C19\" class=\"body-5-sb\" icon=\"gear\" text=\"no progress\" style=\"color: var(--color-primary03); fill: var(--color-primary03); background-color: var(--avatar-C19);\>
    <z-icon name=\"gear\"></z-icon>
    <span>
      no progress
    </span>
  </z-tag>
    `);
  });

  // it("Test render icon", async () => {
  //   const page = await newSpecPage({
  //     components: [ZTag],
  //     html: `<z-tag icon="gear"></z-tag>`,
  //   });

  //   expect(page.root).toEqualHtml(
  //     `<z-tag class="body-5-sb" status="default" icon="gear">
  //         <z-icon name="gear" />
  //     </z-tag>`
  //   );
  // });

  // it("Test render text", async () => {
  //   const page = await newSpecPage({
  //     components: [ZTag],
  //     html: `<z-tag text="in progress"></z-tag>`,
  //   });

  //   expect(page.root).toEqualHtml(
  //     `<z-tag class="body-5-sb" status="default" text="in progress">
  //         <span>in progress</span>
  //     </z-tag>`
  //   );
  // });

  // it("Test render both icon and text", async () => {
  //   const page = await newSpecPage({
  //     components: [ZTag],
  //     html: `<z-tag icon="gear" text="in progress"></z-tag>`,
  //   });

  //   expect(page.root).toEqualHtml(
  //     `<z-tag class="body-5-sb" icon="gear" status="default" text="in progress">
  //         <z-icon name="gear"></z-icon>
  //         <span>in progress</span>
  //     </z-tag>`
  //   );
  // });

  // it("Test expandable prop", async () => {
  //   const page = await newSpecPage({
  //     components: [ZTag],
  //     html: `<z-tag expandable="true"></z-tag>`,
  //   });

  //   expect(page.root).toEqualHtml(
  //     `<z-tag class="body-5-sb" status="default" expandable="true">
  //     </z-tag>`
  //   );
  // });

  // it("Test status prop", async () => {
  //   const page = await newSpecPage({
  //     components: [ZTag],
  //     html: `<z-tag status="warning"></z-tag>`,
  //   });

  //   expect(page.root).toEqualHtml(
  //     `<z-tag class="body-5-sb" status="warning">
  //     </z-tag>`
  //   );
  // });

  // it("Test variant prop", async () => {
  //   const page = await newSpecPage({
  //     components: [ZTag],
  //     html: `<z-tag variant="dark"></z-tag>`,
  //   });

  //   expect(page.root).toEqualHtml(
  //     `<z-tag class="body-5-sb dark" status="default" variant="dark">
  //     </z-tag>`
  //   );
  // });
});
