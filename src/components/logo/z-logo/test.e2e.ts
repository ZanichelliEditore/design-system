import {newE2EPage} from "@stencil/core/testing";

describe("z-logo test end2end", () => {
  it("Test that component exists", async () => {
    const page = await newE2EPage();
    await page.setContent(`<z-logo></z-logo>`);
    const el = await page.find("z-logo");
    expect(el).not.toBeNull();
    expect(el.shadowRoot).not.toBeNull;
  });

  it('Test that "a href" is created', async () => {
    const page = await newE2EPage();
    await page.setContent(`<z-logo></z-logo>`);
    await page.$eval("z-logo", (elm: any) => {
      elm.link = "https://www.zanichelli.it";
    });
    await page.waitForChanges();
    const el = await page.find("z-logo >>> a");
    expect(el.getAttribute("href")).toBe("https://www.zanichelli.it");
  });

  it('Test that "a target blank" is created', async () => {
    const page = await newE2EPage();
    await page.setContent(`<z-logo></z-logo>`);
    await page.$eval("z-logo", (elm: any) => {
      elm.link = "https://www.zanichelli.it";
      elm.targetBlank = true;
    });
    await page.waitForChanges();
    const el = await page.find("z-logo >>> a");
    expect(el.getAttribute("target")).toBe("_blank");
  });
});
