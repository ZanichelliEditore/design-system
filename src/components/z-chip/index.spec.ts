import {newSpecPage} from "@stencil/core/testing";
import {ZChip} from "./index";

describe("Suite test ZChip", () => {
  it("Test render ZChip empty", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip type="default"></z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip type="default" variant="outline">
        <div class="default outline z-chip-container"></div>
      </z-chip>
    `);
  });

  it("Test render ZChip type medium", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip type="medium">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip type="medium" variant="outline">
        <div class="medium outline z-chip-container">text</div>
      </z-chip>
    `);
  });

  it("Test render ZChip with icon", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip icon="pdf" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip icon="pdf" type="default" variant="outline">
        <div class="default outline z-chip-container">
          <z-icon name="pdf"></z-icon>
          text
        </div>
      </z-chip>
    `);
  });

  it("Test render ZChip with interactive-icon", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip icon="" interactive-icon="multiply-circled" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip icon="" interactive-icon="multiply-circled" type="default" variant="outline">
        <div class="default outline z-chip-container z-chip-interactive">
          text
          <button aria-label="" type="button">
            <z-icon class="interactive-icon" name="multiply-circled"></z-icon>
          </button>
        </div>
      </z-chip>
    `);
  });

  it("Test render ZChip with interactive-icon and icon ", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip icon="pdf" interactive-icon="multiply-circled" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip icon="pdf" interactive-icon="multiply-circled" type="default" variant="outline">
        <div class="default outline z-chip-container z-chip-interactive">
          <z-icon name="pdf"></z-icon>
          text
          <button aria-label="" type="button">
            <z-icon class="interactive-icon" name="multiply-circled"></z-icon>
          </button>
        </div>
      </z-chip>
    `);
  });

  it("Test render ZChip with interactive-icon and icon disabled", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip disabled icon="pdf" interactive-icon="multiply-circled" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip disabled="" icon="pdf" interactive-icon="multiply-circled" type="default" variant="outline">
        <div aria-disabled="" class="default outline z-chip-container z-chip-interactive">
            <z-icon name="pdf"></z-icon>
            text
            <button aria-label="" disabled="" type="button">
              <z-icon class="interactive-icon" name="multiply-circled"></z-icon>
            </button>
        </div>
      </z-chip>
    `);
  });

  it("Test render ZChip with interactive-icon and icon type small", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip icon="pdf" interactive-icon="multiply-circled" type="small">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip icon="pdf" interactive-icon="multiply-circled" type="small" variant="outline">
        <div class="outline small z-chip-container z-chip-interactive">
          <z-icon name="pdf"></z-icon>
          text
          <button aria-label="" type="button">
            <z-icon class="interactive-icon" name="multiply-circled"></z-icon>
          </button>
        </div>
      </z-chip>
    `);
  });

  it("Test render ZChip Filled variant", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip variant="filled" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip variant="filled" type="default">
        <div class="default filled z-chip-container">text</div>
      </z-chip>
    `);
  });

  it("Test render ZChip Soft variant", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip variant="soft" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip variant="soft" type="default">
        <div class="default soft z-chip-container">text</div>
      </z-chip>
    `);
  });

  it("Test render ZChip Filled variant with interactive-icon and icon disabled", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip disabled icon="pdf" interactive-icon="multiply-circled" variant="filled" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip disabled="" icon="pdf" interactive-icon="multiply-circled" variant="filled" type="default">
        <div aria-disabled="" class="default filled z-chip-container z-chip-interactive">
            <z-icon name="pdf"></z-icon>
            text
            <button aria-label="" disabled="" type="button">
              <z-icon class="interactive-icon" name="multiply-circled"></z-icon>
            </button>
        </div>
      </z-chip>
    `);
  });

  it("Test render ZChip Soft variant with interactive-icon and icon disabled", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip disabled icon="pdf" interactive-icon="multiply-circled" variant="soft" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip disabled="" icon="pdf" interactive-icon="multiply-circled" variant="soft" type="default">
        <div aria-disabled="" class="default soft z-chip-container z-chip-interactive">
            <z-icon name="pdf"></z-icon>
            text
            <button aria-label="" disabled="" type="button">
              <z-icon class="interactive-icon" name="multiply-circled"></z-icon>
            </button>
        </div>
      </z-chip>
    `);
  });
});
