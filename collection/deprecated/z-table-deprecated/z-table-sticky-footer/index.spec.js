import { newSpecPage } from "@stencil/core/testing";
import { ZTableStickyFooter } from "./index";
describe("Suite test ZTableStickyFooter", () => {
    it("Test render ZTableStickyFooter con slot", async () => {
        const page = await newSpecPage({
            components: [ZTableStickyFooter],
            html: `<z-table-sticky-footer><div>dummy</div></z-table-sticky-footer>`,
        });
        expect(page.root).toEqualHtml(`
      <z-table-sticky-footer>
        <div>dummy</div>
      </z-table-sticky-footer>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map
