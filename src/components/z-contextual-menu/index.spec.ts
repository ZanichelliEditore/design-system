import { newSpecPage } from "@stencil/core/testing";

import { ZContextualMenu } from "./index";

describe("Suite test ZContextualMenu", () => {
  it("Test render ZContextualMenu vuoto", async () => {
    const page = await newSpecPage({
      components: [ZContextualMenu],
      html: `<z-contextual-menu></z-contextual-menu>`,
    });

    expect(page.root).toEqualHtml(`
      <z-contextual-menu>
        <mock:shadow-root>
        <z-popover background-color="color-background" box-shadow="shadow-2" padding="0" position="after-down">
               <z-icon aria-label="apri-menu-contestuale" fill="color-primary01" name="contextual-menu" slot="trigger" style="cursor: pointer;"></z-icon>
               <div class="popover-content-container" slot="popover">
                 <z-list>
                   <z-list-group divider-type="element"></z-list-group>
                 </z-list>
              </div>
            </z-popover>
        </mock:shadow-root>
      </z-contextual-menu>
    `);
  });

  it("Test render ZContextualMenu elements prop", async () => {
    const page = await newSpecPage({
      components: [ZContextualMenu],
      html: `<z-contextual-menu elements='[{"icon":"share","text":"Element 1","key": "0"},{"icon":"delete","text":"Elemento 2","key": "1"}]''></z-contextual-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <z-contextual-menu '="" elements='[{"icon":"share","text":"Element 1","key": "0"},{"icon":"delete","text":"Elemento 2","key": "1"}]'>
        <mock:shadow-root>
         <z-popover background-color="color-background" box-shadow="shadow-2" padding="0" position="after-down">
                 <z-icon aria-label="apri-menu-contestuale" fill="color-primary01" name="contextual-menu" slot="trigger" style="cursor: pointer;"></z-icon>
                 <div class="popover-content-container" slot="popover">
                   <z-list>
                     <z-list-group divider-type="element">
                       <z-list-element align-button="left" class="my-z-list-element" clickable="" color="color-primary01" expandable-style="accordion" iscontextualmenu="" listelementid="0">
                         <div class="element-container">
                         <div class="element-icon">
                           <z-icon height="16" name="share" width="16"></z-icon>
                           </div>
                           <div class="element-text">
                             <span>
                               Element 1
                             </span>
                           </div>
                         </div>
                       </z-list-element>
                       <z-list-element align-button="left" class="my-z-list-element" clickable="" color="color-primary01" expandable-style="accordion" iscontextualmenu="" listelementid="1">
                         <div class="element-container">
                         <div class="element-icon">
                           <z-icon  height="16" name="delete" width="16"></z-icon>
                           </div>
                           <div class="element-text">
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
      </z-contextual-menu>
    `);
  });
});
