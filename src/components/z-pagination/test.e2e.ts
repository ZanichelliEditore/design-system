import {newE2EPage} from "@stencil/core/testing";

describe("z-pagination test end2end", () => {
  it("Emit pageChanged event", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<z-pagination total-pages="10"></z-pagination>
		`);
    const pagination = await page.find("z-pagination");
    const lastButton = await page.find("z-pagination >>> button.page-button[data-page='10']");
    const pageChanged = await page.spyOnEvent("pageChanged");

    expect(pagination).not.toBeNull();
    expect(lastButton).not.toBeNull();

    await lastButton.click();
    await page.waitForChanges();
    expect(pageChanged).toHaveReceivedEvent();

    expect(await page.find("z-pagination >>> button.page-button[data-page='10'][data-current]")).not.toBeNull();
  });

  it("Check label exists", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<z-pagination total-pages="10" label="Pagina"></z-pagination>
		`);
    const label = await page.find("z-pagination .page-label");
    expect(label).not.toBeNull();
    expect(label).toEqualText("Pagina");
  });

  it("Check that arrows are not visible when nav-arrows is false", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<z-pagination total-pages="10" nav-arrows="false"></z-pagination>
		`);
    const paginationButton = await page.find("z-pagination .navigation-button");
    expect(paginationButton).toBeNull();
  });

  it("Check skip 3 pages", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<z-pagination total-pages="10" skip="3"></z-pagination>
		`);
    const nextSkip = await page.find("z-pagination .pagination-button:last-child");
    const previousSkip = await page.find("z-pagination .pagination-button:first-child");
    const previous = await page.find("z-pagination .navigation-button[title='Vai alla pagina precedente']");

    expect(nextSkip).toEqualText("+3");
    const pageChanged = await page.spyOnEvent("pageChanged");

    await nextSkip.click();
    await page.waitForChanges();
    expect(pageChanged).toHaveReceivedEventDetail(4);

    await previous.click();
    await page.waitForChanges();
    expect(pageChanged).toHaveReceivedEventDetail(3);

    await previousSkip.click();
    await page.waitForChanges();
    expect(pageChanged).toHaveReceivedEventDetail(3);
  });

  it("Go to last page with the edge button", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<z-pagination total-pages="10" edges="true"></z-pagination>
		`);
    const pageChanged = await page.spyOnEvent("pageChanged");

    const first = await page.find("z-pagination .pagination-button:first-child");
    const last = await page.find("z-pagination .pagination-button:last-child");

    await first.click();
    await page.waitForChanges();
    expect(pageChanged).not.toHaveReceivedEvent();

    await last.click();
    await page.waitForChanges();
    expect(pageChanged).toHaveReceivedEventDetail(10);
  });

  it("Check currentPage prop with 5 visible elements", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<z-pagination total-pages="10" visible-pages="5" current-page="4"></z-pagination>
		`);
    expect(await page.find("z-pagination >>> button.page-button[data-page='4'][data-current]")).not.toBeNull();

    const buttonsInFirstChunk = await page.$$("z-pagination .pages-chunk:first-child button");
    expect(buttonsInFirstChunk).toHaveLength(5);
  });

  it("Check go to page", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<z-pagination total-pages="10" go-to-page="true"></z-pagination>
		`);
    const input = await page.find("z-pagination .inputs z-input input");
    const goButton = await page.find("z-pagination .inputs z-button button");
    const pageChanged = await page.spyOnEvent("pageChanged");

    expect(input).not.toBeNull();
    expect(goButton).not.toBeNull();

    await input.type("3");
    await page.waitForChanges();

    await goButton.click();
    await page.waitForChanges();
    expect(pageChanged).toHaveReceivedEventDetail(3);
  });
});
