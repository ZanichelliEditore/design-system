import {newSpecPage} from "@stencil/core/testing";

import {ZSfInputMessage} from "./index";

describe("Suite test ZSfInputMessage", () => {
  it("Test render ZSfInputMessage - empty", async () => {
    const page = await newSpecPage({
      components: [ZSfInputMessage],
      html: `<z-sf-input-message html-id="esempio_vuoto" aria-label=""></z-sf-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-sf-input-message html-id="esempio_vuoto" aria-label="">
        <mock:shadow-root>
          <span id="esempio_vuoto"></span>
        </mock:shadow-root>
      </z-sf-input-message>
    `);
  });

  it("Test render ZSfInputMessage - with message", async () => {
    const page = await newSpecPage({
      components: [ZSfInputMessage],
      html: `<z-sf-input-message html-id="esempio" tabindex="0" aria-label="message" message="message"></z-sf-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-sf-input-message html-id="esempio" tabindex="0" aria-label="message" message="message">
        <mock:shadow-root>
          <span id="esempio">message</span>
        </mock:shadow-root>
      </z-sf-input-message>
    `);
  });

  it("Test render ZSfInputMessage - with status/message", async () => {
    const page = await newSpecPage({
      components: [ZSfInputMessage],
      html: `<z-sf-input-message html-id="esempio" tabindex="0" aria-label="message" message="message" status="success"></z-sf-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-sf-input-message html-id="esempio" tabindex="0" aria-label="message" message="message" status="success" role="alert">
        <mock:shadow-root>
          <z-icon name="checkmark-circle"></z-icon>
          <span id="esempio">message</span>
        </mock:shadow-root>
      </z-sf-input-message>
    `);
  });

  it("Test render ZSfInputMessage - with status/message and htmlRole=status", async () => {
    const page = await newSpecPage({
      components: [ZSfInputMessage],
      html: `<z-sf-input-message html-id="esempio" tabindex="0" aria-label="message" message="message" status="success" html-role="status"></z-sf-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-sf-input-message html-id="esempio" tabindex="0" aria-label="message" message="message" status="success"  html-role="status" role="status">
        <mock:shadow-root>
          <z-icon name="checkmark-circle"></z-icon>
          <span id="esempio">message</span>
        </mock:shadow-root>
      </z-sf-input-message>
    `);
  });

  it("Test render ZSfInputMessage - with status/message but empty htmlRole", async () => {
    const page = await newSpecPage({
      components: [ZSfInputMessage],
      html: `<z-sf-input-message html-id="esempio" tabindex="0" aria-label="message" message="message" status="success" html-role=""></z-sf-input-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-sf-input-message html-id="esempio" tabindex="0" aria-label="message" message="message" status="success" html-role="">
        <mock:shadow-root>
          <z-icon name="checkmark-circle"></z-icon>
          <span id="esempio">message</span>
        </mock:shadow-root>
      </z-sf-input-message>
    `);
  });
});
