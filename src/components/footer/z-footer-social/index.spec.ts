import { newSpecPage } from "@stencil/core/testing";

import { ZFooterSocial } from "./index";

describe("Suite test ZFooterSocial", () => {
  it("Test render ZFooterSocial vuoto", async () => {
    const page = await newSpecPage({
      components: [ZFooterSocial],
      html: `<z-footer-social></z-footer-social>`,
    });

    expect(page.root).toEqualHtml(`
      <z-footer-social>
        <mock:shadow-root>
        <a target="_blank">
          <img></img>
        </a>
        </mock:shadow-root>
      </z-footer-social>
    `);
  });

  it("Test render ZFooterSocial with params", async () => {
    const page = await newSpecPage({
      components: [ZFooterSocial],
      html: `<z-footer-social href="http://www.google.it" icon="icon.png" description="Youtube"></z-footer-social>`,
    });

    expect(page.root).toEqualHtml(`
      <z-footer-social href="http://www.google.it" icon="icon.png" description="Youtube">
        <mock:shadow-root>
        <a href=\"http://www.google.it\" target=\"_blank\">
          <img alt=\"Youtube\" src\="icon.png\"></img>
        </a>
        </mock:shadow-root>
      </z-footer-social>
    `);
  });
});
