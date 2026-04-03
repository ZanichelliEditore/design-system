import {newSpecPage} from "@stencil/core/testing";

import {ZInputMessage} from "./index";

describe("Suite test ZInputMessage", () => {
  it("Test render ZInputMessage - empty", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message html-id="esempio_vuoto" aria-label=""></z-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-input-message html-id="esempio_vuoto" aria-label="">
        <mock:shadow-root>
          <span id="esempio_vuoto"></span>
        </mock:shadow-root>
      </z-input-message>
    `);
  });

  it("Test render ZInputMessage - with message", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message html-id="esempio" tabindex="0" aria-label="message" message="message"></z-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-input-message html-id="esempio" tabindex="0" aria-label="message" message="message">
        <mock:shadow-root>
          <span id="esempio">message</span>
        </mock:shadow-root>
      </z-input-message>
    `);
  });

  it("Test render ZInputMessage - with status/message", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message html-id="esempio" tabindex="0" aria-label="message" message="message" status="success"></z-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-input-message html-id="esempio" tabindex="0" aria-label="message" message="message" status="success" role="alert">
        <mock:shadow-root>
          <z-icon name="checkmark-circle"></z-icon>
          <span id="esempio">message</span>
        </mock:shadow-root>
      </z-input-message>
    `);
  });

  it("Test render ZInputMessage - with status/message and htmlRole=status", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message html-id="esempio" tabindex="0" aria-label="message" message="message" status="success" html-role="status"></z-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-input-message html-id="esempio" tabindex="0" aria-label="message" message="message" status="success"  html-role="status" role="status">
        <mock:shadow-root>
          <z-icon name="checkmark-circle"></z-icon>
          <span id="esempio">message</span>
        </mock:shadow-root>
      </z-input-message>
    `);
  });

  it("Test render ZInputMessage - with status/message but empty htmlRole", async () => {
    const page = await newSpecPage({
      components: [ZInputMessage],
      html: `<z-input-message html-id="esempio" tabindex="0" aria-label="message" message="message" status="success" html-role=""></z-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-input-message html-id="esempio" tabindex="0" aria-label="message" message="message" status="success" html-role="">
        <mock:shadow-root>
          <z-icon name="checkmark-circle"></z-icon>
          <span id="esempio">message</span>
        </mock:shadow-root>
      </z-input-message>
    `);
  });
});
