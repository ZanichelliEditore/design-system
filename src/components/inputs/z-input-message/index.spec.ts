import { newSpecPage } from "@stencil/core/testing";

import { ZInputMessage } from "./index";

describe("Suite test ZInputMessage", () => {
  it("Test render ZInputMessage - empty", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message></z-input-message>`
    });

    expect(page.root).toEqualHtml(`
      <z-input-message>
        <mock:shadow-root>
          <span class="statusMsg">
            <span></span>
          </span>
        </mock:shadow-root>
      </z-input-message>
    `);
  });

  it("Test render ZInputMessage - with message", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message message="message"></z-input-message>`
    });

    expect(page.root).toEqualHtml(`
      <z-input-message message="message">
        <mock:shadow-root>
          <span class="statusMsg">
            <span>message</span>
          </span>
        </mock:shadow-root>
      </z-input-message>
    `);
  });

  it("Test render ZInputMessage - with status/message", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message message="message" status="success"></z-input-message>`
    });

    expect(page.root).toEqualHtml(`
      <z-input-message message="message" status="success">
        <mock:shadow-root>
          <span class="msg_success statusMsg">
            <z-icon name="checkmark-circle" width="14" height="14"></z-icon>
            <span>message</span>
          </span>
        </mock:shadow-root>
      </z-input-message>
    `);
  });
});
