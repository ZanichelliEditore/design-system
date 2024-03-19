import { newSpecPage } from "@stencil/core/testing";
import { ZFile } from "./index";
describe("Suite test ZFile", () => {
    it("Test render ZFile vuoto", async () => {
        const page = await newSpecPage({
            components: [ZFile],
            html: `<z-file></z-file>`,
        });
        // mock HTMLInputElement focus function
        HTMLInputElement.prototype.focus = jest.fn();
        expect(page.root).toEqualHtml(`
    <z-file>
      <z-chip id="chip-undefined" interactiveicon="multiply-circled" type="default">
        <span tabindex="-1"></span>
      </z-chip>
    </z-file>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map
