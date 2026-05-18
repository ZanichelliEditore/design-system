import {newSpecPage} from "@stencil/core/testing";
import {ZListElement} from "../z-list-element/index";
import {ZList} from "./index";

describe("Suite test ZList", () => {
  it("Test render ZList", async () => {
    const page = await newSpecPage({
      components: [ZList, ZListElement],
      html: `<z-list>
        <z-list-element></z-list-element>
      </z-list>`,
    });

    expect(page.root).toEqualLightHtml(`
      <z-list size="medium" list-type="none" role="list">
        <z-list-element align-button="left" color="none" role="listitem" tabindex="0" list-element-position="1" list-type="none" size="medium"></z-list-element>
      </z-list>
    `);
  });

  it("Test render ZList size prop", async () => {
    const page = await newSpecPage({
      components: [ZList, ZListElement],
      html: `<z-list size="large">
        <z-list-element></z-list-element>
      </z-list>`,
    });

    expect(page.root).toEqualLightHtml(`
      <z-list size="large" list-type="none" role="list">
        <z-list-element align-button="left" color="none" role="listitem" tabindex="0" list-element-position="1" list-type="none" size="large"></z-list-element>
      </z-list>
    `);
  });
});
