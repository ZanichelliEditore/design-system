import {newSpecPage} from "@stencil/core/testing";
import {ZListElement} from "../z-list-element/index";
import {ZListGroup} from "./index";

describe("Suite test ZListGroup", () => {
  it("Test render ZListGroup", async () => {
    const page = await newSpecPage({
      components: [ZListGroup, ZListElement],
      html: `<z-list-group>
        <z-list-element></z-list-element>
      </z-list-group>`,
    });

    expect(page.root).toEqualLightHtml(`
      <z-list-group divider-color="gray200" divider-size="small" divider-type="none" list-type="none" role="group" size="medium">
        <z-list-element align-button="left" color="none" role="listitem" tabindex="0" list-element-position="0" list-type="none" size="medium"></z-list-element>
      </z-list-group>
    `);
  });

  it("Test render ZListGroup size prop", async () => {
    const page = await newSpecPage({
      components: [ZListGroup, ZListElement],
      html: `<z-list-group size="small"><z-list-element></z-list-element></z-list-group>`,
    });

    expect(page.root).toEqualLightHtml(`
      <z-list-group divider-color="gray200" divider-size="small" divider-type="none" list-type="none" role="group" size="small">
        <z-list-element align-button="left" color="none" role="listitem" tabindex="0" list-element-position="0" list-type="none" size="small"></z-list-element>
      </z-list-group>
    `);
  });
});
