import { newSpecPage } from "@stencil/core/testing";

import { ZCardAlert } from "./index";

describe("Suite test ZCardAlert", () => {
  it("Test render ZCardAlert vuoto", async () => {

    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-alert>
        <mock:shadow-root>
          <div>
            This is your z-card-alert component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-card-alert>
    `)
  });
});

