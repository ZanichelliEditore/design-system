import { newSpecPage } from "@stencil/core/testing";

import { ZPopoverDeprecated } from "./index";

describe("Suite test ZPopoverDeprecated", () => {
  it("Test render ZPopoverDeprecated default", async () => {
    const page = await newSpecPage({
      components: [ZPopoverDeprecated],
      html: `<z-popover-deprecated><z-button slot="trigger">Trigger</z-button><div slot="popover">Content</div></z-popover-deprecated>`,
    });

    expect(page.root).toEqualHtml(`
      <z-popover-deprecated>
        <div tabindex="0">
          <z-button slot="trigger">Trigger</z-button>
        </div>
        <div class="after-up border-radius-small popover-content-container shadow-1" style="background-color: var(--color-white); padding: 8px;">
          <div slot="popover">
            Content
          </div>
        </div>
      </z-popover-deprecated>
    `);
  });

  it("Test render ZPopoverDeprecated position prop", async () => {
    const page = await newSpecPage({
      components: [ZPopoverDeprecated],
      html: `<z-popover-deprecated position="after-center"><z-button slot="trigger">Trigger</z-button><div slot="popover">Content</div></z-popover-deprecated>`,
    });

    expect(page.root).toEqualHtml(`
      <z-popover-deprecated position="after-center">
        <div tabindex="0">
          <z-button slot="trigger">Trigger</z-button>
        </div>
        <div class="after-center border-radius-small popover-content-container shadow-1" style="background-color: var(--color-white); padding: 8px;">
          <div slot="popover">
            Content
          </div>
        </div>
      </z-popover-deprecated>
    `);
  });

  it("Test render ZPopoverDeprecated radius prop", async () => {
    const page = await newSpecPage({
      components: [ZPopoverDeprecated],
      html: `<z-popover-deprecated border-radius="medium"><z-button slot="trigger">Trigger</z-button><div slot="popover">Content</div></z-popover-deprecated>`,
    });

    expect(page.root).toEqualHtml(`
      <z-popover-deprecated border-radius="medium">
        <div tabindex="0">
          <z-button slot="trigger">Trigger</z-button>
        </div>
        <div class="after-up border-radius-medium popover-content-container shadow-1" style="background-color: var(--color-white); padding: 8px;">
          <div slot="popover">
            Content
          </div>
        </div>
      </z-popover-deprecated>
    `);
  });

  it("Test render ZPopoverDeprecated shadow prop", async () => {
    const page = await newSpecPage({
      components: [ZPopoverDeprecated],
      html: `<z-popover-deprecated box-shadow="shadow-4"><z-button slot="trigger">Trigger</z-button><div slot="popover">Content</div></z-popover-deprecated>`,
    });

    expect(page.root).toEqualHtml(`
      <z-popover-deprecated box-shadow="shadow-4">
        <div tabindex="0">
          <z-button slot="trigger">Trigger</z-button>
        </div>
        <div class="after-up border-radius-small popover-content-container shadow-4" style="background-color: var(--color-white); padding: 8px;">
          <div slot="popover">
            Content
          </div>
        </div>
      </z-popover-deprecated>
    `);
  });

  it("Test render ZPopoverDeprecated background prop", async () => {
    const page = await newSpecPage({
      components: [ZPopoverDeprecated],
      html: `<z-popover-deprecated background-color="blue800"><z-button slot="trigger">Trigger</z-button><div slot="popover">Content</div></z-popover-deprecated>`,
    });

    expect(page.root).toEqualHtml(`
      <z-popover-deprecated background-color="blue800">
        <div tabindex="0">
          <z-button slot="trigger">Trigger</z-button>
        </div>
        <div class="after-up border-radius-small popover-content-container shadow-1" style="background-color: var(--blue800); padding: 8px;">
          <div slot="popover">
            Content
          </div>
        </div>
      </z-popover-deprecated>
    `);
  });

  it("Test render ZPopoverDeprecated show-arrow prop", async () => {
    const page = await newSpecPage({
      components: [ZPopoverDeprecated],
      html: `<z-popover-deprecated show-arrow="true"><z-button slot="trigger">Trigger</z-button><div slot="popover">Content</div></z-popover-deprecated>`,
    });

    expect(page.root).toEqualHtml(`
      <z-popover-deprecated show-arrow="true">
        <div tabindex="0">
          <z-button slot="trigger">Trigger</z-button>
        </div>
        <div class="after-up border-radius-small popover-content-container shadow-1 show-arrow" style="background-color: var(--color-white); padding: 8px;">
          <div slot="popover">
            Content
          </div>
        </div>
      </z-popover-deprecated>
    `);
  });
});
