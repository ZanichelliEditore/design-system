import { newSpecPage } from "@stencil/core/testing";

import { ZStatusTag } from "./index";

describe("Suite test ZStatusTag", () => {
  it("Test render ZStatusTag vuoto", async () => {

    const page = await newSpecPage({
      components: [ZStatusTag],
      html: `<z-status-tag></z-status-tag>`
    });

    expect(page.root).toEqualHtml(`
      <z-status-tag>
        <mock:shadow-root>
          <div>
            This is your z-status-tag component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-status-tag>
    `)
  });
});

