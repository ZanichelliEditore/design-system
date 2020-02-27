import { newSpecPage } from "@stencil/core/testing";

import { ZChip } from "./index";

describe("Suite test ZChip", () => {
  it("Test render ZChip empty", async () => {

    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip></z-chip>`
    });

    expect(page.root).toEqualHtml(`
        <z-chip>
          <mock:shadow-root>
          <div><span class="text-container"><span class="number"></span> </span></div>
        </mock:shadow-root>
      </z-chip>
    `);
  });
  
  
  it("Test render ZChip with values", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip number="20" label="libri trovati"></z-chip>`
    });

    expect(page.root).toEqualHtml(`
        <z-chip number="20" label="libri trovati">
          <mock:shadow-root>
          <div>
            <span class="text-container">
              <span class="number">20</span>&nbsp;libri trovati</span>
          </div>
        </mock:shadow-root>
      </z-chip>
    `);
  });
});

