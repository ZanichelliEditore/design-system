import {E2EPage, newE2EPage} from "@stencil/core/testing";

describe("z-book-card test end2end", () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<z-book-card
        variant="landscape"
        authors="Alessandro Barbero Chiara Frugoni Carla Sclarandis"
        opera-title="La storia racconta"
        volume-title="Volume 1. Il medioevo"
        isbn="9788808563002"
        ebook-url="#"
        link-target="_self"
      ></z-book-card>`,
    });
  });

  it("Emits an event when clicking on the ebook resource link", async () => {
    const clickEvent = await page.spyOnEvent("ebookClick");

    await page.evaluate(() => {
      const card = document.querySelector("z-book-card");
      const ebookButton = card?.shadowRoot?.querySelector(".ebook z-button") as HTMLElement | null;

      if (!ebookButton) {
        throw new Error("ebook button not found");
      }

      ebookButton.click();
    });

    await page.waitForChanges();

    expect(clickEvent).toHaveReceivedEvent();
  });

  it("Emits an event when clicking on the ebook cover", async () => {
    const clickEvent = await page.spyOnEvent("coverClick");

    await page.evaluate(() => {
      const card = document.querySelector("z-book-card");
      const coverLink = card?.shadowRoot?.querySelector(".cover") as HTMLElement | null;

      if (!coverLink) {
        throw new Error("cover link not found");
      }

      coverLink.click();
    });

    await page.waitForChanges();

    expect(clickEvent).toHaveReceivedEvent();
  });

  it("Emits an event when clicking on the ebook title", async () => {
    const clickEvent = await page.spyOnEvent("titleClick");

    const titleLinkHasClass = await page.evaluate(() => {
      const card = document.querySelector("z-book-card");
      const titleLink = card?.shadowRoot?.querySelector(".card-info .top .cta-wrapper a") as HTMLAnchorElement | null;

      if (!titleLink) {
        throw new Error("title link not found");
      }

      titleLink.click();

      return titleLink.classList.contains("z-link");
    });

    await page.waitForChanges();

    expect(titleLinkHasClass).toBe(true);
    expect(clickEvent).toHaveReceivedEvent();
  });
});
