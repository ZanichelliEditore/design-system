import { newSpecPage } from "@stencil/core/testing";

import { ZButton } from "./index";

describe("Suite test ZButton", () => {
  it("Test render ZButton", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button></z-button>`,
    });
    expect(page.root).toEqualHtml(`
    <z-button href="" size="big" target="_blank" variant="primary">
      <button class="big primary" type="button"></button>
      </z-button>
    `);
  });

  // it("Test render ZButton con contenuto", async () => {
  //   const page = await newSpecPage({
  //     components: [ZButton],
  //     html: `<z-button>label</z-button>`
  //   });
  //   expect(page.root).toEqualHtml(`
  //     <z-button size="big" variant="primary" style="pointer-events: auto;">
  //     <mock:shadow-root>
  //       <slot name="element">
  //         <button type="button" class="big primary">
  //           <slot></slot>
  //         </button>
  //       </slot>
  //     </mock:shadow-root>
  //     label
  //     </z-button>
  //   `);
  // });

  // it("Test render ZButton con icon", async () => {
  //   const page = await newSpecPage({
  //     components: [ZButton],
  //     html: `<z-button icon="icon"></z-button>`
  //   });
  //   expect(page.root).toEqualHtml(`
  //     <z-button size="big" variant="primary" icon="icon" style="pointer-events: auto;">
  //     <mock:shadow-root>
  //       <slot name="element">
  //         <button type="button" class="big primary">
  //           <z-icon name="icon" height="16" width="16"></z-icon>
  //           <slot></slot>
  //         </button>
  //       </slot>
  //     </mock:shadow-root>
  //     </z-button>
  //   `);
  // });

  // it("Test render ZButton variant", async () => {
  //   const page = await newSpecPage({
  //     components: [ZButton],
  //     html: `<z-button variant="secondary"></z-button>`
  //   });
  //   expect(page.root).toEqualHtml(`
  //     <z-button size="big" variant="secondary" style="pointer-events: auto;">
  //     <mock:shadow-root>
  //       <slot name="element">
  //         <button type="button" class="big secondary">
  //           <slot></slot>
  //         </button>
  //       </slot>
  //     </mock:shadow-root>
  //     </z-button>
  //   `);
  // });

  // it("Test render ZButton small", async () => {
  //   const page = await newSpecPage({
  //     components: [ZButton],
  //     html: `<z-button issmall></z-button>`
  //   });
  //   expect(page.root).toEqualHtml(`
  //     <z-button issmall size="big" variant="primary" style="pointer-events: auto;">
  //     <mock:shadow-root>
  //       <slot name="element">
  //         <button type="button" class="big issmall primary">
  //           <slot></slot>
  //         </button>
  //       </slot>
  //     </mock:shadow-root>
  //     </z-button>
  //   `);
  // });

  // it("Test render ZButton disabled", async () => {
  //   const page = await newSpecPage({
  //     components: [ZButton],
  //     html: `<z-button disabled></z-button>`
  //   });
  //   expect(page.root).toEqualHtml(`
  //     <z-button size="big" variant="primary" disabled style="pointer-events: none;">
  //     <mock:shadow-root>
  //       <slot name="element">
  //         <button type="button" class="big primary" disabled>
  //           <slot></slot>
  //         </button>
  //       </slot>
  //     </mock:shadow-root>
  //     </z-button>
  //   `);
  // });

  // it("Test render ZButton with slotted button", async () => {
  //   const page = await newSpecPage({
  //     components: [ZButton],
  //     html: `<z-button>
  //       <button>invio</button>
  //     </z-button>`
  //   });

  //   expect(page.root).toEqualHtml(`
  //     <z-button size="big" variant="primary" style="pointer-events: auto;">
  //       <mock:shadow-root>
  //         <slot name="element">
  //           <button type="button" class="big primary">
  //             <slot></slot>
  //           </button>
  //         </slot>
  //       </mock:shadow-root>
  //       <button>invio</button>
  //     </z-button>
  //   `);
  // });

  // it("Test render ZButton with link and variant", async () => {
  //   const page = await newSpecPage({
  //     components: [ZButton],
  //     html: `<z-button variant="primary">
  //       <a href="https://wikipedia.com">Link</button>
  //     </z-button>`
  //   });

  //   expect(page.root).toEqualHtml(`
  //     <z-button size="big" variant="primary" style="pointer-events: auto;">
  //       <mock:shadow-root>
  //         <slot name="element">
  //           <button type="button" class="big primary">
  //             <slot></slot>
  //           </button>
  //         </slot>
  //       </mock:shadow-root>
  //       <a href="https://wikipedia.com">Link</button>
  //     </z-button>
  //   `);
  // });
});
