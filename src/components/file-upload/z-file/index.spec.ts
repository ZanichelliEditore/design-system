import { newSpecPage } from "@stencil/core/testing";

import { ZFile } from "./index";

describe("Suite test ZFile", () => {
  it("Test render ZFile vuoto", async () => {

    const page = await newSpecPage({
      components: [ZFile],
      html: `<z-file></z-file>`
    });
    // mock HTMLInputElement focus function
    HTMLInputElement.prototype.focus = jest.fn();

    expect(page.root).toEqualHtml(`
      <z-file tabindex="0" >
        <mock:shadow-root>
        <z-chip>
          <div class="chip-content">
            <slot></slot>
            <z-icon height="15" name="multiply-circled" width="15" tabindex="0" ></z-icon>
          </div>
        </z-chip>
        </mock:shadow-root>
      </z-file>
    `)


  });
});

