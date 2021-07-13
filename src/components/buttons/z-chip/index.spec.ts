import { newSpecPage } from "@stencil/core/testing";

import { ZChip } from "./index";

describe("Suite test ZChip", () => {
  it("Test render ZChip empty", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip></z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip>
          <mock:shadow-root>
          <div>
          <slot></slot>&nbsp;
          </div>
        </mock:shadow-root>
      </z-chip>
    `);
  });

  it("Test render ZChip with attributes", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip boldtext="20" regulartext="libri trovati"></z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip boldtext="20" regulartext="libri trovati">
          <mock:shadow-root>
            <div>
              <span class="boldtext">20</span>&nbsp;libri trovati
            </div>
          </mock:shadow-root>
        </z-chip>
    `);
  });

  it("Test render ZChip with children", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip><z-body>ciao 1</z-body></z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip>
          <mock:shadow-root>
            <div>
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
      html: `<z-chip boldtext="20" regulartext="libri trovati">
               <z-body>ciao 1</z-body>
             </z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip boldtext="20" regulartext="libri trovati">
          <mock:shadow-root>
            <div>
              <span class="boldtext">20</span>&nbsp;libri trovati
            </div>
          </mock:shadow-root>
          <z-body>ciao 1</z-body>
        </z-chip>
    `);
  });
});
