import { newSpecPage } from "@stencil/core/testing";

import { ZChip } from "./index";

describe("Suite test ZChip", () => {
  it("Test render ZChip empty", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip type="default"></z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip type="default">
          <mock:shadow-root>
          <button class="default" tabindex="0">
          <slot></slot>&nbsp;
          </button>
        </mock:shadow-root>
      </z-chip>
    `);
  });

  it("Test render ZChip with attributes", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip boldtext="20" regulartext="libri trovati" type="default"></z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip type="default" boldtext="20" regulartext="libri trovati">
          <mock:shadow-root>
            <button class="default" tabindex="0">
              <span class="boldtext">20</span>&nbsp;libri trovati
            </button>
          </mock:shadow-root>
        </z-chip>
    `);
  });

  it("Test render ZChip with children", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip type="default"><z-body>ciao 1</z-body></z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip type="default">
          <mock:shadow-root>
            <button class="default" tabindex="0">
              <slot />
            </button>
          </mock:shadow-root>
          <z-body>ciao 1</z-body>
        </z-chip>
    `);
  });

  it("Test render ZChip with attributes and children", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip type="default" boldtext="20" regulartext="libri trovati">
               <z-body>ciao 1</z-body>
             </z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip type="default" boldtext="20" regulartext="libri trovati">
          <mock:shadow-root>
            <button class="default" tabindex="0">
              <span class="boldtext">20</span>&nbsp;libri trovati
            </button>
          </mock:shadow-root>
          <z-body>ciao 1</z-body>
        </z-chip>
    `);
  });

  it("Test render ZChip with attributes and children and type mini", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip type="mini" boldtext="20" regulartext="libri trovati">
               <z-body>ciao 1</z-body>
             </z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip type="mini" boldtext="20" regulartext="libri trovati">
          <mock:shadow-root>
            <button class="mini" tabindex="0">
              <span class="boldtext">20</span>&nbsp;libri trovati
            </button>
          </mock:shadow-root>
          <z-body>ciao 1</z-body>
        </z-chip>
    `);
  });

  it("Test render ZChip with attributes disabled", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip type="mini" disabled="true" boldtext="20" regulartext="libri trovati">
               <z-body>ciao 1</z-body>
             </z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip type="mini" disabled="" boldtext="20" regulartext="libri trovati">
          <mock:shadow-root>
            <button class="disabled mini" tabindex="0">
              <span class="boldtext">20</span>&nbsp;libri trovati
            </button>
          </mock:shadow-root>
          <z-body>ciao 1</z-body>
        </z-chip>
    `);
  });
});
