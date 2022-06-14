import { newSpecPage } from "@stencil/core/testing";

import { ZPopover } from "./index";

describe("Suite test ZPopover", () => {
  it("Test render ZPopover default", async () => {
    const page = await newSpecPage({
      components: [ZPopover],
      html: `<z-popover><z-button slot="trigger">Trigger</z-button><div slot="popover">Content</div></z-popover>`,
    });

    expect(page.root).toEqualHtml(`
      <z-popover>
        <div tabindex="0">
          <z-button slot="trigger">Trigger</z-button>
        </div>
        <div class="after-up border-radius-small popover-content-container shadow-1" style="background-color: var(--color-white); padding: 8px;">
          <div slot="popover">
            Content
          </div>
        </div>
      </z-popover>
    `);
  });

  it("Test render ZPopover position prop", async () => {
    const page = await newSpecPage({
      components: [ZPopover],
      html: `<z-popover position="after-center"><z-button slot="trigger">Trigger</z-button><div slot="popover">Content</div></z-popover>`,
    });

    expect(page.root).toEqualHtml(`
      <z-popover position="after-center">
        <div tabindex="0">
          <z-button slot="trigger">Trigger</z-button>
        </div>
        <div class="after-center border-radius-small popover-content-container shadow-1" style="background-color: var(--color-white); padding: 8px;">
          <div slot="popover">
            Content
          </div>
        </div>
      </z-popover>
    `);
  });

  it("Test render ZPopover radius prop", async () => {
    const page = await newSpecPage({
      components: [ZPopover],
      html: `<z-popover border-radius="medium"><z-button slot="trigger">Trigger</z-button><div slot="popover">Content</div></z-popover>`,
    });

    expect(page.root).toEqualHtml(`
      <z-popover border-radius="medium">
        <div tabindex="0">
          <z-button slot="trigger">Trigger</z-button>
        </div>
        <div class="after-up border-radius-medium popover-content-container shadow-1" style="background-color: var(--color-white); padding: 8px;">
          <div slot="popover">
            Content
          </div>
        </div>
      </z-popover>
    `);
  });

  it("Test render ZPopover shadow prop", async () => {
    const page = await newSpecPage({
      components: [ZPopover],
      html: `<z-popover box-shadow="shadow-4"><z-button slot="trigger">Trigger</z-button><div slot="popover">Content</div></z-popover>`,
    });

    expect(page.root).toEqualHtml(`
      <z-popover box-shadow="shadow-4">
        <div tabindex="0">
          <z-button slot="trigger">Trigger</z-button>
        </div>
        <div class="after-up border-radius-small popover-content-container shadow-4" style="background-color: var(--color-white); padding: 8px;">
          <div slot="popover">
            Content
          </div>
        </div>
      </z-popover>
    `);
  });

  it("Test render ZPopover background prop", async () => {
    const page = await newSpecPage({
      components: [ZPopover],
      html: `<z-popover background-color="blue800"><z-button slot="trigger">Trigger</z-button><div slot="popover">Content</div></z-popover>`,
    });

    expect(page.root).toEqualHtml(`
      <z-popover background-color="blue800">
        <div tabindex="0">
          <z-button slot="trigger">Trigger</z-button>
        </div>
        <div class="after-up border-radius-small popover-content-container shadow-1" style="background-color: var(--blue800); padding: 8px;">
          <div slot="popover">
            Content
          </div>
        </div>
      </z-popover>
    `);
  });

  it("Test render ZPopover show-arrow prop", async () => {
    const page = await newSpecPage({
      components: [ZPopover],
      html: `<z-popover show-arrow="true"><z-button slot="trigger">Trigger</z-button><div slot="popover">Content</div></z-popover>`,
    });

    expect(page.root).toEqualHtml(`
      <z-popover show-arrow="true">
        <div tabindex="0">
          <z-button slot="trigger">Trigger</z-button>
        </div>
        <div class="after-up border-radius-small popover-content-container shadow-1 show-arrow" style="background-color: var(--color-white); padding: 8px;">
          <div slot="popover">
            Content
          </div>
        </div>
      </z-popover>
    `);
  });
});
