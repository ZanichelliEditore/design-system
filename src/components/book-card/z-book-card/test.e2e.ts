import {newE2EPage} from "@stencil/core/testing";

it("Emits an event when clicking on interactive edi tag", async () => {
  const page = await newE2EPage({
    html: '<z-book-card variant="landscape" cover="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808899866.jpg" authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis" opera-title="La storia racconta" volume-title="Volume 1. Il medioevo" isbn="9788808563002" edi=\'{"status":"active","interactive":true}\' adoption="true" catalog-url="prova" ebook-url="prova"></z-book-card>',
  });
  const cardTag = await page.find("z-book-card >>> .tags z-tag");
  const clickEvent = await page.spyOnEvent("tagClick");

  await cardTag.click();

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEvent();
  expect(clickEvent).toHaveReceivedEventDetail({
    tag: "edi",
    state: "active",
  });
});

it("Does not emit an event when clicking on non interactive edi tag", async () => {
  const page = await newE2EPage({
    html: '<z-book-card variant="landscape" cover="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808899866.jpg" authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis" opera-title="La storia racconta" volume-title="Volume 1. Il medioevo" isbn="9788808563002" edi=\'{"status":"active","interactive":false}\' adoption="true" catalog-url="prova" ebook-url="prova"></z-book-card>',
  });
  const cardTag = await page.find("z-book-card >>> .tags z-tag");
  const clickEvent = await page.spyOnEvent("tagClick");

  await cardTag.click();

  await page.waitForChanges();
  expect(clickEvent).not.toHaveReceivedEvent();
});

it("Emits an event when clicking on interactive annotated tag", async () => {
  const page = await newE2EPage({
    html: '<z-book-card variant="landscape" cover="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808899866.jpg" authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis" opera-title="La storia racconta" volume-title="Volume 1. Il medioevo" isbn="9788808563002" annotated=\'{"status":"active","interactive":true}\' adoption="true" catalog-url="prova" ebook-url="prova"></z-book-card>',
  });
  const cardTag = await page.find("z-book-card >>> .tags z-tag");
  const clickEvent = await page.spyOnEvent("tagClick");

  await cardTag.click();

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEvent();
  expect(clickEvent).toHaveReceivedEventDetail({
    tag: "annotated",
    state: "active",
  });
});

it("Does not emit an event when clicking on non interactive annotated tag", async () => {
  const page = await newE2EPage({
    html: '<z-book-card variant="landscape" cover="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808899866.jpg" authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis" opera-title="La storia racconta" volume-title="Volume 1. Il medioevo" isbn="9788808563002" annotated=\'{"status":"active","interactive":false}\' adoption="true" catalog-url="prova" ebook-url="prova"></z-book-card>',
  });
  const cardTag = await page.find("z-book-card >>> .tags z-tag");
  const clickEvent = await page.spyOnEvent("tagClick");

  await cardTag.click();

  await page.waitForChanges();
  expect(clickEvent).not.toHaveReceivedEvent();
});

it("Emits an event when clicking on interactive teacherVersion tag", async () => {
  const page = await newE2EPage({
    html: '<z-book-card variant="landscape" cover="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808899866.jpg" authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis" opera-title="La storia racconta" volume-title="Volume 1. Il medioevo" isbn="9788808563002" teacher-version=\'{"status":"active","interactive":true}\' adoption="true" catalog-url="prova" ebook-url="prova"></z-book-card>',
  });
  const cardTag = await page.find("z-book-card >>> .tags z-tag");
  const clickEvent = await page.spyOnEvent("tagClick");

  await cardTag.click();

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEvent();
  expect(clickEvent).toHaveReceivedEventDetail({
    tag: "teacherVersion",
    state: "active",
  });
});

it("Does not emit an event when clicking on non interactive teacherVersion tag", async () => {
  const page = await newE2EPage({
    html: '<z-book-card variant="landscape" cover="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808899866.jpg" authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis" opera-title="La storia racconta" volume-title="Volume 1. Il medioevo" isbn="9788808563002" teacher-version=\'{"status":"active","interactive":false}\' adoption="true" catalog-url="prova" ebook-url="prova"></z-book-card>',
  });
  const cardTag = await page.find("z-book-card >>> .tags z-tag");
  const clickEvent = await page.spyOnEvent("tagClick");

  await cardTag.click();

  await page.waitForChanges();
  expect(clickEvent).not.toHaveReceivedEvent();
});

it("Emits an event when clicking on the catalog link", async () => {
  const page = await newE2EPage({
    html: '<z-book-card variant="landscape" cover="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808899866.jpg" authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis" opera-title="La storia racconta" volume-title="Volume 1. Il medioevo" isbn="9788808563002" tags=\'[{"label":"tag1","active":true}]\' adoption="true" catalog-url="prova" ebook-url="prova"></z-book-card>',
  });
  const catalogLink = await page.find("z-book-card >>> .catalog-link a");
  const clickEvent = await page.spyOnEvent("catalogClick");

  await catalogLink.click();

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEvent();
});

it("Emits an event when clicking on the ebook resource link", async () => {
  const page = await newE2EPage({
    html: '<z-book-card variant="landscape" cover="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808899866.jpg" authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis" opera-title="La storia racconta" volume-title="Volume 1. Il medioevo" isbn="9788808563002" tags=\'[{"label":"tag1","active":true}]\' adoption="true" catalog-url="prova" ebook-url="prova"></z-book-card>',
  });
  const ebookLink = await page.find("z-book-card >>> .ebook z-button");
  const clickEvent = await page.spyOnEvent("ebookClick");

  await ebookLink.click();

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEvent();
});

it("Emits an event when clicking on immersive reader description", async () => {
  const page = await newE2EPage({
    html: '<z-book-card variant="landscape" cover="https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808899866.jpg" authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis" opera-title="La storia racconta" volume-title="Volume 1. Il medioevo" isbn="9788808563002" tags=\'[{"label":"tag1","active":true}]\' adoption="true" catalog-url="prova" ebook-url="prova"></z-book-card>',
  });
  const immersiveReaderLink = await page.find("z-book-card >>> .ebook .immersive-reader");
  const clickEvent = await page.spyOnEvent("immersiveReaderClick");

  await immersiveReaderLink.click();

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEvent();
});
