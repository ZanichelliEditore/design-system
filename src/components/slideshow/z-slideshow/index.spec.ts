import { newSpecPage } from "@stencil/core/testing";

import { ZSlideshow } from "./index";

describe("Suite test ZSlideshow", () => {
  it("Test render ZSlideshow with data empty", async () => {
    const page = await newSpecPage({
      components: [ZSlideshow],
      html: `<z-slideshow></z-slideshow>`
    });

    expect(page.root).toEqualHtml(`
      <z-slideshow>
        <mock:shadow-root><div></div></mock:shadow-root>
      </z-slideshow>
    `);
  });

  it("Test render ZSlideshow with data set", async () => {
    const page = await newSpecPage({
      components: [ZSlideshow],
      html: `<z-slideshow data='["https://link1.png", "https://link2.png" ,"https://link3.png"]'></z-slideshow>`
    });

    expect(page.root).toEqualHtml(`
    <z-slideshow data="[&quot;https://link1.png&quot;, &quot;https://link2.png&quot; ,&quot;https://link3.png&quot;]">
       <mock:shadow-root>
         <div>
           <main>
             <z-icon class="disabled left scroll" height="40" name="circle-chevron-left" role="button" tabindex="0" width="40"></z-icon>
             <div id="slides" style="width: NaNpx; transform: translate(-NaNpx);">
               <div class="false slide" id="slide0">
                 <img src="https://link1.png" style="width: undefinedpx;">
               </div>
               <div class="hide slide" id="slide1">
                 <img src="https://link2.png" style="width: undefinedpx;">
               </div>
               <div class="hide slide" id="slide2">
                 <img src="https://link3.png" style="width: undefinedpx;">
               </div>
             </div>
             <z-icon class="false right scroll" height="40" name="circle-chevron-right" role="button" tabindex="0" width="40"></z-icon>
           </main>
           <footer>
             <div class="footerLeft">
               <slot name="footer-left"></slot>
             </div>
             <div class="footerCenter">
               <div class="bulletContainer">
                 <a class="bullet selected" role="button" tabindex="0"></a>
                 <a class="bullet false" role="button" tabindex="0"></a>
                 <a class="bullet false" role="button" tabindex="0"></a>
               </div>
             </div>
             <div class="footerRight">
               <slot name="footer-right"></slot>
             </div>
           </footer>
         </div>
    `);
  });

  it("Test render ZSlideshow with data set and click on the last bullet", async () => {
    const page = await newSpecPage({
      components: [ZSlideshow],
      html: `<z-slideshow data='["https://link1.png", "https://link2.png" ,"https://link3.png"]'></z-slideshow>`
    });

    page.rootInstance.currentSlide = 2;
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-slideshow data="[&quot;https://link1.png&quot;, &quot;https://link2.png&quot; ,&quot;https://link3.png&quot;]">
       <mock:shadow-root>
         <div>
           <main>
             <z-icon class="false left scroll" height="40" name="circle-chevron-left" role="button" tabindex="0" width="40"></z-icon>
             <div id="slides" style="width: NaNpx; transform: translate(-NaNpx);">
               <div class="hide slide" id="slide0">
                 <img src="https://link1.png" style="width: undefinedpx;">
               </div>
               <div class="hide slide" id="slide1">
                 <img src="https://link2.png" style="width: undefinedpx;">
               </div>
               <div class="false slide" id="slide2">
                 <img src="https://link3.png" style="width: undefinedpx;">
               </div>
             </div>
             <z-icon class="disabled right scroll" height="40" name="circle-chevron-right" role="button" tabindex="0" width="40"></z-icon>
           </main>
           <footer>
             <div class="footerLeft">
               <slot name="footer-left"></slot>
             </div>
             <div class="footerCenter">
               <div class="bulletContainer">
                 <a class="bullet false" role="button" tabindex="0"></a>
                 <a class="bullet false" role="button" tabindex="0"></a>
                 <a class="bullet selected" role="button" tabindex="0"></a>
               </div>
             </div>
             <div class="footerRight">
               <slot name="footer-right"></slot>
             </div>
           </footer>
         </div>
    `);
  });

  it("Test render ZSlideshow with data set and click on scroll right and left", async () => {
    const page = await newSpecPage({
      components: [ZSlideshow],
      html: `<z-slideshow data='["https://link1.png", "https://link2.png" ,"https://link3.png"]'></z-slideshow>`
    });

    const scrollRight = page.root.shadowRoot.querySelector(
      "z-icon.right"
    ) as HTMLElement;
    const scrollLeft = page.root.shadowRoot.querySelector(
      "z-icon.left"
    ) as HTMLElement;
    let lengthSlide = 3;

    while (lengthSlide > 0) {
      expect(page.root).toEqualHtml(`
      <z-slideshow data="[&quot;https://link1.png&quot;, &quot;https://link2.png&quot; ,&quot;https://link3.png&quot;]">
         <mock:shadow-root>
           <div>
             <main>
               <z-icon class="${
                 lengthSlide === 3 ? "disabled" : "false"
               } left scroll" height="40" name="circle-chevron-left" role="button" tabindex="0" width="40"></z-icon>
               <div id="slides" style="width: NaNpx; transform: translate(-NaNpx);">
                 <div class="${
                   lengthSlide === 3 ? "false" : "hide"
                 } slide" id="slide0">
                   <img src="https://link1.png" style="width: undefinedpx;">
                 </div>
                 <div class="${
                   lengthSlide === 2 ? "false" : "hide"
                 } slide" id="slide1">
                   <img src="https://link2.png" style="width: undefinedpx;">
                 </div>
                 <div class="${
                   lengthSlide === 1 ? "false" : "hide"
                 } slide" id="slide2">
                   <img src="https://link3.png" style="width: undefinedpx;">
                 </div>
               </div>
               <z-icon class="${
                 lengthSlide === 1 ? "disabled" : "false"
               } right scroll" height="40" name="circle-chevron-right" role="button" tabindex="0" width="40"></z-icon>
             </main>
             <footer>
               <div class="footerLeft">
                 <slot name="footer-left"></slot>
               </div>
               <div class="footerCenter">
                 <div class="bulletContainer">
                   <a class="bullet ${
                     lengthSlide === 3 ? "selected" : "false"
                   }" role="button" tabindex="0"></a>
                   <a class="bullet ${
                     lengthSlide === 2 ? "selected" : "false"
                   }" role="button" tabindex="0"></a>
                   <a class="bullet ${
                     lengthSlide === 1 ? "selected" : "false"
                   }" role="button" tabindex="0"></a>
                 </div>
               </div>
               <div class="footerRight">
                 <slot name="footer-right"></slot>
               </div>
             </footer>
           </div>
      `);

      scrollRight.click();
      await page.waitForChanges();

      lengthSlide--;
    }

    while (lengthSlide > 3) {
      expect(page.root).toEqualHtml(`
      <z-slideshow data="[&quot;https://link1.png&quot;, &quot;https://link2.png&quot; ,&quot;https://link3.png&quot;]">
         <mock:shadow-root>
           <div>
             <main>
               <z-icon class="${
                 lengthSlide === 3 ? "disabled" : "false"
               } left scroll" height="40" name="circle-chevron-left" role="button" tabindex="0" width="40"></z-icon>
               <div id="slides" style="width: NaNpx; transform: translate(-NaNpx);">
                 <div class="${
                   lengthSlide === 3 ? "false" : "hide"
                 } slide" id="slide0">
                   <img src="https://link1.png" style="width: undefinedpx;">
                 </div>
                 <div class="${
                   lengthSlide === 2 ? "false" : "hide"
                 } slide" id="slide1">
                   <img src="https://link2.png" style="width: undefinedpx;">
                 </div>
                 <div class="${
                   lengthSlide === 1 ? "false" : "hide"
                 } slide" id="slide2">
                   <img src="https://link3.png" style="width: undefinedpx;">
                 </div>
               </div>
               <z-icon class="${
                 lengthSlide === 1 ? "disabled" : "false"
               } right scroll" height="40" name="circle-chevron-right" role="button" tabindex="0" width="40"></z-icon>
             </main>
             <footer>
               <div class="footerLeft">
                 <slot name="footer-left"></slot>
               </div>
               <div class="footerCenter">
                 <div class="bulletContainer">
                   <a class="bullet ${
                     lengthSlide === 3 ? "selected" : "false"
                   }" role="button" tabindex="0"></a>
                   <a class="bullet ${
                     lengthSlide === 2 ? "selected" : "false"
                   }" role="button" tabindex="0"></a>
                   <a class="bullet ${
                     lengthSlide === 1 ? "selected" : "false"
                   }" role="button" tabindex="0"></a>
                 </div>
               </div>
               <div class="footerRight">
                 <slot name="footer-right"></slot>
               </div>
             </footer>
           </div>
      `);

      scrollLeft.click();
      await page.waitForChanges();

      lengthSlide++;
    }
  });
});
