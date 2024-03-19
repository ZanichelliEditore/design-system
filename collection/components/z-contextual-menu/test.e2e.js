import { newE2EPage } from "@stencil/core/testing";
describe("z-contextual-menu test end2end", () => {
    it("Test that component exists", async () => {
        const page = await newE2EPage();
        await page.setContent(`<z-contextual-menu></z-contextual-menu>`);
        const el = await page.find("z-contextual-menu");
        expect(el).not.toBeNull();
        expect(el.shadowRoot).not.toBeNull;
    });
});
//# sourceMappingURL=test.e2e.js.map
