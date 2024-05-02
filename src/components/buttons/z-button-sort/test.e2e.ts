import {newE2EPage} from "@stencil/core/testing";

it("Test ZButtonSort should emit buttonSortClick event", async () => {
  const page = await newE2EPage({html: "<z-button-sort></z-button-sort>"});
  const btn = await page.find("z-button-sort >>> button");
  const clickEvent = await page.spyOnEvent("buttonSortClick");

  await btn.click();
  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEventDetail({sortAsc: true});

  await btn.click();
  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEventDetail({sortAsc: false});
});

it("changes button label on click based on sortAsc event property", async () => {
  const page = await newE2EPage({
    html: '<z-button-sort label="ascending" desclabel="descending" sortasc="true"></z-button-sort>',
  });
  const btn = await page.find("z-button-sort >>> button");
  const clickEvent = await page.spyOnEvent("buttonSortClick");
  const btnText = await page.find("z-button-sort >>> button span.ellipsis");
  // manca da testare il cambio di label

  await btn.click();
  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEventDetail({sortAsc: true});

  await btn.click();
  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEventDetail({sortAsc: false});
});
