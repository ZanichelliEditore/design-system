import {newSpecPage} from "@stencil/core/testing";

import {ZFooterLink} from "./index";

describe("Suite test ZFooterLink", () => {
  it("Test render ZFooterLink vuoto", async () => {
    const page = await newSpecPage({
      components: [ZFooterLink],
      html: `<z-footer-link></z-footer-link>`,
    });

    expect(page.root).toEqualHtml(`
      <z-footer-link>
        <mock:shadow-root>
          <a target="_blank">
            <slot></slot>
          </a>
        </mock:shadow-root>
      </z-footer-link>
    `);
  });

  it("Test render ZFooterLink with params", async () => {
    const page = await newSpecPage({
      components: [ZFooterLink],
      html: `<z-footer-link href="url">label</z-footer-link>`,
    });

    expect(page.root).toEqualHtml(`
      <z-footer-link href="url">
        <mock:shadow-root>
          <a href="url" target="_blank">
            <slot></slot>
          </a>
        </mock:shadow-root>
        label
      </z-footer-link>
    `);
  });

  it("Test render ZFooterLink with slot", async () => {
    const page = await newSpecPage({
      components: [ZFooterLink],
      html: `<z-footer-link href="url">etichetta</z-footer-link>`,
    });

    expect(page.root).toEqualHtml(`
      <z-footer-link href="url">
        <mock:shadow-root>
          <a href="url" target="_blank">
            <slot></slot>
          </a>
        </mock:shadow-root>
        etichetta
      </z-footer-link>
    `);
  });
});
