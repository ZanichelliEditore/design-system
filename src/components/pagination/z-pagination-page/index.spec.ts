import { newSpecPage } from "@stencil/core/testing";

import { ZPaginationPage } from "./index";

describe("Suite test ZPaginationPage", () => {
  it("Test render ZPaginationPage vuoto", async () => {
    const page = await newSpecPage({
      components: [ZPaginationPage],
      html: `<z-pagination-page></z-pagination-page>`
    });

    expect(page.root).toEqualHtml(`
    <z-pagination-page>
          <mock:shadow-root>
            <a class=\"false\" tabindex=\"0\" role=\"button\"></a>
          </mock:shadow-root>
    </z-pagination-page>
    `);
  });

  it("Test render ZPaginationPage senza classi", async () => {
    const page = await newSpecPage({
      components: [ZPaginationPage],
      html: `<z-pagination-page pageId='10' value='10'></z-pagination-page>`
    });

    expect(page.root).toEqualHtml(`
      <z-pagination-page pageid=\"10\" value=\"10\">
        <mock:shadow-root>
          <a class=\"false\" id=\"10\" tabindex=\"0\" role= \"button\" >
            10
          </a>
        </mock:shadow-root>
      </z-pagination-page>
    `);
  });

  it("Test render ZPaginationPage selected Page", async () => {
    const page = await newSpecPage({
      components: [ZPaginationPage],
      html: `<z-pagination-page pageId='10' value='10' isselected></z-pagination-page>`
    });

    expect(page.root).toEqualHtml(`
      <z-pagination-page isselected=\"\" pageid=\"10\" value=\"10\">
        <mock:shadow-root>
          <a class=\"false selected\" id=\"10\" tabindex=\"0\" role=\"button\" >
            10
          </a>
        </mock:shadow-root>
      </z-pagination-page>
    `);
  });

  it("Test render ZPaginationPage disabled Page", async () => {
    const page = await newSpecPage({
      components: [ZPaginationPage],
      html: `<z-pagination-page pageId='10' value='10' isdisabled></z-pagination-page>`
    });

    expect(page.root).toEqualHtml(`
      <z-pagination-page isdisabled=\"\" pageid=\"10\" value=\"10\">
        <mock:shadow-root>
          <a class=\"false disabled\" id=\"10\" tabindex=\"-1\" role= \"button\" >
            10
          </a>
        </mock:shadow-root>
      </z-pagination-page>
    `);
  });

  it("Test render ZPaginationPage visited Page", async () => {
    const page = await newSpecPage({
      components: [ZPaginationPage],
      html: `<z-pagination-page pageId='10' value='10' isvisited></z-pagination-page>`
    });

    expect(page.root).toEqualHtml(`
      <z-pagination-page isvisited=\"\" pageid=\"10\" value=\"10\">
        <mock:shadow-root>
          <a class=\"false visited\" id=\"10\" tabindex=\"0\" role=\"button\">
            10
          </a>
        </mock:shadow-root>
      </z-pagination-page>
    `);
  });

  it("Test render ZPaginationPage visited and selected Page", async () => {
    const page = await newSpecPage({
      components: [ZPaginationPage],
      html: `<z-pagination-page pageId='10' value='10' isselected isvisited></z-pagination-page>`
    });

    expect(page.root).toEqualHtml(`
      <z-pagination-page isvisited=\"\" isselected=\"\" pageid=\"10\" value=\"10\">
        <mock:shadow-root>
          <a class=\"false selected visited\" id=\"10\" tabindex=\"0\" role=\"button\" >
            10
          </a>
        </mock:shadow-root>
      </z-pagination-page>
    `);
  });
});
