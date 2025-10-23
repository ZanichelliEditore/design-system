import {newE2EPage} from "@stencil/core/testing";

it("Emits an event when clicking on the ebook resource link", async () => {
  const page = await newE2EPage({
    html: '<z-book-card variant="landscape" cover="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808899866.jpg" authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis" opera-title="La storia racconta" volume-title="Volume 1. Il medioevo" isbn="9788808563002" ebook-url="prova"></z-book-card>',
  });
  const ebookLink = await page.find("z-book-card >>> .ebook z-button");
  const clickEvent = await page.spyOnEvent("ebookClick");

  await ebookLink.click();

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEvent();
});

it("Emits an event when clicking on the ebook cover", async () => {
  const page = await newE2EPage({
    html: '<z-book-card variant="landscape" cover="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808899866.jpg" authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis" opera-title="La storia racconta" volume-title="Volume 1. Il medioevo" isbn="9788808563002" ebook-url="www.myzanichelli.it"></z-book-card>',
  });

  const clickEvent = await page.spyOnEvent("coverClick");

  await page.evaluate(() => {
    const card = document.querySelector("z-book-card");
    const coverLink = card.shadowRoot.querySelector(".cover a");
    (coverLink as HTMLElement).click();
  });

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEvent();
});

it("Emits an event when clicking on the ebook title", async () => {
  const page = await newE2EPage({
    html: '<z-book-card variant="landscape" cover="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808899866.jpg" authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis" opera-title="La storia racconta" volume-title="Volume 1. Il medioevo" isbn="9788808563002" ebook-url="www.myzanichelli.it"></z-book-card>',
  });
  const titleLink = await page.find("z-book-card >>> .card-info .top .cta-wrapper a");
  const clickEvent = await page.spyOnEvent("titleClick");

  await titleLink.click();

  await page.waitForChanges();
  expect(titleLink).toHaveClasses(["z-link"]);
  expect(clickEvent).toHaveReceivedEvent();
});
