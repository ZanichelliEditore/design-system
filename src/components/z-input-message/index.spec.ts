import {newSpecPage} from "@stencil/core/testing";

import {ZInputMessage} from "./index";

describe("Suite test ZInputMessage", () => {
  it("Test render ZInputMessage - empty", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message aria-label=""></z-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-input-message aria-label="">
        <mock:shadow-root>
          <div role="alert"></div>
          <div role="status"></div>
          <div></div>
        </mock:shadow-root>
      </z-input-message>
    `);
  });

  it("Test render ZInputMessage - with message", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message tabindex="0" aria-label="message" message="message"></z-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-input-message tabindex="0" aria-label="message" message="message">
        <mock:shadow-root>
          <div role="alert"></div>
          <div role="status"></div>
          <div><span>message</span></div>
        </mock:shadow-root>
      </z-input-message>
    `);
  });

  it("Test render ZInputMessage - with status/message", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message tabindex="0" aria-label="message" message="message" status="success"></z-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-input-message tabindex="0" aria-label="message" message="message" status="success">
        <mock:shadow-root>
          <div role="alert"></div>
          <div role="status">
            <z-icon name="checkmark-circle"></z-icon>
            <span>message</span>
          </div>
          <div></div>
        </mock:shadow-root>
      </z-input-message>
    `);
  });
});
