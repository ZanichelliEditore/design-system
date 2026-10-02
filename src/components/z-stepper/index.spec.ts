import {newSpecPage} from "@stencil/core/testing";

import {ZStepperItem} from "../z-stepper-item/index";
import {ZStepper} from "./index";

describe("Suite test ZStepper", () => {
  it("Test render empty ZStepper", async () => {
    const page = await newSpecPage({
      components: [ZStepper],
      html: `<z-stepper></z-stepper>`,
    });

    expect(page.root).toEqualHtml(`
      <z-stepper role="navigation">
        <mock:shadow-root>
          <div class="stepper-list" role="list">
            <slot></slot>
          </div>
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
      <z-stepper role="navigation">
        <mock:shadow-root>
          <div class="stepper-list" role="list">
            <slot></slot>
          </div>
        </mock:shadow-root>
        <z-stepper-item index="0">First step</z-stepper-item>
        <z-stepper-item index="1">Second step</z-stepper-item>
        <z-stepper-item index="2">Third step</z-stepper-item>
      </z-stepper>
    `);
  });

  it("Test the listitem items are wrapped in a list role", async () => {
    const page = await newSpecPage({
      components: [ZStepper, ZStepperItem],
      html: `<z-stepper>
        <z-stepper-item index="0">First step</z-stepper-item>
        <z-stepper-item index="1">Second step</z-stepper-item>
      </z-stepper>`,
    });

    const list = page.root.shadowRoot.querySelector('[role="list"]');

    expect(list).not.toBeNull();
    expect(list.querySelector("slot")).not.toBeNull();
    expect(
      Array.from(page.root.querySelectorAll("z-stepper-item")).every((item) => item.getAttribute("role") === "listitem")
    ).toBe(true);
  });
});
