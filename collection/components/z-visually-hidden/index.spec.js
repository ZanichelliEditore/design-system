import { newSpecPage } from "@stencil/core/testing";
import { ZVisuallyHidden } from "./index";
describe("Suite test ZVisuallyHidden", () => {
    it("Test render ZVisuallyHidden vuoto", async () => {
        const page = await newSpecPage({
            components: [ZVisuallyHidden],
            html: `<z-visually-hidden></z-visually-hidden>`,
        });
        expect(page.root).toEqualHtml(`
      <z-visually-hidden>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </z-visually-hidden>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map
