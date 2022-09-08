import {newSpecPage} from "@stencil/core/testing";

import {ZInputLabel} from "./index";

describe("Suite test ZInputLabel", () => {
  it("Test render ZInputLabel - empty", async () => {
    const page = await newSpecPage({
      components: [ZInputLabel],
      html: `<z-input-label></z-input-label>`,
    });

    expect(page.root).toEqualHtml(`
      <z-input-label>
        <mock:shadow-root>
          <label class=""></label>
        </mock:shadow-root>
      </z-input-label>
    `);
  });

  it("Test render ZInputLabel - with props", async () => {
    const page = await newSpecPage({
      components: [ZInputLabel],
      html: `<z-input-label htmlfor="idtest" value="label"></z-input-label>`,
    });

    expect(page.root).toEqualHtml(`
      <z-input-label htmlfor="idtest" value="label">
        <mock:shadow-root>
          <label htmlfor="idtest" class="">label</label>
        </mock:shadow-root>
      </z-input-label>
    `);
  });

  it("Test render ZInputLabel - disabled", async () => {
    const page = await newSpecPage({
      components: [ZInputLabel],
      html: `<z-input-label value="label" disabled></z-input-label>`,
    });

    expect(page.root).toEqualHtml(`
      <z-input-label value="label" disabled>
        <mock:shadow-root>
          <label class="disabled">label</label>
        </mock:shadow-root>
      </z-input-label>
    `);
  });
});
