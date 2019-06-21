import { newSpecPage } from "@stencil/core/testing";
import { ZListItem } from "./index";

it("should render my component", async () => {
  const page = await newSpecPage({
    components: [ZListItem],
    html: `<z-list-item></z-list-item>`,
    supportsShadowDom: false
  });
  expect(page.root).toEqualHtml(`
    <z-list-item><li><span><span></span></span></li></z-list-item>
  `);
});

it("should render my component", async () => {
  const page = await newSpecPage({
    components: [ZListItem],
    html: `<z-list-item></z-list-item>`,
    supportsShadowDom: true
  });
  expect(page.root).toEqualHtml(`
    <z-list-item><mock:shadow-root><li><span><span></span></span></li></mock:shadow-root></z-list-item>
  `);
});
