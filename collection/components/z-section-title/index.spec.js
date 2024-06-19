import { newSpecPage } from "@stencil/core/testing";
import { ZSectionTitleDividerPosition } from "../../beans";
import { ZSectionTitle } from "./index";
describe("Suite test ZNotification", () => {
    it("ZSectionTitle with secondary title should not render the z-divider", async () => {
        const page = await newSpecPage({
            components: [ZSectionTitle],
            html: `<z-section-title
        divider-position=${ZSectionTitleDividerPosition.AFTER}
      >
        <span slot="secondary-title">Secondary title</span>
        <span slot="primary-title">Primary title</span>
      </z-section-title>`,
        });
        expect(page.root).toEqualHtml(`
      <z-section-title divider-position="after" uppercase="">
        <mock:shadow-root>
          <slot name="secondary-title"></slot>
          <slot name="primary-title"></slot>
        </mock:shadow-root>
        <span slot="secondary-title">Secondary title</span>
        <span slot="primary-title">Primary title</span>
      </z-section-title>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map
