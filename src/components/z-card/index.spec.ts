import { newSpecPage } from "@stencil/core/testing";

import { ZCard } from "./index";

describe("Suite test ZCard", () => {
  it("Test render ZCard with cover", async () => {
    const page = await newSpecPage({
      components: [ZCard],
      html: `<z-card>
        <img slot="cover" src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg" />
        <h2 class="body-5" slot="metadata">metadata</h2>
        <h3 slot="title">Card title</h3>
        <p class="body-3" slot="text">Description</p>
        <z-icon name="share" slot="action"></z-icon>
        <z-icon name="delete" slot="action"></z-icon>
      </z-card>`
    });

    expect(page.root).toEqualHtml(`
      <z-card>
        <mock:shadow-root>
          <div class="cover-container">
            <slot name="cover"></slot>
          </div>
          <div class="content">
            <slot name="metadata"></slot>
            <slot name="title"></slot>
            <slot name="text"></slot>
            <div class="actions">
              <slot name="action"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <img slot="cover" src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg" />
        <h2 class="body-5" slot="metadata">metadata</h2>
        <h3 slot="title">Card title</h3>
        <p class="body-3" slot="text">Description</p>
        <z-icon name="share" slot="action"></z-icon>
        <z-icon name="delete" slot="action"></z-icon>
      </z-card>
    `);
  });

  it("Test render ZCard with cover and icon", async () => {
    const page = await newSpecPage({
      components: [ZCard],
      html: `<z-card cover-icon="play-filled">
        <img slot="cover" src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg" />
        <h2 class="body-5" slot="metadata">metadata</h2>
        <h3 slot="title">Card title</h3>
        <p class="body-3" slot="text">Description</p>
        <z-icon name="share" slot="action"></z-icon>
        <z-icon name="delete" slot="action"></z-icon>
      </z-card>`
    });

    expect(page.root).toEqualHtml(`
      <z-card cover-icon="play-filled">
        <mock:shadow-root>
          <div class="cover-container">
            <slot name="cover"></slot>
            <z-icon name="play-filled"></z-icon>
          </div>
          <div class="content">
            <slot name="metadata"></slot>
            <slot name="title"></slot>
            <slot name="text"></slot>
            <div class="actions">
              <slot name="action"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <img slot="cover" src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg" />
        <h2 class="body-5" slot="metadata">metadata</h2>
        <h3 slot="title">Card title</h3>
        <p class="body-3" slot="text">Description</p>
        <z-icon name="share" slot="action"></z-icon>
        <z-icon name="delete" slot="action"></z-icon>
      </z-card>
    `);
  });

  it("Test render ZCard with color cover", async () => {
    const page = await newSpecPage({
      components: [ZCard],
      html: `<z-card>
        <h2 class="body-5" slot="metadata">metadata</h2>
        <h3 slot="title">Card title</h3>
        <p class="body-3" slot="text">Description</p>
      </z-card>`
    });

    expect(page.root).toEqualHtml(`
      <z-card>
        <mock:shadow-root>
          <div class="cover-container">
            <div class="color-cover">
              <div class="cover-content">
                <slot name="metadata"></slot>
                <slot name="title"></slot>
              </div>
            </div>
          </div>
          <div class="content">
            <slot name="text"></slot>
            <div class="actions">
              <slot name="action"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <h2 class="body-5" slot="metadata">metadata</h2>
        <h3 slot="title">Card title</h3>
        <p class="body-3" slot="text">Description</p>
      </z-card>
    `);
  });

  it("Test ZCard text variant", async () => {
    const page = await newSpecPage({
      components: [ZCard],
      html: `
        <z-card clickable variant="text" showshadow style="border: 1px solid black;">
          <h2 class="body-5" slot="metadata">metadata</h2>
          <h3 slot="title">Card title</h3>
          <p class="body-3" slot="text">Sottotitolo mediamente lungo, opzionale e descrittivo. </p>

          <z-icon name="share" slot="action" fill="color-primary01"></z-icon>
          <z-icon name="delete" slot="action" fill="color-primary01"></z-icon>
        </z-card>
      `
    });

    expect(page.root).toEqualHtml(`
      <z-card clickable variant="text" showshadow style="border: 1px solid black;">
        <mock:shadow-root>
          <div class="content">
            <slot name="metadata"></slot>
            <slot name="title"></slot>
            <slot name="text"></slot>
            <div class="actions">
              <slot name="action"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <h2 class="body-5" slot="metadata">metadata</h2>
        <h3 slot="title">Card title</h3>
        <p class="body-3" slot="text">Sottotitolo mediamente lungo, opzionale e descrittivo. </p>
        <z-icon name="share" slot="action" fill="color-primary01"></z-icon>
        <z-icon name="delete" slot="action" fill="color-primary01"></z-icon>
      </z-card>
    `);
  });

  it("Test ZCard clickable click", async () => {
    const page = await newSpecPage({
      components: [ZCard],
      html: `<z-card clickable>
        <h2 class="body-5" slot="metadata">metadata</h2>
        <h3 slot="title">Card title</h3>
        <p class="body-3" slot="text">Description</p>
      </z-card>`
    });

    const card = page.body.querySelector('z-card');
    const cardClickedCallback = jest.fn();
    page.doc.addEventListener('cardClicked', cardClickedCallback);
    card.click();

    expect(cardClickedCallback).toHaveBeenCalled();
  });
});
