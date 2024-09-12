import {newSpecPage} from "@stencil/core/testing";

import {ZStepper} from "./index";

describe("Suite test ZStepper", () => {
  it("Test render empty ZStepper", async () => {
    const page = await newSpecPage({
      components: [ZStepper],
      html: `<z-stepper></z-stepper>`,
    });

    expect(page.root).toEqualHtml(`
      <z-stepper role="list">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </z-stepper>
    `);
  });

  it("Test render ZStepper with items", async () => {
    const page = await newSpecPage({
      components: [ZStepper],
      html: `<z-stepper>
        <z-stepper-item index="0">First step</z-stepper-item>
        <z-stepper-item index="1">Second step</z-stepper-item>
        <z-stepper-item index="2">Third step</z-stepper-item>
      </z-stepper>`,
    });

    expect(page.root).toEqualHtml(`
      <z-stepper role="list">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <z-stepper-item index="0">First step</z-stepper-item>
        <z-stepper-item index="1">Second step</z-stepper-item>
        <z-stepper-item index="2">Third step</z-stepper-item>
      </z-stepper>
    `);
  });
});
