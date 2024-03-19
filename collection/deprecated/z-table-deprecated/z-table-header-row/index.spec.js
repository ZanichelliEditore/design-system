import { newSpecPage } from "@stencil/core/testing";
import { ZTableHeaderRow } from "./index";
describe("Suite test ZTableHeaderRow", () => {
    it("Test prop expandable = false", async () => {
        const page = await newSpecPage({
            components: [ZTableHeaderRow],
            html: `<z-table-header-row expandable="false"><z-table-header/></z-table-header-row>`,
        });
        expect(page.root).toEqualHtml(`
      <z-table-header-row expandable="false" role="row">
        <z-table-header></z-table-header>
      </z-table-header-row>
    `);
    });
    it("Test prop expandable = true", async () => {
        const page = await newSpecPage({
            components: [ZTableHeaderRow],
            html: `<z-table-header-row expandable="true"><z-table-header/></z-table-header-row>`,
        });
        expect(page.root).toEqualHtml(`
      <z-table-header-row role="row" expandable>
        <z-table-header></z-table-header>
        <z-table-header></z-table-header>
      </z-table-header-row>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map
