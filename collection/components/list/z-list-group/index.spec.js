import { newSpecPage } from "@stencil/core/testing";
import { ZListGroup } from "./index";
describe("Suite test ZListGroup", () => {
    it("Test render ZListGroup", async () => {
        const page = await newSpecPage({
            components: [ZListGroup],
            html: `<z-list-group><z-list-element></z-list-element></z-list-group>`,
        });
        expect(page.root).toEqualHtml(`
    <z-list-group divider-color="gray200" divider-size="small" divider-type="none" list-type="none" role="group" size="medium">
        <mock:shadow-root>
          <div class="z-list-group-header-container">
            <slot name="header-title"></slot>
          </div>
          <slot></slot>
        </mock:shadow-root>
        <z-list-element list-element-position="0" list-type="none" size="medium"></z-list-element>
      </z-list-group>
    `);
    });
    it("Test render ZListGroup size prop", async () => {
        const page = await newSpecPage({
            components: [ZListGroup],
            html: `<z-list-group size="small"><z-list-element></z-list-element></z-list-group>`,
        });
        expect(page.root).toEqualHtml(`
      <z-list-group divider-color="gray200" divider-size="small" divider-type="none" list-type="none" role="group" size="small">
        <mock:shadow-root>
          <div class="z-list-group-header-container">
            <slot name="header-title"></slot>
          </div>
          <slot></slot>
        </mock:shadow-root>
        <z-list-element list-element-position="0" list-type="none" size="small"></z-list-element>
      </z-list-group>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map
