import { newSpecPage } from "@stencil/core/testing";

import { ZAvatar } from "./index";

describe("Suite test ZAvatar", () => {
  it("Test render ZAvatar default", async () => {
    const page = await newSpecPage({
      components: [ZAvatar],
      html: `<z-avatar></z-avatar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-avatar class="body-4-sb medium" style="color: var(--text-white); background-color: var(--bg-grey-700)">
        <mock:shadow-root></mock:shadow-root>
      </z-avatar>
    `);
  });

  it("Test render ZAvatar size prop", async () => {
    const page = await newSpecPage({
      components: [ZAvatar],
      html: `<z-avatar size="small"></z-avatar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-avatar class="body-5-sb small" style="color: var(--text-white); background-color: var(--bg-grey-700)" size="small">
        <mock:shadow-root></mock:shadow-root>
      </z-avatar>
    `);
  });

  it("Test render ZAvatar text prop", async () => {
    const page = await newSpecPage({
      components: [ZAvatar],
      html: `<z-avatar text="ABCDE"></z-avatar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-avatar class="body-4-sb medium" style="color: var(--text-white); background-color: var(--bg-grey-700)" text="ABCDE">
        <mock:shadow-root>
          <span>
            AB
          </span>
        </mock:shadow-root>
      </z-avatar>
    `);
  });

  it("Test render ZAvatar text-color prop", async () => {
    const page = await newSpecPage({
      components: [ZAvatar],
      html: `<z-avatar text="ABCDE" text-color="myz-blue" size="small"></z-avatar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-avatar
        class="body-5-sb small"
        style="color: var(--myz-blue); background-color: var(--bg-grey-700)"
        text-color="myz-blue"
        text="ABCDE"
        size="small">
          <mock:shadow-root>
            <span>
              AB
            </span>
          </mock:shadow-root>
      </z-avatar>
    `);
  });

  it("Test render ZAvatar background-color prop", async () => {
    const page = await newSpecPage({
      components: [ZAvatar],
      html: `<z-avatar text="ABCDE" background-color="myz-blue" size="large"></z-avatar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-avatar
      class="body-2-sb large"
        style="color: var(--text-white); background-color: var(--myz-blue)"
        background-color="myz-blue"
        text="ABCDE"
        size="large">
          <mock:shadow-root>
            <span>
              AB
            </span>
          </mock:shadow-root>
      </z-avatar>
    `);
  });

  it("Test render ZAvatar image prop", async () => {
    const page = await newSpecPage({
      components: [ZAvatar],
      html: `<z-avatar image="https://cdn.eso.org/images/thumb700x/eso1907a.jpg"></z-avatar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-avatar
        class="body-4-sb medium"
        style="color: var(--text-white); background-color: var(--bg-grey-700)"
        image="https://cdn.eso.org/images/thumb700x/eso1907a.jpg">
          <mock:shadow-root>
            <img src="https://cdn.eso.org/images/thumb700x/eso1907a.jpg">
          </mock:shadow-root>
      </z-avatar>
    `);
  });
});
