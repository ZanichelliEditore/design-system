import {newSpecPage} from "@stencil/core/testing";

import {ZStepperItem} from "./index";

describe("Suite test ZStepperItem", () => {
  it("Test render empty ZStepperItem", async () => {
    const page = await newSpecPage({
      components: [ZStepperItem],
      html: `<z-stepper-item></z-stepper-item>`,
    });

    expect(page.root).toEqualHtml(`
      <z-stepper-item>
        <mock:shadow-root>
          <button class="stepper-item">
            <div class="indicator"></div>
            <span><slot></slot></span>
          </button>
        </mock:shadow-root>
      </z-stepper-item>
    `);
  });

  it("Test render ZStepperItem with index", async () => {
    const page = await newSpecPage({
      components: [ZStepperItem],
      html: `<z-stepper-item index="5"></z-stepper-item>`,
    });

    expect(page.root).toEqualHtml(`
      <z-stepper-item index="5">
        <mock:shadow-root>
          <button class="stepper-item">
            <div class="indicator">5</div>
            <span><slot></slot></span>
          </button>
        </mock:shadow-root>
      </z-stepper-item>
    `);
  });

  it("Test render ZStepperItem with index and text", async () => {
    const page = await newSpecPage({
      components: [ZStepperItem],
      html: `<z-stepper-item index="4">Text</z-stepper-item>`,
    });

    expect(page.root).toEqualHtml(`
      <z-stepper-item index="4">
        <mock:shadow-root>
          <button class="stepper-item">
            <div class="indicator">4</div>
            <span><slot></slot></span>
          </button>
        </mock:shadow-root>
        Text
      </z-stepper-item>
    `);
  });

  it("Test render ZStepperItem with index and text and href", async () => {
    const page = await newSpecPage({
      components: [ZStepperItem],
      html: `<z-stepper-item href="#/test" index="4">Text</z-stepper-item>`,
    });

    expect(page.root).toEqualHtml(`
      <z-stepper-item href="#/test" index="4">
        <mock:shadow-root>
          <a href="#/test" class="stepper-item">
            <div class="indicator">4</div>
            <span><slot></slot></span>
          </a>
        </mock:shadow-root>
        Text
      </z-stepper-item>
    `);
  });

  it("Test render disabled ZStepperItem", async () => {
    const page = await newSpecPage({
      components: [ZStepperItem],
      html: `<z-stepper-item disabled>Text</z-stepper-item>`,
    });

    expect(page.root).toEqualHtml(`
      <z-stepper-item disabled>
        <mock:shadow-root>
          <button class="stepper-item" disabled>
            <div class="indicator"></div>
            <span><slot></slot></span>
          </button>
        </mock:shadow-root>
        Text
      </z-stepper-item>
    `);
  });

  it("Test render disabled ZStepperItem with href", async () => {
    const page = await newSpecPage({
      components: [ZStepperItem],
      html: `<z-stepper-item href="#/test" disabled>Text</z-stepper-item>`,
    });

    expect(page.root).toEqualHtml(`
      <z-stepper-item href="#/test" disabled>
        <mock:shadow-root>
          <a class="stepper-item" href="false">
            <div class="indicator"></div>
            <span><slot></slot></span>
          </a>
        </mock:shadow-root>
        Text
      </z-stepper-item>
    `);
  });
});
