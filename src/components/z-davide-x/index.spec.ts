import { newSpecPage } from "@stencil/core/testing";

import { ZDavideX } from "./index";

describe("Suite test ZDavideX", () => {
  it("Test render ZDavideX vuoto", async () => {

    const page = await newSpecPage({
      components: [ZDavideX],
      html: `<z-davide-x></z-davide-x>`
    });

    expect(page.root).toEqualHtml(`
      <z-davide-x>
        <mock:shadow-root>
          <div>
            This is your z-davide-x component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-davide-x>
    `)
  });
});

