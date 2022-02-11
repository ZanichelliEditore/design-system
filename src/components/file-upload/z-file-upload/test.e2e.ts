import { newE2EPage } from "@stencil/core/testing";

type CustomWindow = Window &
  typeof globalThis & {
    onRemoveFile: (a) => unknown;
  };
describe("z-file-upload test end2end", () => {

  // L'INSERIMENTO DELLA Z-FILE non è gestito dentro il componente z-file-upload ma direttamente nella pagina file-upload.html attraverso l'append

  // Posso far scattare degli eventi dentro il componente e verificare le modifiche nello state
  it("Test file selection and upload", async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <z-file-upload type=dragdrop></z-file-upload>
    `);

    const zfu = await page.find("z-file-upload");

    await page.waitForChanges();
    expect(zfu).toEqualHtml(`
      <z-file-upload class="hydrated" type="default">
        <mock:shadow-root>
            <div class="container default">
              <z-heading class="hydrated" id="title">
                <slot name="title"></slot>
              </z-heading>
              <z-body class="hydrated" >
                <slot name="description"></slot>
              </z-body>
              <z-body class="hydrated" >
                <slot name="file-format"></slot>
              </z-body>
              <input accept=".pdf, .doc, .tiff, .png, .jpg" id="fileElem" multiple="" type="file">
              <z-button class="hydrated" id="fileSelect" size="big" variant="primary" style="pointer-events: auto;">
                Allega
              </z-button>
              </div>
            </mock:shadow-root>
          </z-file-upload>
          </div>
        </mock:shadow-root>
      </z-file-upload>
    `);

    zfu.setProperty('type', 'dragdrop')
    await page.waitForChanges();

    expect(zfu).toEqualHtml(`
      <z-file-upload class="hydrated" type="dragdrop">
        <mock:shadow-root>
        <div class="container dragdrop">
          <z-heading class="hydrated" id="title">
            <slot name="title"></slot>
          </z-heading>
          <z-dragdrop-area class="hydrated">
            <div class="text-container">
              <z-body class="hydrated">
                <slot name="description"></slot>
              </z-body>
              <input accept=".pdf, .doc, .tiff, .png, .jpg" id="fileElem" multiple="" type="file">
                <z-body class="hydrated">
                Trascinalo qui o
                  <z-body class="hydrated upload-link">
                    caricalo
                  </z-body>
                dal tuo computer
              </z-body>
              <z-body class="hydrated">
                <slot name="file-format"></slot>
              </z-body>
            </div>
          </z-dragdrop-area>
          </div>
          </mock:shadow-root>
      </z-file-upload>
    `);

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

