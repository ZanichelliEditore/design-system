import {newE2EPage} from "@stencil/core/testing";

it("Clicks on chip component, not on the interactive icon", async () => {
  const page = await newE2EPage({
    html: '<z-chip type="default" icon="pdf" disabled="false" interactive-icon="multiply-circled">chip text</z-chip>',
  });
  const chip = await page.find("z-chip");
  const clickEvent = await page.spyOnEvent("interactiveIconClick");
  await chip.click();

  await page.waitForChanges();
  expect(clickEvent).not.toHaveReceivedEvent();
});

it("Clicks on chip interactive icon", async () => {
  const page = await newE2EPage({
    html: '<z-chip type="default" icon="pdf" disabled="false" interactive-icon="multiply-circled">chip text</z-chip>',
  });
  const chipIcon = await page.find("z-chip .interactive-icon");
  const clickEvent = await page.spyOnEvent("interactiveIconClick");
  await chipIcon.click();

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEvent();
});

it("Clicks on chip interactive icon when disabled", async () => {
  const page = await newE2EPage({
    html: '<z-chip type="default" icon="pdf" disabled="true" interactive-icon="multiply-circled">chip text</z-chip>',
  });
  const chipIcon = await page.find("z-chip .interactive-icon");
  const clickEvent = await page.spyOnEvent("interactiveIconClick");
  await chipIcon.click();

  await page.waitForChanges();
  expect(clickEvent).not.toHaveReceivedEvent();
});
