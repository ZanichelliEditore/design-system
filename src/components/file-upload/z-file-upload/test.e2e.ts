import {newE2EPage} from "@stencil/core/testing";

describe("z-file-upload test end2end", () => {
  it("Test z-file-upload -> add z-file by click", async () => {
    const page = await newE2EPage();

    await page.setContent(`
    <z-file-upload type="default"
      button-variant="primary"
      main-title="Allega un file"
      description="Vuoi allegare un file per chiarire meglio la tua richiesta?"
      accepted-format= ".pdf, .doc, .tiff, .png, .jpg, .jpeg"
      file-max-size="50">
    </z-file-upload>
  `);
    const zfu = await page.find("z-file-upload");

    await zfu.setProperty("acceptedFormat", ".md");
    await page.waitForChanges();

    // simulate upload of file
    const button = await page.find("z-file-upload z-button button");
    button.click();
    const fileChooser = await page.waitForFileChooser();

    const fileInputEvent = await zfu.spyOnEvent("fileInput");

    await fileChooser.accept(["./readme.md"]);
    await page.waitForChanges();

    expect(fileInputEvent).toHaveReceivedEvent();
  });

  it("Test z-file-upload -> add z-file by click ERROR: wrong file type", async () => {
    const page = await newE2EPage();

    await page.setContent(`
    <z-file-upload type="default"
      button-variant="primary"
      main-title="Allega un file"
      description="Vuoi allegare un file per chiarire meglio la tua richiesta?"
      accepted-format= ".pdf, .doc, .tiff, .png, .jpg, .jpeg"
      file-max-size="50">
    </z-file-upload>
  `);
    const zfu = await page.find("z-file-upload");

    // simulate upload of file
    const button = await page.find("z-file-upload z-button button");
    button.click();
    const fileChooser = await page.waitForFileChooser();

    const fileInputEvent = await zfu.spyOnEvent("fileInput");

    await fileChooser.accept(["./readme.md"]);
    await page.waitForChanges();

    expect(fileInputEvent).not.toHaveReceivedEvent();

    const errorModal = await page.find("z-file-upload >>> z-modal");
    expect(errorModal).not.toBeNull();
  });

  it("Test z-file-upload -> remove z-file", async () => {
    const page = await newE2EPage();

    await page.setContent(`
    <z-file-upload type="default"
      button-variant="primary"
      main-title="Allega un file"
      description="Vuoi allegare un file per chiarire meglio la tua richiesta?"
      accepted-format= ".pdf, .doc, .tiff, .png, .jpg, .jpeg"
      file-max-size="50">
        <z-file slot="files" class="hydrated">Spike - Condivisione pagine Kitaboo-OK.pdf</z-file>
    </z-file-upload>
    `);

    const zf = await page.find("z-file-upload z-file");

    expect(zf).not.toBeNull();

    page.evaluate(() => (document.querySelector("z-file-upload z-file z-chip z-icon") as HTMLElement).click());
    await page.waitForChanges();
    const zfCheck = await page.find("z-file-upload z-file");

    expect(zfCheck).toBeNull();
  });
});
