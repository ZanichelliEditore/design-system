import {newE2EPage} from "@stencil/core/testing";

it("Clicks on toggle switch and checks event detail", async () => {
  const page = await newE2EPage({
    html: '<z-toggle-switch htmlid="abcdefg" label-position="left" disabled="false">Toggle</z-toggle-switch>',
  });
  const toggle = await page.find("z-toggle-switch");
  const clickEvent = await page.spyOnEvent("toggleClick");
  await toggle.click();

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEventDetail({checked: true, id: "abcdefg"});
});

it("Clicks on toggle switch when disabled", async () => {
  const page = await newE2EPage({
    html: '<z-toggle-switch htmlid="abcdefg" label-position="left" disabled="true">Toggle</z-toggle-switch>',
  });
  const toggle = await page.find("z-toggle-switch");
  const clickEvent = await page.spyOnEvent("toggleClick");
  await toggle.click();

  await page.waitForChanges();
  expect(clickEvent).not.toHaveReceivedEvent();
});
