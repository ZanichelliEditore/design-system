import {newE2EPage} from "@stencil/core/testing";

describe("z-searchbar test end2end", () => {
  it("Emit searchTyping event", async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <z-searchbar placeholder="Cerca" search-button-label="Cerca"></z-searchbar>
    `);
    const searchbar = await page.find("z-searchbar");
    const input = await page.find("z-searchbar >>> z-input div input");
    const searchTypingEvent = await page.spyOnEvent("searchTyping");

    expect(searchbar).not.toBeNull();
    expect(input).not.toBeNull();

    await input.type("A");
    await page.waitForChanges();
    await page.waitForEvent("searchTyping");

    expect(searchTypingEvent).toHaveReceivedEvent();
  });

  it("Emit searchSubmit event", async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <z-searchbar placeholder="Cerca" show-search-button="true"></z-searchbar>
    `);
    const searchbar = await page.find("z-searchbar");
    const input = await page.find("z-searchbar >>> z-input div input");
    const button = await page.find("z-searchbar >>> z-button");
    const searchSubmitEvent = await page.spyOnEvent("searchSubmit");

    expect(searchbar).not.toBeNull();
    expect(input).not.toBeNull();

    await input.type("Test");
    await page.waitForChanges();

    await button.click();
    await page.waitForChanges();

    expect(searchSubmitEvent).toHaveReceivedEvent();
  });

  it("Emit searchItemClick event with basic items structure", async () => {
    const page = await newE2EPage();
    const items = JSON.stringify([
      {
        label: "first item",
      },
      {
        label: "second item",
      },
      {
        label: "third item",
      },
      {
        label: "fourth item",
      },
    ]);
    await page.setContent(`
      <z-searchbar
        prevent-submit="false"
        show-search-button="false"
        search-button-icon-only="false"
        autocomplete="true"
        autocomplete-min-chars="3"
        results-count=""
        results-items='${items}'
        results-ellipsis="true"
        search-helper-label="Cerca {searchString}"
        sort-results-items="false"
        value=""
        placeholder="my placeholder"
        htmlid="myIdAutocomplete"
        style="
          --z-searchbar-results-height: ;
          --z-searchbar-tag-text-color: var(--color-primary03);
          --z-searchbar-tag-bg: var(--color-hover-primary);
        "
        size="big"
        variant="primary"
      ></z-searchbar>
    `);
    const searchbar = await page.find("z-searchbar");
    const input = await page.find("z-searchbar >>> z-input div input");
    const searchItemClickEvent = await page.spyOnEvent("searchItemClick");

    expect(searchbar).not.toBeNull();
    expect(input).not.toBeNull();

    await input.type("Test");
    await page.waitForChanges();
    await page.waitForEvent("searchTyping");

    expect(await page.find("z-searchbar >>> div.results-wrapper")).not.toBeNull();

    const item = await page.find("z-searchbar >>> #list-item-myIdAutocomplete-0");
    expect(item).not.toBeNull();

    await item.click();
    await page.waitForChanges();

    expect(searchItemClickEvent).toHaveReceivedEvent();
    expect(searchItemClickEvent.events[0].detail.label).toEqual(item.innerText);
    expect(await page.find("z-searchbar >>> div.results-wrapper")).toBeNull();
  });
});
