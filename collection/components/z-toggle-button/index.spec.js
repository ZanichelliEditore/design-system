import { newSpecPage } from "@stencil/core/testing";
import { ZToggleButton } from "./index";
describe("Suite test ZToggleButton", () => {
    it("Test render ZToggleButton vuoto", async () => {
        const page = await newSpecPage({
            components: [ZToggleButton],
            html: `<z-toggle-button></z-toggle-button>`,
        });
        expect(page.root).toEqualHtml(`
      <z-toggle-button>
        <mock:shadow-root>
          <button aria-expanded="false" tabindex="0" aria-label="">
            <z-icon height="16" name="chevron-up" width="16"></z-icon>
          </button>
        </mock:shadow-root>
      </z-toggle-button>
    `);
    });
    it("Test render ZToggleButton con label", async () => {
        const page = await newSpecPage({
            components: [ZToggleButton],
            html: `<z-toggle-button label="label"></z-toggle-button>`,
        });
        expect(page.root).toEqualHtml(`
      <z-toggle-button label="label">
        <mock:shadow-root>
          <button aria-expanded="false" tabindex="0" aria-label="">
            <z-icon height="16" name="chevron-up" width="16"></z-icon>
            label
          </button>
        </mock:shadow-root>
      </z-toggle-button>
    `);
    });
    it("Test render ZToggleButton disabled", async () => {
        const page = await newSpecPage({
            components: [ZToggleButton],
            html: `<z-toggle-button label="label" isdisabled="true"></z-toggle-button>`,
        });
        expect(page.root).toEqualHtml(`
      <z-toggle-button label="label" isdisabled="true">
        <mock:shadow-root>
          <button aria-expanded="false" disabled tabindex="0" aria-label="">
            <z-icon height="16" name="chevron-up" width="16"></z-icon>
            label
          </button>
        </mock:shadow-root>
      </z-toggle-button>
    `);
    });
    it("Test render ZToggleButton avoidclick", async () => {
        const page = await newSpecPage({
            components: [ZToggleButton],
            html: `<z-toggle-button label="label" avoidclick="true"></z-toggle-button>`,
        });
        expect(page.root).toEqualHtml(`
      <z-toggle-button avoidclick="true" label="label">
        <mock:shadow-root>
          <button aria-expanded="false" class="avoid-clicks" tabindex="-1" aria-label="">
            <z-icon height="16" name="chevron-up" width="16"></z-icon>
            label
          </button>
        </mock:shadow-root>
      </z-toggle-button>
    `);
    });
    it("Test render ZToggleButton opened", async () => {
        const page = await newSpecPage({
            components: [ZToggleButton],
            html: `<z-toggle-button label="label" opened="true"></z-toggle-button>`,
        });
        expect(page.root).toEqualHtml(`
      <z-toggle-button opened="true" label="label">
        <mock:shadow-root>
          <button aria-expanded="true" class="isopen" tabindex="0" aria-label="">
            <z-icon height="16" name="chevron-down" width="16"></z-icon>
            label
          </button>
        </mock:shadow-root>
      </z-toggle-button>
    `);
    });
    it("Test click ZToggleButton", async () => {
        const page = await newSpecPage({
            components: [ZToggleButton],
            html: `<z-toggle-button></z-toggle-button>`,
        });
        const button = page.root.shadowRoot.querySelector("button");
        expect(page.rootInstance.opened).toEqual(false);
        button.click();
        await page.waitForChanges();
        expect(page.rootInstance.opened).toEqual(true);
        button.click();
        await page.waitForChanges();
        expect(page.rootInstance.opened).toEqual(false);
    });
    it("Test click ZToggleButton disabled", async () => {
        const page = await newSpecPage({
            components: [ZToggleButton],
            html: `<z-toggle-button isdisabled="true"></z-toggle-button>`,
        });
        const button = page.root.shadowRoot.querySelector("button");
        expect(page.rootInstance.opened).toEqual(false);
        button.click();
        await page.waitForChanges();
        expect(page.rootInstance.opened).toEqual(false);
    });
    it("Test render ZToggleButton con arialabel", async () => {
        const page = await newSpecPage({
            components: [ZToggleButton],
            html: `<z-toggle-button aria-label="aria label"></z-toggle-button>`,
        });
        expect(page.root).toEqualHtml(`
      <z-toggle-button aria-label="aria label">
        <mock:shadow-root>
          <button aria-expanded="false" aria-label="aria label" tabindex="0">
            <z-icon height="16" name="chevron-up" width="16"></z-icon>
          </button>
        </mock:shadow-root>
      </z-toggle-button>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map
