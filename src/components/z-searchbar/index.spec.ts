import {newSpecPage} from "@stencil/core/testing";

import {ZSearchbar} from "./index";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const getItems = () => [{label: "item 1", icon: "download"}, {label: "item 2"}, {label: "item 3"}];

const results = () => `
  <z-list-group>
    <z-list-element
      htmltabindex="-1"
      id="list-item-my-id-0"
      role="presentation"
    >
      <div class="list-item ellipsis" tabindex="0" role="option">
        <z-icon class="item-icon" name="download"></z-icon>
        <div class="item-label body-3 mobile-body-4" title="item 1"><mark>item</mark> 1</div>
      </div>
    </z-list-element>
    <z-list-element
      htmltabindex="-1"
      id="list-item-my-id-1"
      role="presentation"
    >
      <div class="list-item ellipsis" tabindex="0" role="option">
        <div class="item-label body-3 mobile-body-4" title="item 2"><mark>item</mark> 2</div>
      </div>
    </z-list-element>
    <z-list-element
      htmltabindex="-1"
      id="list-item-my-id-2"
      role="presentation"
    >
      <div class="list-item ellipsis" tabindex="0" role="option">
        <div class="item-label body-3 mobile-body-4" title="item 3"><mark>item</mark> 3</div>
      </div>
    </z-list-element>
  </z-list-group>`;

const searchHelper = () => `
  <z-list-element id="list-item-my-id-search" htmltabindex="-1" role="presentation">
    <div class="list-item item-search" tabindex="0" role="option">
      <z-icon class="search-icon" name="left-magnifying-glass"></z-icon>
      <div class="item-label body-3 mobile-body-4">Cerca <mark>item</mark></div>
    </div>
  </z-list-element>
`;

const showAllResults = () => `
  <z-list-element
    htmltabindex="-1"
    role="presentation"
    id="list-item-my-id-show-all"
  >
    <div class="item-show-all body-3 mobile-body-4" role="option" tabindex="0">Vedi tutti i risultati</div>
  </z-list-element>
`;

describe("Suite test ZSearchbar", () => {
  it("Simple searchbar", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar htmlid="my-id"></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar htmlid="my-id">
        <mock:shadow-root>
          <div class="input-container">
            <z-input htmlid="input-my-id" size="big"></z-input>
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
      <z-searchbar class="has-results" htmlid="my-id" autocomplete="true" prevent-submit="true">
        <mock:shadow-root>
          <div class="input-container">
            <z-input htmlid="input-my-id" size="big"></z-input>
          </div>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar with search and results", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        show-search-button="true"
        label="search"
        html-aria-label="search and select option"
      ></z-searchbar>`,
    });
    page.rootInstance.searchString = "item";
    page.rootInstance.showResults = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-searchbar
        class="has-submit has-results"
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        show-search-button="true"
        label="search"
        html-aria-label="search and select option"
      >
        <mock:shadow-root>
          <div class="input-container">
            <z-input htmlid="input-my-id" size="big" value="item" label="search" aria-label="search and select option"></z-input>
            <div class="results z-scrollbar">
              <z-list role="listbox" id="list-my-id" aria-label="search and select option">
                ${searchHelper()}
                ${results()}
              </z-list>
            </div>
          </div>
          <z-button size="big" variant="primary">CERCA</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar with search, limited results and show all item", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        show-search-button="true"
        results-count="1"
      ></z-searchbar>`,
    });
    page.rootInstance.searchString = "item";
    page.rootInstance.showResults = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-searchbar
        class="has-submit has-results"
        htmlid="my-id"
        autocomplete="true"
        results-items='${JSON.stringify(getItems())}'
        results-count="1"
        show-search-button="true"
      >
        <mock:shadow-root>
          <div class="input-container">
            <z-input htmlid="input-my-id" size="big" value="item"></z-input>
            <div class="results z-scrollbar">
              <z-list role="listbox" id="list-my-id">
                ${searchHelper()}
                <z-list-group>
                  <z-list-element
                    htmltabindex="-1"
                    id="list-item-my-id-0"
                    role="presentation"
                  >
                    <div class="list-item ellipsis" tabindex="0" role="option">
                      <z-icon class="item-icon" name="download"></z-icon>
                      <div class="item-label body-3 mobile-body-4" title="item 1"><mark>item</mark> 1</div>
                    </div>
                  </z-list-element>
                </z-list-group>
                ${showAllResults()}
              </z-list>
            </div>
          </div>
          <z-button size="big" variant="primary">CERCA</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar without search and no results", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        prevent-submit="true"
        results-items='[]'
      ></z-searchbar>`,
    });
    page.rootInstance.searchString = "item";
    page.rootInstance.showResults = true;
    page.rootInstance.currResultsCount = 0;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-searchbar
        class="has-results"
        htmlid="my-id"
        autocomplete="true"
        prevent-submit="true"
        results-items="[]"
      >
        <mock:shadow-root>
          <div class="input-container">
            <z-input htmlid="input-my-id" size="big" value="item"></z-input>
            <div class="results z-scrollbar">
              <div class="item-no-results body-3 mobile-body-4">
                Non abbiamo trovato risultati per <b>item</b>
                <br /><br />
                Cosa puoi fare?
                <ul>
                  <li>Verificare di aver scritto bene</li>
                  <li>Provare a cercare un'altra parola</li>
                  <li>Provare a cercare qualcosa di più generico</li>
                </ul>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Autocomplete searchbar with search and no results", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar
        htmlid="my-id"
        autocomplete="true"
        results-items='[]'
        show-search-button="true"
      ></z-searchbar>`,
    });
    page.rootInstance.searchString = "item";
    page.rootInstance.showResults = true;
    page.rootInstance.currResultsCount = 0;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-searchbar
        class="has-submit has-results"
        htmlid="my-id"
        autocomplete="true"
        results-items='[]'
        show-search-button="true"
      >
        <mock:shadow-root>
          <div class="input-container">
            <z-input htmlid="input-my-id" size="big" value="item"></z-input>
            <div class="results z-scrollbar">
              <z-list role="listbox" id="list-my-id">
                ${searchHelper()}
              </z-list>
            </div>
          </div>
          <z-button size="big" variant="primary">CERCA</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Simple searchbar change size", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar htmlid="my-id" show-search-button="true" size="small"></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar class="has-submit" htmlid="my-id" show-search-button="true" size="small">
        <mock:shadow-root>
          <div class="input-container">
            <z-input htmlid="input-my-id" size="small"></z-input>
          </div>
          <z-button size="small" variant="primary">CERCA</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Simple searchbar change button variant, label and custom placeholder", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar htmlid="my-id" show-search-button="true" variant="secondary" search-button-label="cliccami" placeholder="Scrivi qui"></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar class="has-submit" htmlid="my-id" show-search-button="true" variant="secondary" search-button-label="cliccami" placeholder="Scrivi qui">
        <mock:shadow-root>
          <div class="input-container">
            <z-input htmlid="input-my-id" size="big" placeholder="Scrivi qui" aria-label="Scrivi qui"></z-input>
          </div>
          <z-button size="big" variant="secondary">cliccami</z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });

  it("Simple searchbar with search button icon only and custom placeholder", async () => {
    const page = await newSpecPage({
      components: [ZSearchbar],
      html: `<z-searchbar htmlid="my-id" placeholder="Scrivi qui" show-search-button="true" search-button-icon-only="true"></z-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-searchbar class="has-submit" htmlid="my-id" placeholder="Scrivi qui" show-search-button="true" search-button-icon-only="true">
        <mock:shadow-root>
          <div class="input-container">
            <z-input htmlid="input-my-id" size="big" aria-label="Scrivi qui" placeholder="Scrivi qui"></z-input>
          </div>
          <z-button icon="search" size="big" variant="primary" aria-label="CERCA"></z-button>
        </mock:shadow-root>
      </z-searchbar>
    `);
  });
});
