import {newSpecPage} from "@stencil/core/testing";

import {ZCard} from "./index";

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
      </z-card>`,
    });

    expect(page.root).toEqualLightHtml(`
      <z-card>
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
      </z-card>`,
    });

    expect(page.root).toEqualLightHtml(`
      <z-card cover-icon="play-filled">
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
      </z-card>`,
    });

    expect(page.root).toEqualLightHtml(`
      <z-card>
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
          <p class="body-3" slot="text">Some description for the content of the card. </p>

          <z-icon name="share" slot="action" fill="color-primary01"></z-icon>
          <z-icon name="delete" slot="action" fill="color-primary01"></z-icon>
        </z-card>
      `,
    });

    expect(page.root).toEqualLightHtml(`
      <z-card clickable variant="text" showshadow style="border: 1px solid black;">
        <h2 class="body-5" slot="metadata">metadata</h2>
        <h3 slot="title">Card title</h3>
        <p class="body-3" slot="text">Some description for the content of the card. </p>
        <z-icon name="share" slot="action" fill="color-primary01"></z-icon>
        <z-icon name="delete" slot="action" fill="color-primary01"></z-icon>
      </z-card>
    `);
  });

  it("Test ZCard clickable click", async () => {
    const page = await newSpecPage({
      components: [ZCard],
      html: `<z-card>
        <h2 class="body-5" slot="metadata">metadata</h2>
        <button id="btn" slot="title">Card title</button>
        <p class="body-3" slot="text">Description</p>
      </z-card>`,
    });

    const btn = page.body.querySelector("#btn") as HTMLButtonElement;
    const buttonClickedCallback = jest.fn();
    page.doc.addEventListener("click", buttonClickedCallback);
    btn.click();

    expect(buttonClickedCallback).toHaveBeenCalled();
  });
});
