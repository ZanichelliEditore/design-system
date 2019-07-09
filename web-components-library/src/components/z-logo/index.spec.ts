import { newSpecPage } from "@stencil/core/testing";

import { ZLogo } from "./index";

describe("Suite test ZLogo", () => {

  it("Test render ZLogo vuoto", async () => {
    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo></z-logo>`
    });
    expect(page.root).toEqualHtml(`
      <z-logo>
        <mock:shadow-root>
          <div>
            <img />
          </div>
        </mock:shadow-root>
      </z-logo>
    `)
  });

  it("Test render ZLogo con img", async () => {
    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo imageurl="logo.png"></z-logo>`
    });
    expect(page.root).toEqualHtml(`
      <z-logo imageurl="logo.png">
        <mock:shadow-root>
          <div>
            <img src="logo.png" />
          </div>
        </mock:shadow-root>
      </z-logo>
    `)
  });

  it("Test render ZLogo con img alt", async () => {
    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo imageurl="logo.png" imagealt="zlogo"></z-logo>`
    });
    expect(page.root).toEqualHtml(`
      <z-logo imageurl="logo.png" imagealt="zlogo">
        <mock:shadow-root>
          <div>
            <img src="logo.png" alt="zlogo" />
          </div>
        </mock:shadow-root>
      </z-logo>
    `)
  });

  it("Test render ZLogo con link", async () => {
    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo link="http://www.zanichelli.it/"></z-logo>`
    });
    expect(page.root).toEqualHtml(`
      <z-logo link="http://www.zanichelli.it/">
        <mock:shadow-root>
          <div>
            <a href="http://www.zanichelli.it/">
              <img />
            </a>
          </div>
        </mock:shadow-root>
      </z-logo>
    `)
  });

  it("Test render ZLogo con link e targetblank", async () => {
    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo link="http://www.zanichelli.it/" targetblank></z-logo>`
    });
    expect(page.root).toEqualHtml(`
      <z-logo link="http://www.zanichelli.it/" targetblank>
        <mock:shadow-root>
          <div>
            <a href="http://www.zanichelli.it/" target="_blank">
              <img />
            </a>
          </div>
        </mock:shadow-root>
      </z-logo>
    `)
  });

});

