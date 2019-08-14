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
          <svg viewBox="0 0 18 18" width='18' height='18' id="">
            <polygon></polygon>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });

  it("Test render ZIcon con path", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon name="link-esterno-icon-stroked" iconid="zicon"></z-icon>`
    });
    expect(page.root).toEqualHtml(`
      <z-icon name="link-esterno-icon-stroked" iconid="zicon">
        <mock:shadow-root>
          <svg viewBox="0 0 18 18" width='18' height='18' id="zicon">
            <path d="${icons["link-esterno-icon-stroked"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });

  it("Test render ZIcon con path con dimensioni", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon name="link-esterno-icon-stroked" iconid="zicon" width="10" height="10"></z-icon>`
    });
    expect(page.root).toEqualHtml(`
      <z-icon name="link-esterno-icon-stroked" iconid="zicon" width="10" height="10">
        <mock:shadow-root>
          <svg viewBox="0 0 18 18" width='10' height='10' id="zicon">
            <path d="${icons["link-esterno-icon-stroked"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });

  it("Test render ZIcon con polygon", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon name="answer-right-icon" iconid="zicon"></z-icon>`
    });
    expect(page.root).toEqualHtml(`
      <z-icon name="answer-right-icon" iconid="zicon">
        <mock:shadow-root>
          <svg viewBox="0 0 18 18" width='18' height='18' id="zicon">
            <polygon points="${icons["answer-right-icon"]}"></polygon>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });

  it("Test render ZIcon con polygon con dimensioni", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon name="answer-right-icon" iconid="zicon" width="10" height="10"></z-icon>`
    });
    expect(page.root).toEqualHtml(`
      <z-icon name="answer-right-icon" iconid="zicon" width="10" height="10">
        <mock:shadow-root>
          <svg viewBox="0 0 18 18" width='10' height='10' id="zicon">
            <polygon points="${icons["answer-right-icon"]}"></polygon>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });
});


