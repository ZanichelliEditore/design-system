import { newSpecPage } from "@stencil/core/testing";

import { ContextualMenu } from "./index";

describe("Suite test ContextualMenu", () => {
  it("Test render ContextualMenu vuoto", async () => {

    const page = await newSpecPage({
      components: [ContextualMenu],
      html: `<contextual-menu></contextual-menu>`
    });

    expect(page.root).toEqualHtml(`
      <contextual-menu>
        <mock:shadow-root>
          <div>
            This is your contextual-menu component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </contextual-menu>
    `)
  });
});

