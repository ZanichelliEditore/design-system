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
          <div class="default" tabindex="0">
          <slot></slot>&nbsp;
          </div>
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
            <div class="default" tabindex="0">
              <span class="boldtext">20</span>&nbsp;libri trovati
            </div>
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
            <div class="default" tabindex="0">
              <slot />
            </div>
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
            <div class="default" tabindex="0">
              <span class="boldtext">20</span>&nbsp;libri trovati
            </div>
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
            <div class="mini" tabindex="0">
              <span class="boldtext">20</span>&nbsp;libri trovati
            </div>
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
            <div class="disabled mini" tabindex="0">
              <span class="boldtext">20</span>&nbsp;libri trovati
            </div>
          </mock:shadow-root>
          <z-body>ciao 1</z-body>
        </z-chip>
    `);
  });

  it("Test render ZChip with attributes pressed", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip type="mini" pressed="true" boldtext="20" regulartext="libri trovati">
               <z-body>ciao 1</z-body>
             </z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip type="mini" pressed="" boldtext="20" regulartext="libri trovati">
          <mock:shadow-root>
            <div class="pressed mini" tabindex="0">
              <span class="boldtext">20</span>&nbsp;libri trovati
            </div>
          </mock:shadow-root>
          <z-body>ciao 1</z-body>
        </z-chip>
    `);
  });
});
