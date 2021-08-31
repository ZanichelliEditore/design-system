import { newSpecPage } from "@stencil/core/testing";

import { ContextualMenu } from "./index";

describe("Suite test ContextualMenu", () => {
  it("Test render ContextualMenu vuoto", async () => {
    const page = await newSpecPage({
      components: [ContextualMenu],
      html: `<contextual-menu></contextual-menu>`,
    });

    expect(page.root).toEqualHtml(`
      <contextual-menu tabindex="0">
        <mock:shadow-root>
        <z-popover background-color="gray50" box-shadow="shadow-2" padding="0" position="after-down">
               <z-icon aria-label="apri-menu-contestuale" fill="color-primary01" name="contextual-menu" slot="trigger" style="cursor: pointer;"></z-icon>
               <div class="popover-content-container" slot="popover">
                 <z-list>
                   <z-list-group divider-type="element" size="small"></z-list-group>
                 </z-list>
              </div>
            </z-popover>
        </mock:shadow-root>
      </contextual-menu>
    `);
  });

  it("Test render ContextualMenu elements prop", async () => {
    const page = await newSpecPage({
      components: [ContextualMenu],
      html: `<contextual-menu elements='[{"icon":"share","text":"Element 1","key": "0"},{"icon":"delete","text":"Elemento 2","key": "1"}]''></contextual-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <contextual-menu '="" elements='[{"icon":"share","text":"Element 1","key": "0"},{"icon":"delete","text":"Elemento 2","key": "1"}]' tabindex="0">
        <mock:shadow-root>
         <z-popover background-color="gray50" box-shadow="shadow-2" padding="0" position="after-down">
                 <z-icon aria-label="apri-menu-contestuale" fill="color-primary01" name="contextual-menu" slot="trigger" style="cursor: pointer;"></z-icon>
                 <div class="popover-content-container" slot="popover">
                   <z-list>
                     <z-list-group divider-type="element" size="small">
                       <z-list-element align-button="left" class="my-z-list-element" clickable="" color="var(--color-primary01)" expandable-style="accordion" iscontextualmenu="" listelementid="0">
                         <div class="element-container">
                           <div class="icon-container">
                             <z-icon fill="color-primary01" name="share"></z-icon>
                           </div>
                           <div class="text-container">
                             <span>
                               Element 1
                             </span>
                           </div>
                         </div>
                       </z-list-element>
                       <z-list-element align-button="left" class="my-z-list-element" clickable="" color="var(--color-primary01)" expandable-style="accordion" iscontextualmenu="" listelementid="1">
                         <div class="element-container">
                           <div class="icon-container">
                             <z-icon fill="color-primary01" name="delete"></z-icon>
                           </div>
                           <div class="text-container">
                             <span>
                               Elemento 2
                             </span>
                           </div>
                         </div>
                       </z-list-element>
                     </z-list-group>
                   </z-list>
                 </div>
               </z-popover>
        </mock:shadow-root>
      </contextual-menu>
    `);
  });
});
