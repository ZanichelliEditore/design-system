import { newE2EPage } from "@stencil/core/testing";

it("Test ZMyzCardFooter should receive toggle event", async () => {
  const page = await newE2EPage();

  await page.setContent(`
    <z-myz-card-footer>
      <z-toggle-button slot="toggle"></z-toggle-button>
    </z-myz-card-footer>
  `);

  const toggleSpy = await page.spyOnEvent("toggleClick");
  const button = await page.find("z-toggle-button");

  button.click();
  await page.waitForChanges();
  expect(toggleSpy).toHaveReceivedEventTimes(1);
});
