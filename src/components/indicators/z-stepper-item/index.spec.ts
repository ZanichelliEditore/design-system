import { newSpecPage } from "@stencil/core/testing";

import { ZStepperItem } from "./index";

describe("Suite test ZStepperItem", () => {
  it("Test render empty ZStepperItem", async () => {

    const page = await newSpecPage({
      components: [ZStepperItem],
      html: `<z-stepper-item></z-stepper-item>`
    });

    expect(page.root).toEqualHtml(`
      <z-stepper-item>
        <mock:shadow-root>
          <div class="stepper-item">
            <div class="indicator"></div>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-stepper-item>
    `)
  });

  it("Test render ZStepperItem with index", async () => {

    const page = await newSpecPage({
      components: [ZStepperItem],
      html: `<z-stepper-item index="5"></z-stepper-item>`
    });

    expect(page.root).toEqualHtml(`
      <z-stepper-item index="5">
        <mock:shadow-root>
          <div class="stepper-item">
            <div class="indicator">5</div>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-stepper-item>
    `)
  });

  it("Test render ZStepperItem with index and text", async () => {

    const page = await newSpecPage({
      components: [ZStepperItem],
      html: `<z-stepper-item index="4">Text</z-stepper-item>`
    });

    expect(page.root).toEqualHtml(`
      <z-stepper-item index="4">
        <mock:shadow-root>
          <div class="stepper-item">
            <div class="indicator">4</div>
            <slot></slot>
          </div>
        </mock:shadow-root>
        Text
      </z-stepper-item>
    `)
  });
});

