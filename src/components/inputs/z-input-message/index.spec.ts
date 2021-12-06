import { newSpecPage } from "@stencil/core/testing";

import { ZInputMessage } from "./index";

describe("Suite test ZInputMessage", () => {
  it("Test render ZInputMessage - empty", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message role="alert" aria-label=""></z-input-message>`
    });

    expect(page.root).toEqualHtml(`
      <z-input-message role="alert" tabindex="-1" aria-label="">
        <mock:shadow-root>
          <span></span>
        </mock:shadow-root>
      </z-input-message>
    `);
  });

  it("Test render ZInputMessage - with message", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message role="alert" tabindex="0" aria-label="message" message="message"></z-input-message>`
    });

    expect(page.root).toEqualHtml(`
      <z-input-message role="alert" tabindex="0" aria-label="message" message="message">
        <mock:shadow-root>
          <span>message</span>
        </mock:shadow-root>
      </z-input-message>
    `);
  });

  it("Test render ZInputMessage - with status/message", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message role="alert" tabindex="0" aria-label="message" message="message" status="success"></z-input-message>`
    });

    expect(page.root).toEqualHtml(`
      <z-input-message role="alert" tabindex="0" aria-label="message" message="message" status="success">
        <mock:shadow-root>
          <z-icon name="checkmark-circle"></z-icon>
          <span>message</span>
        </mock:shadow-root>
      </z-input-message>
    `);
  });
});
