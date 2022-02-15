import { newE2EPage } from "@stencil/core/testing";

describe("z-file-upload test end2end", () => {

  // L'INSERIMENTO DELLA Z-FILE non è gestito dentro il componente z-file-upload ma direttamente nella pagina file-upload.html attraverso l'append

  // Posso far scattare degli eventi dentro il componente e verificare le modifiche nello state
  it("Test z-file-upload -> remove z-file", async () => {

    const page = await newE2EPage();

    await page.setContent(`
      <z-file-upload type="dragdrop" variant="primary" class="hydrated">
        <span slot="title">Allega un file</span>
        <span slot="description">Vuoi allegare un file per chiarire meglio la tua richiesta?</span>
        <span slot="file-format">Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un
            massimo di 50Mb di peso.</span>
        <z-file slot="files" filetype="application/pdf" class="hydrated">Spike - Condivisione pagine Kitaboo-OK.pdf</z-file>
      </z-file-upload>
    `);

    const zfu = await page.find("z-file-upload z-file >>> z-chip div z-icon:last-child");
    //expect(zfu).toEqualHtml(``);

    await zfu.click();

    // const zf = await page.find("z-file");
    // expect(zf).not.toBeNull();
    // const closebutton = await page.find('z-file >>> z-chip div z-icon:last-child')

    // expect(closebutton).not.toBeNull();
    // // await zf.callMethod('removeFileHandler');
    // await closebutton.click();
    // // const spy = await page.spyOnEvent('removeFile');
    // await page.waitForChanges();

    // const zfresult = await page.find("z-file");

    // // expect(spy).toHaveReceivedEvent();
    // expect(zfresult).toBeNull();

    // const closebutton = await page.find(
    //   "z-file-upload z-file >>> div > z-icon "
    // // );
    // zfu.setProperty('type', 'dragdrop');

    // await page.waitForChanges();
    // let filesQuantity = 3;
    // zfu.setProperty('files', filesQuantity);
    // // await zfu.callMethod('renderFileSection');
    // await page.waitForChanges();

    // expect(zfu).not.toBeNull();
    // expect(zfu.shadowRoot).not.toBeNull;

    // console.log(zfu.shadowRoot.querySelector('div'))
    // console.log(await zfu.getProperty('files'))

    // console.log(zfu.shadowRoot.querySelector('div').childNodes);
    // expect(zfu.shadowRoot.querySelector('div section')).toEqualHtml(`
    //   <z-file slot="files" filetype="application/pdf">
    //     Spike - Condivisione pagine Kitaboo-OK.pdf
    //   </z-file>
    // `);

    // const zf = await page.find("z-file");
    // zf.triggerEvent('removeFile');
    // const spy = await page.spyOnEvent('removeFile');
    // await page.waitForChanges();
    // expect(zfu).toEqualHtml(`
    // <z-file-upload class="hydrated" type="dragdrop" variant="primary">
    //   <mock:shadow-root>
    //     <div class="container dragdrop">
    //       <z-heading class="hydrated" id="title">
    //         <slot name="title"></slot>
    //       </z-heading>
    //       <z-dragdrop-area class="hydrated">
    //         <div class="text-container">
    //           <z-body class="hydrated">
    //             <slot name="description"></slot>
    //           </z-body>
    //           <input accept=".pdf, .doc, .tiff, .png, .jpg" id="fileElem" multiple="" type="file">
    //           <z-body class="hydrated">
    //             Trascinalo qui o
    //             <z-body class="hydrated upload-link">
    //               caricalo
    //             </z-body>
    //             dal tuo computer
    //           </z-body>
    //           <z-body class="hydrated">
    //             <slot name="file-format"></slot>
    //           </z-body>
    //         </div>
    //       </z-dragdrop-area>
    //     </div>
    //   </mock:shadow-root>
    //   <mock:shadow-root>
    //     <div class="container dragdrop">
    //       <z-heading class="hydrated" id="title">
    //         <slot name="title"></slot>
    //       </z-heading>
    //       <section class="files-container">
    //         <z-heading class="hydrated">
    //           File appena caricati
    //         </z-heading>
    //         <div class="files">
    //           <z-file class="hydrated" filetype="application/pdf" slot="files">
    //             Spike - Condivisione pagine Kitaboo-OK.pdf
    //           </z-file>
    //         </div>
    //         <z-divider class="divider-horizontal divider-medium divider-small hydrated sc-z-divider-h sc-z-divider-s" style="background-color: var(--gray200);"></z-divider>
    //       </section>
    //       <z-dragdrop-area class="hydrated">
    //         <div class="text-container">
    //           <z-body class="hydrated">
    //             <slot name="description"></slot>
    //           </z-body>
    //           <input accept=".pdf, .doc, .tiff, .png, .jpg" id="fileElem" multiple="" type="file">
    //           <z-body class="hydrated">
    //             Trascinalo qui o
    //             <z-body class="hydrated upload-link">
    //               caricalo
    //             </z-body>
    //             dal tuo computer
    //           </z-body>
    //           <z-body class="hydrated">
    //             <slot name="file-format"></slot>
    //           </z-body>
    //         </div>
    //       </z-dragdrop-area>
    //     </div>
    //     <mock:shadow-root>
    //       <span slot="title">
    //         Allega un file
    //       </span>
    //       <span slot="description">
    //         Vuoi allegare un file per chiarire meglio la tua richiesta?
    //       </span>
    //       <span slot="file-format">
    //         Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un massimo di 50Mb di peso.
    //       </span>
    //     </mock:shadow-root>
    //   </mock:shadow-root>
    // </z-file-upload>
    // `);
    // expect(zfu).toEqualHtml(`
    // <z-file-upload class="hydrated" type="dragdrop" variant="primary">
    //   <mock:shadow-root>
    //     <div class="container dragdrop">
    //       <z-heading class="hydrated" id="title">
    //         <slot name="title"></slot>
    //       </z-heading>
    //       <z-dragdrop-area class="hydrated">
    //         <div class="text-container">
    //           <z-body class="hydrated">
    //             <slot name="description"></slot>
    //           </z-body>
    //           <input accept=".pdf, .doc, .tiff, .png, .jpg" id="fileElem" multiple="" type="file">
    //           <z-body class="hydrated">
    //             Trascinalo qui o
    //             <z-body class="hydrated upload-link">
    //               caricalo
    //             </z-body>
    //             dal tuo computer
    //           </z-body>
    //           <z-body class="hydrated">
    //             <slot name="file-format"></slot>
    //           </z-body>
    //         </div>
    //       </z-dragdrop-area>
    //     </div>
    //   </mock:shadow-root>
    //   <mock:shadow-root>
    //     <div class="container dragdrop">
    //       <z-heading class="hydrated" id="title">
    //         <slot name="title"></slot>
    //       </z-heading>
    //       <section class="files-container">
    //         <z-heading class="hydrated">
    //           File appena caricati
    //         </z-heading>
    //         <div class="files">
    //           <z-file class="hydrated" filetype="application/pdf" slot="files">
    //             Spike - Condivisione pagine Kitaboo-OK.pdf
    //           </z-file>
    //         </div>
    //         <z-divider class="divider-horizontal divider-medium divider-small hydrated sc-z-divider-h sc-z-divider-s" style="background-color: var(--gray200);"></z-divider>
    //       </section>
    //       <z-dragdrop-area class="hydrated">
    //         <div class="text-container">
    //           <z-body class="hydrated">
    //             <slot name="description"></slot>
    //           </z-body>
    //           <input accept=".pdf, .doc, .tiff, .png, .jpg" id="fileElem" multiple="" type="file">
    //           <z-body class="hydrated">
    //             Trascinalo qui o
    //             <z-body class="hydrated upload-link">
    //               caricalo
    //             </z-body>
    //             dal tuo computer
    //           </z-body>
    //           <z-body class="hydrated">
    //             <slot name="file-format"></slot>
    //           </z-body>
    //         </div>
    //       </z-dragdrop-area>
    //     </div>
    //     <mock:shadow-root>
    //       <span slot="title">
    //         Allega un file
    //       </span>
    //       <span slot="description">
    //         Vuoi allegare un file per chiarire meglio la tua richiesta?
    //       </span>
    //       <span slot="file-format">
    //         Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un massimo di 50Mb di peso.
    //       </span>
    //     </mock:shadow-root>
    //   </mock:shadow-root>
    // </z-file-upload>
    // `);
    // expect(spy).toHaveReceivedEvent(); // Fails
    // //FILES PROP TEST MANIPULATIONS
    // let filesQuantity = 3;
    // zfu.setProperty('files', filesQuantity);
    // await page.waitForChanges();
    // let files = await zfu.getProperty('files');
    // expect(files).toBe(filesQuantity);


    // // await page.spyOnEvent('fileInputHandler')
    // // zfu.triggerEvent('removeFile');
    // await page.exposeFunction('removeFile', (event) => emit(event));

    // const spy = await page.spyOnEvent('removeFile');
    // await page.waitForChanges();

    // expect(spy).toHaveReceivedEvent(); // Fails
    // expect(await zfu.getProperty('files')).toBe(22);

    // const event = new CustomEvent('removeFile');
    //   window.dispatchEvent(event);
    // zfu.triggerEvent('fileInput');

    // REMOVE FILE event

    // await page.waitForChanges();
    // let files = await zfu.getProperty('files');
    // expect(files).toBe(34);

    // await page.setContent('<z-file slot="files">test</z-file>');
    // const zf = await page.find("z-file");
    // // // zf.triggerEvent('removeFile');

    // expect(zf).toEqualHtml(`
    //   <z-file slot="files" filetype="application/pdf" class="hydrated">
    //     Spike - Condivisione pagine Kitaboo-OK.pdf
    //   </z-file>
    // `);
    // cont zf = customElements.define('z-file',ZFile)
    // await page.waitForChanges();

    // let files = await zfu.getProperty('files');
    // // expect(files).toBe(filesQuantity);

    // //REMOVE FILE event
    // // await page.exposeFunction("onRemoveFile", (e) => {
    // //   filesQuantity--;
    // // });

    // // await
    // // // // Attach an event listener to page to capture a custom event on page load/navigation.
    // // const type = "removeFile";
    // // page.evaluateOnNewDocument((type) => {
    // //   document.addEventListener(type, (e) => {
    // //     (window as CustomWindow).onRemoveFile({ type, detail: e.detail });
    // //   });
    // // }, type);

  });



    // EMIT EVENT OF ADDING FILE
    // CHECK IF FILE PROP CHANGED
});

