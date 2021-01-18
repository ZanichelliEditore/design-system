import { newE2EPage } from "@stencil/core/testing";

it("Test ZPocketBody should receive pocketToggle event", async () => {
  const page = await newE2EPage();

  await page.setContent(`<z-pocket pocketid="pocket">
    <z-pocket-header pocketid="pocket"></z-pocket-header>
    <z-pocket-body pocketid="pocket"></z-pocket-body>
  </z-pocket>`);
  const header = await page.find("z-pocket-header >>> header");
  const body = await page.find("z-pocket-body >>> main");

  expect(body).toHaveClass("preview");

  await header.click();
  await page.waitForChanges();
  expect(body).toHaveClass("open");

  await header.click();
  await page.waitForChanges();
  expect(body).toHaveClass("closed");
});

it("Test ZPocketBody should not receive pocketToggle event with wrong id", async () => {
  const page = await newE2EPage();

  await page.setContent(`<z-pocket pocketid="pocket">
    <z-pocket-header pocketid="other-pocket"></z-pocket-header>
    <z-pocket-body pocketid="other-pocket"></z-pocket-body>
  </z-pocket>`);
  const header = await page.find("z-pocket-header >>> header");
  const body = await page.find("z-pocket-body >>> main");

  expect(body).toHaveClass("preview");

  await header.click();
  await page.waitForChanges();
  expect(body).not.toHaveClass("open");

  await header.click();
  await page.waitForChanges();
  expect(body).not.toHaveClass("closed");
});

it("Test ZPocketBody should not receive pocketToggle event with missing id", async () => {
  const page = await newE2EPage();

  await page.setContent(`<z-pocket>
    <z-pocket-header></z-pocket-header>
    <z-pocket-body></z-pocket-body>
  </z-pocket>`);
  const header = await page.find("z-pocket-header >>> header");
  const body = await page.find("z-pocket-body >>> main");

  expect(body).toHaveClass("preview");

  await header.click();
  await page.waitForChanges();
  expect(body).not.toHaveClass("open");

  await header.click();
  await page.waitForChanges();
  expect(body).not.toHaveClass("closed");
});
