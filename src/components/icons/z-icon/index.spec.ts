import { newSpecPage } from "@stencil/core/testing";

import { icons } from "../icons";
import { ZIcon } from "./index";

describe("Suite test ZIcon", () => {
  it("Test render ZIcon vuoto", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon></z-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-icon>
        <mock:shadow-root>
          <svg  fill="" viewBox="0 0 1000 1000" id="">
            <polygon></polygon>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });

  it("Test render ZIcon con path", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon name="download" iconid="zicon"></z-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-icon name="download" iconid="zicon">
        <mock:shadow-root>
          <svg  fill="" viewBox="0 0 1000 1000" id="zicon">
            <path d="${icons["download"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });

  it("Test render ZIcon con path con dimensioni", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon name="download" iconid="zicon" width="10" height="10"></z-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-icon name="download" iconid="zicon" width="10" height="10">
        <mock:shadow-root>
          <svg  fill="" viewBox="0 0 1000 1000" width='10' height='10' id="zicon">
            <path d="${icons["download"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });

  it("Test render ZIcon con polygon", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon name="chevron-down" iconid="zicon"></z-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-icon name="chevron-down" iconid="zicon">
        <mock:shadow-root>
          <svg  fill="" viewBox="0 0 1000 1000" id="zicon">
            <path d="${icons["chevron-down"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });

  it("Test render ZIcon con polygon con dimensioni", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon name="chevron-down" iconid="zicon" width="10" height="10"></z-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-icon name="chevron-down" iconid="zicon" width="10" height="10">
        <mock:shadow-root>
          <svg  fill="" viewBox="0 0 1000 1000" width='10' height='10' id="zicon">
            <path d="${icons["chevron-down"]}"></path>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });

  it("Test render ZIcon con fill", async () => {
    const page = await newSpecPage({
      components: [ZIcon],
      html: `<z-icon fill="color-primary01"></z-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <z-icon fill="color-primary01">
        <mock:shadow-root>
          <svg fill="var(--color-primary01)" viewBox="0 0 1000 1000" id="">
            <polygon></polygon>
          </svg>
        </mock:shadow-root>
      </z-icon>
    `);
  });
});
