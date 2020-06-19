import { newSpecPage } from "@stencil/core/testing";

import { ZAlert } from "./index";

describe("Suite test ZAlert", () => {
  it("Test render ZAlert vuoto", async () => {
    const page = await newSpecPage({
      components: [ZAlert],
      html: `<z-alert></z-alert>`
    });

    expect(page.root).toEqualHtml(`
      <z-alert>
        <mock:shadow-root>
          <div class="relativeContainer two-sections-grid">
            <z-icon class="two-sections-grid" height="18" width="18"></z-icon>
            <span class="contentText"></span>
          </div>
        </mock:shadow-root>
      </z-alert>
    `);
  });

  it("Test render complete ZAlert (generic type value)", async () => {
    const page = await newSpecPage({
      components: [ZAlert],
      html: `<z-alert iconname="circle-check" contenttext="contenttext" type="type" actiontext="actiontext" />`
    });

    expect(page.root).toEqualHtml(`
      <z-alert iconname="circle-check" contenttext="contenttext" type="type" actiontext="actiontext" >
        <mock:shadow-root>
          <div class="relativeContainer three-sections-grid">
            <z-icon class="three-sections-grid" height="18" name="circle-check" width="18"></z-icon>
            <span class="contentText">contenttext</span>
            <span class="contentAction" role="button" tabindex="0">
              actiontext
            </span>
          </div>
        </mock:shadow-root>
      </z-alert>
    `);
  });

  it("Test render ZAlert without actiontext (generic type value)", async () => {
    const page = await newSpecPage({
      components: [ZAlert],
      html: `<z-alert iconname="circle-check" contenttext="contenttext" type="type" />`
    });

    expect(page.root).toEqualHtml(`
      <z-alert iconname="circle-check" contenttext="contenttext" type="type" >
        <mock:shadow-root>
          <div class="relativeContainer two-sections-grid">
            <z-icon class="two-sections-grid" height="18" name="circle-check" width="18"></z-icon>
            <span class="contentText">contenttext</span>
          </div>
        </mock:shadow-root>
      </z-alert>
    `);
  });

  it("Test render ZAlert without actiontext (error alert)", async () => {
    const page = await newSpecPage({
      components: [ZAlert],
      html: `<z-alert iconname="circle-check" contenttext="contenttext" type="error" />`
    });

    expect(page.root).toEqualHtml(`
      <z-alert iconname="circle-check" contenttext="contenttext" type="error" >
        <mock:shadow-root>
          <div class="errorAlert relativeContainer two-sections-grid">
            <z-icon class="errorAlert two-sections-grid" height="18" name="circle-check" width="18"></z-icon>
            <span class="contentText">contenttext</span>
          </div>
        </mock:shadow-root>
      </z-alert>
    `);
  });

  it("Test render complete ZAlert (error alert)", async () => {
    const page = await newSpecPage({
      components: [ZAlert],
      html: `<z-alert iconname="circle-check" contenttext="contenttext" type="error" actiontext="actiontext" />`
    });

    expect(page.root).toEqualHtml(`
      <z-alert iconname="circle-check" contenttext="contenttext" type="error" actiontext="actiontext" >
        <mock:shadow-root>
          <div class="errorAlert relativeContainer three-sections-grid">
            <z-icon class="errorAlert three-sections-grid" height="18" name="circle-check" width="18"></z-icon>
            <span class="contentText">contenttext</span>
            <span class="contentAction" role="button" tabindex="0">
              actiontext
            </span>
          </div>
        </mock:shadow-root>
      </z-alert>
    `);
  });

  it("Test render ZAlert without contentAction (success alert)", async () => {
    const page = await newSpecPage({
      components: [ZAlert],
      html: `<z-alert iconname="circle-check" contenttext="contenttext" type="success" />`
    });

    expect(page.root).toEqualHtml(`
      <z-alert iconname="circle-check" contenttext="contenttext" type="success" >
        <mock:shadow-root>
          <div class="successAlert relativeContainer two-sections-grid">
            <z-icon class="successAlert two-sections-grid" height="18" name="circle-check" width="18"></z-icon>
            <span class="contentText">contenttext</span>
          </div>
        </mock:shadow-root>
      </z-alert>
    `);
  });

  it("Test render complete ZAlert (success alert)", async () => {
    const page = await newSpecPage({
      components: [ZAlert],
      html: `<z-alert iconname="circle-check" contenttext="contenttext" type="success" actiontext="actiontext" />`
    });

    expect(page.root).toEqualHtml(`
      <z-alert iconname="circle-check" contenttext="contenttext" type="success" actiontext="actiontext" >
        <mock:shadow-root>
          <div class="successAlert relativeContainer three-sections-grid">
            <z-icon class="successAlert three-sections-grid" height="18" name="circle-check" width="18"></z-icon>
            <span class="contentText">contenttext</span>
            <span class="contentAction" role="button" tabindex="0">
              actiontext
            </span>
          </div>
        </mock:shadow-root>
      </z-alert>
    `);
  });

  it("Test render ZAlert without contentAction (warning alert)", async () => {
    const page = await newSpecPage({
      components: [ZAlert],
      html: `<z-alert iconname="circle-check" contenttext="contenttext" type="warning" />`
    });

    expect(page.root).toEqualHtml(`
      <z-alert iconname="circle-check" contenttext="contenttext" type="warning" >
        <mock:shadow-root>
          <div class="warningAlert relativeContainer two-sections-grid">
            <z-icon class="warningAlert two-sections-grid" height="18" name="circle-check" width="18"></z-icon>
            <span class="contentText">contenttext</span>
          </div>
        </mock:shadow-root>
      </z-alert>
    `);
  });

  it("Test render complete ZAlert (warning alert)", async () => {
    const page = await newSpecPage({
      components: [ZAlert],
      html: `<z-alert iconname="circle-check" contenttext="contenttext" type="warning" actiontext="actiontext" />`
    });

    expect(page.root).toEqualHtml(`
      <z-alert iconname="circle-check" contenttext="contenttext" type="warning" actiontext="actiontext" >
        <mock:shadow-root>
          <div class="warningAlert relativeContainer three-sections-grid">
            <z-icon class="warningAlert three-sections-grid" height="18" name="circle-check" width="18"></z-icon>
            <span class="contentText">contenttext</span>
            <span class="contentAction" role="button" tabindex="0">
              actiontext
            </span>
          </div>
        </mock:shadow-root>
      </z-alert>
    `);
  });
});
