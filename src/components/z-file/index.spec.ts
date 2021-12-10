import { newSpecPage } from "@stencil/core/testing";

import { ZFile } from "./index";

describe("Suite test ZFile", () => {
  it("Test render ZFile vuoto", async () => {

    const page = await newSpecPage({
      components: [ZFile],
      html: `<z-file></z-file>`
    });

    expect(page.root).toEqualHtml(`
      <z-file>
        <mock:shadow-root>
          <div>
            This is your z-file component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-file>
    `)
  });
});

