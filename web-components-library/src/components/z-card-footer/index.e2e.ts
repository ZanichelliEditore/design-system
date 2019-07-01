import { newE2EPage } from '@stencil/core/testing';

it('Test ZCardFooter should receive toggle event', async () => {
  const page = await newE2EPage();

  await page.setContent(`
    <z-card-footer>
      <z-toggle-button slot="toggle"></z-toggle-button>
    </z-card-footer>
  `);

  const toggleSpy = await page.spyOnEvent('toggle');
  const button = await page.find('z-toggle-button');

  button.click();
  await page.waitForChanges();
  expect(toggleSpy).toHaveReceivedEventTimes(1);
});
