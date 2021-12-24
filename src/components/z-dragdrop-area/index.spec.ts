import { newSpecPage } from "@stencil/core/testing";

import { ZDragdropArea } from "./index";

describe("Suite test ZDragdropArea", () => {
  it("Test render ZDragdropArea vuoto", async () => {

    const page = await newSpecPage({
      components: [ZDragdropArea],
      html: `<z-dragdrop-area></z-dragdrop-area>`
    });

    expect(page.root).toEqualHtml(`
      <z-dragdrop-area>
        <mock:shadow-root>
          <div>
            This is your z-dragdrop-area component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-dragdrop-area>
    `)
  });
});

