import { newE2EPage } from "@stencil/core/testing";

describe("z-file-upload test end2end", () => {
  it("Test z-file-upload(dragdrop) -> select file", async () => {
    const page = await newE2EPage();

    await page.setContent(`
    <z-file-upload type="default" variant="primary" class="hydrated">
      <span slot="title">Allega un file</span>
      <span slot="description">Vuoi allegare un file per chiarire meglio la tua richiesta?</span>
      <span slot="file-format">Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un
          massimo di 50Mb di peso.</span>
    </z-file-upload>
  `);

    const zfu = await page.find("z-file-upload");
    await zfu.setProperty("type", "dragdrop");

    // page.evaluate(() => (document.querySelector('z-file-upload').shadowRoot.querySelector("div z-dragdrop-area div input") as HTMLElement).click())

    const input = await page.$('z-file-upload');
    // const input = await page.find("z-file-upload >>> div");
    // input.uploadFile
    // await page.$

    await page.waitForChanges();

    expect(input).toEqualHtml(`
    `);
  });

  it("Test z-file-upload -> add z-file by click", async () => {
    const page = await newE2EPage();

    await page.setContent(`
    <z-file-upload type="default" variant="primary" class="hydrated">
      <span slot="title">Allega un file</span>
      <span slot="description">Vuoi allegare un file per chiarire meglio la tua richiesta?</span>
      <span slot="file-format">Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un
          massimo di 50Mb di peso.</span>
    </z-file-upload>
  `);
    const zfu = await page.find("z-file-upload");

    await zfu.setProperty("acceptedFormat",".md")
    await page.waitForChanges();

    // simulate upload of file
    const [fileChooser] = await Promise.all([
      page.waitForFileChooser(),
      page.evaluate(() => (document.querySelector('z-file-upload').shadowRoot.querySelector("div z-button") as HTMLElement).click())
      ]);

    const fileInputEvent = await zfu.spyOnEvent('fileInput');

    await fileChooser.accept(['./readme.md']);
    await page.waitForChanges();

    expect(fileInputEvent).toHaveReceivedEvent()
  });

  it("Test z-file-upload -> add z-file by click ERROR: wrong file type", async () => {
    const page = await newE2EPage();

    await page.setContent(`
    <z-file-upload type="default" variant="primary" class="hydrated">
      <span slot="title">Allega un file</span>
      <span slot="description">Vuoi allegare un file per chiarire meglio la tua richiesta?</span>
      <span slot="file-format">Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un
          massimo di 50Mb di peso.</span>
    </z-file-upload>
  `);
    const zfu = await page.find("z-file-upload");

    // simulate upload of file
    const [fileChooser] = await Promise.all([
      page.waitForFileChooser(),
      page.evaluate(() => (document.querySelector('z-file-upload').shadowRoot.querySelector("div z-button") as HTMLElement).click())
      ]);

    const fileInputEvent = await zfu.spyOnEvent('fileInput');

    await fileChooser.accept(['./readme.md']);
    await page.waitForChanges();

    expect(fileInputEvent).not.toHaveReceivedEvent()

    const errorModal = await page.find("z-file-upload >>> z-modal");
    expect(errorModal).not.toBeNull();
  });

  it("Test z-file-upload -> remove z-file", async () => {

    const page = await newE2EPage();

    await page.setContent(`
      <z-file-upload type="default" variant="primary" class="hydrated">
        <span slot="title">Allega un file</span>
        <span slot="description">Vuoi allegare un file per chiarire meglio la tua richiesta?</span>
        <span slot="file-format">Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un
            massimo di 50Mb di peso.</span>
        <z-file slot="files" filetype="application/pdf" class="hydrated">Spike - Condivisione pagine Kitaboo-OK.pdf</z-file>
      </z-file-upload>
    `);

    const zf = await page.find("z-file-upload z-file");

    expect(zf).not.toBeNull();

    page.evaluate(() => (document.querySelector('z-file-upload z-file').shadowRoot.querySelector(" z-chip div z-icon:last-child") as HTMLElement).click())
    await page.waitForChanges();
    const zfCheck = await page.find("z-file-upload z-file");

    expect(zfCheck).toBeNull();
  });

  // EMIT EVENT OF ADDING FILE
  // CHECK IF FILE PROP CHANGED
});
