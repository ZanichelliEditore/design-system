import {E2EElement, E2EPage, newE2EPage} from "@stencil/core/testing";

describe("z-popover test end2end", () => {
  let page: E2EPage;
  let popover: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <div class="popover-container" style="height: 100vh;">
          <z-popover
            bind-to="#trigger"
            position="top_right"
          >
            <div class="container">
              <z-button icon="gear">Impostazioni</z-button>
            </div>
          </z-popover>
          <z-icon
            id="trigger"
            name="plus-square-filled"
          ></z-icon>
        </div>
      `,
    });

    popover = await page.find("z-popover");
  });

  it("should close the popover on outside click", async () => {
    const openChange = await popover.spyOnEvent("openChange");
    expect(await popover.isVisible()).toEqual(false);
    await popover.setProperty("open", true);
    await page.waitForChanges();
    expect(openChange).toHaveReceivedEventDetail({open: true});
    expect(await popover.isVisible()).toEqual(true);
    await (await page.find("body")).click();
    await page.waitForChanges();
    expect(await popover.isVisible()).toEqual(false);
    expect(openChange).toHaveReceivedEventDetail({open: false});
  });

  it("should not close the popover when clicking outside if the closable prop is set to false", async () => {
    const openChange = await popover.spyOnEvent("openChange");
    await popover.setProperty("closable", false);
    await page.waitForChanges();
    await popover.setProperty("open", true);
    await page.waitForChanges();
    expect(openChange).toHaveReceivedEventDetail({open: true});
    await (await page.find("body")).click();
    await page.waitForChanges();
    expect(openChange).toHaveReceivedEventTimes(1);
  });

  it("should change position when value is passed and emit `positionChange` event", async () => {
    const positionChange = await popover.spyOnEvent("positionChange");
    await popover.setProperty("open", true);
    await page.waitForChanges();
    await popover.setProperty("position", "bottom");
    await page.waitForChanges();
    expect(positionChange).toHaveReceivedEventDetail({position: "bottom"});
  });
});
