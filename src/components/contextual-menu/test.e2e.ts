import { newE2EPage } from "@stencil/core/testing";

describe("contextual-menu test end2end", () => {
  it("Test that component exists", async () => {
    const page = await newE2EPage();
    await page.setContent(`<contextual-menu></contextual-menu>`);
    const el = await page.find("contextual-menu");
    expect(el).not.toBeNull();
    expect(el.shadowRoot).not.toBeNull;
  });
});
