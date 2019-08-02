import { newSpecPage } from "@stencil/core/testing";

import { icons } from "./icons";
import { ZIcon } from "./index";

describe("Suite test ZIcon", () => {
  it("Test render ZIcon vuoto", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon></z-icon>`
    });
    expect(page.root).toEqualHtml(`
      <z-icon>
        <mock:shadow-root>
          <svg viewBox="0 0 18 18" width='18px' height='18px' id="">
            <path></path>
            <polygon></polygon>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });

  it("Test render ZIcon", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon name="link-esterno-icon-stroked" iconid="zicon"></z-icon>`
    });
    expect(page.root).toEqualHtml(`
      <z-icon name="link-esterno-icon-stroked" iconid="zicon">
        <mock:shadow-root>
          <svg viewBox="0 0 18 18" width='18px' height='18px' id="zicon">
            <path d="${icons["link-esterno-icon-stroked"]}"></path>
            <polygon points="${icons["link-esterno-icon-stroked"]}"></polygon>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });

  it("Test render ZIcon con dimensioni", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon name="link-esterno-icon-stroked" iconid="zicon" width="10" height="10"></z-icon>`
    });
    expect(page.root).toEqualHtml(`
      <z-icon name="link-esterno-icon-stroked" iconid="zicon" width="10" height="10">
        <mock:shadow-root>
          <svg viewBox="0 0 18 18" width='10px' height='10px' id="zicon">
            <path d="${icons["link-esterno-icon-stroked"]}"></path>
            <polygon points="${icons["link-esterno-icon-stroked"]}"></polygon>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });
});
