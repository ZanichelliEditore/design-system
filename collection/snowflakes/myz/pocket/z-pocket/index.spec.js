import { newSpecPage } from "@stencil/core/testing";
import { ZPocket } from "./index";
describe("Suite test ZPocket", () => {
    it("Test render ZPocket", async () => {
        const page = await newSpecPage({
            components: [ZPocket],
            html: `<z-pocket></z-pocket>`,
        });
        expect(page.root).toEqualHtml(`
      <z-pocket>
        <mock:shadow-root>
          <div>
            <div data-action="pocketBackground" class="background preview"></div>
            <div id="" class="content-wrapper">
              <div><slot></slot></div>
            </div>
          </div>
        </mock:shadow-root>
      </z-pocket>
    `);
    });
    it("Test render ZPocket - closed", async () => {
        const page = await newSpecPage({
            components: [ZPocket],
            html: `<z-pocket status="closed"></z-pocket>`,
        });
        expect(page.root).toEqualHtml(`
      <z-pocket status="closed">
        <mock:shadow-root>
          <div>
            <div data-action="pocketBackground" class="background closed"></div>
            <div id="" class="content-wrapper">
              <div><slot></slot></div>
            </div>
          </div>
        </mock:shadow-root>
      </z-pocket>
    `);
    });
    it("Test render ZPocket - open", async () => {
        const page = await newSpecPage({
            components: [ZPocket],
            html: `<z-pocket status="open"></z-pocket>`,
        });
        expect(page.root).toEqualHtml(`
      <z-pocket status="open">
        <mock:shadow-root>
          <div>
            <div data-action="pocketBackground" class="background open"></div>
            <div id="" class="content-wrapper">
              <div><slot></slot></div>
            </div>
          </div>
        </mock:shadow-root>
      </z-pocket>
    `);
    });
    it("Test render ZPocket - with props", async () => {
        const page = await newSpecPage({
            components: [ZPocket],
            html: `<z-pocket pocketid="pocket" status="preview"></z-pocket>`,
        });
        expect(page.root).toEqualHtml(`
      <z-pocket pocketid="pocket" status="preview">
        <mock:shadow-root>
          <div>
            <div data-action="pocketBackground" data-pocket="pocket" class="background preview"></div>
            <div id="pocket" class="content-wrapper">
              <div><slot></slot></div>
            </div>
          </div>
        </mock:shadow-root>
      </z-pocket>
    `);
    });
    it("Test render ZPocket - with content", async () => {
        const page = await newSpecPage({
            components: [ZPocket],
            html: `<z-pocket status="open">
        <div>z-pocket main content</div>
      </z-pocket>`,
        });
        expect(page.root).toEqualHtml(`
      <z-pocket status="open">
        <mock:shadow-root>
          <div>
            <div data-action="pocketBackground" class="background open"></div>
            <div id="" class="content-wrapper">
              <div><slot></slot></div>
            </div>
          </div>
        </mock:shadow-root>
        <div>z-pocket main content</div>
      </z-pocket>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map
