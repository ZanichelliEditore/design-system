import { newE2EPage } from "@stencil/core/testing";

it("Test click on modal background (backward compatibility)", async () => {
  const page = await newE2EPage();
  await page.setContent(`<z-modal modalid="test-modal"></z-modal>`);
  await page.waitForChanges();
  const background = await page.find("z-modal >>> .modal-background");
  expect(background).toHaveAttribute("data-action");
  expect(background).toEqualAttribute("data-action", "modalBackground");

  const modal = document.querySelector('z-modal') as HTMLElement;
  let clickEvent;
  modal.addEventListener('click', (ev) => { clickEvent = ev });
  await background.click();
  expect(clickEvent.target.dataset).toBe('modalBackground');
});

it("Test click event on modal background", async () => {
  const page = await newE2EPage();
  const modalid = 'test-modal';
  await page.setContent(`<z-modal modalid="${modalid}"></z-modal>`);
  await page.waitForChanges();
  const background = await page.find("z-modal >>> .modal-background");

  const modal = await page.find('z-modal');
  const clickSpy = await modal.spyOnEvent('modalBackgroundClick');
  await background.click();
  expect(clickSpy).toHaveReceivedEvent();
  expect(clickSpy).toHaveReceivedEventDetail({ modalid });
});
