import {newSpecPage} from "@stencil/core/testing";

import {ZSearchbar} from "./index";

describe("Suite test ZSearchbar", () => {
  it("Simple searchbar", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar htmlid="my-id"></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar htmlid="my-id">
        <mock:shadow-root>
          <div class="has-submit">
            <z-input></z-input>
            <z-button variant="primary">CERCA</z-button>
          </div>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar without search", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar htmlid="my-id" autocomplete="true" prevent-submit="true"></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar htmlid="my-id" autocomplete="true" prevent-submit="true">
        <mock:shadow-root>
          <div class="has-results">
            <z-input></z-input>
          </div>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar with search and results - no input search", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
      ></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
      >
        <mock:shadow-root>
          <div class="has-submit has-results">
            <z-input></z-input>
            <z-button variant="primary">CERCA</z-button>
          </div>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar with search and results - with input search", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
      ></z-searchbar>`,
    });
    page.rootInstance.searchString = "item";
    page.rootInstance.showResults = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
      >
        <mock:shadow-root>
          <div class="has-submit has-results">
            <z-input></z-input>
            <div class="results">
              <z-list role="listbox" id="list-my-id">
                ${searchHelper()}
                ${resultsItems()}
              </z-list>
            </div>
            <z-button variant="primary">CERCA</z-button>
          </div>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar with search and limited results - with input search", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        results-count="1"
      ></z-searchbar>`,
    });
    page.rootInstance.searchString = "item";
    page.rootInstance.showResults = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        results-count="1"
      >
        <mock:shadow-root>
          <div class="has-submit has-results">
            <z-input></z-input>
            <div class="results">
              <z-list role="listbox" id="list-my-id">
                ${searchHelper()}
                <z-list-group divider-type="element">
                  <z-list-element
                    id="list-item-my-id-0"
                    role="option"
                    tabindex="0"
                    dividerType="element"
                    clickable
                  >
                    <span class="item ellipsis">
                      <z-icon class="item-icon" name="download"></z-icon>
                      <span class="item-label" title="item 1"><mark>item</mark> 1</span>
                    </span>
                  </z-list-element>
                </z-list-group>
                ${showAllResults()}
              </z-list>
            </div>
            <z-button variant="primary">CERCA</z-button>
          </div>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar with search and limited results (show all) - with input search", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
      ></z-searchbar>`,
    });
    page.rootInstance.searchString = "item";
    page.rootInstance.showResults = true;
    page.rootInstance.currResultsCount = 0;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
      >
        <mock:shadow-root>
          <div class="has-submit has-results">
            <z-input></z-input>
            <div class="results">
              <z-list role="listbox" id="list-my-id">
                ${searchHelper()}
                ${resultsItems()}
              </z-list>
            </div>
            <z-button variant="primary">CERCA</z-button>
          </div>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });
});

const getItems = () => [
  {label: "item 1", link: "https://my.zanichelli.it", icon: "download"},
  {label: "item 2", link: "https://www.zanichelli.it"},
  {label: "item 3", link: "https://classivirtuali.zanichelli.it"},
];

const resultsItems = () => `
  <z-list-group divider-type="element">
    <z-list-element
      id="list-item-my-id-0"
      role="option"
      tabindex="0"
      dividerType="element"
      clickable
    >
      <span class="item ellipsis">
        <z-icon class="item-icon" name="download"></z-icon>
        <span class="item-label" title="item 1"><mark>item</mark> 1</span>
      </span>
    </z-list-element>
    <z-list-element
      id="list-item-my-id-1"
      role="option"
      tabindex="0"
      dividerType="element"
      clickable
    >
      <span class="item ellipsis">
        <span class="item-label" title="item 2"><mark>item</mark> 2</span>
      </span>
    </z-list-element>
    <z-list-element
      id="list-item-my-id-2"
      role="option"
      tabindex="0"
      clickable
    >
      <span class="item ellipsis">
        <span class="item-label" title="item 3"><mark>item</mark> 3</span>
      </span>
    </z-list-element>
  </z-list-group>`;

const searchHelper = () => `
  <z-list-element
    role="option"
    tabindex="0"
    dividerType="element"
    id="list-item-my-id-search"
    clickable
  >
    <span class="item item-search">
      <z-icon class="search-icon" name="left-magnifying-glass"></z-icon>
      <span class="item-label">Cerca <mark>item</mark></span>
    </span>
  </z-list-element>
`;

const showAllResults = () => `
  <z-list-element
    role="option"
    tabindex="0"
    id="list-item-my-id-show-all"
    clickable
  >
    <span class="item-show-all"><z-link>Vedi tutti i risultati</z-link></span>
  </z-list-element>
`;
