import {newE2EPage} from "@stencil/core/testing";

it("Clicks on toggle switch and checks event detail", async () => {
  const page = await newE2EPage({
    html: '<z-toggle-button label="Toggle" avoidclick="false" isdisabled="false" opened="false"></z-toggle-button>',
  });
  const toggle = await page.find("z-toggle-button");
  const clickEvent = await page.spyOnEvent("toggleClick");
  await toggle.click();

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEvent();
});
