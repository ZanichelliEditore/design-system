import { newSpecPage } from "@stencil/core/testing";

import { ZNavigationTab } from "./index";

describe("Suite test ZNavigationTab", () => {

  it("Test render ZNavigationTab vuoto", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTab],
      html: `<z-navigation-tab></z-navigation-tab>`
    });

    expect(page.root).toEqualHtml(`
    <z-navigation-tab>
          <mock:shadow-root>
            <a class=\"false\" tabindex=\"0\"></a>
          </mock:shadow-root>
    </z-navigation-tab>
    `);
  });



  it("Test render ZNavigationTab con icona", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTab],
      html: `<z-navigation-tab label='Home' icon='download'></z-navigation-tab>`
    });

    expect(page.root).toEqualHtml(`
      <z-navigation-tab icon=\"download\" label=\"Home\">
        <mock:shadow-root>
          <z-icon name=\"download\" width={32} height={32} />
          <a class=\"false disabled\" id=\"10\" tabindex=\"-1\" >
            Home
          </a>
        </mock:shadow-root>
      </z-navigation-tab>
    `);
  });

  it("Test render ZNavigationTab senza classi", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTab],
      html: `<z-navigation-tab label='Home'></z-navigation-tab>`
    });

    expect(page.root).toEqualHtml(`
      <z-navigation-tab label=\"Home\">
        <mock:shadow-root>
          <a class=\"false\" id=\"10\" tabindex=\"0\" >
            Home
          </a>
        </mock:shadow-root>
      </z-navigation-tab>
    `);
  });

  it("Test render ZNavigationTab selected", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTab],
      html: `<z-navigation-tab label='Home' isselected></z-navigation-tab>`
    });

    expect(page.root).toEqualHtml(`
      <z-navigation-tab isselected=\"\" label=\"Home\">
        <mock:shadow-root>
          <a class=\"false selected\" id=\"10\" tabindex=\"0\" >
            Home
          </a>
        </mock:shadow-root>
      </z-navigation-tab>
    `);
  });

  it("Test render ZNavigationTab disabled", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTab],
      html: `<z-navigation-tab label='Home' isdisabled></z-navigation-tab>`
    });

    expect(page.root).toEqualHtml(`
      <z-navigation-tab isdisabled=\"\" label=\"Home\">
        <mock:shadow-root>
          <a class=\"false disabled\" id=\"10\" tabindex=\"-1\" >
            Home
          </a>
        </mock:shadow-root>
      </z-navigation-tab>
    `);
  });

});
